"use server"

import { prisma } from "@/lib/db/prisma"
import getPrismaError from "@/utils/getPrismaError"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const FormSchema = z.object({
    email: z
        .string({ required_error: "Email field is required" })
        .email("Please use correct email format"),
    name: z
        .string({ required_error: "Full name field is required" })
        .min(5, "Minimum length of full name is 5 characters"),
    positionId: z.string().min(12, "Please select a position"),
    picture: z.string().nullable(),
    description: z.string().nullable(),
})

export async function createArticle(
    articleInfo: ArticleInfoState,
    prevState: any,
    formData: FormData,
) {
    // Validate form using Zod
    const validation = FormSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        positionId: formData.get("positionId"),
        picture: formData.get("picture"),
        description: formData.get("description"),
    })

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validation.success) {
        return {
            success: false,
            error: validation.error.flatten().fieldErrors,
            message: "Failed to Add Article",
        }
    }

    // Insert data into the database
    try {
        const newArticleData = {
            ...validation.data,
            ...articleInfo,
        }
        const newArticle = await prisma.article.create({
                data: newArticleData,
            })
        // Revalidate the cache for the invoices page and redirect the user.
        revalidatePath("/articles")
        return {
            success: true,
            message: `Successfully created article "${newArticle.name}"`,
        }
    } catch (err: any) {
        // If a database error occurs, return a more specific error.
        console.log(err)
        const msg = getPrismaError(err)
        return {
            success: false,
            message: msg ?? "Database Error: Failed to Create Article.",
        }
    }
}
"use server"

import { prisma } from "@/lib/db/prisma"
import getPrismaError from "@/utils/getPrismaError"
import { revalidatePath } from "next/cache"
import { z } from "zod"

export const ArticleFormSchema = z.object({
    title: z
        .string()
        .min(5, { message: "Minimum title length is 5 characters long!" })
        .max(100, {
            message: "Maximum title length is 100 characters long :(",
        }),
    body: z
        .string()
        .min(10, {
            message: "Minimum description length is 10 characters long!",
        })
        .trim(),
    image: z.string({ required_error: "Please select an image" }),
})

export type ArticlesFormT = z.infer<typeof ArticleFormSchema>

export async function createArticle(
    authorId: string,
    prevState: any,
    formData: FormData,
) {
    // Validate form using Zod
    const validation = ArticleFormSchema.safeParse({
        title: formData.get("title"),
        body: formData.get("body"),
        image: formData.get("image"),
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
        const newArticle = await prisma.article.create({
            data: { ...validation.data, authorId },
        })
        // Revalidate the cache for the invoices page and redirect the user.
        revalidatePath("/articles")
        return {
            success: true,
            message: `Successfully created article "${newArticle.title}"`,
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

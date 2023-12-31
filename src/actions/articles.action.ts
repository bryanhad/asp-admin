"use server"

import { prisma } from "@/lib/db/prisma"
import { getPrismaError } from "@/lib/utils"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const ArticleFormSchema = z.object({
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
    image: z.string({ required_error: "Please select a thumbnail" }).min(1, "Please select a thumbnail"),
})

export type ArticlesFormT = z.infer<typeof ArticleFormSchema>

export async function createArticle(
    authorId: string,
    prevState: any,
    formData: FormData,
) {
    const validation = ArticleFormSchema.safeParse({
        title: formData.get("title"),
        body: formData.get("body"),
        image: formData.get("picture"),
    })

    if (!validation.success) {
        return {
            success: false,
            error: validation.error.flatten().fieldErrors,
            message: "Failed to Add Article",
        }
    }

    try {
        const newArticle = await prisma.article.create({
            data: { ...validation.data, authorId },
        })
        revalidatePath("/articles")
        return {
            success: true,
            message: `Successfully created article "${newArticle.title}"`,
        }
    } catch (err: any) {
        console.log(err)
        const msg = getPrismaError(err)
        return {
            success: false,
            message: msg ?? "Database Error: Failed to Create Article.",
        }
    }
}

export async function editArticle(
    articleId: string,
    prevState: any,
    formData: FormData,
) {
    const validation = ArticleFormSchema.safeParse({
        title: formData.get("title"),
        body: formData.get("body"),
        image: formData.get("picture"),
    })

    if (!validation.success) {
        return {
            success: false,
            error: validation.error.flatten().fieldErrors,
            message: "Failed to Add Article",
        }
    }

    try {
        const newArticle = await prisma.article.update({
            where: { id: articleId },
            data: validation.data,
        })
        revalidatePath("/articles")
        return {
            success: true,
            message: `Successfully edited article "${newArticle.title}"`,
        }
    } catch (err: any) {
        console.log(err)
        const msg = getPrismaError(err)
        return {
            success: false,
            message: msg ?? "Database Error: Failed to Edit Article.",
        }
    }
}

export async function deleteArticle(id: string, prevState: any) {
    try {
        const newArticle = await prisma.article.delete({
            where: { id },
        })
        revalidatePath("/articles")

        return {
            success: true,
            message: `Successfully deleted article "${newArticle.title}"`,
        }
    } catch (err: any) {
        const msg = getPrismaError(err)
        return {
            success: false,
            message: msg ?? "Database Error: Failed to Delete Article.",
        }
    }
}

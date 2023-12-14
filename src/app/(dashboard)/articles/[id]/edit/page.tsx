import React, { Suspense } from "react"
import MemberFormSkeleton from "@/ui/skeletons/form/MemberFormSkeleton"
import EditArticleForm from "./EditArticleForm"
import ArticleFormSkeleton from "@/ui/skeletons/form/ArticleFormSkeleton"
import { prisma } from "@/lib/db/prisma"
import { Metadata } from "next"

export async function generateMetadata({
    params,
}: {
    params: { id: string }
}): Promise<Metadata> {
    const article = await prisma.article.findUnique({
        where: { id: params.id },
        select: { title: true, author: true, image:true },
    })

    return {
        title: article?.title,
        description: `ASP Article created by ${article?.author}`,
        openGraph: { //dynamic openGraph metadata!
            images: [{url: article?.image || '/noimage.png'}]
        }
    }
}

export default async function EditUserPage({
    params,
}: {
    params: { id: string }
}) {
    return (
        <div>
            <Suspense fallback={<ArticleFormSkeleton />}>
                <EditArticleForm id={params.id} />
            </Suspense>
        </div>
    )
}

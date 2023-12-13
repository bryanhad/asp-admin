import React, { Suspense } from "react"
import MemberFormSkeleton from "@/ui/skeletons/form/MemberFormSkeleton"
import EditArticleForm from "./EditArticleForm"
import ArticleFormSkeleton from "@/ui/skeletons/form/ArticleFormSkeleton"

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

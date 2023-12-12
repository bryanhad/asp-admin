import React, { Suspense } from "react"
import MemberFormSkeleton from "@/ui/skeletons/MemberFormSkeleton"
import EditArticleForm from "./EditArticleForm"

export default async function EditUserPage({
    params,
}: {
    params: { id: string }
}) {
    return (
        <div>
            <Suspense fallback={<MemberFormSkeleton />}>
                <EditArticleForm id={params.id} />
            </Suspense>
        </div>
    )
}

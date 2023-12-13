import React, { Suspense } from "react"
import EditMemberForm from "./EditMemberForm"
import MemberFormSkeleton from "@/ui/skeletons/form/MemberFormSkeleton"

export default async function EditMemberPage({
    params,
}: {
    params: { id: string }
}) {
    return (
        <div>
            <Suspense fallback={<MemberFormSkeleton />}>
                <EditMemberForm id={params.id} />
            </Suspense>
        </div>
    )
}

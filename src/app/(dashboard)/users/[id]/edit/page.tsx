import React, { Suspense } from "react"
import EditUserForm from "./EditUserForm"
import MemberFormSkeleton from "@/ui/skeletons/MemberFormSkeleton"

export default async function EditUserPage({
    params,
}: {
    params: { id: string }
}) {
    return (
        <div>
            <Suspense fallback={<MemberFormSkeleton />}>
                <EditUserForm id={params.id} />
            </Suspense>
        </div>
    )
}

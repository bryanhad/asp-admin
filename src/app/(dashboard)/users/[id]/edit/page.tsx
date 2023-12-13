import { Suspense } from "react"
import EditUserForm from "./EditUserForm"
import UserFormSkeleton from "@/ui/skeletons/form/UserFormSkeleton"

export default async function EditUserPage({
    params,
}: {
    params: { id: string }
}) {
    return (
        <div>
            <UserFormSkeleton />
            <Suspense fallback={<UserFormSkeleton />}>
                <EditUserForm id={params.id} />
            </Suspense>
        </div>
    )
}

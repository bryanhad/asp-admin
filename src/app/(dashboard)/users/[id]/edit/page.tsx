import { Suspense } from "react"
import EditUserForm from "./EditUserForm"
import UserFormSkeleton from "@/ui/skeletons/form/UserFormSkeleton"
import { Metadata } from "next"
import { prisma } from "@/lib/db/prisma"

export async function generateMetadata({
    params,
}: {
    params: { id: string }
}): Promise<Metadata> {
    const user = await prisma.user.findUnique({
        where: { id: params.id },
        select: { username: true },
    })

    return {
        title: user?.username,
        description: `${user?.username}'s Profile`,
    }
}

export default async function EditUserPage({
    params,
}: {
    params: { id: string }
}) {
    return (
        <div>
            <Suspense fallback={<UserFormSkeleton />}>
                <EditUserForm id={params.id} />
            </Suspense>
        </div>
    )
}

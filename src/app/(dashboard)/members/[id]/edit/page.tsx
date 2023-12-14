import React, { Suspense } from "react"
import EditMemberForm from "./EditMemberForm"
import MemberFormSkeleton from "@/ui/skeletons/form/MemberFormSkeleton"
import { Metadata } from "next"
import { prisma } from "@/lib/db/prisma"

export async function generateMetadata({
    params,
}: {
    params: { id: string }
}): Promise<Metadata> {
    const member = await prisma.member.findUnique({
        where: { id: params.id },
        select: { name: true, description: true },
    })

    return {
        title: member?.name,
        description: member?.description
    }
}

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

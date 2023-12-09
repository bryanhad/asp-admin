import { fetchMemberDataAndPositions } from "@/lib/data"
import MemberForm from "@/ui/form/memberForm/MemberForm"
import { notFound } from "next/navigation"
import React from "react"

export default async function EditMemberForm({ id }: { id: string }) {
    const [memberData, positions] = await fetchMemberDataAndPositions(id)

    if (!memberData) {
        //if memberId is not found, go too not-found page
        notFound()
    }
    return <MemberForm data={memberData} positions={positions} />
}

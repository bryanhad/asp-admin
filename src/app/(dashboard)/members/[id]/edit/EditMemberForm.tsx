import { editMember } from "@/actions/members.action"
import { fetchMemberDataAndPositions } from "@/lib/data"
import MemberForm from "@/ui/form/memberForm/MemberForm"
import { notFound } from "next/navigation"
import React from "react"

export default async function EditMemberForm({ id }: { id: string }) {
    const [memberData, positions] = await fetchMemberDataAndPositions(id)
    const editMemberWithId = editMember.bind(null, id)

    if (!memberData) {
        //if memberId is not found, go too not-found page
        notFound()
    }
    return (
        <MemberForm
            serverAction={editMemberWithId}
            buttonText="Save Edit"
            data={memberData}
            positions={positions}
        />
    )
}

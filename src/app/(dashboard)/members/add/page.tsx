import { createMember } from "@/actions/members.action"
import { prisma } from "@/lib/db/prisma"
import MemberForm from "@/ui/form/memberForm/MemberForm"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Add Member',
}

export default async function AddMemberPage() {
    const positions = await prisma.position.findMany()
    return (
        <div>
            <MemberForm
                serverAction={createMember}
                buttonText="Add Member"
                positions={positions}
            />
        </div>
    )
}
import { prisma } from "@/lib/db/prisma"
import MemberForm from "@/ui/form/memberForm/MemberForm"

export default async function AddMemberPage() {
    const positions = await prisma.position.findMany()
    return (
        <div>
            <MemberForm positions={positions} />
        </div>
    )
}

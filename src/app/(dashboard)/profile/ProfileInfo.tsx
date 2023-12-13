import { prisma } from "@/lib/db/prisma"
import MiniImage from "@/ui/tables/MiniImage"

export default async function ProfileInfo({ id }: { id: string }) {
    const user = await prisma.user.findUnique({
        where: { id },
        include: {
            articles: {
                select: { createdAt: true, image: true, title: true, id: true },
            },
        },
    })
    return (
        <div>


        </div>
    )
}

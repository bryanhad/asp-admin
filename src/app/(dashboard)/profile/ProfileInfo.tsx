import { prisma } from "@/lib/db/prisma"
import ArticleCard from "@/ui/cards/ArticleCard"
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
    if (!user)
        return <p>cannot fetch profile with the id of {id} from session.</p>
    return (
        <div>
            <p className="text-2xl mb-4">Articles</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {user.articles.map((article) => (
                    <ArticleCard
                        key={article.id}
                        article={article}
                    />
                ))}
            </div>
        </div>
    )
}

import { Article, Role } from "@prisma/client"
import ArticlesActionCell from "./ArticlesActionCell"
import MiniImage from "../MiniImage"

type ArticleWithAuthor = {
    author: {
        profilePicture: string | null
        username: string
    }
} & Article

export default function ArticlesListMobile({
    articles,
    userInfo,
}: {
    articles: ArticleWithAuthor[]
    userInfo: { role: Role; id: string }
}) {
    return (
        <div className="flex flex-col gap-2 rounded-lg bg-secondary p-2">
            {articles.map((article) => (
                <div key={article.id} className="rounded-lg bg-background p-4">
                    <div className="border-b pb-4">
                        <div className="flex items-center justify-between">
                            {/* MINI PROFILE */}
                            <MiniImage
                                alt={`${article.title}'s thumbnail`}
                                src={article.image}
                                text={article.title}
                            />
                        </div>
                        <p className="mt-2 text-sm text-slate-400">
                            Author: {article.author.username}
                        </p>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                        <div className="flex flex-col gap-1 text-[12px] sm:flex-row">
                            <p>Created At:</p>
                            <p className="text-slate-400">
                                {article.createdAt
                                    .toLocaleDateString("id-ID")
                                    .split("/")
                                    .join("/")}
                            </p>
                        </div>
                        {(userInfo.role === "ADMIN" ||
                            userInfo.id === article.authorId) && (
                            <ArticlesActionCell articleInfo={article} />
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

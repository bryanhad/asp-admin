import { Article } from "@prisma/client"
import Image from "next/image"
import React from "react"
import ArticlesActionCell from "./ArticlesActionCell"

type ArticleWithAuthor = {
    author: {
        profilePicture: string | null
        username: string
    }
} & Article

export default function ArticlesListMobile({ articles }: { articles: ArticleWithAuthor[] }) {
    return (
        <div className="flex flex-col gap-2 rounded-lg bg-secondary p-2">
            {articles.map((article) => (
                <div key={article.id} className="rounded-lg bg-background p-4">
                    <div className="border-b pb-4">
                        <div className="flex items-center justify-between">
                            {/* MINI PROFILE */}
                            <div className="flex items-center gap-3">
                                <div className="h-[32px] w-[32px] bg-slate-200 rounded-lg overflow-hidden grid place-items-center">
                                    <Image
                                        src={article.image || "/noavatar.png"}
                                        alt={`${article.title}'s thumbnail`}
                                        height={32}
                                        width={32}
                                        className="object-cover"
                                    />
                                </div>
                                <p className="maximum-1-line">{article.title}</p>
                            </div>
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
                        <ArticlesActionCell articleId={article.id} />
                    </div>
                </div>
            ))}
        </div>
    )
}

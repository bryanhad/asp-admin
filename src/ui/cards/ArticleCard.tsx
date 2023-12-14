import Image from "next/image"
import Link from "next/link"
import React from "react"

type Article = {
    id: string
    createdAt: Date
    title: string
    image: string
}

export default function ArticleCard({ article }: { article: Article }) {
    return (
        <Link
            href={`/articles/${article.id}/edit`}
            className="flex w-full flex-col overflow-hidden rounded-lg bg-secondary duration-300 hover:scale-[1.02]"
        >
            <div className="relative h-[200px] w-full">
                <Image
                    className="h-[200px] w-full object-cover"
                    src={article.image}
                    alt={`${article.title}'s thumbnail`}
                    height={200}
                    width={150}
                />
            </div>
            <div className="flex flex-[1] flex-col gap-3 p-4">
                <p className="maximum-2-line flex-[1] text-lg font-semibold md:text-xl">
                    {article.title}
                </p>
                <p className="font-thin">
                    {article.createdAt.toLocaleDateString()}
                </p>
            </div>
        </Link>
    )
}

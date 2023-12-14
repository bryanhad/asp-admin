import { Article, Role } from "@prisma/client"
import Image from "next/image"
import { TableCell, TableRow } from "@/ui/shadcn/table"
import ArticlesActionCell from "./ArticlesActionCell"
import MiniImage from "../MiniImage"

type ArticleWithAuthor = {
    author: {
        profilePicture: string | null
        username: string
    }
} & Article

export default function ArticlesTableRow({
    article,
    userInfo,
}: {
    article: ArticleWithAuthor
    userInfo: { role: Role; id: string }
}) {
    return (
        <TableRow>
            <TableCell>
                <MiniImage
                    alt={`${article.title}'s thumbnail`}
                    src={article.image}
                    text={article.title}
                />
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-4">
                    <div className="dark:bg-active-dark grid h-[38px] w-[38px] place-content-center overflow-hidden rounded-full bg-active">
                        <Image
                            className="rounded-full object-cover"
                            src={
                                article.author.profilePicture || "/noavatar.png"
                            }
                            alt={`${article.author.username}'s Profile picture`}
                            width={38}
                            height={38}
                        />
                    </div>
                    <p>{article.author.username}</p>
                </div>
            </TableCell>
            <TableCell>
                {article.createdAt
                    .toLocaleDateString("id-ID")
                    .split("/")
                    .join(" / ")}
            </TableCell>
            {(userInfo.role === "ADMIN" ||
                userInfo.id === article.authorId) && (
                <TableCell>
                    <ArticlesActionCell
                        articleInfo={article}
                    />
                </TableCell>
            )}
        </TableRow>
    )
}

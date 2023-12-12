import { Article } from "@prisma/client"
import Image from "next/image"
import { TableCell, TableRow } from "@/ui/shadcn/table"
import ArticlesActionCell from "./ArticlesActionCell"

type ArticleWithAuthor = {
    author: {
        profilePicture: string | null
        username: string
    }
} & Article

export default function ArticlesTableRow({
    article,
}: {
    article: ArticleWithAuthor
}) {
    return (
        <TableRow>
            <TableCell>
                <div className="flex items-center gap-4">
                    <div className="dark:bg-active-dark grid h-[38px] w-[38px] place-content-center overflow-hidden rounded-full bg-active">
                        <Image
                            className="rounded-full object-cover"
                            src={article.image || "/noimage.png"}
                            alt={`${article.title}'s thumbnail`}
                            width={38}
                            height={38}
                        />
                    </div>
                    <p>{article.title}</p>
                </div>
            </TableCell>
            <TableCell>
            <div className="flex items-center gap-4">
                    <div className="dark:bg-active-dark grid h-[38px] w-[38px] place-content-center overflow-hidden rounded-full bg-active">
                        <Image
                            className="rounded-full object-cover"
                            src={article.author.profilePicture || "/noavatar.png"}
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
            <TableCell>
                <ArticlesActionCell articleId={article.id} />
            </TableCell>
        </TableRow>
    )
}

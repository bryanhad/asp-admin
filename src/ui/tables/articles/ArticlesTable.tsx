import { fetchFilteredArticles } from "@/lib/data"
import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from "@/ui/shadcn/table"
import SearchNotFound from "../SearchNotFound"
import NoDataFound from "../NoDataFound"
import ArticlesTableRow from "./ArticlesTableRow"
import ArticlesListMobile from "./ArticlesListMobile"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOption"

type ArticleTableProps = {
    query: string
    currentPage: number
}

export default async function ArticlesTable({
    query,
    currentPage,
}: ArticleTableProps) {
    const session = await getServerSession(authOptions)
    const articles = await fetchFilteredArticles(query, currentPage)

    if (!session) return <p>loh.. kok session ga ada?</p>

    if (articles.length < 1) {
        if (query) {
            return <SearchNotFound searchTerm="Article" query={query} />
        } else {
            return (
                <NoDataFound
                    extraDesc="Add new article with the form above!"
                    desc={`"Articles" table is empty.`}
                />
            )
        }
    }
    return (
        <>
            <div className="hidden md:block">
                <Table>
                    <TableCaption>A list of recent articles.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[30%]">Article</TableHead>
                            <TableHead className="w-[20%]">Author</TableHead>
                            <TableHead>Created At</TableHead>
                            <TableHead className="text-right">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {articles.map((article) => (
                            <ArticlesTableRow
                                userInfo={{
                                    role: session.user.role,
                                    id: session.user.id,
                                }}
                                article={article}
                                key={article.id}
                            />
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="md:hidden">
                <ArticlesListMobile
                         userInfo={{
                            role: session.user.role,
                            id: session.user.id,
                        }}
                articles={articles} />
            </div>
        </>
    )
}

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

type ArticleTableProps = {
    query: string
    currentPage: number
}

export default async function ArticlesTable({
    query,
    currentPage,
}: ArticleTableProps) {
    const articles = await fetchFilteredArticles(query, currentPage)

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
                            <TableHead>Article</TableHead>
                            <TableHead>Author</TableHead>
                            <TableHead>Created At</TableHead>
                            <TableHead className="text-right">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {articles.map((article) => (
                            <ArticlesTableRow
                                article={article}
                                key={article.id}
                            />
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="md:hidden">
                <ArticlesListMobile articles={articles} />
            </div>
        </>
    )
}

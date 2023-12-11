import SearchBar from "@/ui/form/SearchBar"
import { Suspense } from "react"
import Pagination from "@/ui/tables/Pagination"
import { Link } from "@/ui/Link"

type ArticlesPageProps = {
    searchParams?: {
        q?: string
        page?: string
    }
}

export default async function ArticlesPage({
    searchParams,
}: ArticlesPageProps) {
    const query = searchParams?.q || ""
    const currentPage = Number(searchParams?.page) || 1
    // const totalPages = await ArticlesPageAmount(query)

    return (
        <>
            <SearchBar placeholder="Search..." />
            <Link
                className="ml-auto"
                href="/articles/add"
                size="lg"
                variant="success"
            >
                Add Article
            </Link>
            {/* <Suspense
                key={query + currentPage}
                fallback={<ArticlesTableSkeleton />}
            >
                <ArticlesTable query={query} currentPage={currentPage} />
            </Suspense> */}
            {/* <div className="flex justify-center">
                <Pagination totalPages={totalPages} />
            </div> */}
        </>
    )
}

import { fetchPositionsPageAmount } from "@/lib/data"
import AddForm from "@/ui/form/AddForm"
import SearchBar from "@/ui/form/SearchBar"
import PositionTableSkeleton from "@/ui/skeletons/PositionTableSkeleton"
import Pagination from "@/ui/tables/Pagination"
import PositionTable from "@/ui/tables/positions/PositionTable"
import { Suspense } from "react"

type PositionPageProps = {
    searchParams?: {
        q?: string
        page?: string
    }
}

export default async function PositionsPage({
    searchParams,
}: PositionPageProps) {
    const query = searchParams?.q || ""
    const currentPage = Number(searchParams?.page) || 1

    const totalPages = await fetchPositionsPageAmount(query)

    return (
        <>
            <AddForm />
            <SearchBar placeholder="Search..." />
            <Suspense
                key={query + currentPage}
                fallback={<PositionTableSkeleton />}
            >
                <PositionTable query={query} currentPage={currentPage} />
            </Suspense>
            <div className="flex justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </>
    )
}

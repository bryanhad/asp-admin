import { fetchPositionsPageAmount } from "@/lib/data"
import AddForm from "@/ui/form/AddForm"
import AddPositionForm from "@/ui/form/AddPositionForm"
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
            <AddPositionForm/>
            <SearchBar placeholder="Search..." />
            <Suspense
                key={query + currentPage}
                fallback={<PositionTableSkeleton />}
            >
                <PositionTable
                    query={query}
                    currentPage={currentPage}
                    totalPages={totalPages}
                />
            </Suspense>
        </>
    )
}

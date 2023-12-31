import { fetchPositionsPageAmount } from "@/lib/data"
import AddPositionForm from "@/ui/form/positionForm/AddPositionForm"
import SearchBar from "@/ui/form/SearchBar"
import PositionsTableSkeleton from "@/ui/skeletons/table/PositionsTableSkeleton"
import Pagination from "@/ui/tables/Pagination"
import ShadcnPositionsTable from "@/ui/tables/positions/PositionsTable"
import { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
    title: 'Positions',
}

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
            <SearchBar placeholder="Search..." />
            <AddPositionForm />
            <Suspense
                key={query + currentPage}
                fallback={<PositionsTableSkeleton />}
            >
                <ShadcnPositionsTable query={query} currentPage={currentPage} />
            </Suspense>
            <div className="flex justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </>
    )
}

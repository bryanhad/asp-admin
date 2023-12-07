import AddForm from "@/ui/form/AddForm"
import SearchBar from "@/ui/form/SearchBar"
import PositionTableSkeleton from "@/ui/skeletons/PositionTableSkeleton"
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
        </>
    )
}

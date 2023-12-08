import { fetchMembersPageAmount, fetchPositionsPageAmount } from "@/lib/data"
import AddPositionForm from "@/ui/form/AddPositionForm"
import SearchBar from "@/ui/form/SearchBar"
import PositionTableSkeleton from "@/ui/skeletons/PositionsTableSkeleton"
import Pagination from "@/ui/tables/Pagination"
import MembersTable from "@/ui/tables/members/MembersTable"
import PositionTable from "@/ui/tables/positions/PositionsTable"
import { Suspense } from "react"

type PositionPageProps = {
    searchParams?: {
        q?: string
        page?: string
    }
}

export default async function MembersPage({ searchParams }: PositionPageProps) {
    const query = searchParams?.q || ""
    const currentPage = Number(searchParams?.page) || 1

    const totalPages = await fetchMembersPageAmount(query)

    return (
        <>
            <AddPositionForm />
            <SearchBar placeholder="Search..." />
            <Suspense
                key={query + currentPage}
                fallback={<PositionTableSkeleton />}
            >
                <MembersTable query={query} currentPage={currentPage}/>
            </Suspense>
            <div className="flex justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </>
    )
}

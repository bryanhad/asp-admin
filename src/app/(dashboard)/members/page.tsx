import { fetchMembersPageAmount } from "@/lib/data"
import { Button } from "@/ui/form/Button"
import SearchBar from "@/ui/form/SearchBar"
import MembersTableSkeleton from "@/ui/skeletons/MembersTableSkeleton"
import Pagination from "@/ui/tables/Pagination"
import MembersTable from "@/ui/tables/members/MembersTable"
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
            <SearchBar placeholder="Search..." />
            <Button
                isLink
                href="/members/add"
                className="ml-auto px-5 text-sm py-2 md:text-base md:py-3 md:px-12"
                buttonType="add"
            >
                Add Member
            </Button>
            <Suspense
                key={query + currentPage}
                fallback={<MembersTableSkeleton />}
            >
                <MembersTable query={query} currentPage={currentPage} />
            </Suspense>
            <div className="flex justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </>
    )
}

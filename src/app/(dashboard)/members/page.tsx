import { fetchMembersPageAmount } from "@/lib/data"
import { Button } from "@/ui/form/Button"
import SearchBar from "@/ui/form/SearchBar"
import MembersTableSkeleton from "@/ui/skeletons/MembersTableSkeleton"
import Pagination from "@/ui/tables/Pagination"
import MembersTable from "@/ui/tables/members/MembersTable"
import { Suspense } from "react"

type MembersPageProps = {
    searchParams?: {
        q?: string
        page?: string
    }
}

export default async function MembersPage({ searchParams }: MembersPageProps) {
    const query = searchParams?.q || ""
    const currentPage = Number(searchParams?.page) || 1

    const totalPages = await fetchMembersPageAmount(query)

    return (
        <>
            <Button
                isLink
                href="/members/add"
                className="ml-auto px-5 py-2 text-sm md:px-12 md:py-3 md:text-base"
                buttonType="add"
            >
                Add Member
            </Button>
            <SearchBar placeholder="Search..." />
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

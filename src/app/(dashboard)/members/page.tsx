import SearchBar from "@/ui/form/SearchBar"
import { Suspense } from "react"
import Pagination from "@/ui/tables/Pagination"
import { fetchMembersPageAmount } from "@/lib/data"
import MembersTable from "@/ui/tables/members/MembersTable"
import { Link } from "@/ui/Link"
import MembersTableSkeleton from "@/ui/skeletons/table/MembersTableSkeleton"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Members',
}

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
            <SearchBar placeholder="Search..." />
            <Link
                className="ml-auto"
                href="/members/add"
                size="lg"
                variant="success"
            >
                Add Member
            </Link>
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

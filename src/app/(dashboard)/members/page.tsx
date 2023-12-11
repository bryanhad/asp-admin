import SearchBar from "@/ui/form/SearchBar"
import MembersTableSkeleton from "@/ui/skeletons/MembersTableSkeleton"
import { Suspense } from "react"
import Pagination from "@/ui/tables/Pagination"
import { fetchMembersPageAmount } from "@/lib/data"
import ShadcnMembersTable from "@/ui/tables/members/ShadcnMembersTable"
import { Link } from "@/ui/Link"

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
                <ShadcnMembersTable query={query} currentPage={currentPage} />
            </Suspense>
            <div className="flex justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </>
    )
}

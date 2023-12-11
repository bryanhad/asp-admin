import { fetchUsersPageAmount } from "@/lib/data"
import { Link } from "@/ui/Link"
import SearchBar from "@/ui/form/SearchBar"
import MembersTableSkeleton from "@/ui/skeletons/MembersTableSkeleton"
import Pagination from "@/ui/tables/Pagination"
import UsersTable from "@/ui/tables/users/UsersTable"
import { Suspense } from "react"

type UsersPageProps = {
    searchParams?: {
        q?: string
        page?: string
    }
}

export default async function UsersPage({ searchParams }: UsersPageProps) {
    const query = searchParams?.q || ""
    const currentPage = Number(searchParams?.page) || 1
    const totalPages = await fetchUsersPageAmount(query)

    return (
        <>
            <SearchBar placeholder="Search..." />
            <Link
                className="ml-auto"
                href="/users/add"
                size="lg"
                variant="success"
            >
                Add User
            </Link>
            <Suspense
                key={query + currentPage}
                fallback={<MembersTableSkeleton />}
            >
                <UsersTable query={query} currentPage={currentPage} />
            </Suspense>
            <div className="flex justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </>
    )
}
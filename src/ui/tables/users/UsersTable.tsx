import { fetchFilteredUsers } from "@/lib/data"
import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from "@/ui/shadcn/table"
import SearchNotFound from "../SearchNotFound"
import NoDataFound from "../NoDataFound"
import UsersTableRow from "./UsersTableRow"
import UsersListMobile from "./UsersListMobile"

type UserTableProps = {
    query: string
    currentPage: number
}

export default async function UsersTable({
    query,
    currentPage,
}: UserTableProps) {
    const users = await fetchFilteredUsers(query, currentPage)

    if (users.length < 1) {
        if (query) {
            return <SearchNotFound searchTerm="User" query={query} />
        } else {
            return (
                <NoDataFound
                    extraDesc="Add new user with the form above!"
                    desc={`"Users" table is empty.`}
                />
            )
        }
    }
    return (
        <>
            <div className="hidden md:block">
                <Table>
                    <TableCaption>A list of recent users.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>User</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Created At</TableHead>
                            <TableHead>Member</TableHead>
                            <TableHead className="text-right">
                                Actions
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user) => (
                            <UsersTableRow user={user} key={user.id} />
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="md:hidden">
                <UsersListMobile users={users} />
            </div>
        </>
    )
}

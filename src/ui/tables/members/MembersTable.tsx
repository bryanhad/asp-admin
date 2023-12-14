import { fetchFilteredMembers } from "@/lib/data"
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
import MembersTableRow from "./MembersTableRow"
import MembersListMobile from "./MembersListMobile"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOption"

type MemberTableProps = {
    query: string
    currentPage: number
}

export default async function MembersTable({
    query,
    currentPage,
}: MemberTableProps) {
    const session = await getServerSession(authOptions)
    const members = await fetchFilteredMembers(query, currentPage)

    if (!session) return <p>loh..kok sesion ga ada?</p>

    if (members.length < 1) {
        if (query) {
            return <SearchNotFound searchTerm="Member" query={query} />
        } else {
            return (
                <NoDataFound
                    extraDesc="Add new member with the form above!"
                    desc={`"Members" table is empty.`}
                />
            )
        }
    }
    return (
        <>
        <div className="hidden md:block">
            <Table >
                <TableCaption>A list of recent members.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[30%]">Member</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>CreatedAt</TableHead>
                        {session.user.role === 'ADMIN' && (
                            <TableHead className="text-right">Actions</TableHead>
                        )}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {members.map((member) => (
                        <MembersTableRow userRole={session.user.role} member={member} key={member.id} />
                    ))}
                </TableBody>
            </Table>
        </div>
        <div className="md:hidden">
            <MembersListMobile userRole={session.user.role} members={members} />
        </div>
        </>
    )
}

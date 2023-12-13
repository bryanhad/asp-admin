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

type MemberTableProps = {
    query: string
    currentPage: number
}

export default async function MembersTable({
    query,
    currentPage,
}: MemberTableProps) {
    const members = await fetchFilteredMembers(query, currentPage)

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
        <Table>
            <TableCaption>A list of recent members.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Member</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>CreatedAt</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {members.map((member) => (
                    <MembersTableRow member={member} key={member.id} />
                ))}
            </TableBody>
        </Table>
    )
}

import { fetchFilteredMembers } from "@/lib/data"
import Table from "../Table"
import TableRowWithBorderBottom from "../TableRowWithBorderBottom"
import SearchNotFound from "../SearchNotFound"
import MembersTableRow from "./MembersTableRow"
import MembersMobile from "./MembersMobile"
import { Button } from "@/ui/form/Button"
import NoDataFound from "../NoDataFound"

type MembersTableProps = {
    query: string
    currentPage: number
}

export default async function MembersTable({
    query,
    currentPage,
}: MembersTableProps) {
    const members = await fetchFilteredMembers(query, currentPage)

    if (members.length < 1) {
        if (query) {
            return <SearchNotFound searchTerm="Member" query={query} />
        } else {
            return <NoDataFound buttonText="Add Member" desc={`"Members" table is empty.`} href="/members/add"/>
        }
    }

    return (
        <>
            <Table
                theads={["Member", "Email", "createdAt"]}
                mobileView={
                    <>
                        {members.map((member, i) => (
                            <MembersMobile key={i} member={member} />
                        ))}
                    </>
                }
            >
                <>
                    {members.map((member, i) => (
                        <TableRowWithBorderBottom
                            key={i}
                            index={i}
                            arrayLength={members.length}
                        >
                            <MembersTableRow member={member} />
                        </TableRowWithBorderBottom>
                    ))}
                </>
            </Table>
        </>
    )
}

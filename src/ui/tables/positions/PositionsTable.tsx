import { fetchFilteredPositions } from "@/lib/data"
import PositionsTableRow from "./PositionsTableRow"
import PositionsMobile from "./PositionsMobile"
import Table from "../Table"
import TableRowWithBorderBottom from "../TableRowWithBorderBottom"
import SearchNotFound from "../SearchNotFound"
import NoDataFound from "../NoDataFound"

type PositionTableProps = {
    query: string
    currentPage: number
}

export default async function PositionTable({
    query,
    currentPage,
}: PositionTableProps) {
    const positions = await fetchFilteredPositions(query, currentPage)

    if (positions.length < 1) {
        if (query) {
            return <SearchNotFound searchTerm="Position" query={query} />
        } else {
            return <NoDataFound extraDesc="Add new position with the form above!" desc={`"Positions" table is empty.`}/>
        }
    }
    return (
        <>
            <Table
                theads={["Name", "Member Count"]}
                mobileView={
                    <>
                        {positions.map((position, i) => (
                            <PositionsMobile key={i} position={position} />
                        ))}
                    </>
                }
            >
                <>
                    {positions.map((position, i) => (
                        <TableRowWithBorderBottom
                            key={i}
                            index={i}
                            arrayLength={positions.length}
                        >
                            <PositionsTableRow position={position} />
                        </TableRowWithBorderBottom>
                    ))}
                </>
            </Table>
        </>
    )
}

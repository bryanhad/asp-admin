import { fetchFilteredPositions } from "@/lib/data"
import PositionTableRow from "./PositionTableRow"
import PositionsTableMobile from "./PositionsMobileView"
import Table from "../Table"
import TableRowWithBorderBottom from "../TableRowWithBorderBottom"
import SearchNotFound from "../SearchNotFound"
import DeleteConfirmation from "../DeleteConfirmation"
import { deletePosition } from "@/actions/positions.action"
import PositionMobilleViewNEW from "./PositionMobilleViewNEW"

type PositionTableProps = {
    query: string
    currentPage: number
}

export default async function PositionTable({
    query,
    currentPage,
}: PositionTableProps) {
    const positions = await fetchFilteredPositions(query, currentPage)

    if (positions.length < 1)
        return <SearchNotFound searchTerm="Position" query={query} />

    return (
        <>
            <Table
                theads={["Name", "Member Count"]}
                mobileView={
                    <>
                        {/* {positions.map((position, i) => (
                            <PositionMobilleViewNEW
                                key={position.id}
                                position={position}
                            />
                        ))} */}
                        {positions.map((position, i) => (
                            <PositionsTableMobile
                                key={i}
                                position={position}
                            />
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
                            <PositionTableRow position={position} />
                        </TableRowWithBorderBottom>
                    ))}
                </>
            </Table>
        </>
    )
}
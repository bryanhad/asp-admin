import { fetchFilteredPositions } from "@/lib/data"
import PositionTableRow from "./PositionTableRow"
import PositionsMobile from "./PositionsMobile"
import Table from "../Table"
import TableRowWithBorderBottom from "../TableRowWithBorderBottom"
import SearchNotFound from "../SearchNotFound"

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
                            <PositionTableRow position={position} />
                        </TableRowWithBorderBottom>
                    ))}
                </>
            </Table>
        </>
    )
}

import { fetchPositions } from "@/lib/data"
import PositionTableRow from "./PositionTableRow"
import PositionsTableMobile from "./PositionsMobileView"
import Table from "../Table"
import TableRowWithBorderBottom from "../TableRowWithBorderBottom"

export default async function PositionTable() {
    const positions = await fetchPositions()

    return (
        <Table
            theads={["Name", "Member Count"]}
            mobileView={
                <>
                    {positions.map((position) => (
                        <PositionsTableMobile
                            key={position.id}
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
    )
}

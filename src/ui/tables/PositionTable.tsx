import { fetchPositions } from "@/lib/data"
import PositionTableRow from "./positions/PositionTableRow"

export default async function PositionTable() {
    const positions = await fetchPositions()

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Member Count</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {positions.map((position) => (
                    <tr key={position.id}>
                        <PositionTableRow position={position} />
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

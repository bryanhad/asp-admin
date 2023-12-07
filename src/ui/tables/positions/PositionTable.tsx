import { fetchPositions } from "@/lib/data"
import PositionTableRow from "./PositionTableRow"
import PositionsTableMobile from "./PositionsMobileView"

export default async function PositionTable() {
    const positions = await fetchPositions()

    return (
        <div className="overflow-auto p-5 dark:bg-bg-soft-dark">
            {/* DESKTOP */}
            <table className="hidden w-full md:table">
                <thead>
                    <tr>
                        <th className="p-2 text-start font-normal">Name</th>
                        <th className="p-2 text-start font-normal">
                            Member Count
                        </th>
                        <th scope="col">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {positions.map((position, i) => (
                        <tr key={position.id} className={i !== positions.length-1 ? 'border-b dark:border-active-dark border-active': ''}>
                            <PositionTableRow position={position} />
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* MOBILE */}
            <div className="flex flex-col gap-5 md:hidden">
                {positions.map((position) => (
                    <PositionsTableMobile
                        key={position.id}
                        position={position}
                    />
                ))}
            </div>
        </div>
    )
}

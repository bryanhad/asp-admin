import { fetchPositions } from "@/lib/data"
import AddForm from "@/ui/form/AddForm"
import PositionTable from "@/ui/tables/positions/PositionTableDesktop"

export default async function PositionsPage() {
    return (
        <>
            <AddForm />
            <PositionTable />
        </>
    )
}

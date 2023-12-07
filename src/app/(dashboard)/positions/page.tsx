import { fetchPositions } from "@/lib/data"
import AddForm from "@/ui/form/AddForm"
import PositionTable from "@/ui/tables/PositionTable"

export default async function PositionsPage() {
    return (
        <>
            <AddForm />
            <PositionTable />
        </>
    )
}

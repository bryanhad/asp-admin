import AddForm from "@/ui/form/AddForm"
import PositionTable from "@/ui/tables/positions/PositionTable"

export default async function PositionsPage() {
    return (
        <>
            <AddForm />
            <PositionTable />
        </>
    )
}

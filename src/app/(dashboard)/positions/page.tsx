import AddForm from "@/ui/form/AddForm"
import PositionTableSkeleton from "@/ui/skeletons/PositionTableSkeleton"
import PositionTable from "@/ui/tables/positions/PositionTable"
import { Suspense } from "react"
export default async function PositionsPage() {
    return (
        <>
            <AddForm />
            <Suspense fallback={<PositionTableSkeleton/>}>
                <PositionTable />
            </Suspense>
        </>
    )
}

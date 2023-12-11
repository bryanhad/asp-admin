import { fetchFilteredPositions } from "@/lib/data"
import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow,
} from "@/ui/shadcn/table"
import SearchNotFound from "../SearchNotFound"
import NoDataFound from "../NoDataFound"
import ShadcnPositionsTableCells from "./ShadcnPositionsTableCells"

type PositionTableProps = {
    query: string
    currentPage: number
}

export default async function ShadcnPositionsTable({
    query,
    currentPage,
}: PositionTableProps) {
    const positions = await fetchFilteredPositions(query, currentPage)

    if (positions.length < 1) {
        if (query) {
            return <SearchNotFound searchTerm="Position" query={query} />
        } else {
            return (
                <NoDataFound
                    extraDesc="Add new position with the form above!"
                    desc={`"Positions" table is empty.`}
                />
            )
        }
    }
    return (
        <Table>
            <TableCaption>A list of recent positions.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Member Count</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {positions.map((position, i) => (
                    <TableRow key={position.id}>
                        <ShadcnPositionsTableCells position={position} />
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

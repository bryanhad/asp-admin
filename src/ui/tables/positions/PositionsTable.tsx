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
import PositionsTableCells from "./PositionsTableCells"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOption"

type PositionTableProps = {
    query: string
    currentPage: number
}

export default async function PositionsTable({
    query,
    currentPage,
}: PositionTableProps) {
    const session = await getServerSession(authOptions)
    const positions = await fetchFilteredPositions(query, currentPage)

    if (!session) return <p>kok ga ada session?</p>

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
                    <TableHead className="w-[30%]">Name</TableHead>
                    <TableHead>Member Count</TableHead>
                    {session.user.role === 'ADMIN' && (
                        <TableHead className="text-right">Actions</TableHead>
                    )}
                </TableRow>
            </TableHeader>
            <TableBody>
                {positions.map((position, i) => (
                    <TableRow key={position.id}>
                        <PositionsTableCells userRole={session.user.role} position={position} />
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/ui/shadcn/table"
import { TextSkeleton } from "../Skeleton"

export default function PositionsTableSkeleton() {
    const numOfDesktopRows = Array.from(Array(2).keys())
    return (
        <Table>
            <TableCaption>A list of recent positions.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[30%]">
                        <TextSkeleton className="w-[60px]" />
                    </TableHead>
                    <TableHead>
                        <TextSkeleton className="w-[60px]" />
                    </TableHead>
                    <TableHead className="flex items-center justify-end">
                        <TextSkeleton className="w-[60px]" />
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {numOfDesktopRows.map((el) => (
                    <TableRowSkeleton key={el} />
                ))}
            </TableBody>
        </Table>
    )
}

function TableRowSkeleton() {
    return (
        <TableRow>
            <TableCell>
                <div className="flex items-center gap-4">
                    <TextSkeleton className="h-[18px] w-[100px]" />
                </div>
            </TableCell>
            <TableCell>
                <div className="flex items-center gap-4">
                    <TextSkeleton className="h-[18px] w-[25px]" />
                </div>
            </TableCell>
            <TableCell>
                <div className="flex flex-col gap-4 max-sm:w-full sm:ml-auto sm:max-w-max sm:flex-row">
                    <TextSkeleton className="w-full sm:w-[80px]" />
                    <TextSkeleton className="w-full sm:w-[80px]" />
                </div>
            </TableCell>
        </TableRow>
    )
}

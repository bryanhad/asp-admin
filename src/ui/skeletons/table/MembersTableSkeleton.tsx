import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/ui/shadcn/table"
import { MiniImageSkeleton, TextSkeleton } from "../Skeleton"

export default function MembersTableSkeleton() {
    const numOfDesktopRows = Array.from(Array(6).keys())
    const numOfMobileRows = Array.from(Array(6).keys())
    return (
        <>
            <div className="hidden md:block">
                <Table>
                    <TableCaption>A list of recent members.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[30%]">
                                <TextSkeleton className="w-[80px]" />
                            </TableHead>
                            <TableHead>
                                <TextSkeleton className="w-[90px]" />
                            </TableHead>
                            <TableHead>
                                <TextSkeleton className="w-[110px]" />
                            </TableHead>
                            <TableHead className="flex items-center justify-end">
                                <TextSkeleton className="w-[80px]" />
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {numOfDesktopRows.map((el) => (
                            <TableRowSkeleton key={el} />
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="flex flex-col gap-2 bg-secondary p-2 md:hidden">
                {numOfMobileRows.map((el) => (
                    <MobileSkeleton key={el} />
                ))}
            </div>
        </>
    )
}

function MobileSkeleton() {
    return (
        <div className="rounded-lg bg-background p-4 ">
            <div className="border-b border-b-active pb-4">
                <MiniImageSkeleton profile />
                <TextSkeleton small className="mt-2 h-[18px] w-[90px]" />
            </div>
            <div className="flex items-center justify-between pt-4">
                <div className="flex flex-col gap-1 text-sm sm:flex-row">
                    <TextSkeleton small className="h-[18px] w-[60px]" />
                </div>
                <div className="flex gap-2">
                    <TextSkeleton small className="h-[30px] w-[80px]" />
                    <TextSkeleton small className="h-[30px] w-[90px]" />
                </div>
            </div>
        </div>
    )
}

function TableRowSkeleton() {
    return (
        <TableRow>
            <TableCell>
                <MiniImageSkeleton profile />
            </TableCell>
            <TableCell>
                <TextSkeleton className="w-[120px]" />
            </TableCell>
            <TableCell>
                <TextSkeleton className="w-[90px]" />
            </TableCell>
            <TableCell>
                <div className="ml-auto flex max-w-max gap-4">
                    <TextSkeleton className="w-[80px]" />
                    <TextSkeleton className="w-[80px]" />
                </div>
            </TableCell>
        </TableRow>
    )
}

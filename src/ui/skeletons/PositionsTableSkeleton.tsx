import Table from "../tables/Table"
import TableRowWithBorderBottom from "../tables/TableRowWithBorderBottom"
import { TextSkeleton } from "./Skeleton"

export default function PositionTableSkeleton() {
    const numOfCols = Array.from(Array(2).keys())
    const numOfDesktopRows = Array.from(Array(6).keys())
    const numOfMobileRows = Array.from(Array(6).keys())

    return (
        <Table
            theads={numOfCols.map((el) => (
                <TextSkeleton key={el} className="w-[33%]" />
            ))}
            mobileView={
                <>
                    {numOfMobileRows.map((el) => (
                        <div
                            key={el}
                            className="flex flex-col gap-4 rounded-lg bg-bg-soft p-4  dark:bg-slate-700"
                        >
                            <div className="flex justify-between">
                                <TextSkeleton className="w-[150px]" />
                                <TextSkeleton className="w-[30px]" />
                            </div>
                            <div className="flex gap-4">
                                <TextSkeleton className="w-[80px]" />
                                <TextSkeleton className="w-[80px]" />
                            </div>
                        </div>
                    ))}
                </>
            }
        >
            <>
                {numOfDesktopRows.map((el) => (
                    <TableRowWithBorderBottom
                        key={el}
                        arrayLength={numOfDesktopRows.length}
                        index={el}
                    >
                        <td className="p-4">
                            {<TextSkeleton className="w-[50%]" />}
                        </td>
                        <td className="p-4">
                            {<TextSkeleton className="w-[30px]" />}
                        </td>
                        <td className="p-4">
                            <div className="ml-auto flex max-w-max gap-4">
                                <TextSkeleton className="w-[80px]" />
                                <TextSkeleton className="w-[80px]" />
                            </div>
                        </td>
                    </TableRowWithBorderBottom>
                ))}
            </>
        </Table>
    )
}

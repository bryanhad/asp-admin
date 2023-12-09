import Table from "../tables/Table"
import TableRowWithBorderBottom from "../tables/TableRowWithBorderBottom"
import { TextSkeleton } from "./Skeleton"

export default function MembersTableSkeleton() {
    const numOfCols = Array.from(Array(3).keys())
    const numOfDesktopRows = Array.from(Array(6).keys())
    const numOfMobileRows = Array.from(Array(6).keys())

    return (
        <Table
            theads={numOfCols.map((el) => (
                <TextSkeleton key={el} className="w-[50%]" />
            ))}
            mobileView={
                <>
                    {numOfMobileRows.map((el) => (
                        <div
                            key={el}
                            className="flex flex-col gap-4 rounded-lg bg-bg-soft p-4  dark:bg-bg-soft-dark"
                        >
                            <div className="flex items-center gap-4">
                                <TextSkeleton
                                    circle
                                    className="h-[50px] w-[50px]"
                                />

                                <div className="itemcen flex flex-col gap-2">
                                    <TextSkeleton
                                        small
                                        className="h-[18px] w-[80px]"
                                    />
                                    <TextSkeleton
                                        small
                                        className="h-[18px] w-[120px]"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <TextSkeleton
                                    small
                                    className="h-[30px] w-[75px]"
                                />
                                <TextSkeleton
                                    small
                                    className="h-[30px] w-[100px]"
                                />
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
                            <div className="flex items-center gap-4">
                                <TextSkeleton
                                    circle
                                    className="h-[50px] w-[50px]"
                                />
                                <TextSkeleton
                                    small
                                    className="h-[18px] w-[80px]"
                                />
                            </div>
                        </td>
                        <td className="p-4">
                            {<TextSkeleton className="w-[140px]" />}
                        </td>
                        <td className="p-4">
                            {<TextSkeleton className="w-[110px]" />}
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

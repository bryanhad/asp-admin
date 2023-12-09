import React from "react"

type TableProps = {
    header?: React.ReactNode
    theads: string[] | JSX.Element[]
    mobileView: React.ReactNode
    children: React.ReactNode
}

export default function Table({
    theads,
    mobileView,
    children,
    header,
}: TableProps) {
    const th_WIDTH = 100 / (theads.length + 1)
    return (
        <>
            <div className="hidden md:block rounded-xl overflow-auto p-5 dark:bg-bg-soft-dark md:bg-bg-soft">
                {header}
                {/* DESKTOP */}
                <table className="w-full">
                    <thead>
                        <tr>
                            {theads.map((title, i) => (
                                <th
                                    style={{ width: `${th_WIDTH}%` }}
                                    key={i}
                                    className="px-4 pb-3 pt-2 text-start font-normal"
                                >
                                    {title}
                                </th>
                            ))}
                            <th style={{ width: `${th_WIDTH}%` }} scope="col">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>{children}</tbody>
                </table>
                {/* MOBILE */}
            </div>
            <div className="flex flex-col gap-5 md:hidden">{mobileView}</div>
        </>
    )
}

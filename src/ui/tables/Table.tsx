import React from "react"

type TableProps = {
    theads: string[] | JSX.Element[]
    mobileView: React.ReactNode
    children: React.ReactNode
}

export default function Table({ theads, mobileView, children }: TableProps) {
    const th_WIDTH = 100 / (theads.length + 1)
    return (
        <div className="overflow-auto p-5 dark:bg-bg-soft-dark md:bg-bg-soft">
            {/* DESKTOP */}
            <table className="hidden w-full md:table">
                <thead>
                    <tr>
                        {theads.map((title, i) => (
                            <th
                                style={{ width: `${th_WIDTH}%` }}
                                key={i}
                                className="p-2 text-start font-normal"
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
            <div className="flex flex-col gap-5 md:hidden">{mobileView}</div>
        </div>
    )
}

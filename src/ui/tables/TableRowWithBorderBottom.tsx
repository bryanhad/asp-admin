import React from "react"

export default function TableRowWithBorderBottom({
    index,
    arrayLength,
    children,
}: {
    index: number
    arrayLength: number
    children: React.ReactNode
}) {
    return (
        <tr
            className={`hover:bg-active/40 dark:hover:bg-active-dark/40 duration-300 ${
                index !== arrayLength - 1
                    ? "border-b border-active dark:border-active-dark"
                    : ""
            }`}
        >
            {children}
        </tr>
    )
}

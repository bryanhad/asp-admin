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
            className={
                index !== arrayLength - 1
                    ? "border-b border-active dark:border-active-dark"
                    : ""
            }
        >
            {children}
        </tr>
    )
}

"use client"

import clsx from "clsx"
import { useState, useEffect } from "react"

export default function ErrorText({
    str,
    dep,
    className,
}: {
    str: string
    dep: any
    className?: string
}) {
    const [shouldShake, setShouldShake] = useState(false)

    useEffect(() => {
        setShouldShake(true)
        setTimeout(() => {
            setShouldShake(false)
        }, 400)
    }, [dep])

    const customClassName = clsx(
        `text-error text-sm font-light absolute error-center`,
        {
            "shake-center": shouldShake === true,
        },
    )

    return (
        <div className={`relative mt-3 h-[20px]`}>
            <p className={`${customClassName} ${className}`}>{str}</p>
        </div>
    )
}

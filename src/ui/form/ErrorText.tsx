"use client"

import clsx from "clsx"
import { useState, useEffect } from "react"

export default function ErrorText({
    str,
    dep
}: {
    str: string
    dep:any
}) {
    const [shouldShake, setShouldShake] = useState(false)

    useEffect(() => {
        setShouldShake(true)
        setTimeout(() => {
            setShouldShake(false)
        }, 300)
    }, [dep])

    const className = clsx("text-error mt-2 text-sm font-light", {
        "error-shake": shouldShake === true,
    })

    return <p className={className}>{str}</p>
}

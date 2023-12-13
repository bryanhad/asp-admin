"use client"

import { usePathname } from "next/navigation"

export default function HeaderTitle() {
    const pathname = usePathname()
    const pathnames = pathname.slice(1).split("/")
    return (
        <div className="flex gap-2 font-bold">
            <div className="capitalize">{pathnames[0] ? pathnames[0] : 'Dashboard'}</div>
            {pathnames[2] && <div className="capitalize">{pathnames[2]}</div>}
        </div>
    )
}

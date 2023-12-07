"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

type SideBarLinkProps = {
    link: {
        path: string
        icon: any
        title: string
    }
}

export default function SideBarLink({ link }: SideBarLinkProps) {
    const pathname = usePathname()

    const className = clsx("p-4 lg:p-5 flex text-sm lg:text-base items-center gap-3 my-[10px] rounded-md dark:hover:bg-active-dark hover:bg-active", {
        "dark:bg-active-dark bg-active": pathname === link.path,
    })

    return (
        <Link href={link.path} className={className}>
            {link.icon}
            {link.title}
        </Link>
    )
}

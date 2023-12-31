"use client"

import { useNavbarContext } from "@/contexts/navbar.context"
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
    const { setIsNavOpen } = useNavbarContext()
    const pathname = usePathname()
    const linkName = pathname.slice(1).split('/')[0]
    
    const className = clsx(
        "p-4 lg:p-5 flex text-sm lg:text-base items-center gap-3 mb-[3px] lg:my-[10px] rounded-md hover:bg-active",
        {
            "bg-active text-active-foreground": linkName === link.path.slice(1),
        },
    )

    return (
        <Link
            href={link.path}
            className={className}
            onClick={() => setIsNavOpen(false)}
        >
            {link.icon}
            {link.title}
        </Link>
    )
}

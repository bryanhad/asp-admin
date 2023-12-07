"use client"

import { usePathname } from "next/navigation"
import {
    MdNotifications,
    MdOutlineChat,
    MdPublic,
    MdSearch,
} from "react-icons/md"

import React from "react"

export default function Header() {
    const pathname = usePathname()
    return (
        <div className="bg-bgSoft flex items-center justify-between p-5">
            <div className="dark:text-text-soft-dark font-bold capitalize">
                {pathname.split("/").pop() || "Dashboard"}
            </div>
            <div className="flex items-center gap-3">
                <div className="dark:bg-active-dark flex items-center gap-3 rounded-lg p-3">
                    <MdSearch />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="dark:text-text-dark bg-transparent"
                    />
                </div>
                <div className="flex gap-5">
                    <MdOutlineChat size={20} />
                    <MdNotifications size={20} />
                    <MdPublic size={20} />
                </div>
            </div>
        </div>
    )
}

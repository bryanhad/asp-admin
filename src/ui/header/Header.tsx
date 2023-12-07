"use client"

import { usePathname } from "next/navigation"
import {
    MdNotifications,
    MdOutlineChat,
    MdPublic,
    MdSearch,
} from "react-icons/md"

import React from "react"
import ThemeButton from "./ThemeButton"

export default function Header() {
    const pathname = usePathname()
    return (
        <div className="dark:bg-bg-soft-dark bg-bg-soft flex items-center justify-between p-5">
            <div className="dark:text-text-soft-dark text-text-soft font-bold capitalize">
                {pathname.split("/").pop() || "Dashboard"}
            </div>
            <div className="flex items-center gap-3">
                <div className="dark:bg-active-dark bg-white flex items-center gap-3 rounded-lg p-3">
                    <MdSearch />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="dark:text-text-dark text-text-soft bg-transparent"
                    />
                </div>
                <div className="flex gap-5">
                    <ThemeButton/>
                </div>
            </div>
        </div>
    )
}

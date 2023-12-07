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
import BurgerButton from "./BurgerButton"
import BurgerMenu from "./BurgerMenu"
import MiniUser from "./MiniUser"

export default function Header() {
    const NAV_HEIGHT = 94
    const pathname = usePathname()
    return (
        <>
            <div
                style={{ height: `${NAV_HEIGHT}px` }}
                className="dark:bg-bg-soft-dark bg-bg-soft dark:border-b-active-dark border-b-active flex w-full items-center justify-between p-5 max-lg:fixed max-lg:z-30 max-lg:border-b"
            >
                <div className="dark:text-text-soft-dark text-text-soft font-bold capitalize">
                    {pathname.split("/").pop() || "Dashboard"}
                </div>
                {/* <div className="dark:bg-active-dark bg-white flex items-center gap-3 rounded-lg p-3">
                    <MdSearch />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="dark:text-text-dark text-text-soft bg-transparent"
                    />
                </div> */}
                <div className="flex gap-5">
                    <div className="hidden lg:flex gap-5">
                        <ThemeButton />
                        <MiniUser/>
                    </div>
                    <BurgerButton />
                </div>
            </div>
            <BurgerMenu navHeight={NAV_HEIGHT} />
        </>
    )
}

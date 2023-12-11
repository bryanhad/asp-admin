"use client"

import { usePathname } from "next/navigation"
import React from "react"
import BurgerButton from "./BurgerButton"
import BurgerMenu from "./BurgerMenu"
import MiniUser from "./MiniUser"
import { HEADER_HEIGHT } from "@/constants"
import { ThemeToggle } from "./ThemeToggle"

export default function Header() {
    const pathname = usePathname()
    return (
        <>
            <div
                style={{ height: `${HEADER_HEIGHT}px` }}
                className="bg-secondary lg:rounded-lg text-secondary-foreground border-b-active flex w-full items-center justify-between p-5 max-lg:fixed max-lg:z-30 max-lg:border-b"
            >
                <div className="dark:text-text-soft-dark text-text-soft font-bold capitalize">
                    {pathname.split("/").pop() || "Dashboard"}
                </div>
                <div className="flex gap-5">
                    <div className="hidden gap-5 lg:flex lg:items-center">
                        <MiniUser />
                        <ThemeToggle/>
                    </div>
                    <BurgerButton />
                </div>
            </div>
            <BurgerMenu navHeight={HEADER_HEIGHT} />
        </>
    )
}

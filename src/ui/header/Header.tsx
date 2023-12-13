import React from "react"
import BurgerButton from "./BurgerButton"
import BurgerMenu from "./BurgerMenu"
import MiniUser from "./MiniUser"
import { HEADER_HEIGHT } from "@/constants"
import { ThemeToggle } from "./ThemeToggle"
import { User } from "next-auth"
import HeaderTitle from "./HeaderTitle"

export default function Header({ user }: { user: User | undefined }) {
    if (!user) return <p>bruh</p>
    return (
        <>
            <div
                style={{ height: `${HEADER_HEIGHT}px` }}
                className="flex w-full items-center justify-between border-b-active bg-secondary p-5 text-secondary-foreground max-lg:fixed max-lg:z-30 max-lg:border-b lg:rounded-lg"
            >
                <HeaderTitle />
                <div className="flex gap-5">
                    <div className="hidden gap-5 lg:flex lg:items-center">
                        <MiniUser user={user} />
                        <ThemeToggle />
                    </div>
                    <BurgerButton />
                </div>
            </div>
            <BurgerMenu user={user} />
        </>
    )
}

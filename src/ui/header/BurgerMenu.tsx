"use client"

import { useNavbarContext } from "@/contexts/navbar.context"
import { useEffect } from "react"
import { sidebarLinks } from "../sidebar/sidebarLinks"
import SideBarLink from "../sidebar/SideBarLink"
import MiniUser from "./MiniUser"
import { ThemeToggle } from "./ThemeToggle"
import SignOutButton from "../SignOutButton"

export default function BurgerMenu({ navHeight }: { navHeight: number }) {
    const { isNavOpen, setIsNavOpen } = useNavbarContext()

    useEffect(() => {}, [isNavOpen])

    return (
        <>
            {isNavOpen && (
                <div
                    onClick={() => {
                        setIsNavOpen((prev) => !prev)
                    }}
                    className={`fixed z-20 min-h-screen w-full delay-300 duration-300 lg:hidden  `}
                />
            )}
            <section
                style={{ top: `${navHeight}px` }}
                className={`fixed z-[21] flex h-full w-[80%] flex-col gap-4 border-l border-l-active bg-background p-6 duration-300 lg:hidden ${
                    isNavOpen ? "right-[0%]" : "-right-[100%]"
                }`}
            >
                <div className="flex justify-end">
                    <MiniUser />
                </div>
                {/* MENU */}
                <ul className="border-t md:px-8">
                    {sidebarLinks.map((item) => (
                        <li key={item.title}>
                            <p className="dark:text-text-soft-dark text-text-soft my-2 text-[13px] font-bold max-lg:mb-2">
                                {item.title}
                            </p>
                            {item.list.map((link) => (
                                <SideBarLink link={link} key={link.title} />
                            ))}
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-2">
                    <SignOutButton />
                    <div>
                    <ThemeToggle />

                    </div>
                </div>
            </section>
        </>
    )
}

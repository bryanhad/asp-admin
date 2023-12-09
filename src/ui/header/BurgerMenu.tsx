"use client"

import { useNavbarContext } from "@/contexts/navbar.context"
import { useEffect } from "react"
import { sidebarLinks } from "../sidebar/sidebarLinks"
import SideBarLink from "../sidebar/SideBarLink"
import ThemeButton from "./ThemeButton"
import MiniUser from "./MiniUser"

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
                className={`dark:bg-bg-soft-dark bg-bg-soft fixed z-[21] h-full w-[80%] duration-300 lg:hidden ${
                    isNavOpen ? "right-[0%]" : "-right-[100%]"
                }`}
            >
                <div className="flex justify-end p-6">
                    <MiniUser />
                </div>
                {/* MENU */}
                <ul className="px-6 md:px-8">
                    {sidebarLinks.map((item) => (
                        <li key={item.title}>
                            <p className="dark:text-text-soft-dark text-text-soft my-2 max-lg:mb-2 text-[13px] font-bold">
                                {item.title}
                            </p>
                            {item.list.map((link) => (
                                <SideBarLink link={link} key={link.title} />
                            ))}
                        </li>
                    ))}
                    <div className="flex justify-end">
                        <ThemeButton />
                    </div>
                </ul>
            </section>
        </>
    )
}

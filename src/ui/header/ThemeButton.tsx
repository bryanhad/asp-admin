"use client"
import { TbSunHigh } from "react-icons/tb"
import { BiSolidMoon } from "react-icons/bi"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import ThemeButtonSkeleton from "../skeletons/ThemeButtonSkeleton"

export default function ThemeButton() {
    const { resolvedTheme, setTheme } = useTheme()

    // because we cannot know the theme on the server, many values returned from useTheme will be undefined!
    // if u try to render the this button based on the current theme, (resolvedTheme)
    // well, you will get a hydration mismatch error!

    // To fix this, we must make sure to only render this button after the page is mounted on the client.
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    function handleToggle() {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    // show skeleton if the button is not mounted
    if (!mounted) return <ThemeButtonSkeleton />

    return (
        <button
            onClick={handleToggle}
            className="dark:hover:bg-active-dark hover:bg-active dark:border-active-dark dark:bg-bg-soft-dark rounded-lg bg-white p-4 text-xl duration-300 dark:border"
        >
            {resolvedTheme === "dark" ? (
                <TbSunHigh />
            ) : (
                <BiSolidMoon className="text-slate-400" />
            )}
        </button>
    )
}

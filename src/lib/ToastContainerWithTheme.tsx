"use client"

import "react-toastify/dist/ReactToastify.css"
import { ToastContainer, Theme } from "react-toastify"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function ToastContainerListensTheme() {
    const { resolvedTheme, setTheme } = useTheme()

    // because we cannot know the theme on the server, many values returned from useTheme will be undefined!
    // if u try to render the this button based on the current theme, (resolvedTheme)
    // well, you will get a hydration mismatch error!

    // To fix this, we must make sure to only render this button after the page is mounted on the client.
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted || !resolvedTheme) return null
    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={resolvedTheme as Theme}
        />
    )
}

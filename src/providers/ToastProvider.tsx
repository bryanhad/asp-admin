"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer, Theme } from "react-toastify"


export default function ToastProvider({
    children,
}: {
    children: React.ReactNode
}) {


    return (
        <>
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
        </>
    )
}

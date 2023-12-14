"use client"

import React from "react"
import { Button } from "./shadcn/button"
import { signOut } from "next-auth/react"
import { MdLogout } from "react-icons/md"

export default function SignOutButton() {
    return (
        <Button
            onClick={() => signOut()}
            className="flex w-full justify-start gap-3 rounded-lg  lg:px-6 lg:py-8 dark:bg-active dark:text-white"
        >
            <MdLogout />
            Logout
        </Button>
    )
}

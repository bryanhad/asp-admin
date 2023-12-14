import React from "react"
import LoginForm from "./LoginForm"
import "@/ui/globals.css"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOption"
import { redirect } from "next/navigation"
import Logo from "@/ui/Logo"

export default async function LoginPage() {
    const session = await getServerSession(authOptions)

    if (session) {
        redirect("/")
    }
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-slate-100 px-4">
            <div className="w-full max-w-[450px] space-y-8 rounded-xl bg-white px-8 pb-8 pt-12 shadow-xl">
                <div className="flex justify-center">
                    <Logo />
                </div>
                {/* <h1 className="text-center text-2xl font-semibold dark:text-black">
                    Login
                </h1> */}
                <LoginForm />
            </div>
        </div>
    )
}

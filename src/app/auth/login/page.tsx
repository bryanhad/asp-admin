import React from "react"
import LoginForm from "./LoginForm"
import "@/ui/globals.css"

export default function LoginPage() {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-slate-100 px-4">
            <div className="w-full max-w-[450px] space-y-10 rounded-xl bg-white px-8 pb-8 pt-12 shadow-xl">
                <h1 className="text-2xl text-center font-semibold dark:text-black">Login</h1>
                <LoginForm />
            </div>
        </div>
    )
}

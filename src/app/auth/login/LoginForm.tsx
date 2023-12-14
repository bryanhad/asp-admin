"use client"

import MyInput from "@/ui/form/MyInput"
import { Button } from "@/ui/shadcn/button"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function LoginForm() {
    const searchParams = useSearchParams()
    const errorMessage = searchParams.get("error")

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        await signIn("credentials", {
            email,
            password,
            redirect: true,
            callbackUrl: "/",
        })
    }

    useEffect(() => {
        if (errorMessage) {
            if (errorMessage === "CredentialsSignin") {
                setError(
                    "Invalid email or password. Please check your credentials and try again.",
                )
            } else {
                setError("Something went wrong :(")
            }
        }
    }, [errorMessage])

    return (
        <form onSubmit={handleSubmit} className="mx-auto flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-slate-500">
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    placeholder="bambang@gmail.com"
                    className="flex h-14 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-600 ring-offset-0  placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                />
            </div>
            <div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-slate-500">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        placeholder="rahasia dong.."
                        className="flex h-14 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-600 ring-offset-0  placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                    />
                </div>
                <div className="mt-4 h-8">
                    {error && (
                        <p className="text-center text-sm text-error">
                            {error}
                        </p>
                    )}
                </div>
            </div>
            <button
                type="submit"
                className="rounded-lg bg-neutral-800 py-4 text-white"
            >
                LOGIN
            </button>
        </form>
    )
}

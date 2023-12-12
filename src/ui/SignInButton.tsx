"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "./shadcn/button"

export default function SignInButton() {
    const { data: session } = useSession()

    if (session && session.user) {
        return <Button className="max-w-max" onClick={() => signOut()}>Logout</Button>
    }

    return <Button className="max-w-max" onClick={() => signIn()}>Sign In</Button>
}

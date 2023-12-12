"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "./shadcn/button"
import { Link } from "./Link"

export default function SignInButton() {
    const { data: session } = useSession()

    if (session && session.user) {
        return (
            <div>
                <p>{JSON.stringify(session.user)}</p>
                <Button onClick={() => signOut()}>Logout</Button>
            </div>
        )
    }

    return (
        <div>
            <Button onClick={() => signIn()}>Sign In</Button>
        </div>
    )
}

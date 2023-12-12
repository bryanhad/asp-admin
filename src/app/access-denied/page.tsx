import { Link } from "@/ui/Link"
import { getServerSession } from "next-auth"
import React from "react"

export default async function page() {
    const session = await getServerSession()

    if (!session) {
        return (
            <div>
                <p className="text-5xl">BRUH</p>
                <p>What are you doing.. you are not even logged in..</p>
                <Link variant="default" href="/">
                    Go to Home Page
                </Link>
            </div>
        )
    }
    return (
        <div>
            <p className="text-5xl">ACCESS DENIED</p>
            <p>
                you are logged in, but u are not authorized to view this page.
            </p>
            <p>You are a : {session.user.role === 'ADMIN'}</p>
            <Link variant="default" href="/">
                Go to Home Page
            </Link>
        </div>
    )
}

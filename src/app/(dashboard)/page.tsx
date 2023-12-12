import DashboardCards from "@/ui/dashboard/DashboardCards"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import UserClient from "@/ui/UserClient"
import SignInButton from "@/ui/SignInButton"

export default async function DashboardPage() {
    const session = await getServerSession(authOptions) // MAKE SURE TO AWAIT!
    // we need to constantly pass in the auth Options!
    // cuz in a case you changed your session or jwt functionality, the same method needs to catch up with the updates!
    // this makes sure that things will be consistant.
    return (
        <>
            <SignInButton />
            <DashboardCards />
            <h1 className="font-bold">SERVER SESSION</h1>
            <pre>{JSON.stringify(session)}</pre>
            <h1 className="font-bold">CLIENT SESSION</h1>
            <UserClient />
        </>
    )
}

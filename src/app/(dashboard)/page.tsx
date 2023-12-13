import DashboardCards from "@/ui/dashboard/DashboardCards"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
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
        </>
    )
}

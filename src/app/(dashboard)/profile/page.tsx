import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import UpdateProfileForm from "@/ui/form/profileForm/UpdateProfileForm"
import { getServerSession } from "next-auth"
import ProfileInfo from "./ProfileInfo"

export default async function ProfilePage() {
    const session = await getServerSession(authOptions)
    if (!session) return <p>bruh</p>
    return (
        <div>
            <UpdateProfileForm id={session.user.id} user={session.user} />
            <ProfileInfo id={session.user.id} />
        </div>
    )
}

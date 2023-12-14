import { authOptions } from "@/app/api/auth/[...nextauth]/authOption"
import UpdateProfileForm from "@/ui/form/profileForm/UpdateProfileForm"
import { getServerSession } from "next-auth"
import ProfileInfo from "./ProfileInfo"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Profile',
}

export default async function ProfilePage() {
    const session = await getServerSession(authOptions)
    if (!session) return <p>bruh</p>
    return (
        <div className="flex flex-col gap-4">
            <UpdateProfileForm id={session.user.id} user={session.user} />
            <ProfileInfo id={session.user.id} />
        </div>
    )
}

import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import AddArticleForm from "@/ui/form/articleForm/AddArticleForm"
import { getServerSession } from "next-auth"

export default async function AddArticlePage() {
    const session = await getServerSession(authOptions)
    if (!session) return
    return (
        <div>
            <AddArticleForm userId={session.user.id}/>
        </div>
    )
}

import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import TextEditor from "@/ui/form/articleForm/AddArticleForm"
import AddArticleFormm from "@/ui/form/articleForm/AddArticleFormm"
import { getServerSession } from "next-auth"

export default async function AddArticlePage() {
    const session = await getServerSession(authOptions)
    if (!session) return
    return (
        <div>
            <AddArticleFormm userId={session.user.id}/>
            {/* <TextEditor></TextEditor> */}
        </div>
    )
}

import { createArticle } from "@/actions/articles.action"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import AddArticleForm from "@/ui/form/articleForm/ArticleForm"
import { getServerSession } from "next-auth"

export default async function AddArticlePage() {
    const session = await getServerSession(authOptions)
    if (!session) return
    return (
        <div>
            <AddArticleForm
                serverAction={createArticle}
                buttonText="Publish Article"
                id={session.user.id} // user's id, cuz we need to know whose the author
            />
        </div>
    )
}

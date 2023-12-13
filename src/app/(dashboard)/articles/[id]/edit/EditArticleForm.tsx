import { editArticle } from "@/actions/articles.action"
import { fetchArticleData } from "@/lib/data"
import ArticleForm from "@/ui/form/articleForm/ArticleForm"
import { notFound } from "next/navigation"
import React from "react"

export default async function EditArticleForm({ id }: { id: string }) {
    const articleData = await fetchArticleData(id)

    if (!articleData) {
        //if articleId is not found, go too not-found page
        notFound()
    }
    return (
        <ArticleForm
            serverAction={editArticle}
            buttonText="Save Edit"
            data={articleData}
            id={id} // the form's id, cuz we need to know which form to edit.
        />
    )
}

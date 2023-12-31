"use client"
import { useState } from "react"
import DeleteConfirmation from "../DeleteConfirmation"
import { deleteArticle } from "@/actions/articles.action"
import { Button } from "@/ui/shadcn/button"
import { Link } from "@/ui/Link"
import { Role } from "@prisma/client"

export default function ArticlesActionCell({
    articleInfo,
}: {
    articleInfo: { id: string; authorId: string }
}) {
    const [showConfirmDelete, setShowConfirmDelete] = useState(false)

    if (showConfirmDelete)
        return (
            <DeleteConfirmation
                id={articleInfo.id}
                serverAction={deleteArticle}
                setShowDeleteConfirmation={setShowConfirmDelete}
            />
        )

    return (
        <div className="flex justify-end gap-3">
            <Link
                variant="edit"
                size="sm"
                href={`/articles/${articleInfo.id}/edit`}
            >
                Edit
            </Link>
            <Button
                variant="destructive"
                size="sm"
                onClick={() => setShowConfirmDelete(true)}
            >
                Delete
            </Button>
        </div>
    )
}

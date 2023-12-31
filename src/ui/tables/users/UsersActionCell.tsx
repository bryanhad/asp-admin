"use client"
import { useState } from "react"
import DeleteConfirmation from "../DeleteConfirmation"
import { deleteUser } from "@/actions/users.action"
import { Button } from "@/ui/shadcn/button"
import { Link } from "@/ui/Link"
import { useSession } from "next-auth/react"

export default function UsersActionCell({ userId }: { userId: string }) {
    const { data: session } = useSession()
    const [showConfirmDelete, setShowConfirmDelete] = useState(false)

    if (showConfirmDelete)
        return (
            <DeleteConfirmation
                id={userId}
                serverAction={deleteUser}
                setShowDeleteConfirmation={setShowConfirmDelete}
            />
        )

    return (
        <div className="flex justify-end gap-3">
            <Link variant="edit" size="sm" href={`/users/${userId}/edit`}>
                Edit
            </Link>
            {session && session.user.id !== userId && (
                <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => setShowConfirmDelete(true)}
                >
                    Delete
                </Button>
            )}
        </div>
    )
}

"use client"
import { useState } from "react"
import DeleteConfirmation from "../DeleteConfirmation"
import { deleteMember } from "@/actions/members.action"
import { Button } from "@/ui/shadcn/button"
import { Link } from "@/ui/Link"

export default function MembersActionCell({ memberId }: { memberId: string }) {
    const [showConfirmDelete, setShowConfirmDelete] = useState(false)

    if (showConfirmDelete)
        return (
            <DeleteConfirmation
                id={memberId}
                serverAction={deleteMember}
                setShowDeleteConfirmation={setShowConfirmDelete}
            />
        )

    return (
        <div className="flex justify-end gap-3">
            <Link variant="edit" size="sm" href={`/members/${memberId}/edit`}>
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

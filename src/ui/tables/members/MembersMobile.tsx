"use client"

import { Member } from "@prisma/client"
import TableButton from "../TableButton"
import { useState } from "react"
import DeleteConfirmation from "../DeleteConfirmation"
import { editPosition } from "@/actions/positions.action"

export default function MembersMobile({ member }: { member: Member }) {
    const [showConfirmDelete, setShowConfirmDelete] = useState(false)

    return (
        <>
            <div
                key={member.id}
                className="flex flex-col gap-4 rounded-lg bg-bg-soft p-4  dark:bg-slate-700"
            >
                <div className="flex justify-between">
                    <p>{member.name}</p>
                </div>
                {showConfirmDelete ? (
                    <DeleteConfirmation
                        id={member.id}
                        serverAction={editPosition}
                        setShowDeleteConfirmation={setShowConfirmDelete}
                    />
                ) : (
                    <div className="flex gap-4">
                        <TableButton
                            isLink
                            href={`/members/${member.id}/edit`}
                            buttonType="edit"
                        >
                            Edit
                        </TableButton>
                        <TableButton
                            onClick={() => setShowConfirmDelete(true)}
                            buttonType="delete"
                        >
                            Delete
                        </TableButton>
                    </div>
                )}
            </div>
        </>
    )
}
"use client"

import { Member } from "@prisma/client"
import TableButton from "../TableButton"
import { useState } from "react"
import DeleteConfirmation from "../DeleteConfirmation"
import { deleteMember } from "@/actions/members.action"
import Image from "next/image"

export default function MembersMobile({ member }: { member: Member }) {
    const [showConfirmDelete, setShowConfirmDelete] = useState(false)

    return (
        <>
            <div
                key={member.id}
                className="flex flex-col gap-4 rounded-lg bg-bg-soft p-4  dark:bg-slate-700"
            >
                <div className="flex justify-between">
                    <div className="flex gap-4">
                        <Image
                            className="rounded-full object-cover"
                            src={member.picture || "/noavatar.png"}
                            alt=""
                            width="45"
                            height="45"
                        />
                        <div className="flex flex-col">
                            <p>{member.name}</p>
                            <p className="text-text-soft text-sm dark:text-text-soft-dark">
                                {member.email}
                            </p>
                        </div>
                    </div>
                </div>
                {showConfirmDelete ? (
                    <DeleteConfirmation
                        id={member.id}
                        serverAction={deleteMember}
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

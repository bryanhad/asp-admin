"use client"

import { useState } from "react"
import { Member } from "@prisma/client"
import TableButton from "../TableButton"
import DeleteConfirmation from "../DeleteConfirmation"
import Image from "next/image"
import { deleteMember } from "@/actions/members.action"

export default function MembersTableRow({ member }: { member: Member }) {
    const [showConfirmDelete, setShowConfirmDelete] = useState(false)

    return (
        <>
            <td className="p-3">
                <div className="flex items-center gap-4">
                    <div className="grid h-[45px] w-[45px] place-content-center overflow-hidden rounded-full bg-active dark:bg-active-dark">
                        <Image
                            className="rounded-full object-cover"
                            src={member.picture || "/noavatar.png"}
                            alt={`${member.name}'s Profile Picture`}
                            width={38}
                            height={38}
                        />
                    </div>
                    <p>{member.name}</p>
                </div>
            </td>
            <td className="p-3">{member.email}</td>
            <td className="p-3">
                {member.createdAt
                    .toLocaleDateString("id-ID")
                    .split("/")
                    .join(" / ")}
            </td>
            <td className="p-3">
                {showConfirmDelete ? (
                    <DeleteConfirmation
                        id={member.id}
                        serverAction={deleteMember}
                        setShowDeleteConfirmation={setShowConfirmDelete}
                    />
                ) : (
                    <div className="flex justify-end gap-3">
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
            </td>
        </>
    )
}

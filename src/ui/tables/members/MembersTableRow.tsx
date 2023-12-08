"use client"

import { useState } from "react"
import { Member } from "@prisma/client"
import Input from "@/ui/form/Input"
import TableButton from "../TableButton"
import DeleteConfirmation from "../DeleteConfirmation"
import ErrorText from "@/ui/form/ErrorText"
import useFormLogic from "@/hooks/useFormLogic"
import { editPosition } from "@/actions/positions.action"

export default function MembersTableRow({ member }: { member: Member }) {
    const [isEditing, setIsEditing] = useState(false)

    return (
        <>
            {isEditing ? (
                <IsEditingMember member={member} setIsEditing={setIsEditing} />
            ) : (
                <IsNotEditingMember
                    member={member}
                    setIsEditing={setIsEditing}
                />
            )}
        </>
    )
}

function IsEditingMember({
    member,
    setIsEditing,
}: {
    member: Member
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const [state, dispatch] = useFormLogic({
        id: member.id,
        serverAction: editPosition,
        onSuccess: () => setIsEditing(false),
    })

    return (
        <td colSpan={3}>
            <form action={dispatch} className="flex items-center gap-3 p-2">
                <Input
                    isForTable
                    id="member"
                    name="name"
                    className="flex-1"
                    defaultValue={member.name}
                />
                <TableButton
                    type="button"
                    onClick={() => setIsEditing(false)}
                    buttonType="cancel"
                >
                    Cancel
                </TableButton>
                <TableButton type="submit" buttonType="save">
                    Save
                </TableButton>
            </form>
            {!state.success && state.message && (
                <ErrorText dep={state} str={state.message} />
            )}
        </td>
    )
}

function IsNotEditingMember({
    member,
    setIsEditing,
}: {
    member: Member
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const [showConfirmDelete, setShowConfirmDelete] = useState(false)

    return (
        <>
            <td className="p-3">{member.name}</td>
            <td className="p-3">
                {showConfirmDelete ? (
                    <DeleteConfirmation
                        id={member.id}
                        serverAction={editPosition}
                        setShowDeleteConfirmation={setShowConfirmDelete}
                    />
                ) : (
                    <div className="flex justify-end gap-3">
                        <TableButton
                            onClick={() => setIsEditing((prev) => !prev)}
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

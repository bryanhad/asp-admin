"use client"

import { Member } from "@prisma/client"
import TableButton from "../TableButton"
import { useState } from "react"
import Input from "@/ui/form/Input"
import DeleteConfirmation from "../DeleteConfirmation"
import useFormLogic from "@/hooks/useFormLogic"
import ErrorText from "@/ui/form/ErrorText"
import { editPosition } from "@/actions/positions.action"

export default function MembersMobile({ member }: { member: Member }) {
    const [isEditing, setIsEditing] = useState(false)

    return (
        <>
            <div
                key={member.id}
                className="flex flex-col gap-4 rounded-lg bg-bg-soft p-4  dark:bg-slate-700"
            >
                {isEditing ? (
                    <IsEditingMember
                        member={member}
                        setIsEditing={setIsEditing}
                    />
                ) : (
                    <IsNotEditingMember
                        member={member}
                        setIsEditing={setIsEditing}
                    />
                )}
            </div>
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
        <>
            <div className="flex flex-col">
                <form action={dispatch} className="flex-1 ">
                    <Input
                        defaultValue={member.name}
                        className="w-full"
                        id="member"
                        name="name"
                        isForTable
                    />
                </form>
                {!state.success && state.message && (
                    <ErrorText dep={state} str={state.message} />
                )}
            </div>
            <div className="flex gap-4">
                <TableButton
                    onClick={() => setIsEditing(false)}
                    buttonType="cancel"
                >
                    Cancel
                </TableButton>
                <TableButton
                    onClick={() => setIsEditing((prev) => !prev)}
                    buttonType="save"
                >
                    Save
                </TableButton>
            </div>
        </>
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
        </>
    )
}

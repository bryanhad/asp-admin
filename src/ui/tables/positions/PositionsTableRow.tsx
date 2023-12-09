"use client"

import { useState } from "react"
import { Position } from "@prisma/client"
import Input from "@/ui/form/Input"
import TableButton from "../TableButton"
import DeleteConfirmation from "../DeleteConfirmation"
import { deletePosition, editPosition } from "@/actions/positions.action"
import ErrorText from "@/ui/form/ErrorText"
import useFormLogic from "@/hooks/useFormLogic"

export type FetchedPositionType = {
    _count: {
        members: number
    }
} & Position

export default function PositionsTableRow({
    position,
}: {
    position: FetchedPositionType
}) {
    const [isEditing, setIsEditing] = useState(false)

    return (
        <>
            {isEditing ? (
                <IsEditingPosition
                    position={position}
                    setIsEditing={setIsEditing}
                />
            ) : (
                <IsNotEditingPosition
                    position={position}
                    setIsEditing={setIsEditing}
                />
            )}
        </>
    )
}

function IsEditingPosition({
    position,
    setIsEditing,
}: {
    position: Position
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const [state, dispatch] = useFormLogic({
        id: position.id,
        serverAction: editPosition,
        onSuccess: () => setIsEditing(false),
    })

    return (
        <td colSpan={3}>
            <form action={dispatch} className="flex items-center gap-3 p-2">
                <Input
                    isForTable
                    id="position"
                    name="name"
                    className="flex-1"
                    defaultValue={position.name}
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

function IsNotEditingPosition({
    position,
    setIsEditing,
}: {
    position: FetchedPositionType
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const [showConfirmDelete, setShowConfirmDelete] = useState(false)

    return (
        <>
            <td className="p-3">{position.name}</td>
            <td className="p-3">{position._count.members}</td>
            <td className="p-3">
                {showConfirmDelete ? (
                    <DeleteConfirmation
                        id={position.id}
                        serverAction={deletePosition}
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

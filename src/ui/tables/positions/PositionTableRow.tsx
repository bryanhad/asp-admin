"use client"
import { useState } from "react"
import { Position } from "@prisma/client"
import Input from "@/ui/form/Input"
import TableButton from "../TableButton"
import DeleteConfirmation from "../DeleteConfirmation"

export type FetchedPositionType = {
    _count: {
        members: number
    }
} & Position

export default function PositionTableRow({
    position,
}: {
    position: FetchedPositionType
}) {
    const [isEditing, setIsEditing] = useState(false)
    const [error, setError] = useState("")

    // const updatePositionWithId = editPosition.bind(null, position.id)

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
    return (
        <td colSpan={3}>
            <form className="flex items-center gap-3 p-2">
                <Input
                    isForTable
                    id="position"
                    name="position"
                    className="flex-1"
                    defaultValue={position.name}
                />
                <TableButton
                    onClick={() => setIsEditing(false)}
                    buttonType="cancel"
                >
                    Cancel
                </TableButton>
                <TableButton
                    type="submit"
                    onClick={() => setIsEditing((prev) => !prev)}
                    buttonType="save"
                >
                    Save
                </TableButton>
            </form>
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

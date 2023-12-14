"use client"

import { useState } from "react"
import { Position, Role } from "@prisma/client"
import { Input } from "@/ui/shadcn/input"
import DeleteConfirmation from "../DeleteConfirmation"
import { deletePosition, editPosition } from "@/actions/positions.action"
import ErrorText from "@/ui/form/ErrorText"
import useFormLogic from "@/hooks/useFormLogic"
import { Button } from "@/ui/shadcn/button"
import { TableCell } from "@/ui/shadcn/table"

export type FetchedPositionType = {
    _count: {
        members: number
    }
} & Position

export default function PositionsTableCells({
    position,
    userRole,
}: {
    position: FetchedPositionType
    userRole: Role
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
                    userRole={userRole}
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
        <TableCell colSpan={3}>
            <form
                action={dispatch}
                className="flex flex-col items-center gap-3 sm:flex-row"
            >
                <div className="flex w-full items-center gap-3">
                    <Input
                        id="position"
                        name="name"
                        className="flex-1"
                        defaultValue={position.name}
                    />
                    <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setIsEditing(false)}
                    >
                        Cancel
                    </Button>
                </div>
                <Button
                    className="max-sm:w-full"
                    variant="default"
                    size="sm"
                    type="submit"
                >
                    Save
                </Button>
            </form>
            {!state.success && state.message && (
                <ErrorText dep={state} str={state.message} />
            )}
        </TableCell>
    )
}

function IsNotEditingPosition({
    position,
    setIsEditing,
    userRole,
}: {
    position: FetchedPositionType
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
    userRole: Role
}) {
    const [showConfirmDelete, setShowConfirmDelete] = useState(false)

    return (
        <>
            <TableCell className="font-medium">{position.name}</TableCell>
            <TableCell>{position._count.members}</TableCell>
            {userRole === "ADMIN" && (
                <TableCell>
                    {showConfirmDelete ? (
                        <DeleteConfirmation
                            id={position.id}
                            serverAction={deletePosition}
                            setShowDeleteConfirmation={setShowConfirmDelete}
                        />
                    ) : (
                        <div className="flex flex-col justify-end gap-3 sm:flex-row">
                            <Button
                                size="sm"
                                onClick={() => setIsEditing((prev) => !prev)}
                                variant="edit"
                            >
                                Edit
                            </Button>
                            <Button
                                size="sm"
                                onClick={() => setShowConfirmDelete(true)}
                                variant="destructive"
                            >
                                Delete
                            </Button>
                        </div>
                    )}
                </TableCell>
            )}
        </>
    )
}

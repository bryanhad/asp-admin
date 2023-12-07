"use client"

import { Position } from "@prisma/client"
import TableButton from "../TableButton"
import { FetchedPositionType } from "./PositionTableRow"
import { useState } from "react"
import Input from "@/ui/form/Input"
import DeleteConfirmation from "../DeleteConfirmation"

type PositionsTableMobileProps = {
    position: FetchedPositionType
}

export default function PositionsMobileView({
    position,
}: PositionsTableMobileProps) {
    const [isEditing, setIsEditing] = useState(false)

    return (
        <>
            <div
                key={position.id}
                className="flex flex-col gap-4 rounded-lg bg-bg-soft p-4  dark:bg-slate-700"
            >
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
            </div>
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
        <>
            <div className="flex justify-between">
                <form action="" className="flex-1 ">
                    <Input
                        defaultValue={position.name}
                        className="w-full"
                        id="position"
                        name="position"
                        isForTable
                    />
                </form>
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
            <div className="flex justify-between">
                <p>{position.name}</p>
                <p>{position._count.members}</p>
            </div>
            {showConfirmDelete ? (
                <DeleteConfirmation setShowDeleteConfirmation={setShowConfirmDelete} />
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

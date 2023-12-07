"use client"
import { useState } from "react"
import { Position } from "@prisma/client"
import Input from "@/ui/form/Input"
import { ButtonIcon } from "@/ui/form/ButtonIcon"
import TableButton from "../TableButton"

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

    const isEditingRow = (
        <td colSpan={3}>
            <form className="flex items-center gap-3 p-1">
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
            {error && <p className="text-error p-2">{error}</p>}
        </td>
    )

    const isNotEditingRow = (
        <>
            <td className="p-2">{position.name}</td>
            <td className="p-2">{position._count.members}</td>
            <td className="p-2">
                <div className="flex justify-end gap-3">
                    <TableButton
                        onClick={() => setIsEditing((prev) => !prev)}
                        buttonType="edit"
                    >
                        Edit
                    </TableButton>
                    <TableButton buttonType="delete">Delete</TableButton>
                </div>
            </td>
        </>
    )
    return <>{isEditing ? isEditingRow : isNotEditingRow}</>
}

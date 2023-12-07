"use client"
import { useState } from "react"
import { Position } from "@prisma/client"
import Input from "@/ui/form/Input"
import { ButtonIcon } from "@/ui/form/ButtonIcon"

type PositionType = {
    _count: {
        members: number
    }
} & Position

export default function PositionTableRow({
    position,
}: {
    position: PositionType
}) {
    const [isEditing, setIsEditing] = useState(false)
    const [error, setError] = useState("")

    // const updatePositionWithId = editPosition.bind(null, position.id)

    const isEditingRow = (
        <td colSpan={3}>
            <form className="flex items-center gap-3 p-1">
                <Input
                    id="position"
                    name="position"
                    className="flex-1"
                    defaultValue={position.name}
                />
                <ButtonIcon icon="confirm" type="submit" />
                <ButtonIcon
                    onClick={() => setIsEditing(false)}
                    icon="cancel"
                    type="button"
                />
            </form>
            {error && <p className="text-error p-2">{error}</p>}
        </td>
    )

    const isNotEditingRow = (
        <>
            <td className="px-6 py-1">{position.name}</td>
            <td className="px-6 py-1">{position._count.members}</td>
            <td className="py-1 ">
                <div className="flex justify-end gap-3">
                    <ButtonIcon
                        onClick={() => setIsEditing((prev) => !prev)}
                        icon="edit"
                    />
                    {/* <DeletePositionButton position={position} /> */}
                </div>
            </td>
        </>
    )
    return <>{isEditing ? isEditingRow : isNotEditingRow}</>
}

"use client"
import React, { useState } from "react"
import { FetchedPositionType } from "./PositionTableRow"
import TableButton from "../TableButton"
import { deletePosition, editPosition } from "@/actions/positions.action"
import DeleteConfirmation from "../DeleteConfirmation"
import useFormLogic from "@/hooks/useFormLogic"
import Input from "@/ui/form/Input"
import ErrorText from "@/ui/form/ErrorText"
import { Position } from "@prisma/client"

// export default function PositionsMobileView({
//     position,
// }: PositionsTableMobileProps) {
//     const [isEditing, setIsEditing] = useState(false)

//     return (
//         <>
//             <div
//                 key={position.id}
//                 className="flex flex-col gap-4 rounded-lg bg-bg-soft p-4  dark:bg-slate-700"
//             >

//                     <IsNotEditingPosition
//                         position={position}
//                         setIsEditing={setIsEditing}
//                     />
//             </div>
//         </>
//     )
// }

export default function IsNotEditingPosition({
    position,
}: {
    position: FetchedPositionType
}) {
    const [isEditing, setIsEditing] = useState(false)

    const [showConfirmDelete, setShowConfirmDelete] = useState(false)

    return (
        <>
            {showConfirmDelete ? (
                <>
                    <div className="flex justify-between">
                        <p>{position.name}</p>
                        <p>{position._count.members}</p>
                    </div>
                    <DeleteConfirmation
                        setShowDeleteConfirmation={setShowConfirmDelete}
                        id={position.id}
                        serverAction={deletePosition}
                    />
                </>
            ) : isEditing ? (
                <EditingBROK position={position} setIsEditing={setIsEditing} />
            ) : (
                <>
                    <div className="flex justify-between">
                        <p>{position.name}</p>
                        <p>{position._count.members}</p>
                    </div>
                    <div className="flex gap-4">
                        <TableButton
                            onClick={() => setIsEditing(true)}
                            buttonType="edit"
                            type="button"
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
                </>
            )}
        </>
    )
}

function EditingBROK({
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
        <>
            <div className="flex flex-col">
                <form action={dispatch} className="flex-1 ">
                    <Input
                        defaultValue={position.name}
                        className="w-full"
                        id="position"
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

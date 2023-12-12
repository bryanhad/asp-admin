"use client"

import ErrorText from "../form/ErrorText"
import { useFormState } from "react-dom"
import { toast } from "react-toastify"
import { useEffect } from "react"
import { Button } from "../shadcn/button"

type DeleteConfirmationProps = {
    id: string
    serverAction: any
    setShowDeleteConfirmation: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DeleteConfirmation({
    id,
    serverAction,
    setShowDeleteConfirmation,
}: DeleteConfirmationProps) {
    const serverActionWithId = serverAction.bind(null, id)
    // TODO: SOMETIMES THE STATE IS NOT UPDATED AFTER SUCCESS
    const [state, formAction] = useFormState(serverActionWithId, {
        success: false,
        message: "",
    })

    useEffect(() => {
        if (state.success) {
            toast.success(state.message) //notification
            setShowDeleteConfirmation(false)
        }
    }, [state.success, state.message, setShowDeleteConfirmation])

    return (
        <div>
            <p className="mb-2 italic text-slate-400 max-sm:text-center sm:text-end px-2">
                Are you sure?
            </p>
            <form
                action={formAction}
                className="flex flex-col sm:flex-row-reverse gap-4 "
            >
                <Button
                    size="sm"
                    variant="outline"
                    type="button"
                    onClick={() => {
                        setShowDeleteConfirmation(false)
                    }}
                >
                    Cancel
                </Button>
                <Button
                    size="sm"
                    variant="destructive"
                    type="submit"
                >
                    Yes
                </Button>
            </form>
            {!state.success && state.message && (
                <ErrorText
                    className="text-center sm:text-start md:text-end"
                    dep={state}
                    str={state.message}
                />
            )}
        </div>
    )
}

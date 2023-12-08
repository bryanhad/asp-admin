import TableButton from "./TableButton"
import ErrorText from "../form/ErrorText"
import { useFormState } from "react-dom"
import { toast } from "react-toastify"
import { useEffect } from "react"

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
    const [state, dispatch] = useFormState(serverActionWithId, {
        success: false,
        message: "",
    })

    useEffect(() => {
        if (state.success) {
            toast.success(state.message)
            setShowDeleteConfirmation(false)
        }
    }, [state.success, state.message, setShowDeleteConfirmation])

    return (
        <div>
            <p className="mb-2 italic text-slate-400 md:text-end">
                Are you sure?
            </p>
            <form
                action={dispatch}
                className="flex flex-wrap gap-4 max-sm:flex-col sm:max-w-max sm:flex-row-reverse md:ml-auto"
            >
                <TableButton
                    className="max-sm:flex-[1]"
                    type="button"
                    onClick={() => {
                        setShowDeleteConfirmation(false)
                    }}
                    buttonType="cancel"
                >
                    Cancel
                </TableButton>
                <TableButton
                    className="max-sm:flex-[1]"
                    buttonType="save"
                    type="submit"
                >
                    Yes
                </TableButton>
            </form>
            {!state.success && state.message && (
                <ErrorText dep={state} str={state.message} />
            )}
        </div>
    )
}

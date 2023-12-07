import { serverAction } from "../../../types"
import TableButton from "./TableButton"

type DeleteConfirmationProps = {
    setShowDeleteConfirmation: React.Dispatch<React.SetStateAction<boolean>>
} & serverAction

export default function DeleteConfirmation({
    serverAction,
    setShowDeleteConfirmation,
}: DeleteConfirmationProps) {
    return (
        <div>
            <p className="text-slate-400 italic md:text-end mb-2">Are you sure?</p>
                <form action={serverAction} className="flex max-sm:flex-col flex-wrap gap-4 sm:max-w-max md:ml-auto">
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
                    className="max-sm:flex-[1]" buttonType="delete" type="submit">
                        Yes, Delete Permanently
                    </TableButton>
                </form>
        </div>
    )
}

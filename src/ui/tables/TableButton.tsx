import clsx from "clsx"

type TableButtonProps = {
    buttonType: "edit" | "delete" | "view" | "save" | "cancel"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function TableButton({
    buttonType,
    ...props
}: TableButtonProps) {
    const className = clsx(
        "rounded-md px-6 py-1 dark:text-text-dark",
        {
            "text-white": buttonType !== 'cancel',
            "text-gray-500": buttonType === 'cancel',
            "dark:bg-edit-dark bg-edit": buttonType === "edit",
            "dark:bg-delete-dark bg-delete": buttonType === "delete",
            "dark:bg-view-dark bg-view": buttonType === "view",
            "dark:bg-success-dark bg-success": buttonType === "save",
            "dark:bg-cancel-dark bg-cancel ": buttonType === "cancel",
        },
    )

    return (
        <button {...props} className={className}>
            {props.children}
        </button>
    )
}

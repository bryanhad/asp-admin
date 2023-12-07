import clsx from "clsx"
import Label from "./Label"

type InputType = {
    isForTable?: boolean
    name: string
    id: string
    label?: string
    className?: string
    extra?: React.ReactNode
} & React.InputHTMLAttributes<HTMLInputElement>

export default function Input({
    isForTable,
    label,
    name,
    id,
    className,
    extra,
    ...props
}: InputType) {
    const customClassName = clsx(
        "rounded-lg border bg-bg-soft focus:border-2 focus:border-focus dark:border-active-dark dark:bg-bg-soft-dark focus:dark:border-focus-dark",
        {
            "p-2": isForTable === true,
            "p-4": isForTable === undefined,
        },
    )

    if (!label)
        return (
            <input
                size={1}
                className={`${customClassName} ${className}`}
                {...props}
                name={name}
                id={id}
            />
        )

    return (
        <div className="flex flex-col gap-2">
            <Label htmlFor={id}>
                <>
                    {label}
                    {extra}
                </>
            </Label>
            <input
                size={1}
                className={`${customClassName} ${className}`}
                {...props}
                name={name}
                id={id}
            />
        </div>
    )
}

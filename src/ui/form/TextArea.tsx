import clsx from "clsx"
import Label from "./Label"

type TextAreaType = {
    containerClassName?: string
    ref?: React.LegacyRef<HTMLTextAreaElement>
    isForTable?: boolean
    name: string
    id: string
    label?: string
    className?: string
    extra?: React.ReactNode
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

export default function TextArea({
    containerClassName,
    isForTable,
    label,
    name,
    id,
    className,
    extra,
    ...props
}: TextAreaType) {
    const customClassName = clsx(
        "rounded-lg border border-focus bg-white focus:outline focus:outline-[2px] focus:outline-offset-4 focus:outline-focus dark:border-focus-dark dark:bg-bg-soft-dark dark:focus:outline-focus-dark",
        {
            "p-2": isForTable === true,
            "p-4": isForTable === undefined,
        },
    )

    if (!label)
        return (
            <textarea
                className={`${customClassName} ${className}`}
                {...props}
                name={name}
                id={id}
            />
        )

    return (
        <div className={`flex flex-col gap-2 ${containerClassName}`}>
            <Label htmlFor={id}>
                <>
                    {label}
                    {extra}
                </>
            </Label>
            <textarea
                className={`${customClassName} ${className}`}
                {...props}
                name={name}
                id={id}
            />
        </div>
    )
}

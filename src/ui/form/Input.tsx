import clsx from "clsx"
import Label from "./Label"

type InputType = {
    containerClassName?:string
    ref?: React.LegacyRef<HTMLInputElement>
    isForTable?: boolean
    name: string
    id: string
    label?: string
    className?: string
    extra?: React.ReactNode
} & React.InputHTMLAttributes<HTMLInputElement>

export default function Input({
    containerClassName,
    isForTable,
    label,
    name,
    id,
    className,
    extra,
    ...props
}: InputType) {
    const customClassName = clsx(
        "rounded-lg border border-focus bg-white focus:outline focus:outline-[2px] focus:outline-offset-4 focus:outline-focus dark:border-focus-dark dark:bg-bg-soft-dark dark:focus:outline-focus-dark",
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
        <div className={`flex flex-col gap-2 ${containerClassName}`}>
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

import Label from "./Label"

type InputType = {
    name: string
    id: string
    label?: string
    className?: string
    extra?: React.ReactNode
} & React.InputHTMLAttributes<HTMLInputElement>

export default function Input({
    label,
    name,
    id,
    className,
    extra,
    ...props
}: InputType) {
    if (!label)
        return (
            <input
                size={1}
                className={`rounded-lg border bg-bg-soft focus:border-2 focus:border-focus dark:border-active-dark dark:bg-bg-soft-dark focus:dark:border-focus-dark ${className}`}
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
                className={`rounded-lg border bg-bg-soft focus:border-2 focus:border-focus dark:border-active-dark dark:bg-bg-soft-dark focus:dark:border-focus-dark ${className}`}
                {...props}
                name={name}
                id={id}
            />
        </div>
    )
}
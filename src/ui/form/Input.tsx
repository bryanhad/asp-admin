import clsx from "clsx"
import Label from "./Label"

type InputType = {
    options?: { id: string; name: string }[]
    containerClassName?: string
    ref?: React.LegacyRef<HTMLInputElement>
    isForTable?: boolean
    isSelectInput?: boolean
    name: string
    id: string
    label?: string
    className?: string
    extra?: React.ReactNode
} & React.InputHTMLAttributes<HTMLInputElement>

export default function Input({
    options,
    isSelectInput,
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
            "p-0 pr-5": isSelectInput === true,
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

    if (isSelectInput)
        return (
            <div className={`flex flex-col gap-2 ${containerClassName} `}>
                <Label htmlFor={id}>
                    <>
                        {label}
                        {extra}
                    </>
                </Label>
                <div
                    className={`${customClassName} focus-within:outline focus-within:outline-[2px] focus-within:outline-offset-4 focus-within:outline-focus dark:focus-within:outline-focus-dark`}
                >
                    <select
                        defaultValue={props.defaultValue}
                        name={name}
                        id={id}
                        className="w-full cursor-pointer bg-transparent focus:outline-none"
                    >
                        <option value="" className="hidden">
                            {props.placeholder}
                        </option>
                        {options?.map((option) => (
                            <option key={option.id} value={option.id}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
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

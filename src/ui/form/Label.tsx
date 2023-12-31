type LabelProps = {
    htmlFor: string
    children: React.ReactNode
} & React.LabelHTMLAttributes<LabelProps>

export default function Label({ htmlFor, children, ...props }: LabelProps) {
    return (
        <label
            htmlFor={htmlFor}
            className={`text-label-color cursor-pointer ${props.className}`}
        >
            {children}
        </label>
    )
}

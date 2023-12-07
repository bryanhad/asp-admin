type LabelProps = {
    htmlFor: string
    children: React.ReactNode
} & React.LabelHTMLAttributes<LabelProps>

export default function Label({ htmlFor, children, ...props }: LabelProps) {
    return (
        <label
            htmlFor={htmlFor}
            className={`text-label-color ${props.className}`}
        >
            {children}
        </label>
    )
}

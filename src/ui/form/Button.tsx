import Link from "next/link"
import clsx from "clsx"

type MyButtonTypes = {
    buttonType: "add"
    isLink?: boolean
    href?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ buttonType, isLink, href, ...props }: MyButtonTypes) {
    const customStyle = clsx({
        "bg-success dark:bg-success-dark text-white rounded-lg px-10 py-4":
            buttonType === "add",
    })

    if (isLink && href) {
        return (
            <Link className={` ${customStyle} ${props.className}`} href={href}>
                {props.children}
            </Link>
        )
    }

    return (
        <button {...props} className={` ${customStyle} ${props.className}`}>
            {props.children}
        </button>
    )
}

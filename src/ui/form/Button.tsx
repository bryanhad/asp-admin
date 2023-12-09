import Link from "next/link"
import clsx from "clsx"

type MyButtonTypes = {
    buttonType: "add" | 'change' | 'cancel'
    isLink?: boolean
    href?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ buttonType, isLink, href, ...props }: MyButtonTypes) {
    const customStyle = clsx({
        "bg-success dark:bg-success-dark text-white rounded-lg px-10 py-4":
            buttonType === "add",
        "bg-edit dark:bg-edit-dark text-white rounded-full px-16 py-3":
            buttonType === "change",
        "bg-active dark:bg-active-dark text-white rounded-full px-16 py-3":
            buttonType === "cancel",

    })

    if (isLink && href) {
        return (
            <Link className={` ${customStyle} ${props.className}`} href={href}>
                {props.children}
            </Link>
        )
    }

    return (
        <button {...props} className={`px-10 py-4 ${customStyle} ${props.className}`}>
            {props.children}
        </button>
    )
}

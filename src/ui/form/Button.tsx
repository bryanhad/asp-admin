import Link from "next/link"
import clsx from "clsx"

type MyButtonTypes = {
    buttonType: "add"
    isLink?: boolean
    href?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ buttonType, isLink, href, ...props }: MyButtonTypes) {
    const customStyle = clsx({
        "bg-green-500 text-white": buttonType === "add",
    })

    switch (buttonType) {
        case "add":
            break
        default:
            throw Error(
                `buttonType of '${buttonType}' is not specified in component MyButton!`,
            )
    }

    if (isLink && href) {
        return (
            <Link
                className={`btn_text btn ${customStyle} ${props.className}`}
                href={href}
            >
                {props.children}
            </Link>
        )
    }

    return (
        <button
            className={`btn_text btn ${customStyle} ${props.className}`}
            {...props}
        >
            {props.children}
        </button>
    )
}

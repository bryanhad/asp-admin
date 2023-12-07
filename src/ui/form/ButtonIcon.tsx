import { GoPencil } from "react-icons/go"
import { IoCloseOutline } from "react-icons/io5"
import { FiCheck } from "react-icons/fi"
import { FaRegTrashAlt } from "react-icons/fa"
import { FaTrash } from "react-icons/fa"
import clsx from "clsx"
import Link from "next/link"


type ButtonIconTypes = {
    icon: "edit" | "delete" | "confirm" | "cancel" | "small-delete"
    isLink?: boolean
    href?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function ButtonIcon({ icon, isLink, href, ...props }: ButtonIconTypes) {
    let showIcon

    const customStyle = clsx("border-none", {
        "bg-white hover:bg-slate-100 text-sky-400": icon === "edit",
        "bg-white hover:bg-slate-100 text-red-400": icon === "delete",
        "hover:bg-green-300 bg-green-400 text-white": icon === "confirm",
        "hover:bg-slate-200 bg-slate-300 text-white": icon === "cancel",
        "text-slate-400 p-2": icon === "small-delete",
    })

    if (icon.includes("small")) {
        switch (icon) {
            case "small-delete":
                showIcon = <FaTrash />
                break
            default:
                throw Error(
                    `icon of '${icon}' is not specified in component ButtonIcon -small version!`,
                )
        }

        return (
            <button
                className={`text-xs ${customStyle} ${props.className}`}
                {...props}
            >
                {showIcon}
            </button>
        )
    }

    switch (icon) {
        case "edit":
            showIcon = <GoPencil />
            break
        case "delete":
            showIcon = <FaRegTrashAlt />
            break
        case "confirm":
            showIcon = <FiCheck />
            break
        case "cancel":
            showIcon = <IoCloseOutline />
            break
        default:
            throw Error(
                `icon of '${icon}' is not specified in component ButtonIcon!`,
            )
    }

    if (isLink && href) {
        return (
            <Link
                className={`btn_icon btn ${customStyle} ${props.className}`}
                href={href}
            >
                {showIcon}
            </Link>
        )
    }

    return (
        <button
            className={`btn_icon btn  ${customStyle} ${props.className}`}
            {...props}
        >
            {showIcon}
        </button>
    )
}
import Image from "next/image"
import Link from "next/link"

export default function Logo() {
    return (
        <Link href="/" className="flex items-end gap-1">
            <Image
                src="/logo.png"
                alt="ASP Logo"
                className="w-auto"
                width={100}
                height={100}
                priority
            />
            <p className="text-[12px] italic dark:text-slate-400">Admin Page</p>
        </Link>
    )
}

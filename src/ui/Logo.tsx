import Image from "next/image"
import Link from "next/link"

export default function Logo() {
    return (
        <Link href="/" className="flex gap-1 items-end">
            <Image src="/logo.png" alt="ASP Logo" className="w-auto" width={100} height={100} />
            <p className="dark:text-slate-400 italic text-[12px]">Admin Page</p>
        </Link>
    )
}

import Image from "next/image"
import React from "react"

export default function MiniUser() {
    return (
        <div className="flex items-center gap-5">
            <div className="flex flex-col items-end">
                <span className="font-bold">John Doe</span>
                <span className="text-textSoft text-sm">Administrator</span>
            </div>
            <Image
                className="rounded-full object-cover"
                src={"/noavatar.png"}
                alt=""
                width="45"
                height="45"
            />
        </div>
    )
}

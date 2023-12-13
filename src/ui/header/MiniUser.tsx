import { User } from "next-auth"
import Image from "next/image"
import React from "react"

export default function MiniUser({ user }: { user: User }) {
    return (
        <div className="flex items-center gap-5">
            <div className="flex flex-col items-end">
                <span className="font-bold">{user.username}</span>
                <span className="text-textSoft text-sm">{user.role}</span>
            </div>
            <Image
                className="rounded-full object-cover h-[45px] w-[45px]"
                src={user.profilePicture || "/noavatar.png"}
                alt={`${user.username}'s profile Picture`}
                width="50"
                height="50"
            />
        </div>
    )
}

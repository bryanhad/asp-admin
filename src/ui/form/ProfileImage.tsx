import Image from "next/image"
import React from "react"

type ProfileImageProps = {
    src: string | null | undefined
    defaultPic?: string
    loading?: boolean
}

export default function ProfileImage({
    src,
    defaultPic,
    loading,
}: ProfileImageProps) {
    return (
        <Image
            className={`h-[130px] w-[130px] ${
                defaultPic ? "rounded-lg" : "rounded-full"
            } object-cover ${loading ? "brightness-75" : ""}`}
            src={src || defaultPic || "/noavatar.png"}
            alt="profilePicture"
            width={100}
            height={100}
        />
    )
}

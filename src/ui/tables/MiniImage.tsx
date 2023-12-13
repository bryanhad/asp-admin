import Image from "next/image"
import React from "react"

type MiniImageProps = {
    text: string
    src: string | null
    alt: string
    profile?: boolean
}

export default function MiniImage({ text, src, alt, profile }: MiniImageProps) {
    const defaultImage = profile ? "/noavatar.png" : "/noimage.png"

    return (
        <div className="flex items-center gap-4">
            <div
                className={`flex items-center justify-center h-[38px] w-[38px] min-w-[38px] overflow-hidden ${profile ? "rounded-full" : 'rounded-lg'} bg-active`}
            >
                <Image
                    className="w-[38px] object-cover"
                    src={src || defaultImage}
                    alt={alt}
                    height={38}
                    width={38}
                />
            </div>
            <p className="maximum-1-line">{text}</p>
        </div>
    )
}

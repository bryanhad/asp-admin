import React from "react"
import TipTapSkeleton from "./TipTapSkeleton"
import UploadPhotoSkeleton from "./UploadPhotoSkeleton"
import { InputSkeleton, TextSkeleton } from "./Skeleton"

export default function ArticleFormSkeleton() {
    return (
        <div className="flex flex-col gap-4">
            <UploadPhotoSkeleton />
            <div className="">
                <InputSkeleton containerClassName="w-full md:w-[500px]" />
            </div>
            <div className="flex flex-col gap-2">
                <TextSkeleton className="w-[80px]" />
                <TipTapSkeleton />
            </div>
            <div className="flex justify-center">
                <TextSkeleton className="w-full max-w-[50%] h-[50px]" />
            </div>
        </div>
    )
}

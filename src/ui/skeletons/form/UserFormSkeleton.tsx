import React from "react"
import { InputSkeleton, TextSkeleton } from "../Skeleton"
import UploadPhotoSkeleton from "../UploadPhotoSkeleton"

export default function UserFormSkeleton() {
    return (
        <div className="flex flex-col gap-8 lg:flex-row lg:flex-wrap lg:justify-between">
            <UploadPhotoSkeleton />
            <InputSkeleton containerClassName="w-full" />
            <InputSkeleton containerClassName="w-full" />
            <div>
                <TextSkeleton className="w-[50px] mb-2"/>
                <div className="flex flex-row gap-2">
                    <div className="flex gap-1 items-center">
                        <TextSkeleton small circle className="w-[20px] h-[20px]"/>
                        <TextSkeleton small className="h-[20px] w-[55px]"/>
                    </div>
                    <div className="flex gap-1 items-center">
                        <TextSkeleton small circle className="w-[20px] h-[20px]"/>
                        <TextSkeleton small className="h-[20px] w-[72px]"/>
                    </div>
                </div>
            </div>
            {/* BUTTON */}
            <div className="w-full flex justify-center">
                <TextSkeleton className="p-8 md:w-[50%]" />
            </div>
        </div>
    )
}

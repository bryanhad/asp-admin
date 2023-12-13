import React from "react"
import { InputSkeleton, TextSkeleton } from "../Skeleton"
import UploadPhotoSkeleton from "../UploadPhotoSkeleton"

export default function MemberFormSkeleton() {
    return (
        <div className="flex flex-col gap-5 lg:flex-row lg:flex-wrap lg:justify-between">
            <UploadPhotoSkeleton />
            <InputSkeleton containerClassName="w-full lg:w-[45%]" />
            <InputSkeleton containerClassName="w-full lg:w-[45%]" />
            <InputSkeleton containerClassName="w-full lg:w-[45%]" />
            <div className="flex w-full flex-col gap-2 lg:w-[45%]">
                <InputSkeleton containerClassName="" />
                <div className="flex flex-wrap gap-3">
                    <TextSkeleton circle className="h-[35px] w-[160px]" />
                    <TextSkeleton circle className="h-[35px] w-[80px]" />
                </div>
            </div>
            <div className="flex w-full flex-col gap-2 lg:w-[45%]">
                <InputSkeleton containerClassName="" />
                <div className="flex flex-wrap gap-3">
                    <TextSkeleton circle className="h-[35px] w-[160px]" />
                    <TextSkeleton circle className="h-[35px] w-[80px]" />
                </div>
            </div>
            <div className="flex w-full flex-col gap-2 lg:w-[45%]">
                <InputSkeleton containerClassName="" />
                <div className="flex flex-wrap gap-3">
                    <TextSkeleton circle className="h-[35px] w-[160px]" />
                    <TextSkeleton circle className="h-[35px] w-[80px]" />
                </div>
            </div>
            <InputSkeleton containerClassName="w-full" className="h-[200px]" />
            {/* BUTTON */}
            <div className="w-full">
                <TextSkeleton className="mx-auto mt-4 w-full p-8 md:w-[40%]" />
            </div>
        </div>
    )
}

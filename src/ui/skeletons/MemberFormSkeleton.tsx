import React from "react"
import { InputSkeleton, TextSkeleton } from "./Skeleton"

export default function MemberFormSkeleton() {
    return (
        <div className="flex flex-col gap-5 lg:flex-row lg:flex-wrap lg:justify-between">
            <UploadPhotoSkeleton/>
            <InputSkeleton containerClassName="w-full lg:w-[45%]" />
            <InputSkeleton containerClassName="w-full lg:w-[45%]" />
            <InputSkeleton containerClassName="w-full lg:w-[45%]" />
            <InputSkeleton containerClassName="w-full lg:w-[45%]" />
            <InputSkeleton containerClassName="w-full lg:w-[45%]" />
            <InputSkeleton containerClassName="w-full lg:w-[45%]" />
            <InputSkeleton containerClassName="w-full lg:w-[45%]" />
            <InputSkeleton containerClassName="w-full" className="h-[200px]" />
            {/* BUTTON */}
            <div className="w-full">
                <TextSkeleton className="mx-auto mt-4 w-full p-8 md:w-[40%]" />
            </div>
        </div>
    )
}

function UploadPhotoSkeleton() {
    return (
        <div className="flex gap-5 max-sm:max-w-[400px] max-w-[542px]">
            <div>
            <TextSkeleton circle className="mx-auto w-[130px] h-[130px]" />

            </div>
            <div className="flex-[1] flex flex-col items-center sm:flex-row gap-5">
                <TextSkeleton circle className="min-w-[180px] w-full h-[50px]"/>
                <TextSkeleton circle className="min-w-[180px] w-full h-[50px]"/>
            </div>
        </div>
    )
}

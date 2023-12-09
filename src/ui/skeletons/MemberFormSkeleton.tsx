import React from "react"
import { InputSkeleton, TextSkeleton } from "./Skeleton"

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

function UploadPhotoSkeleton() {
    return (
        <div className="flex max-w-[542px] gap-5 max-sm:max-w-[400px]">
            <div>
                <TextSkeleton circle className="mx-auto h-[130px] w-[130px]" />
            </div>
            <div className="flex flex-[1] flex-col items-center gap-5 sm:flex-row">
                <TextSkeleton
                    circle
                    className="h-[50px] w-full min-w-[180px]"
                />
                <TextSkeleton
                    circle
                    className="h-[50px] w-full min-w-[180px]"
                />
            </div>
        </div>
    )
}

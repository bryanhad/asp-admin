import React from "react"
import { InputSkeleton, TextSkeleton } from "./Skeleton"

export default function MemberFormSkeleton() {
    const numOfCols = Array.from(Array(2).keys())
    const numOfDesktopRows = Array.from(Array(6).keys())
    const numOfMobileRows = Array.from(Array(6).keys())
    return (
        <div className="flex flex-col gap-5 lg:flex-row lg:flex-wrap lg:justify-between">
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

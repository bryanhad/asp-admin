import React from 'react'
import { TextSkeleton } from './Skeleton'

export default function UploadPhotoSkeleton() {
        return (
            <div className="flex max-w-[400px] gap-5 max-sm:max-w-[400px]">
                <div>
                    <TextSkeleton circle className="mx-auto h-[130px] w-[130px]" />
                </div>
                <div className="flex flex-[1] flex-col items-center gap-5 sm:flex-row">
                    <TextSkeleton
                        circle
                        className="h-[45px] w-full"
                    />
                    <TextSkeleton
                        circle
                        className="h-[35px] w-full rounded-md"
                    />
                </div>
            </div>
        )
}

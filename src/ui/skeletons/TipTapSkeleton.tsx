import { TextSkeleton } from "./Skeleton"

export default function TipTapSkeleton() {
    return (
        <div className="flex flex-col border">
            <TextSkeleton className="h-[45px] w-full rounded-none" />
            <div className="min-h-[300px] border-b"></div>
            <div className="flex justify-end">
                <div className="flex flex-col gap-1 py-2 px-4">
                    <TextSkeleton className="w-[150px]"/>
                    <TextSkeleton className="w-[60px]"/>
                </div>
            </div>
        </div>
    )
}

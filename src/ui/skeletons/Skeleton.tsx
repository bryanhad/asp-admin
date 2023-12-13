export function TextSkeleton({
    className,
    circle,
    small,
}: {
    className: string
    circle?: boolean
    small?: boolean
}) {
    return (
        <div
            className={`animate-pulse ${
                circle ? "rounded-full" : "rounded-lg"
            } ${small ? "" : "p-3"} dark:bg-active-dark bg-active ${className}`}
        />
    )
}

export function InputSkeleton({
    className,
    containerClassName,
}: {
    className?: string
    containerClassName: string
}) {
    return (
        <div className={`flex flex-col gap-2 ${containerClassName}`}>
            <TextSkeleton className="w-[80px]" />
            <div
                className={`dark:bg-active-dark animate-pulse rounded-lg bg-active p-6 ${className}`}
            />
        </div>
    )
}

export function MiniImageSkeleton({profile}:{profile?:boolean}) {
    return (
        <div className="flex items-center gap-4">
            <TextSkeleton circle={profile} className="h-[38px] w-[38px]" />
            <TextSkeleton small className="h-[18px] w-[60px]" />
        </div>
    )
}

export function TextSkeleton({
    className,
    circle,
}: {
    className: string
    circle?: boolean
}) {
    return (
        <div
            className={`animate-pulse ${
                circle ? "rounded-full" : "rounded-lg"
            } bg-active p-3 dark:bg-active-dark ${className}`}
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
                className={`animate-pulse rounded-lg bg-active p-6 dark:bg-active-dark ${className}`}
            />
        </div>
    )
}

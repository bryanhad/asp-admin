export function TextSkeleton({
    className,
    circle,
    small
}: {
    className: string
    circle?: boolean
    small?: boolean
}) {
    return (
        <div
            className={`animate-pulse ${
                circle ? "rounded-full" : "rounded-lg"
            } ${small ? '' : 'p-3'} bg-active dark:bg-active-dark ${className}`}
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

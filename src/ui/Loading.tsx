import { AiOutlineLoading3Quarters } from "react-icons/ai"

export default function Loading({ className }: { className?: string }) {
    return (
        <div className="max-w-max rounded-full">
            <div
                className={`dark:text-text-soft-dark rounded-full text-text-soft animate-spin ${className}`}
            >
                <AiOutlineLoading3Quarters/>
            </div>
        </div>
    )
}

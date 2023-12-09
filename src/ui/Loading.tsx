import { AiOutlineLoading3Quarters } from "react-icons/ai"

export default function Loading({ className, containerClassName }: { className?: string, containerClassName?:string }) {
    return (
        <div className={`max-w-max rounded-full ${containerClassName}`}>
            <div
                className={`dark:text-text-soft-dark rounded-full text-text-soft animate-spin ${className}`}
            >
                <AiOutlineLoading3Quarters/>
            </div>
        </div>
    )
}

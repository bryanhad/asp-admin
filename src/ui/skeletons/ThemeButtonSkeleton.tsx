import Loading from "../Loading"

export default function ThemeButtonSkeleton() {
    return (
        <button
            type="button"
            className="dark:hover:bg-active-dark hover:bg-active dark:border-active-dark dark:bg-bg-soft-dark animate-pulse rounded-lg bg-white p-4 text-xl duration-300 dark:border"
        >
            <Loading />
        </button>
    )
}

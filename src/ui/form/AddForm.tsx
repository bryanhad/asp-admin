import { serverAction } from "../../../types"

export default function AddForm({ serverAction }: serverAction) {
    return (
        <div className="rounded-lg border focus-within:border-2 focus-within:border-focus dark:border-active-dark dark:bg-bg-soft-dark focus-within:dark:border-focus-dark">
            <form action={serverAction} className="flex gap-1">
                <input
                    size={1}
                    type="text"
                    className="flex-1 bg-transparent px-5"
                />
                <button
                    type="submit"
                    className="rounded-r-lg bg-success px-12 py-3 text-white dark:bg-success-dark"
                >
                    ADD
                </button>
            </form>
        </div>
    )
}

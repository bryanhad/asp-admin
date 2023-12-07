import { serverAction } from "../../../types";

export default function AddForm({ serverAction }: serverAction) {
    return (
        <div className="dark:border-active-dark dark:bg-bg-soft-dark focus-within:border-focus focus-within:dark:border-focus-dark rounded-lg border focus-within:border-2">
            <form action={serverAction} className="flex gap-1">
                <input size={1} type="text" className="flex-1 bg-transparent px-5" />
                <button
                    type="submit"
                    className="bg-success dark:bg-success-dark rounded-r-lg px-12 py-5 text-white"
                >
                    ADD
                </button>
            </form>
        </div>
    )
}

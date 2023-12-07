type AddFormProps = {
    inputName: string
    serverAction(formData:FormData): void
}

export default function AddForm({ serverAction, inputName }: AddFormProps) {
    return (
        <div className="overflow-hidden rounded-lg border focus-within:border-focus dark:border-active-dark dark:bg-bg-soft-dark focus-within:dark:border-focus-dark">
            <form action={serverAction} className="flex gap-1">
                <input
                    size={1}
                    name={inputName}
                    type="text"
                    className="flex-1 bg-transparent px-5"
                />
                <button
                    type="submit"
                    className="bg-success px-12 py-3 text-white dark:bg-success-dark"
                >
                    ADD
                </button>
            </form>
        </div>
    )
}

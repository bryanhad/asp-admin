import React, { useEffect, useRef } from "react"

type AddFormProps = {
    success: boolean
    inputName: string
    resMessage: string
    serverAction(formData: FormData): void
}

const AddForm = React.memo(
    ({ serverAction, inputName, resMessage, success }: AddFormProps) => {
        const formRef = useRef<HTMLFormElement>(null)

        useEffect(() => {
            if (success) {
                formRef.current?.reset()
            }
        }, [success, resMessage])

        return (
            <div className="overflow-hidden rounded-lg border focus-within:border-focus dark:border-active-dark dark:bg-bg-soft-dark focus-within:dark:border-focus-dark">
                <form
                    ref={formRef}
                    action={serverAction}
                    className="flex gap-1"
                >
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
    },
)
export default AddForm

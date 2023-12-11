import React, { useEffect, useRef } from "react"
import { Input } from "../shadcn/input"
import { Button } from "../shadcn/button"

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
            <div className="rounded-lg border focus-within:outline-none focus-within:outline-offset-2 focus-within:outline-ring focus-within:ring-2">
                <form
                    ref={formRef}
                    action={serverAction}
                    className="flex items-center gap-1 p-1"
                >
                    <Input
                        name={inputName}
                        type="text"
                        className="flex-1 border-none bg-transparent px-5 focus-visible:ring-transparent"
                    />

                    <Button variant="default" size="lg" className="px-12">
                        ADD
                    </Button>
                </form>
            </div>
        )
    },
)
export default AddForm

import { useEffect } from "react"
import { useFormState } from "react-dom"
import { toast } from "react-toastify"

type useFormLogicProps = {
    id: string
    serverAction(
        id?: string,
        prevState?: any,
        formData?: FormData,
    ): Promise<{ success: boolean; message: string }>
    onSuccess(): void
}

export default function useFormLogic({
    id,
    serverAction,
    onSuccess,
}: useFormLogicProps) {
    const serverActionWithId = serverAction.bind(null, id)
    const [state, dispatch] = useFormState(serverActionWithId, {
        success: false,
        message: "",
    })

    useEffect(() => {
        if (state.success) {
            toast.success(state.message)
            onSuccess()
        }
    }, [state.success, state.message, onSuccess])

    return [state, dispatch] as const
}

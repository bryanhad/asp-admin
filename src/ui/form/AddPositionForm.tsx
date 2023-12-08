"use client"

import { useFormState } from "react-dom"
import { useRef, useEffect } from "react"
import AddForm from "./AddForm"
import { createPosition } from "@/actions/positions.action"
import { toast } from "react-toastify"
import ErrorText from "./ErrorText"

export default function AddPositionForm() {
    const isMounted = useRef(false)

    const initialState = { message: "", success: false }

    const [state, dispatch] = useFormState(createPosition, initialState)

    useEffect(() => {
        if (isMounted.current) {
            if (state.success) {
                toast.success(state.message)
            }
        } else {
            isMounted.current = true
        }
    }, [state.message, state.success])

    return (
        <div>
            <AddForm
                resMessage={state.message}
                success={state.success}
                inputName="name"
                serverAction={dispatch}
            />
            {!state.success && state.message && (
                <ErrorText dep={state} str={state.message} />
            )}
        </div>
    )
}

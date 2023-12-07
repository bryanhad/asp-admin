"use client"

import { useFormState } from "react-dom"
import { useRef, useEffect } from "react"
import AddForm from "./AddForm"
import { createPosition } from "@/actions/positions.action"
import { toast } from "react-toastify"

export default function AddPositionForm() {
    const isMounted = useRef(false)
    const initialState = { message: "", errors: {}, success: false }
    const [state, dispatch] = useFormState(createPosition, initialState)

    useEffect(() => {
        if (isMounted.current) {
            if (state.success) {
                toast.success(state.message)
            }
        } else {
            isMounted.current = true
        }
    }, [state])

    console.log(state)
    return (
        <div>
            <AddForm inputName="name" serverAction={dispatch} />
        </div>
    )
}

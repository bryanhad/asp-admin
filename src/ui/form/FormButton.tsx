import React from "react"
import { Button } from "../shadcn/button"

export default function FormButton({ text }: { text: string }) {
    return (
        <div className="flex justify-center">
            <Button
                size="lg"
                className="w-full max-w-[50%]"
                type="submit"
                variant="success"
            >
                {text}
            </Button>
        </div>
    )
}

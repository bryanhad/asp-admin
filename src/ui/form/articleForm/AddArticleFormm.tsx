"use client"

import React, { useEffect, useState } from "react"
import { Button } from "../../shadcn/button"
import Tiptap from "../../tiptap/Tiptap"
import { createArticle } from "@/actions/articles.action"
import Label from "../Label"
import { useFormState } from "react-dom"
import MyInput from "../MyInput"
import UploadPhoto from "../UploadPhoto"
import { toast } from "react-toastify"
import { redirect } from "next/navigation"

export default function AddArticleFormm({ userId }: { userId: string }) {
    const [body, setBody] = useState("")

    const createArticleWithId = createArticle.bind(null, userId)
    const [state, formAction] = useFormState(createArticleWithId, {
        success: false,
        message: "",
        error: {},
    })

    useEffect(() => {
        if (state.success) {
            toast.success(state.message)
            redirect("/articles")
        }
    }, [state.success, state.message])

    return (
        // spread the form from react-hook-form's form that we created
        <form action={formAction} className="flex flex-col gap-3">
            <UploadPhoto defaultPic="/noimage.png" />
            <MyInput
                label="Title"
                id="title"
                name="title"
                placeholder="Your Awesome Title.."
            />

            {/* RICH EDITOR */}
            <div className="flex flex-col gap-2">
                <Label htmlFor="body">Article Body</Label>
                <input
                    type="text"
                    name="body"
                    value={body}
                    onChange={() => {}}
                    className="hidden"
                />
                <Tiptap
                    maxCharacter={3000}
                    description={body}
                    onChange={setBody}
                />
            </div>
            <div className="flex justify-center">
                <Button className="w-full max-w-[50%]" type="submit" variant="success">
                    Publish Article
                </Button>
            </div>
        </form>
    )
}

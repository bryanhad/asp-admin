"use client"

import React, { useEffect, useState } from "react"
import { Button } from "../../shadcn/button"
import Tiptap from "../../tiptap/Tiptap"
import Label from "../Label"
import { useFormState } from "react-dom"
import MyInput from "../MyInput"
import UploadPhoto from "../UploadPhoto"
import { toast } from "react-toastify"
import { redirect } from "next/navigation"
import {
    AddArticleServerActionArguments,
    ArticleServerActionFunctionReturn,
    EditArticleServerActionArguments,
} from "../../../../types"
import { Article } from "@prisma/client"
import ErrorText from "../ErrorText"
import FormButton from "../FormButton"

type ServerActionFunction = {
    (
        ...args: EditArticleServerActionArguments
    ): Promise<ArticleServerActionFunctionReturn>
    (
        ...args: AddArticleServerActionArguments
    ): Promise<ArticleServerActionFunctionReturn>
}

//honestly type definition below is from chat GPT, I dunno how it works.. but hey! it works for now lol :D
type ServerActionType = CallableFunction & {
    (
        ...args: Parameters<ServerActionFunction> //Paremeters extracts the parameter types from ServerActionFunction.
    ): ReturnType<ServerActionFunction> //ReturnType extracts the return type from ServerActionFunction. neat stuff.
}

export default function ArticleForm({
    id,
    serverAction,
    buttonText,
    data,
}: {
    buttonText: string
    data?: Article
    id: string
    serverAction: ServerActionType
}) {
    const [body, setBody] = useState(data?.body || "")

    const serverActionWithId = serverAction.bind(null, id)
    const [state, formAction] = useFormState(serverActionWithId, {
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
        <form action={formAction} className="flex flex-col gap-6">
            <div>
                <UploadPhoto
                    notProfile
                    picture={data?.image}
                    defaultPic="/noimage.png"
                />
                {state?.error?.image && (
                    <ErrorText dep={state} str={state.error.image[0]} />
                )}
            </div>
            <div>
                <MyInput
                    defaultValue={data?.title}
                    label="Title"
                    id="title"
                    name="title"
                    placeholder="Your Awesome Title.."
                    containerClassName="md:max-w-[500px]"
                />
                {state?.error?.title && (
                    <ErrorText dep={state} str={state.error.title[0]} />
                )}
            </div>
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
                <div>
                    <Tiptap
                        maxCharacter={3000}
                        description={body}
                        onChange={setBody}
                    />
                    {state?.error?.body && (
                        <ErrorText dep={state} str={state.error.body[0]} />
                    )}
                </div>
            </div>
            {!state.success && state.message && (
                <div className="w-full">
                    <ErrorText
                        className="text-center"
                        dep={state}
                        str={state.message}
                    />
                </div>
            )}
            <FormButton text={buttonText} />
        </form>
    )
}

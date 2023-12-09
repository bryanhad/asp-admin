"use client"

import Input from "../Input"
import TextArea from "../TextArea"
import MemberMultiInputs from "./MemberMultiInputs"
import { useFormState } from "react-dom"
import { Button } from "../Button"
import ErrorText from "../ErrorText"
import { Member, Position } from "@prisma/client"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { redirect } from "next/navigation"
import {
    AddMemberServerActionArguments,
    EditMemberServerActionArguments,
    MemberInfoState,
    ServerActionFunctionReturn,
} from "../../../../types"
import UploadPhoto from "../UploadPhoto"

type ServerActionFunction = {
    (
        ...args: EditMemberServerActionArguments
    ): Promise<ServerActionFunctionReturn>
    (
        ...args: AddMemberServerActionArguments
    ): Promise<ServerActionFunctionReturn>
}

//honestly type definition below is from chat GPT, I dunno how it works.. but hey! it works for now lol :D
type ServerActionType = CallableFunction & {
    (
        ...args: Parameters<ServerActionFunction> //Paremeters extracts the parameter types from ServerActionFunction.
    ): ReturnType<ServerActionFunction> //ReturnType extracts the return type from ServerActionFunction. neat stuff.
}

type MemberFormProps = {
    buttonText: string
    positions: Position[]
    data?: Member
    serverAction: ServerActionType
}

export default function MemberForm({
    serverAction,
    positions,
    data,
    buttonText,
}: MemberFormProps) {
    const [memberInfo, setMemberInfo] = useState<MemberInfoState>({
        education: data ? data.education : [],
        organization: data ? data.education : [],
        practices: data ? data.education : [],
    })
    const serverActionWithInfo = serverAction.bind(null, memberInfo)

    const [state, formAction] = useFormState(serverActionWithInfo, {
        success: false,
        error: {},
        message: "",
    })

    useEffect(() => {
        if (state.success) {
            toast.success(state.message)
            redirect("/members")
        }
    }, [state.success, state.message])

    return (
        <form
            action={formAction}
            className="flex flex-col gap-5 lg:flex-row lg:flex-wrap lg:justify-between"
        >
            <UploadPhoto />
            <div className="lg:w-[45%]">
                <Input
                    defaultValue={data?.name}
                    label="Name"
                    id="name"
                    name="name"
                />
                {state?.error?.name && (
                    <ErrorText dep={state} str={state.error.name[0]} />
                )}
            </div>
            <div className="lg:w-[45%]">
                <Input
                    defaultValue={data?.email}
                    label="Email"
                    id="email"
                    name="email"
                />
                {state?.error?.email && (
                    <ErrorText dep={state} str={state.error.email[0]} />
                )}
            </div>
            <div className="lg:w-[45%]">
                <Input
                    defaultValue={data?.positionId}
                    isSelectInput
                    placeholder="-- Select Position --"
                    options={positions}
                    label="Position"
                    id="positionId"
                    name="positionId"
                />
                {state?.error?.positionId && (
                    <ErrorText dep={state} str={state.error.positionId[0]} />
                )}
            </div>
            <MemberMultiInputs
                memberInfo={memberInfo}
                setMemberInfo={setMemberInfo}
            />
            <TextArea
                defaultValue={data?.description ?? ""}
                containerClassName="w-full"
                rows={5}
                label="Description"
                name="description"
                id="description"
            />
            {!state.success && state.message && (
                <div className="w-full">
                    <ErrorText
                        className="text-center"
                        dep={state}
                        str={state.message}
                    />
                </div>
            )}
            <Button className="mx-auto mt-4 w-full md:w-[40%]" buttonType="add">
                {buttonText}
            </Button>
        </form>
    )
}

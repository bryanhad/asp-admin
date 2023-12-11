"use client"

import TextArea from "../TextArea"
import MemberMultiInputs from "./MemberMultiInputs"
import { useFormState } from "react-dom"
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
import { Button } from "@/ui/shadcn/button"
import MyInput from "../MyInput"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/ui/shadcn/select"
import { Label } from "@/ui/shadcn/label"

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
        organization: data ? data.organization : [],
        practices: data ? data.practices : [],
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
            <UploadPhoto picture={data?.picture} />
            <div className="lg:w-[45%]">
                <MyInput
                    className="p-4"
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
                <MyInput
                    className="p-4"
                    defaultValue={data?.email}
                    label="Email"
                    id="email"
                    name="email"
                />
                {state?.error?.email && (
                    <ErrorText dep={state} str={state.error.email[0]} />
                )}
            </div>

            <div className="pt-[28px] lg:w-[45%]">
                <Select name="positionId" defaultValue={data?.positionId.toString()}>
                    <SelectTrigger id="positionId">
                        <SelectValue
                            placeholder={
                                positions.find(
                                    (el) => el.id === data?.positionId,
                                )?.name ?? "Select a position"
                            }
                        />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup >
                            <SelectLabel>Positions</SelectLabel>
                            {positions.map((position) => (
                                <SelectItem
                                    // defaultChecked={
                                    //     data?.positionId.toString() ===
                                    //     position.id.toString()
                                    // }
                                    key={position.id}
                                    value={position.id.toString()}
                                >
                                    {position.name}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
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
            <Button
                className="mx-auto mt-4 w-full py-5 md:w-[40%]"
                variant={"success"}
            >
                {buttonText}
            </Button>
        </form>
    )
}

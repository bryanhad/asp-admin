"use client"

import { createMember } from "@/actions/members.action"
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

type MemberFormProps = {
    positions: Position[]
    data?: Member
}
export type MemberInfo = {
    education: Array<string> | never[]
    organization: Array<string> | never[]
    practices: Array<string> | never[]
}
export default function MemberForm({ positions, data }: MemberFormProps) {
    const [memberInfo, setMemberInfo] = useState<MemberInfo>({
        education: data ? data.education : [],
        organization: data ? data.education : [],
        practices: data ? data.education : [],
    })
    const createMemberWithInfo = createMember.bind(null, memberInfo)
    const [state, serverAction] = useFormState(createMemberWithInfo, {
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
        <div>
            <form
                action={serverAction}
                className="flex flex-col gap-5 lg:flex-row lg:flex-wrap lg:justify-between"
            >
                <Input
                    containerClassName="lg:w-[45%]"
                    label="Picture"
                    id="picture"
                    name="picture"
                />
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
                        <ErrorText
                            dep={state}
                            str={state.error.positionId[0]}
                        />
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
                    className="mx-auto mt-4 w-full md:w-[40%]"
                    buttonType="add"
                >
                    Add Member
                </Button>
            </form>
        </div>
    )
}

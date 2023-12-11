"use client"

import React, { Dispatch, SetStateAction } from "react"
import MultiInput from "../MultiInput"
import { MemberInfoState } from "../../../../types"

type MemberMultiInputsProps = {
    memberInfo: MemberInfoState
    setMemberInfo: Dispatch<SetStateAction<MemberInfoState>>
}

export default function MemberMultiInputs({
    memberInfo,
    setMemberInfo,
}: MemberMultiInputsProps) {
    return (
        <>
            <MultiInput
                id="education"
                setDataState={setMemberInfo}
                state={memberInfo}
                containerClassName="lg:w-[45%]"
            />
            <MultiInput
                id="organization"
                setDataState={setMemberInfo}
                state={memberInfo}
                containerClassName="lg:w-[45%]"
            />
            <MultiInput
                id="practices"
                setDataState={setMemberInfo}
                state={memberInfo}
                containerClassName="lg:w-[45%]"
            />
        </>
    )
}

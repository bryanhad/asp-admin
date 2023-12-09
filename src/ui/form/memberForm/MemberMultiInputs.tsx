"use client"

import React, { Dispatch, SetStateAction, useState } from "react"
import MultiInput from "../MultiInput"
import { MemberInfo } from "./MemberForm"

type MemberMultiInputsProps = {
    memberInfo: MemberInfo
    setMemberInfo: Dispatch<SetStateAction<MemberInfo>>
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

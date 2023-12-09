"use client"

import React, { useState } from "react"
import MultiInput from "../MultiInput"

type MemberInfo = {
    education: Array<string> | never[]
    organization: Array<string> | never[]
    practices: Array<string> | never[]
}

export default function MemberMultiInputs() {
    const [memberInfo, setMemberInfo] = useState<MemberInfo>({
        education: [],
        organization: [],
        practices: [],
    })

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

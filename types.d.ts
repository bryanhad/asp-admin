export type ServerAction = {
    serverAction(prevState?: any): void
}

export type ServerActionFunctionReturn = {
    success: boolean
    error?:
        | {
              picture?: string[] | undefined
              email?: string[] | undefined
              name?: string[] | undefined
              description?: string[] | undefined
              positionId?: string[] | undefined
          }
        | undefined
    message: string
}

export type MemberInfoState = {
    education: Array<string> | never[]
    organization: Array<string> | never[]
    practices: Array<string> | never[]
}

export type AddMemberServerActionArguments = [
    memberInfo: MemberInfo,
    prevState: any,
    formData: FormData,
]

export type EditMemberServerActionArguments = [
    id: string,
    memberInfo: MemberInfo,
    prevState: any,
    formData: FormData,
]


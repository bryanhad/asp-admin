export type ServerAction = {
    serverAction(prevState?: any): void
}

export type MemberServerActionFunctionReturn = {
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

export type UserServerActionFunctionReturn = {
    success: boolean
    error?:
        | {
              role?: string[] | undefined
              email?: string[] | undefined
              username?: string[] | undefined
              password?: string[] | undefined
              memberId?: string[] | undefined
              profilePicture?: string[] | undefined
          }
        | undefined
    message: string
}

export type AddUserServerActionArguments = [prevState: any, formData: FormData]

export type EditUserServerActionArguments = [
    id: string,
    prevState: any,
    formData: FormData,
]

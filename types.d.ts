// Ref: next-auth typescript module augmentation!
import { DefaultSession, DefaultUser } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
    interface Session {
        user: {
            id: string
            role: "ADMIN" | "USER"
            profilePicture: string | null
            username: string
        } & DefaultSession
    }
    interface User extends DefaultUser {
        //extends the User type from 'next-auth' to be used in our app!
        id: string
        role: "ADMIN" | "USER"
        profilePicture: string | null
        username: string
    }
}

declare module "next-auth/jwt" {
    //extends the jwt token that the session method receives from jwt method!
    interface JWT extends DefaultJWT {
        id: string
        role: "ADMIN" | "USER"
        profilePicture: string | null
        username: string
    }
}

// the above declaration is for extending the user default definitions so that it has our additional properties!

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

export type ArticleServerActionFunctionReturn = {
    success: boolean
    error?:
        | {
              title?: string[] | undefined
              body?: string[] | undefined
              image?: string[] | undefined
          }
        | undefined
    message: string
}

export type AddArticleServerActionArguments = [
    authorId: string,
    prevState: any,
    formData: FormData,
]

export type EditArticleServerActionArguments = [
    articleId: string,
    prevState: any,
    formData: FormData,
]

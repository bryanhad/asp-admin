import { prisma } from "@/lib/db/prisma"
import { User } from "@prisma/client"
import { compare } from "bcrypt"
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Sign In", //Title
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "hello@gmail.com",
                },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials, req) {
                if (!credentials?.email || !credentials.password) {
                    return null //returning null just means the credentials that the user provided, simply is not correct.
                }

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                })
                if (!user) {
                    return null
                }
                const isValidPassword = await compare(
                    credentials.password,
                    user.password,
                )
                if (!isValidPassword) {
                    return null
                }

                return {
                    // all of this return object will be returned and will
                    id: user.id.toString(),
                    username: user.username,
                    profilePicture: user.profilePicture,
                    email: user.email,
                    role: user.role,
                }
            },
        }),
    ],
    callbacks: {
        jwt: ({ token, user }) => {
            //the user param, is only passed into this func, the first time the user logs in. maybe from Oauth, or from credential login!
            // so the user token will not always be present! only on the first time they login

            // console.log("JWT Callback", { token, user })
            if (user) {
                return {
                    ...token,
                    ...user,
                }
            }
            return token
        },
        session: ({ session, token }) => {
            // console.log("Session Callback", { session, token })
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    username: token.username,
                    profilePicture: token.profilePicture,
                    email: token.email,
                    role: token.role,
                },
            }
        },

        //The flow goes likee this:
        // 1. Authorize function ran and returns an object, that is the user
        // 2. the JWT Callback is called, gets the user object passed by the authorize func, and passes the token
        // 3. the Session Callback is called when you have to get the session information, and it uses the token from the JWT callback.
        //
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST } // the GET and POST uses the same handler
// cuz nextAuth basically, exports one global catch all route handler!
// well that means we have to handle both GET and POST in the same handler. which is what we did on top.

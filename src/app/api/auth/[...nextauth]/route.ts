import { prisma } from "@/lib/db/prisma"
import { compare } from "bcrypt"
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions:NextAuthOptions ={
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

                const user = await prisma.user.findUnique({where: {email: credentials.email}})
                if (!user) {
                    return null
                }
                const isValidPassword = await compare(credentials.password, user.password)
                if (!isValidPassword) {
                    return null
                }

                return {
                    id: user.id.toString(),
                    username: user.username,
                    profilePicture: user.profilePicture,
                    email: user.email,
                }
            },
        }),
    ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST } // the GET and POST uses the same handler
// cuz nextAuth basically, exports one global catch all route handler!
// well that means we have to handle both GET and POST in the same handler. which is what we did on top.

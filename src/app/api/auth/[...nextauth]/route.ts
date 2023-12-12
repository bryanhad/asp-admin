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
                const user = {id: '1', name: 'Bryan', email: 'bryan@gmail.com'}
                return user
            },
        }),
    ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST } // the GET and POST uses the same handler
// cuz nextAuth basically, exports one global catch all route handler!
// well that means we have to handle both GET and POST in the same handler. which is what we did on top.

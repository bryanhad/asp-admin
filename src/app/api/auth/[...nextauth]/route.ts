import NextAuth from "next-auth"
import { authOptions } from "./authOption"



const handler = NextAuth(authOptions)

export { handler as GET, handler as POST } // the GET and POST uses the same handler
// cuz nextAuth basically, exports one global catch all route handler!
// well that means we have to handle both GET and POST in the same handler. which is what we did on top.

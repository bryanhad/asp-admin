import { NextRequestWithAuth, withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

// export { default } from "next-auth/middleware"
// exporting default from next-auth/middleware will protect all of our endpoints in our app!
// but what if we do not want that?? we want only some of our web endpoint to be proected..
// well, with exporting a config! and assigning a matcher to which pages should be protected.

export default withAuth(
    // `withAuth` augments (add) your `Request` with the user's token!
    function middleware(req: NextRequestWithAuth) {
        // it is accessible on the req.nextauth prop
        // console.log(req.nextUrl.pathname) 
        // console.log(req.nextauth.token)
        if (
            req.nextUrl.pathname.startsWith("/users") &&
            req.nextauth.token?.role !== "ADMIN"
        ) {
            return NextResponse.rewrite(new URL("/access-denied", req.url)) //we will rewrite the page with access-denied page, but still show the original protected URL.
            // so the url will still be '/users' but, with it's content to be access-denied.
        }
        if (
            req.nextUrl.pathname.startsWith("/articles") &&
            req.nextauth.token?.role !== "ADMIN" &&
            req.nextauth.token?.role !== "USER"
        ) {
            return NextResponse.rewrite(new URL("/access-denied", req.url))
        }
    },
    {
        callbacks: {
            // authorized:({token}) => token?.role === 'ADMIN'
            // the code above is bad cuz it's basically an on off switch that will say true or false based if the user's role is an admin or not.
            // but what if we want to be more granular?
            // like if there is a page where u have to login..
            // but both ADMIN or USER role can see em.
            // but some pages needs the user to be an ADMIN to access it..

            //instead..
            authorized: ({ token }) => !!token, //will fire based on the the truthy or not of token.
            // if false, no bueno. if true, go on.
        },
    },
)

export const config = {
    matcher: ["/((?!auth/login))"],
}

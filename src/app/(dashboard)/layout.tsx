import Sidebar from "@/ui/sidebar/SideBar"
import Header from "@/ui/header/Header"
import Providers from "@/providers/Providers"
import { HEADER_HEIGHT } from "@/constants"
import ToastContainerListensTheme from "@/lib/ToastContainerWithTheme"
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin"
import { extractRouterConfig } from "uploadthing/server"
import { ourFileRouter } from "../api/uploadthing/core"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Providers>
            <NextSSRPlugin //uploadthing package
                /**
                 * The `extractRouterConfig` will extract **only** the route configs
                 * from the router to prevent additional information from being
                 * leaked to the client. The data passed to the client is the same
                 * as if you were to fetch `/api/uploadthing` directly.
                 */
                routerConfig={extractRouterConfig(ourFileRouter)}
            />
            <div className="flex min-h-screen text-text dark:text-text-dark">
                <div className="hidden flex-[1] bg-secondary p-5 lg:block">
                    <Sidebar />
                </div>
                <main className="flex flex-[4] flex-col gap-5 lg:p-5">
                    <Header />
                    <div
                        style={{ marginTop: `${HEADER_HEIGHT}px` }}
                        className="lg:hidden"
                    />
                    <div className="flex flex-[1] flex-col gap-5 pb-5 max-lg:px-5">
                        {children}
                    </div>
                </main>
            </div>
            <ToastContainerListensTheme />
        </Providers>
    )
}

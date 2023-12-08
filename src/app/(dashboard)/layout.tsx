import "@/ui/globals.css"
import Sidebar from "@/ui/sidebar/SideBar"
import Header from "@/ui/header/Header"
import Providers from "@/providers/Providers"
import { HEADER_HEIGHT } from "@/constants"
import ToastContainerListensTheme from "@/lib/ToastContainerWithTheme"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Providers>
            <div className="flex min-h-screen text-text dark:text-text-dark">
                <div className="hidden flex-[1] bg-bg-soft p-5 dark:bg-bg-soft-dark lg:block">
                    <Sidebar />
                </div>
                <main className="flex flex-[4] flex-col gap-5 lg:p-5">
                    <Header />
                    <div
                        style={{ marginTop: `${HEADER_HEIGHT}px` }}
                        className="lg:hidden"
                    />
                    <div className="flex flex-[1] flex-col gap-5 max-lg:px-5 pb-5">
                        {children}
                    </div>
                </main>
            </div>
            <ToastContainerListensTheme/>
        </Providers>
    )
}

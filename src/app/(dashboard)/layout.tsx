import "@/ui/globals.css"
import Sidebar from "@/ui/sidebar/SideBar"
import Header from "@/ui/header/Header"
import Providers from "@/providers/Providers"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Providers>
            <div className="dark:bg-bg-soft-dark bg-bg-soft hidden flex-[1] p-5 lg:block">
                <Sidebar />
            </div>
            <main className="flex flex-[4] flex-col gap-5 lg:p-5">
                <Header />
                {children}
            </main>
        </Providers>
    )
}

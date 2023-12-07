import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/ui/globals.css"
import Sidebar from "@/ui/sidebar/SideBar"
import Header from "@/ui/header/Header"
import Providers from "@/providers/Providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="light" style={{ colorScheme: "light" }}>
            <body
                className={`${inter.className} dark:bg-bg-dark  dark:text-text-dark flex antialiased`}
            >
                <Providers>
                    <div className="dark:bg-bg-soft-dark bg-bg-soft flex-[1] p-5 hidden lg:block">
                        <Sidebar />
                    </div>
                    <div className="flex-[4] lg:p-5">
                        <Header />
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    )
}

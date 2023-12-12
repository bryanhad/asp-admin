import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "@/ui/globals.css"
import AuthProvider from "@/providers/AuthProvider"

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
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.className} overflow-x-hidden antialiased`}
            >
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    )
}

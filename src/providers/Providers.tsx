'use client'

import { NavbarContextProvider } from "@/contexts/navbar.context"
import { ThemeProvider } from "next-themes"

type ProviderProps = {
    children: React.ReactNode
}

export default function Providers({children}: ProviderProps) {
  return (
    // sets the default data-theme attr to be replaced with class instead. 
    // why? to be able to work with tailwind's built in theme!
    <ThemeProvider attribute="class">
        <NavbarContextProvider>
            {children}
        </NavbarContextProvider>
    </ThemeProvider>
  )
}

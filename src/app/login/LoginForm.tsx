"use client"

import MyInput from "@/ui/form/MyInput"
import { Button } from "@/ui/shadcn/button"
import { useFormState } from "react-dom"

export default function LoginForm() {
    return (
            <form action={} className="flex flex-col gap-4 w-full max-w-[600px] mx-auto">
                <MyInput
                    id="email"
                    name="email"
                    label="Email"
                    placeholder="bambang@gmail.com"
                />
                <MyInput
                    id="password"
                    name="password"
                    label="Password"
                    placeholder="Rahasiaa"
                    type="password"
                />
                <Button type="submit">
                    LOGIN
                </Button>
            </form>
    )
}

import { prisma } from "@/lib/db/prisma"
import UserForm from "@/ui/form/userForm/UserForm"
import React from "react"

export default async function AddUserPage() {
    const members = await prisma.member.findMany({
        select: {
            id: true,
            name: true,
        },
    })
    return (
        <div>
            <UserForm members={members} />
        </div>
    )
}

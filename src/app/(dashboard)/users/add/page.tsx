import { createUser } from "@/actions/users.action"
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
            <UserForm
                buttonText="Add User"
                serverAction={createUser}
                members={members}
            />
        </div>
    )
}

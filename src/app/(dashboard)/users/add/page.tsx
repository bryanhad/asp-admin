import { createUser } from "@/actions/users.action"
import { prisma } from "@/lib/db/prisma"
import UserForm from "@/ui/form/userForm/UserForm"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
    title: 'Add User',
}

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

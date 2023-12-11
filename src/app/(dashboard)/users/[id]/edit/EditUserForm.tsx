import { editUser } from "@/actions/users.action"
import { fetchUserDataAndMembers } from "@/lib/data"
import UserForm from "@/ui/form/userForm/UserForm"
import { notFound } from "next/navigation"
import React from "react"

export default async function EditUserForm({ id }: { id: string }) {
    const [userData, members] = await fetchUserDataAndMembers(id)
    const editUserWithId = editUser.bind(null, id)

    if (!userData) {
        //if userId is not found, go too not-found page
        notFound()
    }
    return (
        <UserForm
            serverAction={editUserWithId}
            buttonText="Save Edit"
            data={userData}
            members={members}
        />
    )
}

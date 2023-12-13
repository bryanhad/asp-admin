"use client"

import { User } from "@prisma/client"
import UploadPhoto from "../UploadPhoto"
import { useFormState } from "react-dom"
import { updateProfile } from "@/actions/users.action"
import MyInput from "../MyInput"
import FormButton from "../FormButton"
import { useState } from "react"
import ProfileImage from "../ProfileImage"
import { Button } from "@/ui/shadcn/button"

type UpdateProfileFormProps = {
    user: Pick<User, "username" | "profilePicture">
    id: string
}

export default function UpdateProfileForm({
    user,
    id,
}: UpdateProfileFormProps) {
    const updateProfileWithId = updateProfile.bind(null, id)
    const [isEditing, setIsEditing] = useState(false)
    const [state, formAction] = useFormState(updateProfileWithId, {
        message: "",
        success: false,
        error: {},
    })

    return (
        <>
            {!isEditing ? (
                <div className="flex items-center gap-4">
                    <ProfileImage src={user.profilePicture} />
                    <Button
                        onClick={() => setIsEditing(true)}
                        className="rounded-full"
                        variant="edit"
                    >
                        Update Profile
                    </Button>
                </div>
            ) : (
                <form action={formAction} className="flex flex-col gap-4">
                    <UploadPhoto picture={user?.profilePicture} />
                    <MyInput
                        defaultValue={user.username}
                        id="username"
                        name="username"
                        label="Username"
                    />
                    <MyInput id="password" name="password" label="Password" />
                    <FormButton
                        text="Cancel"
                        variant="outline"
                        onClick={() => setIsEditing(false)}
                    />
                    <FormButton text="Update Profile" />
                </form>
            )}
        </>
    )
}

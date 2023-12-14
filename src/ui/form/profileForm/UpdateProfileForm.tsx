"use client"

import { User } from "@prisma/client"
import UploadPhoto from "../UploadPhoto"
import { useFormState } from "react-dom"
import { updateProfile } from "@/actions/users.action"
import MyInput from "../MyInput"
import FormButton from "../FormButton"
import { useEffect, useState } from "react"
import ProfileImage from "../ProfileImage"
import { Button } from "@/ui/shadcn/button"
import { toast } from "react-toastify"
import ErrorText from "../ErrorText"

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
    const [openUpdatePassword, setOpenUpdatePassword] = useState(false)
    const [state, formAction] = useFormState(updateProfileWithId, {
        message: "",
        success: false,
        error: {},
    })

    useEffect(() => {
        if (state.success) {
            toast.success(state.message)
            setOpenUpdatePassword(false)
            setIsEditing(false)
        }
    }, [state])

    return (
        <>
            {!isEditing ? (
                <div className="flex items-center gap-4">
                    <ProfileImage src={user.profilePicture} />
                    {state?.error?.profilePicture && (
                        <ErrorText
                            dep={state}
                            str={state.error.profilePicture[0]}
                        />
                    )}
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
                    <div>
                        <MyInput
                            defaultValue={user.username}
                            id="username"
                            name="username"
                            label="Username"
                        />
                        {state?.error?.username && (
                            <ErrorText
                                dep={state}
                                str={state.error.username[0]}
                            />
                        )}
                    </div>
                    {!openUpdatePassword ? (
                        // <Button
                        //     type="button"
                        //     onClick={}
                        //     variant="edit"
                        // >

                        // </Button>
                        <FormButton
                            text="Update Password"
                            variant="edit"
                            onClick={() => setOpenUpdatePassword(true)}
                        />
                    ) : (
                        <div className=" flex flex-col gap-4">
                            <div>
                                <MyInput
                                    type="password"
                                    id="password"
                                    name="password"
                                    label="Password"
                                />
                                {state?.error?.password && (
                                    <ErrorText
                                        dep={state}
                                        str={state.error.password[0]}
                                    />
                                )}
                            </div>
                            <FormButton
                                text="Cancel Update Password"
                                variant="default"
                                onClick={() => setOpenUpdatePassword(false)}
                            />
                        </div>
                    )}
                    <FormButton
                        text="Cancel"
                        variant="outline"
                        onClick={() => {
                            setIsEditing(false)
                            setOpenUpdatePassword(false)
                        }}
                    />
                    <FormButton text="Update Profile" />
                </form>
            )}
        </>
    )
}

"use server"

import { prisma } from "@/lib/db/prisma"
import { getPrismaError } from "@/lib/utils"
import { revalidatePath } from "next/cache"
import { z } from "zod"
import { hash } from "bcrypt"

const UserFormSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
    role: z.enum(["ADMIN", "USER"]),
    memberId: z.string().nullable(),
    profilePicture: z.string().nullable(),
})

export async function createUser(prevState: any, formData: FormData) {
    const validation = UserFormSchema.safeParse({
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
        role: formData.get("role"),
        memberId: formData.get("memberId"),
        profilePicture: formData.get("picture"),
    })

    if (!validation.success) {
        return {
            success: false,
            error: validation.error.flatten().fieldErrors,
            message: ``,
        }
    }

    try {
        const hashedPassword = await hash(validation.data.password, 10)

        const user = await prisma.user.create({
            data: {
                email: validation.data.email,
                password: hashedPassword,
                role: validation.data.role,
                username: validation.data.username,
                memberId: validation.data.memberId || null,
                profilePicture: validation.data.profilePicture,
            },
        })
        revalidatePath("/users")
        return {
            success: true,
            message: `Successfully created user "${user.username}"`,
        }
    } catch (err: any) {
        const msg = getPrismaError(err)
        return {
            success: false,
            message: msg ?? "Database Error: Failed to Create User.",
        }
    }
}

export async function editUser(id: string, prevState: any, formData: FormData) {
    const validation = UserFormSchema.omit({ password: true }).safeParse({
        username: formData.get("username"),
        email: formData.get("email"),
        role: formData.get("role"),
        memberId: formData.get("memberId"),
        profilePicture: formData.get("picture"),
    })

    if (!validation.success) {
        return {
            success: false,
            error: validation.error.flatten().fieldErrors,
            message: ``,
        }
    }

    try {
        const user = await prisma.user.update({
            where: { id },
            data: {
                email: validation.data.email,
                role: validation.data.role,
                username: validation.data.username,
                memberId:
                    validation.data.memberId === "none" || ""
                        ? null
                        : validation.data.memberId,
                profilePicture: validation.data.profilePicture,
            },
        })
        revalidatePath("/users")
        return {
            success: true,
            message: `Successfully edited user "${user.username}"`,
        }
    } catch (err: any) {
        const msg = getPrismaError(err)
        return {
            success: false,
            message: msg ?? "Database Error: Failed to Edit User.",
        }
    }
}

export async function deleteUser(id: string, prevState: any) {
    try {
        const newUser = await prisma.user.delete({
            where: { id },
        })
        revalidatePath("/users")

        return {
            success: true,
            message: `Successfully deleted user "${newUser.username}"`,
        }
    } catch (err: any) {
        const msg = getPrismaError(err)
        return {
            success: false,
            message: msg ?? "Database Error: Failed to Delete User.",
        }
    }
}

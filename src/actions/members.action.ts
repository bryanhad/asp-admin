"use server"

import { prisma } from "@/lib/db/prisma"
import getPrismaError from "@/utils/getPrismaError"
import { revalidatePath } from "next/cache"
import { z } from "zod"
import { MemberInfoState } from "../../types"

const FormSchema = z.object({
    email: z
        .string({ required_error: "Email field is required" })
        .email("Please use correct email format"),
    name: z
        .string({ required_error: "Full name field is required" })
        .min(5, "Minimum length of full name is 5 characters"),
    positionId: z.string().min(12, "Please select a position"),
    picture: z.string().nullable(),
    description: z.string().nullable(),
})

export async function createMember(
    memberInfo: MemberInfoState,
    prevState: any,
    formData: FormData,
) {
    // Validate form using Zod
    const validation = FormSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        positionId: formData.get("positionId"),
        picture: formData.get("picture"),
        description: formData.get("description"),
    })

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validation.success) {
        return {
            success: false,
            error: validation.error.flatten().fieldErrors,
            message: "Failed to Add Member",
        }
    }

    // Insert data into the database
    try {
        const newMemberData = {
            ...validation.data,
            ...memberInfo,
        }
        const newMember = await prisma.member.create({
                data: newMemberData,
            })
        // Revalidate the cache for the invoices page and redirect the user.
        revalidatePath("/members")
        return {
            success: true,
            message: `Successfully created member "${newMember.name}"`,
        }
    } catch (err: any) {
        // If a database error occurs, return a more specific error.
        console.log(err)
        const msg = getPrismaError(err)
        return {
            success: false,
            message: msg ?? "Database Error: Failed to Create Member.",
        }
    }
}

export async function editMember(
    id: string,
    memberInfo: MemberInfoState,
    prevState: any,
    formData: FormData,
) {
    // Validate form using Zod
    const validation = FormSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        positionId: formData.get("positionId"),
        picture: formData.get("picture"),
        description: formData.get("description"),
    })

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validation.success) {
        return {
            success: false,
            error: validation.error.flatten().fieldErrors,
            message: "Failed to Add Member",
        }
    }

    // Insert data into the database
    try {
        const newMemberData = {
            ...validation.data,
            ...memberInfo,
        }
        const newMember = await prisma.member.update({
            where: { id },
            data: newMemberData,
        })
        // Revalidate the cache for the invoices page and redirect the user.
        revalidatePath("/members")
        return {
            success: true,
            message: `Successfully edited member "${newMember.name}"`,
        }
    } catch (err: any) {
        // If a database error occurs, return a more specific error.
        console.log(err)
        const msg = getPrismaError(err)
        return {
            success: false,
            message: msg ?? "Database Error: Failed to Edit Member.",
        }
    }
}

export async function deleteMember(id: string, prevState: any) {
    try {
        const newMember = await prisma.member.delete({
            where: { id },
        })
        return {
            success: true,
            message: `Successfully deleted member "${newMember.name}"`,
        }
    } catch (err: any) {
        const msg = getPrismaError(err)
        return {
            success: false,
            message: msg ?? "Database Error: Failed to Delete Member.",
        }
    } finally {
        revalidatePath("/members")
    }
}

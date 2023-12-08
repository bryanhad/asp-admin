"use server"

import { prisma } from "@/lib/db/prisma"
import getPrismaError from "@/utils/getPrismaError"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

const FormSchema = z
    .string({
        required_error: "Please insert a position.",
    })
    .min(3, "Minimum length of position is 3 characters long")

export async function createPosition(prevState: any, formData: FormData) {
    // Validate form using Zod
    const validatedPosition = FormSchema.safeParse(formData.get("name"))

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedPosition.success) {
        console.log()
        return {
            success: false,
            message: validatedPosition.error.errors[0].message,
        }
    }

    // Insert data into the database
    try {
        const newPosition = await prisma.position.create({
            data: { name: validatedPosition.data },
        })
        // Revalidate the cache for the invoices page and redirect the user.
        revalidatePath("/positions")
        return {
            success: true,
            message: `Successfully created position "${newPosition.name}"`,
        }
    } catch (err:any) {
        // If a database error occurs, return a more specific error.
        const msg = getPrismaError(err)
        return {
            success: false,
            message: msg ?? "Database Error: Failed to Create Position.",
        }
    }
}

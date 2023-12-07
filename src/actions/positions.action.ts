"use server"

import { prisma } from "@/lib/db/prisma"
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
        return {
            success: false,
            errors: validatedPosition.error.flatten().fieldErrors,
            message: "Missing Fields. Failed to Create Invoice.",
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
            errors: null,
            message: `Successfully created ${newPosition.name}`,
        }
    } catch (err) {
        console.log(err)
        // If a database error occurs, return a more specific error.
        return {
            success: false,
            errors: null,
            message: "Database Error: Failed to Create Position.",
        }
    }
}

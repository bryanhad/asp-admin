"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../shadcn/form"
import { Input } from "../shadcn/input"
import { Button } from "../shadcn/button"
import Tiptap from "./Tiptap"

export default function TextEditor() {
    const formSchema = z.object({
        title: z
            .string()
            .min(5, { message: "Minimum title length is 5 characters long!" })
            .max(100, {
                message: "Maximum title length is 100 characters long :(",
            }),
        description: z
            .string()
            .min(10, {
                message: "Minimum description length is 10 characters long!",
            })
            .trim(),
    })

    type formSchemaT = z.infer<typeof formSchema>

    const form = useForm<formSchemaT>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            title: "",
            description: "",
        },
    })

    return (
        // spread the form from react-hook-form's form that we created
        <Form {...form}> 
            <form className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* RICH EDITOR */}
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => ( 
                        <FormItem>
                            <FormLabel>Body</FormLabel>
                            <FormControl>
                                {/* TIP TAP */}
                                <Tiptap 
                                    maxCharacter={3000}
                                    description={field.value}
                                    onChange={field.onChange}
                                />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

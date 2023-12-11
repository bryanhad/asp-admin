"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../shadcn/form"
import { Input } from "../../shadcn/input"
import { Button } from "../../shadcn/button"
import Tiptap from "../../tiptap/Tiptap"
import { ArticleFormSchema, ArticlesFormT } from "@/actions/articles.action"

export default function TextEditor() {
    const form = useForm<ArticlesFormT>({
        resolver: zodResolver(ArticleFormSchema),
        mode: "onChange",
        defaultValues: {
            title: "",
            body: "",
            image: "",
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
                                <Input
                                    placeholder="Your Awesome Title.."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* RICH EDITOR */}
                <FormField
                    control={form.control}
                    name="body"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Article Body</FormLabel>
                            <FormControl>
                                {/* TIP TAP */}
                                <Tiptap
                                    maxCharacter={3000}
                                    description={field.value}
                                    onChange={field.onChange}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}

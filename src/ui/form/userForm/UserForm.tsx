"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/ui/shadcn/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/ui/shadcn/form"
import { Input } from "@/ui/shadcn/input"
import { RadioGroup, RadioGroupItem } from "@/ui/shadcn/radio-group"
import { Label } from "@/ui/shadcn/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/ui/shadcn/select"
import { useFormState } from "react-dom"
import { createUser } from "@/actions/users.action"
import ErrorText from "../ErrorText"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { redirect } from "next/navigation"
import UploadPhoto from "../UploadPhoto"
import { User } from "@prisma/client"

type UserFormProps = {
    members: { id: string; name: string }[]
    data?: User
}

const UserFormSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
    role: z.enum(["ADMIN", "USER"]),
    memberId: z.string().nullable(),
})

export default function UserForm({ members, data }: UserFormProps) {
    // 1. Define your form.
    const form = useForm<z.infer<typeof UserFormSchema>>({
        resolver: zodResolver(UserFormSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            role: "USER",
            memberId: "",
        },
    })

    const [state, serverAction] = useFormState(createUser, {
        success: false,
        error: {},
        message: "",
    })

    useEffect(() => {
        if (state.success) {
            toast.success(state.message)
            redirect("/users")
        }
    }, [state.success, state.message])
    

    return (
        <Form {...form}>
            <form action={serverAction} className="space-y-8">
                <UploadPhoto picture={data?.profilePicture} />

                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="Bambang" {...field} />
                            </FormControl>
                            {state.error?.username && (
                                <ErrorText
                                    dep={state}
                                    str={state.error.username[0]}
                                />
                            )}
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="bambang@gmail.com"
                                    {...field}
                                />
                            </FormControl>
                            {state.error?.email && (
                                <ErrorText
                                    dep={state}
                                    str={state.error.email[0]}
                                />
                            )}
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Super Secret Password"
                                    type="password"
                                    {...field}
                                />
                            </FormControl>
                            {state.error?.password && (
                                <ErrorText
                                    dep={state}
                                    str={state.error.password[0]}
                                />
                            )}
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="memberId"
                    render={({ field }) => (
                        <FormItem>
                            <Select
                                name="memberId"
                                // defaultValue={data?.positionId.toString()}
                            >
                                <SelectTrigger id="positionId">
                                    <SelectValue
                                        placeholder={
                                            // positions.find(
                                            //     (el) => el.id === data?.positionId,
                                            // )?.name ??
                                            "Is User A Member?"
                                        }
                                    />
                                </SelectTrigger>
                                <SelectContent className="max-h-[12rem] overflow-y-auto">
                                    <SelectGroup>
                                        <SelectLabel>
                                            Registered Members
                                        </SelectLabel>
                                        {members.map((member) => (
                                            <SelectItem
                                                key={member.id}
                                                value={member.id.toString()}
                                            >
                                                {member.name}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Role</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    name="role"
                                    className="flex gap-4"
                                    onValueChange={field.onChange}
                                    defaultValue="USER"
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem
                                            value="USER"
                                            id="user"
                                        />
                                        <Label
                                            htmlFor="user"
                                            className="cursor-pointer"
                                        >
                                            User
                                        </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem
                                            value="ADMIN"
                                            id="admin"
                                        />
                                        <Label
                                            htmlFor="admin"
                                            className="cursor-pointer"
                                        >
                                            Admin
                                        </Label>
                                    </div>
                                </RadioGroup>
                                {/* <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value='ADMIN' />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Admin
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="USER" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      User
                    </FormLabel>
                  </FormItem>
                </RadioGroup> */}
                            </FormControl>
                            {state.error?.role && (
                                <ErrorText
                                    dep={state}
                                    str={state.error.role[0]}
                                />
                            )}
                        </FormItem>
                    )}
                />
                {state.error && state.message && (
                    <ErrorText dep={state} str={state.message} />
                )}
                <Button variant='success' type="submit">Submit</Button>
            </form>
        </Form>
    )
}

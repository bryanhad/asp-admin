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
import ErrorText from "../ErrorText"
import { useEffect } from "react"
import { toast } from "react-toastify"
import { redirect, usePathname } from "next/navigation"
import UploadPhoto from "../UploadPhoto"
import { User } from "@prisma/client"
import {
    AddUserServerActionArguments,
    EditUserServerActionArguments,
    UserServerActionFunctionReturn,
} from "../../../../types"

type ServerActionFunction = {
    (
        ...args: EditUserServerActionArguments
    ): Promise<UserServerActionFunctionReturn>
    (
        ...args: AddUserServerActionArguments
    ): Promise<UserServerActionFunctionReturn>
}

//honestly type definition below is from chat GPT, I dunno how it works.. but hey! it works for now lol :D
type ServerActionType = CallableFunction & {
    (
        ...args: Parameters<ServerActionFunction> //Paremeters extracts the parameter types from ServerActionFunction.
    ): ReturnType<ServerActionFunction> //ReturnType extracts the return type from ServerActionFunction. neat stuff.
}

type UserFormProps = {
    buttonText: string
    members: { id: string; name: string }[]
    data?: User
    serverAction: ServerActionType
}

const UserFormSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
    role: z.enum(["ADMIN", "USER"]),
    memberId: z.string().nullable(),
})

export default function UserForm({
    members,
    data,
    buttonText,
    serverAction,
}: UserFormProps) {
    const pathname = usePathname()

    // 1. Define your form.
    const form = useForm<z.infer<typeof UserFormSchema>>({
        resolver: zodResolver(UserFormSchema),
        defaultValues: {
            username: data?.username || "",
            email: data?.email || "",
            password: "",
            role: "USER",
            memberId: data?.memberId || "",
        },
    })

    const [state, formAction] = useFormState(serverAction, {
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
            <form action={formAction} className="space-y-8">
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
                {!pathname.includes('/edit') && (
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
                )}
                <FormField
                    control={form.control}
                    name="memberId"
                    render={({ field }) => (
                        <FormItem>
                                <FormLabel htmlFor="memberId">Select Member</FormLabel>

                            <Select
                                defaultValue={
                                    data?.memberId
                                        ? data?.memberId.toString()
                                        : ""
                                }
                                onValueChange={(value) => {
                                    field.value = value === "none" ? "" : value
                                }}
                                name="memberId"
                                // defaultValue={data?.positionId.toString()}
                            >
                                <SelectTrigger>
                                    <SelectValue
                                        placeholder={"Is User A Member?"}
                                    />
                                </SelectTrigger>
                                <SelectContent className="max-h-[12rem] overflow-y-auto">
                                    <SelectGroup >
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
                                        <SelectItem value="none">
                                            Not A User
                                        </SelectItem>
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
                                    defaultValue={data?.role || "USER"}
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
                {!state.success && state.message && (
                    <ErrorText dep={state} str={state.message} />
                )}
                <Button variant="success" type="submit">
                    {buttonText}
                </Button>
            </form>
        </Form>
    )
}

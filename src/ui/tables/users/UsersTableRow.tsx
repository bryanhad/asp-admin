import { User } from "@prisma/client"
import Image from "next/image"
import { TableCell, TableRow } from "@/ui/shadcn/table"
import UsersActionCell from "./UsersActionCell"

export default function UsersTableRow({ user }: { user: User }) {
    return (
        <TableRow>
            <TableCell>
                <div className="flex items-center gap-4">
                    <div className="bg-active dark:bg-active-dark grid h-[38px] w-[38px] place-content-center overflow-hidden rounded-full">
                        <Image
                            className="rounded-full object-cover"
                            src={user.profilePicture || "/noavatar.png"}
                            alt={`${user.username}'s Profile Picture`}
                            width={38}
                            height={38}
                        />
                    </div>
                    <p>{user.username}</p>
                </div>
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
                {user.createdAt
                    .toLocaleDateString("id-ID")
                    .split("/")
                    .join(" / ")}
            </TableCell>
            <TableCell>{user.memberId ? "True" : "False"}</TableCell>
            <TableCell>
                <UsersActionCell userId={user.id} />
            </TableCell>
        </TableRow>
    )
}

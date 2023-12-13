import { User } from "@prisma/client"
import { TableCell, TableRow } from "@/ui/shadcn/table"
import UsersActionCell from "./UsersActionCell"
import MiniImage from "../MiniImage"

export default function UsersTableRow({ user }: { user: User }) {
    return (
        <TableRow>
            <TableCell>
                <MiniImage
                    alt={`${user.username}'s Profile Picture`}
                    src={user.profilePicture}
                    text={user.username}
                    profile
                />
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
                {user.createdAt
                    .toLocaleDateString("id-ID")
                    .split("/")
                    .join(" / ")}
            </TableCell>
            <TableCell>
                <UsersActionCell userId={user.id} />
            </TableCell>
        </TableRow>
    )
}

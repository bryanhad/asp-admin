import { Member } from "@prisma/client"
import { TableCell, TableRow } from "@/ui/shadcn/table"
import MembersActionCell from "./MembersActionCell"
import MiniImage from "../MiniImage"

export default function MembersTableRow({ member }: { member: Member }) {
    return (
        <TableRow>
            <TableCell>
                <MiniImage
                    alt={`${member.name}'s Profile Picture`}
                    src={member.picture}
                    text={member.name}
                    profile
                />
            </TableCell>
            <TableCell>{member.email}</TableCell>
            <TableCell>
                {member.createdAt
                    .toLocaleDateString("id-ID")
                    .split("/")
                    .join("/")}
            </TableCell>
            <TableCell>
                <MembersActionCell memberId={member.id} />
            </TableCell>
        </TableRow>
    )
}

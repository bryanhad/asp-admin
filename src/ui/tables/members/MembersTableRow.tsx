import { Member } from "@prisma/client"
import Image from "next/image"
import { TableCell, TableRow } from "@/ui/shadcn/table"
import MembersActionCell from "./MembersActionCell"

export default function MembersTableRow({ member }: { member: Member }) {
    return (
        <TableRow>
            <TableCell>
                <div className="flex items-center gap-4">
                    <div className="bg-active dark:bg-active-dark grid h-[38px] w-[38px] place-content-center overflow-hidden rounded-full">
                        <Image
                            className="rounded-full object-cover"
                            src={member.picture || "/noavatar.png"}
                            alt={`${member.name}'s Profile Picture`}
                            width={38}
                            height={38}
                        />
                    </div>
                    <p>{member.name}</p>
                </div>
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

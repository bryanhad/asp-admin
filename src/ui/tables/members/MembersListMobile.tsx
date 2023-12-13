import { Member } from "@prisma/client"
import Image from "next/image"
import React from "react"
import MembersActionCell from "./MembersActionCell"

export default function MembersListMobile({ members }: { members: Member[] }) {
    return (
        <div className="flex flex-col gap-2 bg-secondary p-2 rounded-lg">
            {members.map((member) => (
                <div key={member.id} className="rounded-lg p-4 bg-background">
                    <div className="border-b pb-4">
                        <div className="flex items-center gap-3">
                            <Image
                                src={member.picture || "/noavatar.png"}
                                alt={`${member.name}'s profile Picture`}
                                height={32}
                                width={32}
                                className="rounded-full bg-slate-200 object-cover"
                            />
                            <p>{member.name}</p>
                        </div>
                        <p className="mt-2 text-sm text-slate-400">
                            {member.email}
                        </p>
                    </div>
                    <div className="pt-4 flex items-center justify-between">
                        <div className="flex flex-col text-sm sm:flex-row gap-1">
                            <p>Created At:</p>
                            <p className="text-slate-400">
                                {member.createdAt
                                    .toLocaleDateString("id-ID")
                                    .split("/")
                                    .join("/")}
                            </p>
                        </div>
                        <MembersActionCell memberId={member.id} />
                    </div>
                </div>
            ))}
        </div>
    )
}

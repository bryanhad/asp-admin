import { Member } from "@prisma/client"
import MembersActionCell from "./MembersActionCell"
import MiniImage from "../MiniImage"

export default function MembersListMobile({ members }: { members: Member[] }) {
    return (
        <div className="flex flex-col gap-2 rounded-lg bg-secondary p-2">
            {members.map((member) => (
                <div key={member.id} className="rounded-lg bg-background p-4">
                    <div className="border-b pb-4">
                        <MiniImage
                            alt={`${member.name}'s Profile Picture`}
                            src={member.picture}
                            text={member.name}
                            profile
                        />
                        <p className="mt-2 text-sm text-slate-400">
                            {member.email}
                        </p>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                        <div className="flex flex-col gap-1 text-sm sm:flex-row">
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

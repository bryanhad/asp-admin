import { User } from "@prisma/client"
import UsersActionCell from "./UsersActionCell"
import MiniImage from "../MiniImage"

export default function UsersListMobile({ users }: { users: User[] }) {
    return (
        <div className="flex flex-col gap-2 rounded-lg bg-secondary p-2">
            {users.map((user) => (
                <div key={user.id} className="rounded-lg bg-background p-4">
                    <div className="border-b pb-4">
                        <div className="flex items-center justify-between">
                            {/* MINI PROFILE */}
                            <MiniImage
                                alt={`${user.username}'s Profile Picture`}
                                src={user.profilePicture}
                                text={user.username}
                                profile
                            />
                            {/* IS MEMBER? */}
                            {user.memberId && (
                                <p className="rounded-full border px-4 py-1 text-[12px] text-secondary-foreground">
                                    Member
                                </p>
                            )}
                        </div>
                        <p className="mt-2 text-sm text-slate-400">
                            {user.email}
                        </p>
                    </div>
                    <div className="flex items-center justify-between pt-4">
                        <div className="flex flex-col gap-1 text-[12px] sm:flex-row">
                            <p>Created At:</p>
                            <p className="text-slate-400">
                                {user.createdAt
                                    .toLocaleDateString("id-ID")
                                    .split("/")
                                    .join("/")}
                            </p>
                        </div>
                        <UsersActionCell userId={user.id} />
                    </div>
                </div>
            ))}
        </div>
    )
}

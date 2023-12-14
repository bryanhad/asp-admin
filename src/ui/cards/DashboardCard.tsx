import Loading from "../Loading"
import Link from "next/link"
import { Article, Member, Position } from "@prisma/client"
import { Suspense } from "react"
import DashboardCategoryCount from "../dashboard/DashboardCategoryCount"

type CardProps = {
    title: string
    icon: React.ReactElement
}

export type CategoryMap = {
    member: Member
    position: Position
    article: Article
}

export default async function DashboardCard({
    category,
    item,
}: {
    category: keyof CategoryMap
    item: CardProps
}) {
    return (
        <Link href={`/${category}s`} className="w-full">
            <div className="flex gap-5 rounded-lg bg-secondary p-5 duration-300 hover:brightness-95 dark:hover:brightness-110">
                {item.icon}
                <div className="flex flex-col gap-5">
                    <span className="">{item.title}</span>
                    <span className="text-xl font-bold">
                        <Suspense fallback={<Loading className="text-[26px]"/>}>
                            <DashboardCategoryCount category={category} />
                        </Suspense>
                    </span>
                </div>
            </div>
        </Link>
    )
}

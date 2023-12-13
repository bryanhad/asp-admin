import DashboardCard from "@/ui/cards/DashboardCard"
import { IoIosBriefcase } from "react-icons/io"
import { LuUsers } from "react-icons/lu"
import { HiNewspaper } from "react-icons/hi2"

import React from "react"
import { fetchDashboardInfo } from "@/lib/data"

export default async function DashboardCards() {
    const {memberCount, positionCount, articleCount} = await fetchDashboardInfo()
    return (
        <div className="flex flex-col gap-5 md:flex-row">
            <DashboardCard
                item={{
                    title: "Members",
                    change: 200,
                    number: memberCount,
                    icon: <IoIosBriefcase />,
                }}
            />
            <DashboardCard
                item={{
                    title: "Positions",
                    change: 200,
                    number: positionCount,
                    icon: <LuUsers />,
                }}
            />
            <DashboardCard
                item={{
                    title: "Articles",
                    change: 200,
                    number: articleCount,
                    icon: <HiNewspaper />,
                }}
            />
        </div>
    )
}

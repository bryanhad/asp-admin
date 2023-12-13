import DashboardCard from "@/ui/cards/DashboardCard"
import { IoIosBriefcase } from "react-icons/io"
import { LuUsers } from "react-icons/lu"
import { HiNewspaper } from "react-icons/hi2"

import React from "react"

export default async function DashboardCards() {
    return (
        <div className="flex flex-col gap-5 md:flex-row">
            <DashboardCard
                category="member"
                item={{
                    title: "Members",
                    icon: <IoIosBriefcase />,
                }}
            />
            <DashboardCard
                category="position"
                item={{
                    title: "Positions",
                    icon: <LuUsers />,
                }}
            />
            <DashboardCard
                category='article'
                item={{
                    title: "Articles",
                    icon: <HiNewspaper />,
                }}
            />
        </div>
    )
}

import DashboardCard from "@/ui/cards/DashboardCard"
import { IoIosBriefcase } from "react-icons/io"
import { LuUsers } from "react-icons/lu"
import { HiNewspaper } from "react-icons/hi2"

import React from "react"

export default function DashboardCards() {
    return (
        <div className="flex flex-col gap-5 md:flex-row">
            <DashboardCard
                item={{
                    title: "Members",
                    change: 200,
                    number: 29,
                    icon: <IoIosBriefcase />,
                }}
            />
            <DashboardCard
                item={{
                    title: "Positions",
                    change: 200,
                    number: 12,
                    icon: <LuUsers />,
                }}
            />
            <DashboardCard
                item={{
                    title: "Articles",
                    change: 200,
                    number: 13,
                    icon: <HiNewspaper />,
                }}
            />
        </div>
    )
}

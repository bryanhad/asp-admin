type CardProps = {
    item: {
        title: string
        number: number
        change: number
        icon: React.ReactElement
    }
}

export default function DashboardCard({ item }: CardProps) {
    return (
        <div className="bg-secondary flex w-full cursor-pointer gap-5 rounded-lg p-5 hover:brightness-95 dark:hover:brightness-110">
            {item.icon}
            <div className="flex flex-col gap-5">
                <span className="">{item.title}</span>
                <span className="text-xl font-bold">{item.number}</span>
                <span className="text-sm font-light">
                    <span className="text-green-500">{item.change}%</span>{" "}
                    {item.change > 0 ? "more" : "less"} mantab lah brok
                </span>
            </div>
        </div>
    )
}

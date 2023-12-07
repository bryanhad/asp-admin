import { MdSupervisedUserCircle } from "react-icons/md"

type CardProps = {
    item: {
        title: string
        number: number
        change: number
    }
}

export default function DashboardCard({ item }: CardProps) {
    return (
        <div className="dark:bg-bg-soft-dark bg-bg-soft flex gap-5 rounded-lg p-5 w-full hover:brightness-95 dark:hover:brightness-110 cursor-pointer">
            <MdSupervisedUserCircle size={24} />
            <div className="flex flex-col gap-5">
                <span className="">{item.title}</span>
                <span className="text-xl font-bold">{item.number}</span>
                <span className="text-sm font-light">
                    <span className="text-green-500">{item.change}%</span>{" "}
                    {item.change > 0 ? "more" : "less"} than previous week
                </span>
            </div>
        </div>
    )
}

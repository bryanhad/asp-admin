import DashboardCard from "@/ui/cards/DashboardCard"

export default function DashboardPage() {
    return (
        <>
            <div className="flex flex-col gap-5 md:flex-row">
                <DashboardCard
                    item={{ title: "bruh", change: 200, number: 20 }}
                />
                <DashboardCard
                    item={{ title: "bruh", change: 200, number: 20 }}
                />
                <DashboardCard
                    item={{ title: "bruh", change: 200, number: 20 }}
                />
            </div>
        </>
    )
}

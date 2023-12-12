import { TbDatabaseSearch } from "react-icons/tb"
import { Link } from "../Link"

export default function NoDataFound({
    desc,
    buttonText,
    href,
    extraDesc,
}: {
    desc: string
    buttonText?: string
    href?: string
    extraDesc?: string
}) {
    return (
        <div className="bg-bg-soft dark:bg-bg-soft-dark flex flex-[1] items-center justify-center px-6 text-center text-slate-300 dark:text-slate-600 ">
            <section className="flex flex-col items-center gap-1 pb-12">
                <div className="text-[120px] max-lg:text-[80px]">
                    <TbDatabaseSearch />
                </div>
                <p className="text-4xl font-bold max-lg:text-2xl">
                    No Data found
                </p>
                <p className="text-xl max-lg:text-lg">{desc}</p>
                {extraDesc && (
                    <p className="text-xl max-lg:text-lg">{extraDesc}</p>
                )}
                {buttonText && href && (
                    <Link variant="success" href={href} className="mt-2">
                        {buttonText}
                    </Link>
                )}
            </section>
        </div>
    )
}

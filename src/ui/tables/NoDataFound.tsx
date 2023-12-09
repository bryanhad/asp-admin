import { TbDatabaseSearch } from "react-icons/tb"
import { Button } from "../form/Button"

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
        <div className="flex flex-[1] items-center justify-center bg-bg-soft px-6 text-center text-slate-300 dark:bg-bg-soft-dark dark:text-slate-600 ">
            <section className="flex flex-col items-center gap-1 pb-12">
                <div className="text-[120px] max-lg:text-[80px]">
                    <TbDatabaseSearch />
                </div>
                <h1 className="text-4xl font-bold max-lg:text-2xl">
                    No Data found
                </h1>
                <p className="text-xl max-lg:text-lg">{desc}</p>
                {extraDesc && (
                    <p className="text-xl max-lg:text-lg">{extraDesc}</p>
                )}
                {buttonText && href && (
                    <Button
                        isLink
                        href={href}
                        className="mt-2"
                        buttonType="add"
                    >
                        {buttonText}
                    </Button>
                )}
            </section>
        </div>
    )
}

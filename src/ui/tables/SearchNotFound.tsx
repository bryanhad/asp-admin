import { TbDatabaseSearch } from "react-icons/tb"

export default function SearchNotFound({
    searchTerm,
    query,
}: {
    searchTerm: string
    query: string
}) {
    return (
        <div className="flex flex-[1] items-center justify-center bg-bg-soft px-6 text-center text-slate-300 dark:bg-bg-soft-dark dark:text-slate-600 ">
            <section className="flex flex-col items-center gap-1 pb-12">
                <div className="text-[120px] max-lg:text-[80px]">
                    <TbDatabaseSearch />
                </div>
                <h1 className="text-4xl font-bold max-lg:text-2xl">
                    No Result Found
                </h1>
                <p className="text-xl max-lg:text-lg">
                    {searchTerm} &lsquo;
                    <span className="mr-1 italic">{query}</span>&rsquo; is not
                    found
                </p>
            </section>
        </div>
    )
}

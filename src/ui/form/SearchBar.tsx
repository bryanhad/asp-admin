"use client"
import { FiSearch } from "react-icons/fi"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"
import { Input } from "../shadcn/input"

export default function SearchBar({ placeholder }: { placeholder: string }) {
    // useSearchParams:
    // "/dashboard/invoices?page=1&query=pending"
    // would look like this: {page: '1', query: 'pending'}
    const searchParams = useSearchParams()

    // usePathname:
    // Lets you read the current URL's pathname
    const pathname = usePathname()
    const { replace } = useRouter()

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams) //URLSearchParams is a WebAPI for manipulating URL query params
        // instead of using complex string literal, it will just do it for you! e.g.: "?page=1&query=a"

        params.set("page", "1") //when user type their search, resets the page param to 1.
        if (term) {
            params.set("q", term)
        } else {
            params.delete("q")
        }
        replace(`${pathname}?${params.toString()}`)
    }, 300)

    return (
        <div className="relative flex">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <Input
                id="q"
                name="q"
                placeholder={placeholder}
                onChange={(e) => {
                    handleSearch(e.target.value)
                }}
                // so the input will be in sync base on url
                defaultValue={searchParams.get("q")?.toString()}
                className="peer w-full pl-10 py-7"
            />
            <FiSearch className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-slate-700" />
        </div>
    )
}

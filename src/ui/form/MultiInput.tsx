"use client"
import {
    Dispatch,
    SetStateAction,
    KeyboardEvent,
    useState,
    ChangeEvent,
    useRef,
} from "react"
import { ButtonIcon } from "./ButtonIcon"
import Label from "./Label"
import { isNonEmptyArray } from "@/lib/utils"
import ErrorText from "./ErrorText"

type GenericState = {
    [key: string]: Array<string> | never[]
}

type MultiInputProps<T extends GenericState> = {
    containerClassName?:string
    setDataState: Dispatch<SetStateAction<T>>
    state: T
    id: keyof T
}

// This is the first time that made use of generics! really cool!
// now this component is reusable as heck and also with type support! COOOOOLLLL
export default function MultiInput<T extends GenericState>({
    containerClassName,
    setDataState,
    state,
    id,
}: MultiInputProps<T>) {
    const ref = useRef<HTMLInputElement>(null)
    const [input, setInput] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [entered, setEntered] = useState(false)

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value)
    }

    function handleEnter(e: KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            e.preventDefault()
            const addedInput = addInput()
            if (addedInput === false) {
                return
            }
        }
    }

    function handleClick(e: React.MouseEvent<HTMLElement>) {
        const addedInput = addInput()
        if (addedInput === false) {
            return
        }
        if (ref.current) {
            ref.current.focus()
        }
    }

    function addInput() {
        setEntered((prev) => !prev)
        if (!input) return false
        if (isNonEmptyArray(state[id])) {
            const isNotEmptyArray = state[id] as Array<string>

            const isIncluded = isNotEmptyArray.includes(input)
            if (isIncluded) {
                setError(`"${input}" is already added.`)
                return false
            }
        }
        setDataState((prev) => {
            return {
                ...prev,
                [id]: [...prev[id], input],
            }
        })
        setInput("")
        setError("")
    }

    function handleDelete(el: string) {
        if (error) {
            const prevInput = error.split('"')[1]
            if (el === prevInput) {
                setError("")
            }
        }
        setDataState((prev) => {
            return {
                ...prev,
                [id]: prev[id].filter((str) => str !== el),
            }
        })
    }

    return (
        <div className={`flex flex-col gap-2 ${containerClassName}`}>
            <div className="flex">
                <Label htmlFor={id.toString()}>
                    <>
                        <span className="capitalize">{id.toString()}</span>
                        <span className="ml-2 italic text-slate-300">
                            (Press enter to submit)
                        </span>
                    </>
                </Label>
            </div>
            <div className="text-input-color">
                <section className="group flex rounded-lg border border-focus ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                    <input
                        size={1}
                        ref={ref}
                        className="text-input-color flex-1 rounded-l-lg bg-transparent p-4 focus:outline-none"
                        type="text"
                        id={id.toString()}
                        value={input}
                        onChange={handleChange}
                        onKeyDown={handleEnter}
                    />
                    <button
                        onClick={handleClick}
                        className="rounded-r-lg bg-blue-600 px-6 text-white"
                        type="button"
                    >
                        ADD
                    </button>
                </section>
                {error && <ErrorText dep={entered} str={error} />}

                {state[id].length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-3">
                        {state[id].map((el, i) => (
                            <li
                                key={i}
                                onClick={() => handleDelete(el)}
                                className="flex max-w-max cursor-pointer select-none items-center gap-2 rounded-full border border-focus py-1 pl-2 pr-4 dark:border-focus-dark"
                            >
                                <ButtonIcon icon="small-delete" type="button" />
                                {el}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

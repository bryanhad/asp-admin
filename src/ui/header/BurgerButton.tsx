import { useNavbarContext } from "@/contexts/navbar.context"
import { AiOutlineMenu } from "react-icons/ai"
import { CgClose } from "react-icons/cg"
export default function BurgerButton() {
    const { isNavOpen, setIsNavOpen } = useNavbarContext()
    return (
        <button onClick={() => setIsNavOpen((prev) => !prev)} className="dark:hover:bg-active-dark hover:bg-active dark:border-active-dark dark:bg-bg-soft-dark rounded-lg bg-white p-4 text-xl duration-300 dark:border lg:hidden">
            {isNavOpen ? <CgClose /> : <AiOutlineMenu />}
        </button>
    )
}

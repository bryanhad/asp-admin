import { useNavbarContext } from "@/contexts/navbar.context"
import { AiOutlineMenu } from "react-icons/ai"
import { CgClose } from "react-icons/cg"
export default function BurgerButton() {
    const { isNavOpen, setIsNavOpen } = useNavbarContext()
    return (
        <button onClick={() => setIsNavOpen((prev) => !prev)} className="dark:border-active-dark bg-background rounded-lg p-4 text-xl duration-300 border lg:hidden">
            {isNavOpen ? <CgClose /> : <AiOutlineMenu />}
        </button>
    )
}

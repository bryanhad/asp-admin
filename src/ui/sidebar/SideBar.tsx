import Image from "next/image"
import { sidebarLinks } from "./sidebarLinks"
import SideBarLink from "./SideBarLink"
import { MdLogout } from "react-icons/md"
import Logo from "../Logo"

export default function Sidebar() {
    return (
        <nav className="sticky top-[40px]">
            {/* LOGO */}
            <div className="mb-10">
                <Logo />
            </div>
            {/* Menu */}
            <ul>
                {sidebarLinks.map((item) => (
                    <li key={item.title}>
                        <span className="dark:text-text-soft-dark text-text-soft my-3 text-[13px] font-bold">
                            {item.title}
                        </span>
                        {item.list.map((link) => (
                            <SideBarLink link={link} key={link.title} />
                        ))}
                    </li>
                ))}
            </ul>
            {/* LOGOUT */}
            <form
                action={async () => {
                    "use server"
                    //   await signOut();
                }}
            >
                <button className="dark:hover:bg-active-dark  my-1 flex w-full items-center gap-3 rounded-lg p-5">
                    <MdLogout />
                    Logout
                </button>
            </form>
        </nav>
    )
}

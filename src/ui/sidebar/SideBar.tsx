import Image from "next/image"
import { sidebarLinks } from "./sidebarLinks"
import SideBarLink from "./SideBarLink"
import { MdLogout } from "react-icons/md"

export default function Sidebar() {
    const user = { img: "", username: "Brock" }

    return (
        <nav className="sticky top-[40px]">
            {/* USER */}
            <div className="mb-10 flex items-center gap-5">
                <Image
                    className="rounded-full object-cover"
                    src={"/noavatar.png"}
                    alt=""
                    width="50"
                    height="50"
                />
                <div className="flex flex-col">
                    <span className="font-bold">{user.username}</span>
                    <span className="text-textSoft text-sm">Administrator</span>
                </div>
            </div>
            {/* Menu */}
            <ul>
                {sidebarLinks.map((item) => (
                    <li key={item.title}>
                        <span className="text-textSoft my-3 text-[13px] font-bold">
                            {item.title}
                        </span>
                        {item.list.map((link) => (
                            <SideBarLink link={link} key={link.title} />
                        ))}
                    </li>
                ))}
            </ul>
            <form
                action={async () => {
                    "use server"
                    //   await signOut();
                }}
            >
                <button className="dark:hover:bg-active my-1 flex w-full items-center gap-3 rounded-lg p-5 dark:text-white ">
                    <MdLogout />
                    Logout
                </button>
            </form>
        </nav>
    )
}

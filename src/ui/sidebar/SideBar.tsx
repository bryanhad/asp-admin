import { sidebarLinks } from "./sidebarLinks"
import SideBarLink from "./SideBarLink"
import Logo from "../Logo"
import SignOutButton from "../SignOutButton"

export default function Sidebar() {
    return (
        <nav className="sticky top-[20px] text-secondary-foreground">
            {/* LOGO */}
            <div className="mb-10">
                <Logo />
            </div>
            {/* Menu */}
            <ul>
                {sidebarLinks.map((item) => (
                    <li key={item.title}>
                        <span className="my-3 text-[13px] font-bold">
                            {item.title}
                        </span>
                        {item.list.map((link) => (
                            <SideBarLink link={link} key={link.title} />
                        ))}
                    </li>
                ))}
            </ul>
            {/* LOGOUT */}
            <SignOutButton />
        </nav>
    )
}

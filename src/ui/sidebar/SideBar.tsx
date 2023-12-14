import { sidebarLinks } from "./sidebarLinks"
import SideBarLink from "./SideBarLink"
import Logo from "../Logo"
import SignOutButton from "../SignOutButton"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOption"

export default async function Sidebar() {
    const session = await getServerSession(authOptions)
    if (!session) return <p>bruh</p>

    const filteredSideBarLinks =
        session.user.role === "ADMIN"
            ? sidebarLinks
            : sidebarLinks.map((section) => { //if the user is not of role 'ADMIN'
                  if (section.title === "Pages") {
                      section.list = section.list.filter(
                          (link) => link.title !== "Users",
                      )
                  }
                  return section
              })

    return (
        <nav className="sticky top-[20px] text-secondary-foreground">
            {/* LOGO */}
            <div className="mb-10">
                <Logo />
            </div>
            {/* Menu */}
            <ul>
                {filteredSideBarLinks.map((item) => (
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

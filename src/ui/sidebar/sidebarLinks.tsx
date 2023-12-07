import { MdSpaceDashboard } from "react-icons/md";
import { IoIosBriefcase } from "react-icons/io";
import { LuUsers } from "react-icons/lu";
import { LuNetwork } from "react-icons/lu";
import { HiNewspaper } from "react-icons/hi2";
import { IoIosSettings } from "react-icons/io";


export const sidebarLinks = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/",
          icon: <MdSpaceDashboard />,
        },
        {
          title: "Members",
          path: "/members",
          icon: <IoIosBriefcase />,
        },
        {
          title: "Users",
          path: "/users",
          icon: <LuUsers />,
        },
        {
          title: "Positions",
          path: "/positions",
          icon: <LuNetwork />,
        },
        {
          title: "Articles",
          path: "/articles",
          icon: <HiNewspaper />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/settings",
          icon: <IoIosSettings />,
        },
      ],
    },
  ];
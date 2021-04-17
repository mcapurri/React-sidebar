import React from "react";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text",
    },
    {
        title: "Profile",
        path: "/profile",
        icon: <CgIcons.CgProfile />,
        cName: "nav-text",
    },
    {
        title: "Logout",
        path: "/logout",
        icon: <AiIcons.AiOutlineLogout />,
        cName: "nav-text",
    },
];

import { type FC } from "react";
import { Email } from "@/assets/icons";
type IconType = FC<{ size?: number; active?: boolean }>;

export type MenuItem = {
    name: string;
    icon?: IconType;
    path?: string;
    subItems?: {
        name: string;
        path?: string;

    }[];
}

function MenuData(): MenuItem[] {
    const menuData: MenuItem[] = [
        {
            name: "Dashboard",
            icon: Email,
            path: "/dashboard",
        },
        {
            name: "User Profile",
            icon: Email,
            path: "/user_profile",
        },
        {
            name: "Forms",
            icon: Email,
            subItems: [
                { name: "Form Elements", path: "/forms/form_elements" },
            ],
        },
        {
            name: "Tables",
            icon: Email,
            subItems: [
                { name: "Basic Tables", path: "/tables/basic_tables" },
            ],
        },

    ]

    return menuData;
}

export default MenuData
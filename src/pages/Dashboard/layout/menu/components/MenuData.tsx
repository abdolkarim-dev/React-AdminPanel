import { type FC } from "react";
import {
  BoxCubeIcon,
  CalenderIcon,
  ChevronDownIcon,
  GridIcon,
  HorizontaLDots,
  ListIcon,
  PageIcon,
  PieChartIcon,
  PlugInIcon,
  TableIcon,
  UserCircleIcon,
} from "@/assets/icons";

type IconType = FC<{ size?: number; active?: boolean }>;

export type MenuItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: {
    name: string;
    path?: string;
  }[];
};

function MenuData(): MenuItem[] {
  const menuData: MenuItem[] = [
    {
      name: "Dashboard",
      icon: <GridIcon />,
      path: "/dashboard",
    },
    {
      name: "User Profile",
      icon: <UserCircleIcon />,
      path: "/user_profile",
    },
    {
      name: "Forms",
      icon: <ListIcon />,
      subItems: [{ name: "Form Elements", path: "/forms/form_elements" }],
    },
    {
      name: "Tables",
      icon: <TableIcon />,
      subItems: [{ name: "Basic Tables", path: "/tables/basic_tables" }],
    },
    {
      name: "Elements",
      icon: <BoxCubeIcon />,
      subItems: [
        { name: "Alerts", path: "/elements/alerts" },
        { name: "Buttons", path: "/elements/buttons" },
        { name: "Badge", path: "/elements/badges" },
        { name: "Avatar", path: "/elements/avatars" },
        { name: "Images", path: "/elements/images" },
        { name: "Videos", path: "/elements/videos" },
      ],
    },
    {
      name: "Charts",
      icon: <PieChartIcon />,
      subItems: [
        { name: "Bar Chart", path: "/charts/bar_chart" },
        { name: "Area Chart", path: "/charts/area_chart" },
        { name: "Line Chart", path: "/charts/line_chart" },
      ],
    },
  ];

  return menuData;
}

export default MenuData;

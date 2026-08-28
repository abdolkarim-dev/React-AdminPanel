import { use, useEffect, useState } from "react";
import type { JSX } from "react/jsx-runtime";
import MenuData, { type MenuItem } from "./components/MenuData";
import { Link, useLocation, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HeaderLogo from "@/assets/images/HeaderSite/Header.png";
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
function DesktopMenu(): JSX.Element {
  const menuItems = MenuData();
  const location = useLocation();

  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const isItemActive = (item: MenuItem) => {
    if (item.path && item.path === location.pathname) return true;
    if (item.subItems) {
      return item.subItems.some(
        (sub: any) =>
          sub.path === location.pathname ||
          sub.subItems?.some((child: any) => child.path === location.pathname),
      );
    }
    return false;
  };

  useEffect(() => {
    const newOpen: Record<string, boolean> = {};
    menuItems.forEach((item) => {
      if (isItemActive(item) && item.subItems) {
        newOpen[item.name] = true;
      }
    });
    setOpenMenus((prev) => ({ ...prev, ...newOpen }));
  }, [location.pathname]);

  const toggleMenu = (name: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className=" ">
      <div className="flex flex-col top-0 px-5 left-0 z-50 h-screen lg:mt-0  bg-white  text-gray-900   transition-all duration-300 ease-in-out   border-r border-gray-200">
        <header className="mt-5 ml-1">
          <img
            className="dark:hidden"
            src={HeaderLogo}
            alt="Logo"
            width={150}
            height={40}
          />
          <div className="mt-3 mb-1">
            <span className="text-[12px] text-gray-400">MENU</span>
          </div>
        </header>
        {menuItems.map((item, index) => {
          const isOpen = !!openMenus[item.name];
          let hasChildren = !!item.subItems?.length;
          const active = isItemActive(item);
          return (
            <div
              key={index}
              className=" flex justify-center gap-1  flex-col items-start  "
            >
              {hasChildren ? (
                // Item Sub Menu
                <div
                  onClick={() => toggleMenu(item.name)}
                  className={`flex items-center cursor-pointer gap-3 py-1 w-60`}
                >
                  <button
                    className={`menu-item flex gap-3 items-center w-full  ${active || isOpen ? "menu-item-active " : "menu-item-inactive"}`}
                  >
                    <span
                      className={`menu-item-icon-size  ${
                        active || isOpen
                          ? "menu-item-icon-active"
                          : "menu-item-icon-inactive"
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span className="text-md font-medium"> {item.name}</span>

                    <span
                      className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-brand-500" : "text-gray-400"
                      }`}
                    >
                      <ChevronDownIcon />
                    </span>
                  </button>
                </div>
              ) : (
                // Item Menu
                <NavLink
                  to={item.path!}
                  className={({ isActive }) =>
                    `flex flex-col menu-item mb-1   ${
                      isActive ? "menu-item-active" : "menu-item-inactive"
                    }`
                  }
                >
                  <div className="flex  items-center justify-start w-full gap-3">
                    <span
                      className={`menu-item-icon-size ${
                        active
                          ? "menu-item-icon-active"
                          : "menu-item-icon-inactive"
                      }`}
                    >
                      {item.icon}
                    </span>
                    {item.name}
                  </div>
                </NavLink>
              )}
              {/* item subItem */}
              {hasChildren && isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden w-full   "
                >
                  {item.subItems?.map((sub) => {
                    return (
                      <div key={sub.name} className="flex flex-col">
                        <NavLink
                          to={sub.path!}
                          className={({ isActive }) =>
                            `cursor-pointer ml-9  menu-dropdown-item ${
                              isActive
                                ? "menu-dropdown-item-active"
                                : "menu-dropdown-item-inactive"
                            }`
                          }
                        >
                          {sub.name}
                        </NavLink>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DesktopMenu;

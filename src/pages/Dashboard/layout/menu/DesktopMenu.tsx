import { use, useEffect, useState } from "react";
import type { JSX } from "react/jsx-runtime";
import MenuData, { type MenuItem } from "./components/MenuData";
import { Link, useLocation, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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
    <div>
      <header></header>
      {menuItems.map((item, index) => {
        const isOpen = !!openMenus[item.name];
        let hasChildren = !!item.subItems?.length;
        const active = isItemActive(item);
        return (
          <div
            key={item.name}
            className=" flex justify-center gap-3 menu-item flex-col items-start "
          >
           
            {hasChildren ? (
              // Item Sub Menu
              <div
                onClick={() => toggleMenu(item.name)}
                className={`flex items-center w-full cursor-pointer gap-3 ${active || isOpen ? "menu-item-active " : "menu-item-inactive"} py-1   `}
              >
                <button
                  className={` flex gap-3 items-center ${active || isOpen ? "menu-item-active " : "menu-item-inactive"}`}
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
                  {item.name}
                </button>

                <span
                  className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-brand-500" : "text-gray-400"
                  }`}
                >
                  <ChevronDownIcon />
                </span>
              </div>
            ) : (
              // Item Menu
              <NavLink
                to={item.path!}
                className={({ isActive }) =>
                  `flex flex-col ${
                    isActive ? "menu-item-active" : "menu-item-inactive"
                  }`
                }
              >
                <div className="flex  items-center justify-center gap-3">
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
                          `cursor-pointer ml-9 ${
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
  );
}

export default DesktopMenu;

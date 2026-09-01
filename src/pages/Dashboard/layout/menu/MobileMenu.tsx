import { use, useEffect, useState } from "react";
import type { JSX } from "react/jsx-runtime";
import MenuData, { type MenuItem } from "./components/MenuData";
import { Link, useLocation, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HeaderLogo from "@/assets/images/HeaderSite/Header.png";
import HeaderLogoIcon from "@/assets/images/HeaderSite/HeaderIcon.png";
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
import { useSidebar } from "@/contexts/SidebarContext";
import { div } from "framer-motion/client";
function MobileMenu(): JSX.Element {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const showMenu = isExpanded || isHovered || isMobileOpen;
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
    <AnimatePresence>
      {isMobileOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-[66px] !bg-white left-0 h-full z-999999"
        >
          <div
            className={`   flex flex-col top-0 px-5 left-0  h-screen lg:mt-0  bg-white  text-gray-900  
            transition-all duration-300 ease-in-out   border-r border-gray-200 
            ${
              isExpanded || isMobileOpen
                ? "w-[290px]"
                : isHovered
                  ? "w-[290px]"
                  : "w-[90px]"
            }
            ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0`}
            onMouseEnter={() => !isExpanded && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex-shrink-0 pt-2">
              <header className="ml-1">
                {/* {showMenu ? (
                  <div className="mt-3">
                    <img
                      className="dark:hidden"
                      src={HeaderLogo}
                      alt="Logo"
                      width={150}
                      height={40}
                    />
                  </div>
                ) : (
                  <div className="mt-2">
                    <img
                      className="dark:hidden"
                      src={HeaderLogoIcon}
                      alt="Logo"
                      width={40}
                      height={40}
                    />
                  </div>
                )} */}

                <div className={`mt-3 mb-1  ${showMenu ? "" : "ml-1"}`}>
                  <span className="text-[12px] text-gray-400">MENU</span>
                </div>
              </header>
            </div>
            <div className="flex-1 overflow-y-auto pb-4">
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
                          <span
                            className={`text-md font-medium ${
                              showMenu ? "block" : "hidden"
                            }`}
                          >
                            {item.name}
                          </span>

                          {showMenu && (
                            <span
                              className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                                isOpen
                                  ? "rotate-180 text-brand-500"
                                  : "text-gray-400"
                              }`}
                            >
                              <ChevronDownIcon />
                            </span>
                          )}
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
                          {showMenu && (
                            <span className="text-md font-medium">
                              {item.name}
                            </span>
                          )}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;

import { useEffect, useState } from "react";
import type { JSX } from "react/jsx-runtime";
import MenuData, { type MenuItem } from "./components/MenuData";
import { Link, useLocation, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function DesktopMenu(): JSX.Element {
  const menuItems = MenuData();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [expandedMenu, setExpandedMenu] = useState<Record<number, boolean>>({});
  useEffect(() => {
    console.log(expandedMenu);
  }, [expandedMenu]);
  return (
    <div>
      {menuItems.map((item, index) => {
        const isOpen = openMenu === item.name;
        let hasChildren = null;
        if (item.subItems) {
          hasChildren = item.subItems?.length > 0;
        }

        return (
          <div
            key={item.name}
            className=" flex   justify-center gap-3 menu-item flex-col items-start"
          >
            {hasChildren ? (
              <button
                onClick={() => {
                  setOpenMenu(isOpen ? null : item.name);
                  setExpandedMenu(() => ({
                    [index]: true,
                  }));
                }}
                className={` flex gap-3 ${isOpen ? "menu-item-active " : "menu-item-inactive"}`}
              >
                <span
                  className={`menu-item-icon-size  ${
                    isOpen ? "menu-item-icon-active" : "menu-item-icon-inactive"
                  }`}
                >
                  {item.icon}
                </span>
                {item.name}
              </button>
            ) : (
              <NavLink
                onClick={() => {
                  setOpenMenu(isOpen ? null : item.name);
                  setExpandedMenu(() => ({}));
                }}
                className={` flex flex-col ${isOpen ? "menu-item-active" : "menu-item-inactive"}`}
                to={item.path!}
              >
                <div className="flex  items-center justify-center gap-3">
                  <span
                    className={`menu-item-icon-size  ${
                      isOpen
                        ? "menu-item-icon-active"
                        : "menu-item-icon-inactive"
                    }`}
                  >
                    {item.icon}
                  </span>
                  {item.name}{" "}
                </div>
              </NavLink>
            )}
            {item.subItems && expandedMenu[index] && (
              <motion.div>
                {item.subItems?.map((sub) => {
                  return (
                    <div key={sub.name} className="flex flex-col">
                      <NavLink
                        to={sub.path!}
                        onClick={() => setOpenMenu(isOpen ? null : sub.name)}
                        className={`${isOpen ? "menu-dropdown-item-inactive" : "menu-dropdown-item-active"} cursor-pointer ml-9`}
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

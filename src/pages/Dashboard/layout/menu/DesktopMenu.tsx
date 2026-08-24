import type { JSX } from "react/jsx-runtime";
import MenuData, { type MenuItem } from "./components/MenuData";
import { useState } from "react";

function DesktopMenu(): JSX.Element {
    const menuItems = MenuData();

    return (<div>
        {menuItems.map((items, index) => {

            return (
                <div key={index}>
                    <div>
                        {items.name}
                    </div>

                </div>
            )
        })}
    </div>)
}

export default DesktopMenu;
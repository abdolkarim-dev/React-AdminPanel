
import { Fragment } from "react/jsx-runtime";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";


function MainMenu() {

    return (
        <Fragment>
            <div className="hidden lg:block">
                <DesktopMenu />
            </div>
             <div className="lg:hidden">
                <MobileMenu />
            </div>  
        </Fragment>
    )
}

export default MainMenu;
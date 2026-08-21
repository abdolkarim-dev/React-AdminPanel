
import { Fragment } from "react/jsx-runtime";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";


function MainHeader() {

    return (
        <Fragment>
            <div className="hidden lg:block">
                <DesktopHeader />
            </div>
            <div className="lg:hidden">
                <MobileHeader />
            </div>
        </Fragment>
    )
}

export default MainHeader;
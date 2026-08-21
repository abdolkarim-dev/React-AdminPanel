import type { JSX } from "react/jsx-runtime";

function DesktopHeader(): JSX.Element {
    return (

        <header className="sticky top-0 z-99999 text-c">
            <div>
                <div>
                    <div>
                        icon
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                </div>
                <div>
                    <div>
                        darkmode
                    </div>
                    <div>
                        notifation
                    </div>
                    <div>
                        profile
                    </div>
                </div>

            </div>
        </header>
    )
}


export default DesktopHeader;
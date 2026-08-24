import type { JSX } from "react/jsx-runtime";

function DesktopHeader(): JSX.Element {
    return (

        <header className="sticky top-0 z-99999 text-c">
            <div className="flex items-center gap-4">
                <div className="flex">
                    <div>
                        icon
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                </div>
                <div className="flex gap-3">
                    <div>
                        dark mode
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
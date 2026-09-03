import MainHeader from "./header/MainHeader";
import MainMenu from "./menu/MainMenu";
import { Outlet } from "react-router";

interface Props {
  children: React.ReactNode;
}

function DashboardLayout({ children }: Props) {
  return (
    <div className="h-screen flex bg-soft overflow-hidden">
      <MainMenu />

      <main className="flex flex-col flex-1 overflow-hidden">
        <MainHeader />
        <div className="flex-1 overflow-auto custom-scrollbar ">
          <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;

import MainHeader from "./header/MainHeader";
import MainMenu from "./menu/MainMenu";
interface Props {
  children: React.ReactNode;
}
function DashboardLayout({ children }: Props) {
  return (
    <div className="h-screen flex bg-soft overflow-hidden">
      <MainMenu />

      <main className="flex flex-col flex-1 overflow-hidden">
        <MainHeader />
        <div className="flex-1 overflow-auto custom-scrollbar">{children}</div>
      </main>
    </div>
  );
}

export default DashboardLayout;

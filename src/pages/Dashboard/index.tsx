import { Route, Routes } from "react-router-dom";
import type { JSX } from "react";
import Home from "./pages/Home";
import Forms from "./pages/Forms";
import Tables from "./pages/Tables";
import UserProfile from "./pages/UserProfile";
import DashboardLayout from "./layout/DashboardLayout";
import { SidebarProvider } from "@/contexts/SidebarContext";
import Alerts from "./pages/Elements/Alerts";
import Buttons from "./pages/Elements/Buttons";
import Badges from "./pages/Elements/Badges";
import Avatars from "./pages/Elements/Avatars";
import Images from "./pages/Elements/Images";
import Videos from "./pages/Elements/Videos";

function Dashboard(): JSX.Element {
  return (
    <SidebarProvider>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/user_profile" element={<UserProfile />} />
          <Route path="/forms/form_elements" element={<Forms />} />
          <Route path="/tables/basic_tables" element={<Tables />} />
          <Route path="/elements/buttons" element={<Buttons />} />
        </Routes>
      </DashboardLayout>
    </SidebarProvider>
  );
}

export default Dashboard;

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
import LineChartOne from "@/components/Charts/LineChartOne";
import LineChartTwo from "@/components/Charts/LineChartTwo";
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
          {/* Elements */}
          <Route path="/elements/Alerts" element={<Alerts />} />
          <Route path="/elements/Buttons" element={<Buttons />} />
          <Route path="/elements/Badges" element={<Badges />} />
          <Route path="/elements/Avatars" element={<Avatars />} />
          <Route path="/elements/Images" element={<Images />} />
          <Route path="/elements/Videos" element={<Videos />} />
          {/* Charts */}
          <Route path="/charts/chartone" element={<LineChartTwo />} />
        </Routes>
      </DashboardLayout>
    </SidebarProvider>
  );
}

export default Dashboard;

import { Route, Routes } from "react-router-dom";
import type { JSX } from "react";
import Home from "./pages/Home";
import DashboardLayout from "./layout/DashboardLayout";
function Dashboard(): JSX.Element {
    return (
        <DashboardLayout> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Home />} />
            </Routes>
        </DashboardLayout>
    )
}

export default Dashboard;
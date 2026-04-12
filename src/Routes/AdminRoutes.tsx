import { Routes, Route } from "react-router-dom";

import Disciplinas from "../Pages/Admin/Disciplinas";
import Dashboard from "../Pages/Admin/Dashboard";
import AdminLayout from "../Layouts/AdminLayout";
export default function AdminRoutes() {
    return (
        <Routes>
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="disciplinas" element={<Disciplinas />} />
            </Route>
        </Routes>
    )
}
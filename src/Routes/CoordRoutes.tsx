import { Routes, Route, Navigate } from "react-router-dom";

import CoordLayout from "../Layouts/CoordLayout";
import Dashboard from "../Pages/Admin/Dashboard";
import Monitores from "../Pages/Admin/Monitores";
import SacDashboard from "../Pages/Admin/SacDashboard/SacDashboard";

import Login from "../Pages/login";
import Notfound from "../Pages/Notfound";
import Mentorships from "../Pages/Mentorships";
import Profile from "../Pages/Profile";
import Tpage from "../Pages/Tpage";
import Contact from "../Pages/Contact";
import Cad from "../Pages/cadastro";
import Mentoring from "../Pages/Mentoring";
import Forum from "../Pages/Forum";
import Services from "../Pages/Services";
import Home from "../Pages/Home";
import Calendar from "../Pages/Calendar";
import Mentors from "../Pages/Mentors";
import Recovery from "../Pages/Recovery";
import Chat from "../Pages/Chat";

export default function CoordRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cad />} />
            <Route path="/recovery" element={<Recovery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/mentorships" element={<Mentorships />} />
            <Route path="/mentoring" element={<Mentoring />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/tpage" element={<Tpage />} />

            <Route path="/coord" element={<CoordLayout />}>
                <Route index element={<Navigate to="/coord/dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="sac" element={<SacDashboard />} />
                <Route path="monitores" element={<Navigate to="/coord/usuarios/monitores" replace />} />
                <Route path="usuarios/monitores" element={<Monitores />} />
            </Route>

            <Route path="*" element={<Notfound />} />
        </Routes>
    );
}

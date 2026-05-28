import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Disciplinas from "../Pages/Admin/Disciplinas";
import Dashboard from "../Pages/Admin/Dashboard";
import AdminLayout from "../Layouts/AdminLayout";

import Login from '../Pages/login';
import Notfound from '../Pages/Notfound';
import Mentorships from '../Pages/Mentorships';
import Profile from '../Pages/Profile';
import Tpage from '../Pages/Tpage';
import Contact from '../Pages/Contact';
import Cad from '../Pages/cadastro';
import Mentoring from '../Pages/Mentoring';
import Forum from '../Pages/Forum';
import Services from '../Pages/Services';
import Home from '../Pages/Home';
import Calendar from '../Pages/Calendar';
import Mentors from '../Pages/Mentors';
import Recovery from '../Pages/Recovery';
import Chat from '../Pages/Chat';
import Monitores from '../Pages/Admin/Monitores'
import Monitorias from '../Pages/Admin/MonitoriasGestor';
import Alunos from '../Pages/Admin/Alunos';
import Coordenadores from '../Pages/Admin/Coordenadores';
import SacDashboard from "../Pages/Admin/SacDashboard/SacDashboard";
export default function AdminRoutes() {
    return (
        <Routes>
            {/* Rotas públicas */}
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


            {/* Rotas admin */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Navigate to="/admin/dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="disciplinas" element={<Disciplinas />} />
                <Route path="monitorias" element={<Monitorias />} />
                <Route path="monitores" element={<Monitores />} />
                <Route path="alunos" element={<Alunos />} />
                <Route path="usuarios/coordenadores" element={<Coordenadores />} />
                <Route path="sac" element={<SacDashboard />} />
            </Route>

            {/* fallback */}
            <Route path="*" element={<Notfound />} />
        </Routes>
    );
}

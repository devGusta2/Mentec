import { Routes, Route } from "react-router-dom";

import MonitorLayout from "../Layouts/MonitorLayout";
import Home from "../Pages/Monitor/Home";
import Monitorias from "../Pages/Monitor/Monitorias";
import Profile from "../Pages/Monitor/Profile";


import Login from '../Pages/login';
import Notfound from '../Pages/Notfound';
import Mentorships from '../Pages/Mentorships';
import Tpage from '../Pages/Tpage';
import Contact from '../Pages/Contact';
import Cad from '../Pages/cadastro';
import Mentoring from '../Pages/Mentoring';
import Forum from '../Pages/Forum';
import Services from '../Pages/Services';
import HomePage from '../Pages/Home';
import Calendar from '../Pages/Calendar';
import Mentors from '../Pages/Mentors';
import Recovery from '../Pages/Recovery';
import Chat from '../Pages/Chat';

export default function MonitorRoutes() {
    return (
        <Routes>
            {/* Rotas públicas */}
            <Route path="/" element={<HomePage />} />
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

            {/* Rotas monitor */}
            <Route path="/monitor" element={<MonitorLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="monitorias" element={<Monitorias />} />
                <Route path="profile" element={<Profile />} />
            </Route>

            {/* fallback */}
            <Route path="*" element={<Notfound />} />
        </Routes>
    );
}
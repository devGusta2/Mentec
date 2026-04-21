
import { Routes, Route } from "react-router-dom";

import MentorLayout from "../Layouts/MentorLayout";
import Home from "../Pages/Home";
import Mentorias from "../Pages/Mentor/Mentorias";
import Profile from "../Pages/Mentor/Profile";

import Login from '../Pages/login';
import Notfound from '../Pages/Notfound';
import Mentorships from '../Pages/Mentorships';
import Tpage from '../Pages/Tpage';
import Contact from '../Pages/Contact';
import Cad from '../Pages/cadastro';
import Mentoring from '../Pages/Mentoring';
import Forum from '../Pages/Forum';
import Services from '../Pages/Services';
import HomePage from '../Pages/Mentor/Home';
import Calendar from '../Pages/Calendar';
import Mentors from '../Pages/Mentors';
import Recovery from '../Pages/Recovery';
import Chat from '../Pages/Chat';

export default function MentorRoutes() {
    return(
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

  
            <Route path="/mentor" element={<MentorLayout />}>
                <Route path="home" element={<HomePage />} />
                <Route path="mentorias" element={<Mentorias />} />
                <Route path="profile" element={<Profile />} />
            </Route>

            <Route path="*" element={<Notfound />} />
        </Routes>
    )
}
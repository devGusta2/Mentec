import { Routes, Route } from "react-router-dom";

import App from '../App';
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

export default function NoAuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cad />} />
      <Route path="/recovery" element={<Recovery />} />

      <Route path="/mentors" element={<Mentors />} />
      <Route path="/mentorships" element={<Mentorships />} />
      <Route path="/mentoring" element={<Mentoring />} />
      <Route path="/calendar" element={<Calendar />} />

      <Route path="/profile" element={<Profile />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/tpage" element={<Tpage />} />
      <Route path="/chat" element={<Chat />} />

      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}
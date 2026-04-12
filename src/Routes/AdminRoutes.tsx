import { BrowserRouter, Routes, Route } from "react-router-dom";


import Disciplinas from "../Pages/Admin/Disciplinas";
import Dashboard from "../Pages/Admin/Dashboard";

export default function AdminRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/admin/dashboard" element = {<Dashboard />}/>
                <Route path="/admin/disciplinas"  element={<Disciplinas />}/>
            </Routes>
        </BrowserRouter>
    )   
}
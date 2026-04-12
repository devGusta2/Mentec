import { getToken } from "../utils/AuthProvider";
import AdminRoutes from "./AdminRoutes";
import MentorRoutes from "./MentorRoutex";
import NoAuthRoutes from "./NoAuthRoutes";

export default function RoutesProvider() {

    const token = getToken();
    const role = localStorage.getItem('role')


    if(!token){
        return <NoAuthRoutes />
    }

    if(role === 'ADMIN'){
        return <AdminRoutes />
    }

    if(role === 'MENTOR'){
        return <MentorRoutes />
    }

    return <NoAuthRoutes />
}
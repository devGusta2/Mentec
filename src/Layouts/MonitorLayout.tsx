import { Outlet } from "react-router-dom"
import SideBar from "../Components/Sidebar"

export default function MonitorLayout (){
    return(
        <div style={{display:'flex'}}>
            <SideBar />
            <div>

            </div>
            <Outlet />
        </div>
    )
}
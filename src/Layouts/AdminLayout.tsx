
import { Outlet } from "react-router-dom"
import SideBar from "../Components/Sidebar"

export default function AdminLayout (){
    return(
        <div style={{ display: "flex", width: "100%", height: "100dvh", overflow: "hidden" }}>
            <SideBar />
            <div style={{ flex: 1, minWidth: 0, height: "100dvh", overflow: "hidden" }}>
                <Outlet />
            </div>
        </div>
    )
}




import { Outlet } from "react-router-dom"
import SideBar from "../Components/Sidebar"

export default function CoordLayout (){
    return(
        <div style={{display:'flex'}}>
            <SideBar />
            <div>
                
            </div>
            <Outlet />
        </div>
    )
}



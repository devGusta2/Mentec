import styles from "./Dashboard.module.css";
import MenuAdm from "../Components/Menu/Menu";
export default function Dashboard(){
    return(
        <div className={styles.container}>
            <MenuAdm />
        </div>  
    );
}
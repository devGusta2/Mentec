import Accessibility from "../../Components/Acessibility/Accessibility";
import Footer from "../../Components/Footer/Footer";
import styles from './Notfound.module.css';
import { Link } from "react-router-dom";
function Notfound(){
    return(
        <div className={styles.notFound}>
            <h1 id={styles.title}>Page not found!</h1>
            <Link to="Mentorships"id={styles.btnBack}>
                <h2>Voltar</h2>
            </Link>
            <Accessibility/>
        </div>
    );
}

export default Notfound;



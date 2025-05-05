import styles from './Menu.module.css';
import { faChartBar, faFlag, faUser, faMessage} from "@fortawesome/free-regular-svg-icons";
import { faChalkboard, faChartLine,faChartPie,faGear, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons/faDoorOpen';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function MenuAdm(){
    return(
        <div className={styles.menu}>
            <div id={styles.title_box}>
                <span>Mentec</span><span>admin</span>
            </div>
            <div id={styles.nav_box}>
                <div id={styles.icons_col} >
                    <FontAwesomeIcon icon={faChartPie}className={styles.icon_responsive} />
                    <FontAwesomeIcon icon={faMessage}className={styles.icon_responsive}/>
                    <FontAwesomeIcon icon={faUser}className={styles.icon_responsive}/>
                    <FontAwesomeIcon icon={faChalkboard}className={styles.icon_responsive}/>
                    <FontAwesomeIcon icon={faChartLine}className={styles.icon_responsive}/>
                    <FontAwesomeIcon icon={faTriangleExclamation} className={styles.icon_responsive}/>
                    {/* <FontAwesomeIcon icon={faMessage}/> */}
                    {/* <FontAwesomeIcon icon={faMessage}/> */}
                    <FontAwesomeIcon icon={faGear}className={styles.icon_responsive}/>
                </div>
                <nav id={styles.navbar_menu}>
                    <ul>
                        <li>Dashboard</li>
                        <li>Mensagens</li>
                        <li>Usuários</li>
                        <li>Mentorias</li>
                        <li>Análise</li>
                        <li>Denúncias</li>
                        {/* <li>Integrações</li> */}
                        {/* <li>API'S</li> */}
                        <li>Configurações</li>
                    </ul>
                </nav>
            </div>
            <div id={styles.end} style={{color:'white'}}>
                <FontAwesomeIcon id={styles.icon_Door}icon={faDoorOpen} />
                <span>Sair</span>
            </div>
        </div>  
    );
}


import styles from './Menu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
function Menu(){
    return(
        <div className={styles.menu}>
            <div className={styles.imgUser}>

            </div>
            <div className={styles.optBox}>
                <div className={styles.navOpt}>
                    <ul>
                        <li> <FontAwesomeIcon icon={faBook} size='1x'className={styles.icon} color='white'/>Material de apoio</li>
                        <li> <FontAwesomeIcon icon={faGear} size='1x' className={styles.icon}  color='white'/>Preferências</li>
                        <li> <FontAwesomeIcon icon={faComment} size='1x' className={styles.icon}  color='white'/>Feedback e avaliações</li>
                        <li> <FontAwesomeIcon icon={faComment} size='1x'  className={styles.icon} color='white'/>Chat</li>
                    </ul>
                    <ul>
                        <li> <FontAwesomeIcon icon={faDoorOpen} size='1x'  className={styles.icon} color='white'/>Sair</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Menu;
import styles from './Menu.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
function Menu(){
    return(
        <div className={styles.menu}>
            <div className={styles.imgUser}>

            </div>
            <div className={styles.optBox}>
                <div className={styles.navOpt}>
                    <ul>
                        <li> <FontAwesomeIcon icon={faBook} size='2x' color='white'/>Material de apoio</li>
                        <li> <FontAwesomeIcon icon={faGear} size='2x' color='white'/>Preferências</li>
                        <li> <FontAwesomeIcon icon={faComments} size='2x' color='white'/>Feedback e avaliações</li>
                        <li> <FontAwesomeIcon icon={faComment} size='2x' color='white'/>Chat</li>
                    </ul>
                    <ul>
                        <li>Sair</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Menu;
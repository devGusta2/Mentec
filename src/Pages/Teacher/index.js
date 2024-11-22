import {Link} from 'react-router-dom';
import styles from './Teacher.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPersonChalkboard} from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
export default function Teacher(){
    return(
        <div className={styles.Teacher}>
            <div className={styles.teacher_menu}>
                <nav className={styles.nav_menu}>
                    <ul>
                    <li><FontAwesomeIcon className={styles.icon} icon={faUser} size='2x'/><Link to='createMentoring'>Perfil</Link></li>
                        <li><FontAwesomeIcon className={styles.icon} icon={faPlus} size='2x'/><Link to='createMentoring'>Nova mentoria</Link></li>
                        <li><FontAwesomeIcon className={styles.icon} icon={faPersonChalkboard} size='2x'/><Link to='createMentoring'>Minhas mentorias</Link></li>
                        
                    </ul>
                </nav>
            </div>
        </div>
    );
}
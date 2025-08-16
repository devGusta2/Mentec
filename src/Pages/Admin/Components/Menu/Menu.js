import styles from './Menu.module.css';
import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon, faChart } from '@fortawesome/react-fontawesome';
export default function MenuAdm() {
    return (
        <div className={styles.menu}>

            <div className={styles.title_menu}>
                <h3>Mentec</h3>
                <p>
                    admin
                </p>
            </div>
            <div className={styles.nav_bar_box}>
                <ul>
                    <li>
                        <Link className={styles.link}>
                            <p>Dashboard</p>
                        </Link>
                    </li>
                     <li>
                        <Link className={styles.link}>
                            <p>Análise</p>
                        </Link>
                    </li>
                     <li>
                        <Link className={styles.link}>
                            <p>Denúncias</p>
                        </Link>
                    </li>
                     <li>
                        <Link className={styles.link}>
                            <FontAwesomeIcon icon={faUser}/>
                            <p>Usuários</p>
                        </Link>
                    </li>
                     <li>
                        <Link className={styles.link}>
                            <p>Mensagens</p>
                        </Link>
                    </li>
                     <li>
                        <Link className={styles.link}>
                            <p>Mentorias</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
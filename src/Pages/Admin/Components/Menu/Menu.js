import styles from './Menu.module.css';
import { Link } from 'react-router-dom';
import { faUser, faMessage } from '@fortawesome/free-regular-svg-icons';
import { faChartSimple, faChartBar, faBell, faGraduationCap,faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                            <FontAwesomeIcon icon={faChartSimple} />
                            <p>Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.link}>
                            <FontAwesomeIcon icon={faChartBar} />
                            <p>Análise</p>
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.link}>
                            <FontAwesomeIcon icon={faBell} />
                            <p>Denúncias</p>
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.link}>
                            <FontAwesomeIcon icon={faUser} />
                            <p>Usuários</p>
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.link}>
                            <FontAwesomeIcon icon={faMessage} />
                            <p>Mensagens</p>
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.link}>
                            <FontAwesomeIcon icon={faGraduationCap} />
                            <p>Mentorias</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.ult_btn}>
                <Link className={styles.link}>
                    <FontAwesomeIcon icon={faDoorOpen} />
                    <p>Sair</p>
                </Link>
            </div>
        </div>
    );
}
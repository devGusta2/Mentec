
import styles from './Header.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <header className={styles.header}>
            <Link to="/" className={styles.logoBox}>
                <h1>Mentec</h1>
            </Link>
            <div className={styles.navSearchBox}>
                <div className={styles.searchBarBox}>
                    <input 
                    placeholder={"Pesquisar"}
                    className={styles.searchBar}></input>
                </div>
                <nav className={styles.navBar}>
                    <ul className={styles.ul}>
                        <Link to='/Home' className={styles.link}><li>Inicio</li></Link>
                        <li>Mentorias</li>
                        <li>Contato</li>
                        <li>Ajuda</li>
                    </ul>
                </nav>
            </div>
            <div className={styles.configBox}>
                <div className={styles.userConfig}>
                    <FontAwesomeIcon id="" icon={faUser} size='2x' color='white' className={styles.icon} />
                    <select className={styles.options}>
                        <option>Usuário</option>
                        <option>Perfil</option>
                        <option>Minhas mentorias</option>
                        <option>Configurações</option>
                        <option>Sair</option>
                    </select>
                </div>
            </div>
        </header>
    );
};

export default Header;
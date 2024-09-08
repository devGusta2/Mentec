
import styles from './Header.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.logoBox}>
                <h1>Mentec</h1>
            </div>
            <div className={styles.navSearchBox}>
                <div className={styles.searchBarBox}>
                    <input 
                    placeholder={"Pesquisar"}
                    className={styles.searchBar}></input>
                </div>
                <nav className={styles.navBar}>
                    <ul className={styles.ul}>
                        <li>Início</li>
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
                        <option>Oerfil</option>
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
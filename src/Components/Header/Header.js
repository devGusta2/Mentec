
import styles from './Header.module.css';

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
            <div className={styles.configBox}></div>
        </header>
    );
};

export default Header;

import styles from './Header.module.css';

function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.logoBox}>

            </div>
            <div className={styles.navSearchBox}>
                <nav className={styles.navBar}>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
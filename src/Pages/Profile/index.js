

import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import styles from './Profile.module.css';
function Profile(){
    return(
        <div className={styles.body}>
            <Header />
            <div className={styles.container}>
                <Menu />
                <div className={styles.infoContainer}>
                    <h1>Seja bem-vindo(a) Usuário</h1>
                    <div className={styles.infoRow}>
                        <div className={styles.box}></div>
                        <div className={styles.box}></div>
                    </div>
                    <div className={styles.infoRow}>
                        <div className={styles.box}></div>
                        <div className={styles.box}></div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}


export default Profile;
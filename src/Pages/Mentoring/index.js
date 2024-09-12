import styles from './Mentoring.module.css';
import Header from '../../Components/Header/Header';
function Mentoring(){
    return(
        <div className={styles.mentoring}>
            <Header></Header>
            <main className={styles.content}>
                <div className={styles.mainLayout}>
                    <div className={styles.row}>
                        <div className={styles.info}>

                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.rowDown}>
                            <div className={styles.col}>
                                <div className={styles.info}>

                                </div>
                                <div className={styles.info}>

                                </div>
                            </div>
                            <div className={styles.info2}>
            
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Mentoring;
import styles from './Mentoring.module.css';
import Header from '../../Components/Header/Header';
function Mentoring(){
    return(
        <div className={styles.mentoring}>
            <Header></Header>
            <main className={styles.content}>
                <div className={styles.row}>
                    <div className={styles.mentInfo}>
                        <img 
                        src="https://wallpaperaccess.com/full/1805473.jpg"
                        className={styles.imgMent}></img>
                        <h2>
                            Cloud computing com AWS
                        </h2>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.rowDesc}>
                        <div className={styles.colDesc}>
                            <div className={styles.minMentDesc}>
                                
                            </div>
                            <div className={styles.mentDesc}>
                                
                            </div>
                            <div className={styles.mentDesc2}>
                                
                            </div>
                        </div>
                        <div className={styles.contactBox}>
                            <div className={styles.contactCard}>

                            </div>
                        </div>
                       
                    </div>
                   
                </div>
            </main>
        </div>
    );
}

export default Mentoring;
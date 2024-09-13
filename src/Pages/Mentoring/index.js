import styles from './Mentoring.module.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
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
                        <h4>Mentor:</h4>
                        <div className={styles.options}>
                            <button id={styles.saveBtn}>
                                <p>Salvar</p>
                            </button>
                            <button id={styles.signUpBtn}>
                                <h3>Matricular</h3>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.rowDesc}>
                        <div className={styles.colDesc}>
                            <div className={styles.minMentDesc}>
                                <h3>Tempo estimado: 2356 horas semanais</h3>
                            </div>
                            <div className={styles.mentDesc}>
                                <h3>Descrição:</h3>
                                <br/>
                                <p>
                                const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod, mauris sit amet interdum varius, orci orci tempor urna, in vehicula arcu turpis sed odio. Quisque vel vehicula ligula. Maecenas consequat fringilla nunc non lacinia. Donec sagittis dictum orci, et hendrerit velit posuere sit amet. Mauris vel risus vel augue vulputate sodales. Praesent id viverra elit, at viverra nisi. In vel elit eget libero aliquet feugiat sit amet vel elit. Nunc ullamcorper risus in magna convallis, at efficitur velit eleifend. Nulla facilisi. Nullam eget ex a ligula ultricies interdum et sit amet lacus. Phasellus in convallis magna. Mauris faucibus felis ac metus iaculis, at interdum dolor efficitur.
                                </p>
                            </div>
                            <div className={styles.mentDesc2}>
                                
                            </div>
                        </div>
                        <div className={styles.contactBox}>
                            <div className={styles.contactCard}>
                                <h3>Sobre este tutor:</h3>
                            </div>
                        </div>
                       
                    </div>
                   
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default Mentoring;
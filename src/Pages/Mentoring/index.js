import styles from './Mentoring.module.css';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Carousel from '../../Components/Carousel/Carousel';
function Home(){
    return(
        <div className={styles.home}>
     
            <Header />
                <div className={styles.content}>
                    <div className={styles.mainContent}>
                        <Carousel/>
                        <h1>Mentorias que podem te interessar</h1>
                        <div className={styles.carGrid}>
                            <div className={styles.card}>
                                <div className={styles.cardRow}>
                                    <div className={styles.infoBox}>
                                        <h3>Introdução ao desenvolvimento de sistemas</h3>  
                                    </div>
                               
                                </div>
                                <div className={styles.cardRow}>
                                    <p>Aprenda o básico do desenvolvimento 
                                        web, incluindo HTML, CSS e JavaScript.
                                         Ideal para iniciantes que querem...
                                    </p>
                                </div>
                            </div>
                            <div className={styles.card}></div>
                            <div className={styles.card}></div>
                            <div className={styles.card}></div>
                            <div className={styles.card}></div>
                            <div className={styles.card}></div>
                            <div className={styles.card}></div>
                            <div className={styles.card}></div>
                            <div className={styles.card}></div>
                            <div className={styles.card}></div>
                            <div className={styles.card}></div>
                            <div className={styles.card}></div>
                            <div className={styles.card}></div>
                            <div className={styles.card}></div>
                            <div className={styles.card}></div>
                            
                            <div className={styles.card}></div>
                            <div className={styles.card}></div>
                            
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default Home;
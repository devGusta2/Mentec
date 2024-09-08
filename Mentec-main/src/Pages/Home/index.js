import styles from './Home.module.css';

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
                            <div className={styles.card}></div>
                            
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default Home;
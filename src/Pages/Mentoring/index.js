import styles from './Mentoring.module.css';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Carousel from '../../Components/Carousel/Carousel';
import { Link } from 'react-router-dom';
function Home(){
    return(
        <div className={styles.home}>
     
            <Header />
                <div className={styles.content}>
                    <div className={styles.mainContent}>
                        <Carousel/>
                        <div className={styles.filterBox}>
                            <input 
                            placeholder='Buscar mentorias'
                            className={styles.searchBar}></input>
                            <select>
                                <option>Área</option>
                            </select>
                            <select>
                                <option>Qntd Vagas</option>
                            </select>
                            <select>
                                <option>Data</option>
                            </select>
                          
                        </div>
                        <h1>Mentorias que podem te interessar</h1>
                        <div className={styles.carGrid}>
                            <div className={styles.card}>
                              
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
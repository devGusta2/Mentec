import styles from './Mentorships.module.css';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Carousel from '../../Components/Carousel/Carousel';
import { Link } from 'react-router-dom';
import Accessibility from '../../Components/Acessibility/Accessibility';
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
                            <select className={styles.options}>
                                <option>Área</option>
                            </select>
                            <select className={styles.options}>
                                <option>Qntd Vagas</option>
                            </select>
                       
                            <select className={styles.options}>
                                <option>Período</option>
                                <option>Manhã</option>
                                <option>Tarde</option>
                                <option>Noite</option>
                            </select>
                            <select className={styles.options}>
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
                <Accessibility/>
            <Footer />
        </div>
    );
}

export default Home;
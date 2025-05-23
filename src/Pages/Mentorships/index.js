import styles from './Mentorships.module.css';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Carousel from '../../Components/Carousel/Carousel';
import { Link } from 'react-router-dom';
import Accessibility from '../../Components/Acessibility/Accessibility';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {
    const [mentorshipsData, setMentorshipsData] = useState([]);
    const loadMentorships = async () => {
        try {
            const result = await axios.get('http://localhost/Api_mentec/controller/Mentorships_control/Mentorships_controller.php');
            setMentorshipsData(result.data);
            console.log(result.data); // Para depuração
        
        } catch (error) {
            console.log("Erro", error);
        }
    };
    
    useEffect(() => {
        loadMentorships();
    }, []);

    return (
        <div className={styles.home}>
            <Header />
            <div className={styles.content}>
                <div className={styles.mainContent}>
                    <Carousel />
                    <div className={styles.filterBox}>
                        <input 
                            placeholder='Buscar mentorias'
                            className={styles.searchBar}
                        />
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
                        {/* {mentorshipsData.map((data) => (
                            <div key={data.id} className={styles.card}>
                                <h3>{data.title}</h3> 
                                <p>ID: {data.id}</p> 
                                <p>{data.description}</p> 
                            </div>
                        ))} */}
                    </div>
                </div>
            </div>
            <Accessibility />
            <Footer />
        </div>
    );
}

export default Home;

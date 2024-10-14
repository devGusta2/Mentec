import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import styles from './Calendar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faSun, faMoon} from '@fortawesome/free-regular-svg-icons';
import { faSun as solidSun} from '@fortawesome/free-solid-svg-icons';

export default function Calendar(){
    return(
        <div className={styles.container}>
            <Header/>
            <div id={styles.titleAndSearch}>
                <FontAwesomeIcon icon={faCalendar} size="5x" />
                <h2>Cronograma de aulas</h2>
                <div id={styles.searchBox}>
                    <div id={styles.searchBack}>
                        <input id={styles.inpt}
                        placeholder="Procurar aula cadastrada"/>
                    </div>
                </div>
            </div>
            <div className={styles.grid}>
                <div id={styles.timeTittle}>
                    <h4>Período</h4>
                </div>
          
                <div className={styles.day}>
                    <p>26</p>
                    <p>Segunda-feira</p>
                </div>
                <div className={styles.day}>
                    <p>27</p>
                    <p>Terça-feira</p>
                </div>
                <div className={styles.day}>
                    <p>28</p>
                    <p>Quarta-feira</p>
                </div>
                <div className={styles.day}>
                    <p>29</p>
                    <p>Quinta-feira</p>
                </div>
                <div className={styles.day}>
                    <p>30</p>
                    <p>Sexta-feira</p>
                </div>
                <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={faSun} size="3x"/>
                    <p>Manhã</p>
                </div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={solidSun} size="3x"/>
                    <p>Tarde</p>
                </div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.cardIcon}>
                    <FontAwesomeIcon icon={faMoon} size="3x"/>
                    <p>Noite</p>
                </div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
            </div>
 
        </div>
    );
}
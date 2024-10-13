import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import styles from './Calendar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar} from '@fortawesome/free-regular-svg-icons';
export default function Calendar(){
    return(
        <div className={styles.container}>
            <Header/>
            
            <div className={styles.grid}>
                <div id={styles.timeTittle}>
                    <p>Período</p>
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
                <div className={styles.card}></div>
            </div>
 
        </div>
    );
}
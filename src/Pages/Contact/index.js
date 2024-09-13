import styles from './Contact.module.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Contact(){
    return(
        <div className={styles.contact}>
            <Header></Header>
                <div className={styles.mainLayout}>
                    <div className={styles.formBox}>
                        <div className={styles.info}>
                            
                        </div>
                        <div className={styles.subFormBox}>
                            <h1>Envie sua mensagem!</h1>
                            <form className={styles.form}>

                            </form>
                        </div>
                    </div>
                </div>
            <Footer></Footer>
        </div>
    );
}


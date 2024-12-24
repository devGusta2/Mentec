import styles from './Recovery.module.css';
import { Link } from 'react-router-dom';
import { faEnvelope} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../Components/Footer/Footer';
export default function Recovery() {
    return (

        <div className={styles.main}>
            <div className={styles.header}>
                <Link id={styles.title} to='/'>Mentec</Link>
                <button id={styles.cadBtn}>
                    <h4>Criar uma conta no mentec</h4>
                </button>
            </div>
            <div className={styles.formBox}>
                <form className={styles.formRecovery}>
                <p>Recupere sua conta!</p>
                    <FontAwesomeIcon icon={faEnvelope} size='5x'/>
          
                    <p>Por favor, digite o email da conta que você quer recuperar.</p>
                    <input className={styles.inpt} placeholder='E-mail' />
                    <button id={styles.btn}><h3>Recuperar</h3></button>
                </form>
            </div>
            <Footer />
        </div>
    );
}
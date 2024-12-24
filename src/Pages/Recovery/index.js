import styles from './Recovery.module.css';
import { Link } from 'react-router-dom';
export default function Recovery() {
    return (

        <div className={styles.main}>
            <div className={styles.header}>
                <Link id={styles.title} to='/'>Mentec</Link>
                <button id={styles.cadBtn}>
                    <h4>Criar uma conta no mentec</h4>
                </button>
            </div>
            <h3>Recupere sua conta!</h3>
            <p>Por favor, digite o email da conta que você quer recuperar.</p>
        </div>
    );
}
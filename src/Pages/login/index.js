import styles from './Login.module.css';
import book from '../../assets/img/Arts/books.png';
import msIco from '../../assets/img/Arts/microsft.png';
import { Link } from 'react-router-dom';
import Accessibility from '../../Components/Acessibility/Accessibility';
function Login(){
    return(
        <div className={styles.main}>
            <div className={styles.header}>
                <h2>Mentec</h2>
            </div>
            <div className={styles.formAndArt}>
                <form className={styles.formLogin}>
                    <p>Fazer login</p>
                    <input className={styles.inpt} placeholder='E-mail'/>
                    <input className={styles.inpt} placeholder='Senha'/>
                    <p>Esqueceu sua senha?</p>
                    
                    <div id={styles.formRow}>
                        <input type='checkbox' id={styles.check}/>
                        <p>Lembre-se de mim</p>
                        <button id={styles.btnLogin} type='submit'>Fazer login</button>
                    </div>
                </form>
                <div className={styles.art}>

                </div>
            </div>
            <Accessibility />
        </div>
    );
}

export default Login;
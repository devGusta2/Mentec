import styles from './Signup.module.css';
import book from '../../assets/img/Arts/books.png';
import msIco from '../../assets/img/Arts/microsft.png';
import { Link } from 'react-router-dom';
function Signup(){
    return(
        <div className={styles.main}>
          <div className={styles.formBox}>
            <form className={styles.form}>
                <h2>Crie sua conta!</h2>
                <input placeholder="Nome:"className={styles.inpt}></input>
                <input placeholder="E-mail:"className={styles.inpt}></input>
                <input placeholder="Número de matricula:"className={styles.inpt}></input>
                <input placeholder="Senha:" className={styles.inpt}></input>
                <input placeholder="Repita sua senha:" className={styles.inpt}></input>
                <button className={styles.btn}>Cria conta</button>
            </form>
          </div>
          <div className={styles.loginBox}>

          </div>
        </div>
    );
}

export default Signup;
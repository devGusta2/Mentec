import styles from './Signup.module.css';
import book from '../../assets/img/Arts/books.png';

import { Link } from 'react-router-dom';
import Accessibility from '../../Components/Acessibility/Accessibility';
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
          <div className={styles.logoBox}>
                    <h1  className={styles.title}>Mentec</h1>
                    <h3  className={styles.sBtitle}>Conectando mentes, moldando futuros</h3>
                </div>
                <img 
                draggable="false"
                src={book} className={styles.imgBook}/>
                <Link to='/Login'className={styles.btnCad}>
                    
                    <h1>Login</h1>
                </Link>
                <Accessibility></Accessibility>
          </div>
          
        </div>
    );
}

export default Signup;
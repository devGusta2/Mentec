import styles from './Login.module.css';
import book from '../../assets/img/Arts/books.png';
import msIco from '../../assets/img/Arts/microsft.png';
import { Link } from 'react-router-dom';
import Accessibility from '../../Components/Acessibility/Accessibility';
function Login(){
    return(
        <div className={styles.main}>
           <div className={styles.cadBox}>
                <div className={styles.logoBox}>
                    <h1  className={styles.title}>Mentec</h1>
                    <h3  className={styles.sBtitle}>Conectando mentes, moldando futuros</h3>
                </div>
                <img 
                draggable="false"
                src={book} className={styles.imgBook}/>
                <Link to='/cadastro'className={styles.btnCad}>
                    
                    <h1>Cadastrar</h1>
                </Link>
           </div>
           <div className={styles.formBox}>
            
                <div className={styles.form}>
                    
                    <form className={styles.formLogin}>
                        <div className={styles.titleBox}>
                            <h3>Entre na sua conta</h3>
                        </div>
                        <input 
                        placeholder='E-mail'
                        className={styles.inptForm}/>
                        <input 
                        placeholder='Senha'
                        className={styles.inptForm}/>

                        <button className={styles.btn}>
                            <h3>Entrar</h3>
                        </button>
                        <div className={styles.or}>
                            <hr className={styles.line}/>
                            <h3>ou</h3>
                            <hr className={styles.line}/>
                        </div>
                        <button className={styles.btnms}>
                            <img src={msIco} className={styles.msico}/>
                            <h3>Continue com a microsoft</h3>
                        </button>
                        <div className={styles.cadResp}>
                            <h4>Não tem uma conta ainda?</h4>
                            <Link to='/Signup' className={styles.linkCad}>Cadastre-se</Link>
                        </div>
                    </form>
                </div>
            </div>
            <Accessibility />
        </div>
    );
}

export default Login;
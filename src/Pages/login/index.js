import styles from './Login.module.css';
import book from '../../assets/img/Arts/books.png';
import msIco from '../../assets/img/Arts/microsft.png';
import reaginArt from '../../assets/img/Arts/reading.jpg';
import { Link } from 'react-router-dom';
import Accessibility from '../../Components/Acessibility/Accessibility';
import Footer from '../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';



let tema = localStorage.getItem("dark");
const darkMode = () => {
    tema = !tema;
    if (tema == true) {

        // document.documentElement.style.cssText = '--bg-background1: #00013C;';
        // document.documentElement.style.cssText = '--bg-background2: #271665;';
        // document.documentElement.style.cssText = '--bg-btn1:rgb(47, 101, 202);';
        // document.documentElement.style.cssText = '--bg-btn2:rgb(49, 71, 167);';

    } else {
        // document.documentElement.style.cssText = '--bg-background1: #A6192E;';
        // document.documentElement.style.cssText = '--bg-background2: #910F25;';

        // document.documentElement.style.cssText = '--bg-btn1: #CA2F46;';
        // document.documentElement.style.cssText = '--bg-btn2: #a73142;';
    }
};


//document.documentElement.style.cssText="--bg-azulteste: #910F25;";
function Login() {
    useEffect(() => {

        darkMode();
    }, []);
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <Link id={styles.title} to='/'>Mentec</Link>
                <div id={styles.bnts}>

                    <Link to='/cadastro' id={styles.cadBtn}>
                        <h4>Criar uma conta no mentec</h4>
                    </Link>
                    <FontAwesomeIcon onClick={darkMode} id={styles.btnDark} icon={faMoon} size='2x' />
                </div>
            </div>
            <div className={styles.formAndArt}>
                <div className={styles.formBox}>
                    <form className={styles.formLogin}>
                        <p>Fazer login</p>

                        <input className={styles.inpt} placeholder='E-mail' />
                        <input className={styles.inpt} placeholder='Senha' />
                        <Link to='/Recovery' id={styles.textForgotPass}><span>Esqueceu sua senha?</span></Link>

                        <div id={styles.formRow}>
                            <input type='checkbox' id={styles.check} />
                            <p>Lembre-se de mim</p>
                            <button  id={styles.btnLogin} type='submit'>Fazer login</button>
                        </div>
                        <button id={styles.btnMs} >
                            <img src={msIco} style={{ height: '30px', width: '30px' }} />
                            <h4>Continue com a microsoft</h4>
                        </button>
                    </form>
                </div>
                <div className={styles.artBox}>
                    <img src={reaginArt} id={styles.artImg} />
                    <div id={styles.text}>
                        <h3>Encontre a melhor <span>mentoria</span> ideal para complementar seus estudos</h3>
                    </div>
                </div>
            </div>
            <Accessibility />
            <Footer></Footer>
        </div>
    );
}

export default Login;
import styles from './Login.module.css';
import msIco from '../../assets/img/Arts/microsft.png';
import reaginArt from '../../assets/img/Arts/reading.jpg';
import reaginArtDark from '../../assets/img/Arts/readingDark.jpg';
import { Link } from 'react-router-dom';
import Accessibility from '../../Components/Acessibility/Accessibility';
import Footer from '../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

function Login() {
    const [tema, setTema] = useState(() => localStorage.getItem("dark") === "true");

    useEffect(() => {
        localStorage.setItem("dark", tema);
        if (tema) {
            document.documentElement.style.cssText = 
            `--bg-background1: #00013C;
             --bg-background2: #271665;
             --bg-btn1:rgb(47, 101, 202);
             --bg-btn2:rgb(49, 71, 167);
             --bg-main: #08091D;
             --color-text:white;
             --text-color2:#00BCD4;`;
        } else {
            document.documentElement.style.cssText = 
            `--bg-background1: #A6192E;
             --bg-background2: #910F25;
             --bg-btn1: #CA2F46;
             --bg-btn2: #a73142;
             --bg-main:white;
             --color-text:black;`;
        }
    }, [tema]);

    const toggleDarkMode = () => setTema((prevTema) => !prevTema);

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <Link id={styles.title} to='/'>Mentec</Link>
                <div id={styles.bnts}>
                    <Link to='/cadastro' id={styles.cadBtn}>
                        <h4>Criar uma conta no mentec</h4>
                    </Link>
                    <FontAwesomeIcon onClick={toggleDarkMode} id={styles.btnDark} icon={faMoon} size='2x' />
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
                            <button id={styles.btnLogin} type='submit'>Fazer login</button>
                        </div>
                        <button id={styles.btnMs}>
                            <img src={msIco} style={{ height: '30px', width: '30px' }} alt="Microsoft Icon" />
                            <h4>Continue com a microsoft</h4>
                        </button>
                    </form>
                </div>
                <div className={styles.artBox}>
                    <img src={tema ? reaginArtDark : reaginArt} id={styles.artImg} alt="Reading Art" />
                    <div id={styles.text}>
                        <h3>Encontre a melhor <span>mentoria</span> ideal para complementar seus estudos</h3>
                    </div>
                </div>
            </div>
            <Accessibility />
            <Footer />
        </div>
    );
}

export default Login;

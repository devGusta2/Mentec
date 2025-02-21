import styles from './Signup.module.css';
import book from '../../assets/img/Arts/books.png';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Accessibility from '../../Components/Acessibility/Accessibility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../Components/Footer/Footer';
export default function Cadastro() {
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
                    <Link to='/login' id={styles.cadBtn}>
                        <h4>Fazer login no mentec</h4>
                    </Link>
                    <FontAwesomeIcon onClick={toggleDarkMode} id={styles.btnDark} icon={faMoon} size='2x' />
                </div>
            </div>
            <div className={styles.formAndArt}>
                <div id={styles.artPlace}>

                </div>  
                <div className={styles.formBox}>
                    <form id={styles.form}>
                        <p id={styles.titleCad}>Cadastre uma conta!</p>
                        <div id={styles.row}>
                            <div className={styles.inptField}>
                                
                                <input placeholder="" className={styles.inpt}></input>
                                <label>Nome:</label>
                                
                            </div>
                            <div className={styles.inptField}>
                                
                                <input placeholder="" className={styles.inpt}></input>
                                <label>Sobrenome:</label>
                                
                            </div>
                        </div>
                        <div className={styles.inptField}>
                           
                            <input placeholder="" type='email'className={styles.inpt}></input>
                             <label>E-mail:</label>
                        </div>
                        <div className={styles.inptField}>
                
                            <input placeholder="" type='number'className={styles.inpt}></input>
                            <label>Número de matricula:</label>
                        </div>
                        <div className={styles.inptField}>
                    
                            <input placeholder="" type='password' className={styles.inpt}></input>
                            <label>Senha:</label>
                        </div>
                        <div className={styles.inptField}>
                           
                            <input placeholder=""type='password'     className={styles.inpt}></input>
                            <label>Senha:</label>
                        </div>
                 
                        <button className={styles.btn}>Cria conta</button>
                    </form>
                </div>
            </div>

            {/* <div className={styles.loginBox}>
                <div className={styles.logoBox}>
                    <h1 className={styles.title}>Mentec</h1>
                    <h3 className={styles.sBtitle}>Conectando mentes, moldando futuros</h3>
                </div>
                <img
                    draggable="false"
                    src={book} className={styles.imgBook} />
                <Link to='/Login' className={styles.btnCad}>

                    <h1>Login</h1>
                </Link>
             
            </div> */}
            <Accessibility></Accessibility>
            <Footer></Footer>
        </div>
    );
}


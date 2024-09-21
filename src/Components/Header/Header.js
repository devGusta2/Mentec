
import styles from './Header.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMoon, faBars } from '@fortawesome/free-solid-svg-icons';

import {Link} from 'react-router-dom';
import { useEffect } from 'react';

const ativaMenu = () =>{
    window.alert("Ativa o menu");
}


var dark = localStorage.getItem("dark");

function changeTema(){
dark=!dark;
    if(dark===true){
        localStorage.setItem("dark", "true");
        if(localStorage.getItem("dark")=="true"){
            document.documentElement.style.cssText="--bg-azulteste: #271665;";
        }
    }else{
        localStorage.setItem("dark", "false");
        if(localStorage.getItem("dark")=="false"){
            document.documentElement.style.cssText="--bg-azulteste: #770B1C;";
        }
    }
}


function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.searchLogo}>
                <Link to="/" className={styles.logoBox}>
                    <h1>Mentec</h1>
                </Link>
                <div className={styles.navSearchBox}>
                    <div className={styles.searchBarBox}>
                        <input 
                        placeholder={"Pesquisar"}
                        className={styles.searchBar}></input>
                    </div>
                    <nav className={styles.navBar}>
                        <ul className={styles.ul}>
                            <Link to='/Home' className={styles.link}><li>Inicio</li></Link>
                            <Link to='/Mentorships' className={styles.link}><li>Mentorias</li> </Link>
                            <Link to='/Contact'className={styles.link}><li>Contato</li></Link>
                            <Link to='/*'className={styles.link}><li>Ajuda</li></Link>
                        </ul>
                    </nav>
                </div>
            </div>
            <FontAwesomeIcon icon={faBars} size={'2x'} id={styles.menuBars} onClick={ativaMenu}/>
            <div className={styles.configBox}>
                <div className={styles.userConfig}>
                    
                    <Link to='/Profile'><FontAwesomeIcon id="" icon={faUser} size='2x' color='white' className={styles.icon} /></Link>
                    
                    <select className={styles.options}>
                        <option>Usuário</option>
                        <option>Perfil</option>
                        <option>Minhas mentorias</option>
                        <option>Configurações</option>
                        <option>Sair</option>
                    </select>
                </div>
                <button onClick={changeTema}>TEMA</button>
            </div>
          
        </header>
    );
};

export default Header;
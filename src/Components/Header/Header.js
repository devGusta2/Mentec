
import styles from './Header.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars} from '@fortawesome/free-solid-svg-icons';
import { faMoon }from '@fortawesome/free-regular-svg-icons';
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
        document.documentElement.style.cssText="--bg-azulteste: #271665; --bg-menu: #00013C;  --bg-body: #";

    }else{
        localStorage.setItem("dark", "false");
        document.documentElement.style.cssText="--bg-azulteste: #910F25; --bg-menu: #770B1C;";
      
    }
}



function Header(){
    useEffect(()=>{
        var tema = localStorage.getItem("dark");
        if(tema=="true"){
            document.documentElement.style.cssText="--bg-azulteste: #271665;";
        
        }else{
            document.documentElement.style.cssText="--bg-azulteste: #910F25;";
        }
    })
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
                            <Link to='/Mentorships' className={styles.link}><li>Mentorias</li> </Link>
                            <Link to='/Home' className={styles.link}><li>Notícias</li></Link>
                            
                            <Link to='/Contact'className={styles.link}><li>Contato</li></Link>
                            <Link to='/Services'className={styles.link}><li>Serviços</li></Link>
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
                <FontAwesomeIcon icon={dark ? faMoon : faMoon} 
                onClick={changeTema}
                size="2x"
                id={styles.themeBtn}/>
            </div>
          
        </header>
    );
};

export default Header;
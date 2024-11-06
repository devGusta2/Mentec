import style from './Mentors.module.css';
import Header from '../../Components/Header/Header';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import Accessibility from '../../Components/Acessibility/Accessibility';

export default function(){
    return(
        <div className={style.container}>
            <Header />
            <div className={style.btnBox}>
                <div className={style.card}>

                </div>
                <div className={style.card}>
                   
                </div>
                <div className={style.card}></div>
                <div className={style.card}></div>
                <div className={style.card}></div>
            </div>
            <div className={style.cardMentor}>
                <div className={style.colCard}>
                    <h4>Nome:</h4>
                    <p>
                        Gelibolu da Silva Machado  
                    </p>
                    <h4>Sobre mim:</h4>
                    <p>
                    Com mais de 10 anos de experiência em desenvolvimento pessoal, Gelibolu da silva machado é um facilitador de transformação. Formado em Psicologia e Coaching, ele inspira indivíduos a superarem desafios e descobrirem seu verdadeiro potencial. Acredita que o autoconhecimento é a chave para o sucesso.
                    bribes na DM.
                    </p>
                   
                    
                </div>
                <div className={style.colCard}>

                </div>
                <div id={style.imgBox}>

                </div>
            </div>
            <Accessibility />
        </div>
    );
}
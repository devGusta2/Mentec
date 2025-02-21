import style from './Mentors.module.css';
import Header from '../../Components/Header/Header';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMortarBoard, faCertificate, faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import Accessibility from '../../Components/Acessibility/Accessibility';

export default function () {
    return (
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
                        Com mais de 10 anos de experiência em
                        desenvolvimento pessoal, Gelibolu da
                        silva machado é um facilitador de
                        transformação. Formado em Psicologia
                        e Coaching, ele inspira indivíduos a
                        superarem desafios e descobrirem seu
                        {/* verdadeiro potencial. Acredita que
                        o autoconhecimento é a chave para o sucesso.
                        bribes na DM. */}
                    </p>


                </div>
                <div className={style.colCard}>
                    <div className={style.infoField}>
                        <div className={style.icon} style={{color:'#F3B121'}}>
                            <FontAwesomeIcon icon={faCertificate} size='2x' />
                        </div>
                        <div className={style.infoCol}>
                            <h3>Diploma:</h3>
                            <p>Curso em vídeo(Guanabara)</p>
                        </div>
                    </div>
                    <div className={style.infoField}>
                        <div className={style.icon} style={{color:'#3459B6'}}>
                            <FontAwesomeIcon icon={faMortarBoard} size='2x' />
                        </div>
                        <div className={style.infoCol}>
                            <h3>Formação:</h3>
                            <p>Ciência da computação</p>
                        </div>
                    </div>
                    <div className={style.infoField}>
                        <div className={style.icon} style={{color:'#70964B'}}>
                            <FontAwesomeIcon icon={faPersonChalkboard} size='2x' />
                        </div>
                        <div className={style.infoCol}>
                            <h3>Mentorias:</h3>
                            <p>25</p>
                        </div>
                    </div>
                </div>
                <div id={style.imgBox}>
                    <img src='https://as1.ftcdn.net/v2/jpg/02/83/12/96/1000_F_283129653_iDQrlBEDpYWbKyDIUotS0Dy8ngUwQBaz.jpg'/>
                </div>
            </div>
            <Accessibility />
        </div>
    );
}
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import style from './Services.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPersonChalkboard, faQuestion}  from '@fortawesome/free-solid-svg-icons';
import { faHand, faCalendar, faCommentDots} from '@fortawesome/free-regular-svg-icons';
import { Router, Link} from 'react-router-dom';
 
export default function Services(){
    return(
        <div className={style.container}>
            <Header />
            <div className={style.grid}>
                <div className={style.card}>
                    <FontAwesomeIcon icon={faHand}size={'7x'}/>
                    <h3>Solicitar monitor</h3>
                </div>
                <div className={style.card}>
                    <FontAwesomeIcon icon={faCalendar}size={'7x'}/>
                    <h3>Agendar monitoria</h3>
                </div>
                <div className={style.card}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}size={'7x'}/>
                    <h3>Consultar monitor</h3>
                </div>
                <Link to="/Calendar" className={style.card}>
                    <FontAwesomeIcon icon={faPersonChalkboard}size={'7x'}/>
                    <h3>Conograma de aulas</h3>
                </Link>
                <div className={style.card}>
                <Link to="/Forum" className={style.card}>
                    <FontAwesomeIcon icon={faCommentDots}size={'7x'}/>
                    <h3>Fórum</h3>
                </Link>
                </div>
                <div className={style.card}>
                    <FontAwesomeIcon icon={faQuestion}size={'7x'}/>
                    <h3>Ajuda</h3>
                </div>
            </div>
            <Footer />
        </div>
        
    );
}
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import style from './Services.module.css';
export default function Services(){
    return(
        <div className={style.container}>
            <Header />
            <div className={style.grid}>
                <div className={style.card}></div>
                <div className={style.card}></div>
                <div className={style.card}></div>
                <div className={style.card}></div>
                <div className={style.card}></div>
                <div className={style.card}></div>
            </div>
         
        </div>
        
    );
}
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import style from './Serv.module.css';
export default function Services(){
    return(
        <div className={style.container}>
            <Header></Header>

            <div className={style.grid}>
                <div className={style.card}></div>
                <div className={style.card}></div>
                <div className={style.card}></div>
                <div className={style.card}></div>
                <div className={style.card}></div>
                <div className={style.card}></div>
            </div>
            <Footer></Footer>
        </div>
    );
}
import style from './Mentors.module.css';
import Header from '../../Components/Header/Header';
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
        </div>
    );
}
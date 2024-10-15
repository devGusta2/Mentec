import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import style from './Forum.module.css'
export default function Forum(){
    return(
        <div className={style.container}>
            <Header></Header>
            
            <Footer></Footer>
        </div>
    );
}
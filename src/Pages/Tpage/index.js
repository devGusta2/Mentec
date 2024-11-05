import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer";
import Carousel from "../../Components/Carousel/Carousel";
import styles from './Teste.module.css'
import Vlibras from "../../Components/Vlibras/Vlibras";

function Tpage(){
    return(
        <div className={styles.container}>
            <Vlibras />
        </div>
    )
}


export default Tpage;
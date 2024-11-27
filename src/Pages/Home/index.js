import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Carousel from "../../Components/Carousel/Carousel"
import styles from "./Home.module.css"
import Accessibility from "../../Components/Acessibility/Accessibility"
export default function Home(){
    return(
        <div className={styles.container}>
            <Header />
            <Carousel />
           
            <div className={styles.news_container}>
                <h2>Notícias</h2>
                
            </div>
            <Accessibility />
            <Footer />
        </div>
    )
}
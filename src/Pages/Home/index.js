import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Carousel from "../../Components/Carousel/Carousel"
import styles from "./Home.module.css"
import Accessibility from "../../Components/Acessibility/Accessibility"
export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            {/* <Carousel /> */}

            <div className={styles.news_container}>
         
                <div className={styles.colNews}>
                    <div className={styles.newsBox}>
                        <img src='https://thumbs.dreamstime.com/b/programmierer-der-mit-programmcode-arbeitet-131979164.jpg' className={styles.img}>

                        </img>
                        <h3>Conheça as equipes ganhadoras do Interfatecs</h3>
                        <p>
                            Fique por dentro também das equipes da sua fatec 
                            participaram do interfatecs
                        </p>
                    </div>
                    <div className={styles.newsBox}>

                    </div>
                </div>
                <div className={styles.colNews}>

                </div>
            </div>
            <Accessibility />
            <Footer />
        </div>
    )
}
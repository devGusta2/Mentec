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
                        <h2>Conheça as equipes ganhadoras do Interfatecs</h2>
                        <p>
                            Fique por dentro também das equipes da sua fatec
                            participaram do interfatecs
                        </p>
                    </div>
                    <div className={styles.newsBox}>
                        <div className={styles.cardNews}>

                        </div>
                        <div className={styles.cardNews}>

                        </div>
                    </div>
                </div>
                <div className={styles.colNews}>
                    <div className={styles.newsBox}>
                        <img src='https://th.bing.com/th/id/R.74bbf3ef034fa9dbaca13a5b9f777fc6?rik=vnTSmAzvXDtayA&pid=ImgRaw&r=0' className={styles.img}>

                        </img>
                        <h2>Novas mentorias disponíveis</h2>
                        <p>
                            Veja as novas mentorias disponiveis em nosso portal de mentorias.
                        </p>
                    </div>
                    <div className={styles.newsBox} id={styles.inter}>
                        <img src='https://th.bing.com/th/id/OIP.OgTVdrYKcGStgZHikgmK7gHaGe?rs=1&pid=ImgDetMain' className={styles.img}>

                        </img>
                        <div className={styles.info}>
                            <h2>Veja as oportunidades de intercâmbio em sua fatec</h2>
                            <p>
                                FIque por dentro das oportunidades de intercâbio edisponíveis para sua fatec!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Accessibility />
            <Footer />
        </div>
    )
}
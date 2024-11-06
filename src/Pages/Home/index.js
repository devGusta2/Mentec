import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Carousel from "../../Components/Carousel/Carousel"
import style from "./Home.module.css"
import Accessibility from "../../Components/Acessibility/Accessibility"
export default function Home(){
    return(
        <div className={style.container}>
            <Header />
            <Carousel />
            <h3>Notícias</h3>
            <Accessibility />
            <Footer />
        </div>
    )
}
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Carousel from "../../Components/Carousel/Carousel"
import style from "./Home.module.css"
export default function Home(){
    return(
        <div className={style.container}>
            <Header />
            <Carousel />
            oi
            <Footer />
        </div>
    )
}
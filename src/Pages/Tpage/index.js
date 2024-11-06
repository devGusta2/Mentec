import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer";
import Carousel from "../../Components/Carousel/Carousel";
import styles from './Teste.module.css'
const body = document.querySelector('body');
var size_font = 15;
function font_size(e){
    if(e == 1){
        size_font +=2;
    }else{
        size_font -=2;
    }
    return body.style.fontSize = (size_font + 'px');

}
function Tpage(){
    return(
        <div className={styles.container}>
           <p>   
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi natus explicabo dolore fugit? At temporibus, assumenda provident quidem error
            eveniet impedit nihil, vel molestiae expedita libero soluta distinctio veritatis commodi.</p>

            <button onClick={() => font_size(1)}>Aumenta</button>
            <button onClick={() => font_size(0)}>Diminui</button>
        </div>
    )
}


export default Tpage;

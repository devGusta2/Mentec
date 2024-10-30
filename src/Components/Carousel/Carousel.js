import styles from './Carousel.module.css';
import {useRef} from 'react';
function Carousel(){
// use ref é um metodo de hook que cria uma referencia durante o ciclo de vida do componente via DOM
const img = useRef(null);

var n = 0;
// intervalo sobre a mudança de imagem
setInterval(()=>{
    // delimita um limite de imagens
    if(n <3 ){
        n+=1;
    }else{
        n=0;
    }
    if(img.current){
        if(n == 1){
            // muda para a segunda imagem
            img.current.style.marginLeft = '-25%';
        }else if(n == 2){
            img.current.style.marginLeft = '-50%';
        }else if(n == 3){
            
            img.current.style.marginLeft = '-75%';
        }else if(n == 4){
            img.current.style.marginLeft = '-100%';
        }else{
            // volta para a primeira imagem
            img.current.style.marginLeft = '-0%';
        }
    }
    console.log(n);
},5000);

    return(
        <div className={styles.carousel}>   
            <div className={styles.slides}>
                {/* radio buttons */}
                <input type="radio" name="radio-btn" id="radio1"></input>
                <input type="radio" name="radio-btn" id="radio2"></input>
                <input type="radio" name="radio-btn" id="radio3"></input>
                <input type="radio" name="radio-btn" id="radio4"></input>
         
                <div className={styles.slide} ref={img}>
                    <img  alt="img1" src="https://www.shutterstock.com/image-photo/happy-african-american-student-raising-600nw-1937721487.jpg"/>
                </div>
                <div className={styles.slide}>
                    <img src="https://cdn.create.vista.com/api/media/small/347407302/stock-photo-cheerful-student-holding-notebook-pointing-finger-yellow-background" />
                </div>
                <div className={styles.slide}>
                    <img src="https://png.pngtree.com/thumb_back/fh260/background/20231001/pngtree-energetic-university-student-engaged-with-laptop-3d-illustration-image_13571921.png"/>
                </div>
                <div className={styles.slide}>
                    <img src="https://cdn.diariodesuzano.com.br/upload/dn_noticia/2018/05/portal-1-fatec-ferraz.jpg" />
                </div>
                <div className={styles.navigation_auto}>
                    <div className={styles.auto_btn1}></div>
                    <div className={styles.auto_btn2}></div>
                    <div className={styles.auto_btn3}></div>
                    <div className={styles.auto_btn4}></div>
            
                </div>
            </div>

            <div className={styles.manual_navigation}>
                <label for="radio1" className={styles.manual_btn}/>
                <label for="radio2" className={styles.manual_btn}/>
                <label for="radio3" className={styles.manual_btn}/>
                <label for="radio4" className={styles.manual_btn}/>
  
            </div>  
        
        </div>
    );
}

export default Carousel;
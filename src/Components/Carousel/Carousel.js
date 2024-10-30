import styles from './Carousel.module.css';

function Carousel(){
    return(
        <div className={styles.carousel}>
            <div className={styles.slides}>
                {/* radio buttons */}
                <input type="radio" name="radio-btn" id="radio1"></input>
                <input type="radio" name="radio-btn" id="radio2"></input>
                <input type="radio" name="radio-btn" id="radio3"></input>
                <input type="radio" name="radio-btn" id="radio4"></input>
         
                <div className={styles.slide}>
                    <img  alt="img1" src="https://www.shutterstock.com/image-photo/happy-african-american-student-raising-600nw-1937721487.jpg"/>
                </div>
                <div className={styles.slide}>
                    <img src="https://cdn.create.vista.com/api/media/small/347407302/stock-photo-cheerful-student-holding-notebook-pointing-finger-yellow-background" />
                </div>

                <div className={styles.navigation_auto}>
                    <div className={styles.auto_btn1}></div>
                    <div className={styles.auto_btn2}></div>
                    <div className={styles.auto_btn3}></div>
                    <div className={styles.auto_btn4}></div>
            
                </div>
            </div>

            <div className={styles.manual_navigation}>
                <label fro="radio1" className={styles.manual_btn}/>
                <label fro="radio2" className={styles.manual_btn}/>
                <label fro="radio3" className={styles.manual_btn}/>
                <label fro="radio4" className={styles.manual_btn}/>
  
            </div>  
        </div>
    );
}

export default Carousel;
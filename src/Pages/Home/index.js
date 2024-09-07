import styles from './Home.module.css';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Carousel from '../../Components/Carousel/Carousel';
function Home(){
    return(
        <div className={styles.home}>
     
            <Header />
          
     
            <Footer />
        </div>
    );
}

export default Home;
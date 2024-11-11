import styles from './CreateMentoring2.module.css';
import hat from '../../../assets/img/Arts/motarboard.png';
import { Link } from 'react-router-dom';
export default function CreateMentoring2(){
    return(
        <div className={styles.CreateMentoring2}>
            <div className={styles.titles}>
                <div id={styles.line_detail}></div>
                <div className={styles.titles_art}>
                    <div className={styles.titles_box}>
                        <Link to="../Teacher/CreateMentoring"className={styles.link}><h3>Voltar</h3></Link>
                        <p>Passo 2 de 2</p>
                        <h1>Compartilhe seu conhecimento</h1>
                        <p>Publique sua mentoria e inspire novos talentos!</p>
                    </div>
                    <img src={hat} id={styles.hat}></img>
                </div>
            </div>
        </div>
    );
};
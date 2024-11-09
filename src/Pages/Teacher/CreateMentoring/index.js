import styles from './CreateMentoring.module.css';
import hat from '../../../assets/img/Arts/motarboard.png';
export default function CreateMentoring(){
    return(
        <div className={styles.CreateMentoring}>
            <div className={styles.titles}>
                <div id={styles.line_detail}></div>
                <div className={styles.titles_art}>
                    <div className={styles.titles_box}>
                        <h3>Voltar</h3>
                        <p>Passo 1 de 4</p>
                        <h1>Compartilhe seu conhecimento</h1>
                        <p>Publique sua mentoria e inspire novos talentos!</p>
                    </div>
                    <img src={hat} id={styles.hat}></img>
                </div>
            </div>
            <div className={styles.form_box}>
                <form>
                    
                </form>
            </div>
        </div>
    );
}
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
                    <div className={styles.col_form}>
                        <h4>Título</h4>
                        <input 
                        placeholder="Título da sua mentoria"
                        className={styles.text_inpt}></input>
                        <h4>Objetivo</h4>
                        <input 
                        placeholder="Descreva o objetivo de sua mentoria"
                        className={styles.text_inpt}></input>
                        <h4>Descrição</h4>
                        <textarea 
                        placeholder="Descreva sua mentoria"></textarea>
                    </div>
                    <div className={styles.col_form}>
                        <h4>Duração</h4>
                            <input 
                            type='number'
                            min="12"
                            max="200"
                            placeholder="Carga horária estimada"
                            className={styles.text_inpt}></input>
                        <h4>Período</h4>
                            <select className={styles.text_inpt}>
                                <option>Manhã</option>
                                <option>Tarde</option>
                                <option>Noite</option>
                            </select>
                        <h4>Modalidade</h4>
                            <select className={styles.text_inpt}>
                                <option>Presencial</option>
                                <option>Ead</option>
                                <option>Híbrido</option>
                            </select>
                       
                        <h4>Público alvo</h4>
                        <input 
                        placeholder="Quem você deseja alcançar"
                        className={styles.text_inpt}></input>
                    </div>
                      <div className={styles.next_btn}>
                            <h3>Próximo</h3>
                     </div>
                </form>
               
            </div>
        </div>
    );
}
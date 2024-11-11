import styles from './CreateMentoring.module.css';
import hat from '../../../assets/img/Arts/motarboard.png';
import { Link } from 'react-router-dom';
export default function CreateMentoring(){
    return(
        <div className={styles.CreateMentoring}>
            <div className={styles.titles}>
                <div id={styles.line_detail}></div>
                <div className={styles.titles_art}>
                    <div className={styles.titles_box}>
                        <Link  className={styles.link} to="../Teacher"> <h3>Voltar</h3></Link>
                        <p>Passo 1 de 2</p>
                        <h1>Compartilhe seu conhecimento</h1>
                        <p>Publique sua mentoria e inspire novos talentos!</p>
                    </div>
                    <img src={hat} id={styles.hat}></img>
                </div>
            </div>
            <div className={styles.form_box}>
                <form>
                    <div className={styles.col_form}>
                        <h4>* Título</h4>
                        <input 
                        required
                        placeholder="Título da sua mentoria"
                        className={styles.text_inpt}></input>

                        <h4>* Objetivo</h4>
                        <input 
                         required
                        placeholder="Descreva o objetivo de sua mentoria"
                        className={styles.text_inpt}></input>
                        <h4>* Descrição</h4>
                        <textarea 
                         required
                        placeholder="Descreva sua mentoria"></textarea>
                    </div>
                    <div className={styles.col_form}>
                        <h4>* Duração</h4>
                            <input 
                             required
                            type='number'
                            min="5"
                            max="200"
                            placeholder="Carga horária estimada"
                            className={styles.text_inpt}></input>
                        <h4>* Período</h4>
                            <select  required className={styles.text_inpt}>
                                <option value="" disabled selected>Selecione um período</option>
                                <option value="Manha">Manhã</option>
                                <option value="Tarde">Tarde</option>
                                <option value="Noite">Noite</option>
                            </select>
                        <h4>* Modalidade</h4>
                            <select  required className={styles.text_inpt}>
                            <option value="" disabled selected>Selecione uma modalidade</option>
                                <option value="Presencial">Presencial</option>
                                <option value="Ead">Ead</option>
                                <option value="Híbrido">Híbrido</option>
                            </select>
                       
                        <h4>* Público alvo</h4>
                        <input 
                         required
                        placeholder="Quem você deseja alcançar"
                        className={styles.text_inpt}></input>
                        <Link to="../Teacher/CreateMentoring2"type="submit"className={styles.next_btn}>
                            <h4>Próximo</h4>
                        </Link>
                    </div>
              
                </form>
           
            </div>
        </div>
    );
}
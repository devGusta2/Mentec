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
            <div className={styles.form_container}>
                <form>
                    <div className={styles.title_inpt}>
                        <h3>* Título:</h3>
                        <input
                        className={styles.text_inpt}
                        placeholder='Digite o título da sua mentoria'
                        />
                    </div>
                    <div className={styles.title_inpt}>
                        <h3>* Objetivo:</h3>
                        <input
                        className={styles.text_inpt}
                        placeholder='Digite o objetivo da sua mentoria'
                        />
                    </div>
                    <div className={styles.title_inpt}>
                        <h3>* Duração:</h3>
                        <input
                        type='number'
                        min={1}
                        max={200}
                        className={styles.text_inpt}
                        placeholder='Digite a duração da sua mentoria'
                        />
                    </div>
              
                    <div className={styles.title_inpt}>
                        <h3>* Público alvo:</h3>
                        <input
                        className={styles.text_inpt}
                        placeholder='Quem você deseja alcançar'
                        />
                    </div>
                    <div className={styles.title_inpt}>
                        <h3>* Frequência:</h3>
                        <input
                        className={styles.text_inpt}
                        placeholder='Exemplo: duas vezes por semana'
                        />
                    </div>
                    <div className={styles.title_inpt}>
                        <h3>* Período:</h3>
                        <select
                       
                       className={styles.text_inpt}
                       placeholder='Digite a frequência'
                       >
                           <option>Selecione um período</option>
                           <option>Manhã</option>
                           <option>Tarde</option>
                           <option>Noite</option>

                       </select>
                    </div>
                    <div className={styles.title_inpt}>
                        <h3>* Requisitos mínimos:</h3>
                        <input
                        className={styles.text_inpt}
                        placeholder='Exemplo: curso técnico'
                        />
                    </div>
                    <div className={styles.title_inpt}>
                        <h3>* Data de início:</h3>
                        <input
                        className={styles.text_inpt}
                        type='date'
                        placeholder='Informe quando a mentoria iniciará'
                        />
                    </div>
                    <div className={styles.title_inpt}>
                        <h3>* Instrutor:</h3>
                        <input
                        className={styles.text_inpt}
                        placeholder='Informe quem serão os instrutores'
                        />
                    </div>
                    
                    <div className={styles.title_inpt}>
                        <h3>* Modalidade:</h3>
                        <select
                       
                        className={styles.text_inpt}
                        
                        >
                            <option>Selecione uma modalidade</option>
                            <option>Presencial</option>
                            <option>Híbrido</option>
                            <option>Ead</option>

                        </select>
                    </div>
                    <div className={styles.title_text_area}>
                        <h3>* Descrição:</h3>
                        <textarea
                         style={{padding:'10px'}}
                        className={styles.text_inpt}
                        
                        placeholder='Digite o título da sua mentoria'
                        />
                    </div>
                    <button>
                        <h3>Publicar mentoria</h3>
                    </button>
                    
                </form>
            </div>
     
            
         
        </div>
    );
}
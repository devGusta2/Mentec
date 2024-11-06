import styles from './Contact.module.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faPhone, faEnvelope, faE } from '@fortawesome/free-solid-svg-icons';
import Accessibility from '../../Components/Acessibility/Accessibility';
export default function Contact(){
    return(
        <div className={styles.contact}>
            <Header></Header>
                <div className={styles.mainLayout}>
                    <div className={styles.formBox}>
                        <div className={styles.info}>
                            <h1 id={styles.title1}>Contato</h1>
                            <div className={styles.rowInfo}>
                                <FontAwesomeIcon icon={faMap} size="2x"/>
                                <p>
                                    Rua Carlos de Carvalho 200, Ferraz de Vasconcelos, SP, 08545-120 ·  1 km
                                </p>
                            </div>
                            <div className={styles.rowInfo}>
                                <FontAwesomeIcon icon={faPhone} size="2x"/>
                                <p>
                                    (11)4679-6145
                                </p>
                            </div>
                            <div className={styles.rowInfo}>
                                <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                                <p>
                                    Fatec.Ferraz@fatec.sp.gov.br
                                    (arrumar depois)
                                </p>
                            </div>
                        </div>
                        <div className={styles.subFormBox}>
                            <h1 id={styles.title2}>Envie sua mensagem!</h1>
                            <form className={styles.form}>
                                <label>Nome *</label>
                                <input 
                                type='text'
                                placeholder="Digite seu nome"
                                required
                                className={styles.inptContact}/>
                                <label>E-mail *</label>
                                <input 
                                required
                                type="email"
                                placeholder="Digite seu e-mail"
                                className={styles.inptContact}/>
                                <label>Sua mensagem *</label>
                                <textarea 
                                required
                                type="text"
                                 placeholder='Escreva sua mensagem:'
                                 id={styles.msContact}>

                                </textarea>
                                <input 
                               
                                type='submit'
                                name='enviar'
                                id={styles.btnEnviar}/>
                            </form>
                        </div>
                    </div>
                </div>
                <Accessibility />
            <Footer></Footer>
        </div>
    );
}


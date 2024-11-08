

import Accessibility from "../../Components/Acessibility/Accessibility";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";
import styles from './Profile.module.css';
function Profile(){
    return(
        <div className={styles.body}>
            <Header />
            <div className={styles.container}>
                <Menu />
                <form className={styles.infoContainer}>
                    
                    <div className={styles.card} style={{
                        padding:'20px', display:'flex', flexDirection:'column',justifyContent:'space-between'}}>
                        <h4>E-mail institucional:</h4>
                        <p>EmailInsitucional@fatec.so.gov.br</p>
                        <h4>Matricula:</h4>
                        <p>123456789</p>
                        <h4>Registro do aluno(a)</h4>
                        <p>29204823252165116</p>
                    </div>
                    <div className={styles.card} 
                        style={{
                        padding:'20px', display:'flex', flexDirection:'column',justifyContent:'space-between'}}>
                            
                        <h4>Idade: 32</h4>
                        <h4>Cursando:</h4>
                        <p>Análise e Desenvolvimento de Sistemas</p>
                    </div>
                    <textarea 
                        placeholder="Adicione suas áreas de interesse, habilidades e objetivos"
                        className={styles.card}></textarea>
                    <div className={styles.card}
                        style={{
                        padding:'20px', display:'flex', flexDirection:'column',justifyContent:'space-between'}}>

                        <h4>Informações para contato:</h4>
                        <p></p>
                        <h4>E-mail:</h4>
                        <p>EmailInsitucional@fatec.so.gov.br</p>
                        <h4>E-mail secundário:</h4>
                        <p>Desempregado@gmail.com</p>
                        <h4>Telefone:</h4>
                        <p>(11)94855158</p>
                    </div>
                </form>
                
            </div>
            <Accessibility/>
          
        </div>
    );
}


export default Profile;
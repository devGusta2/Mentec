import styles from './Footer.module.css';


function Footer(){
    return(
        <div className={styles.footer}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <h3>
                        FACULDADE DE TECNOLOGIA DE FERRAZ DE VASCONCELOS
                    </h3>
                </div>
                <div className={styles.column}>
                    <h1 className={styles.title}>Mentec</h1>
                </div>
                <div className={styles.column}>
                    <p>
                    Rua Carlos de Carvalho 200, Ferraz de Vasconcelos, SP, 08545-120 · 3,9 km
                    </p>
                </div>
            </div>
            <div className={styles.row}>
                <p>
                    &copy; {new Date().getFullYear()} WindRose Inc. Todos os direitos reservados.
                </p>
            </div>
        </div>
    );  
}


export default Footer;
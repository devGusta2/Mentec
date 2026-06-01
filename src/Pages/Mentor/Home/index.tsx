import styles from "./index.module.css";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
    return (
        <div className={styles.container}>
            <section className={styles.card}>
                <span className={styles.pill}>Área do monitor</span>

                <h1>Transformando conhecimento em oportunidades.</h1>

                <p>
                    Bem-vindo ao painel do monitor do Mentec. Este ambiente foi
                    desenvolvido para facilitar o acompanhamento de alunos,
                    a gestão de monitorias e a troca de conhecimento dentro da
                    comunidade acadêmica.
                </p>

                <p>
                    Utilize este espaço para organizar suas atividades,
                    acompanhar demandas dos estudantes e contribuir para uma
                    jornada de aprendizado mais dinâmica e colaborativa.
                </p>
            </section>
        </div>
    );
}

import { useState, useEffect } from "react";
import styles from "./index.module.css";
import { faChartLine, faUsers, faBook, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
    const [stats, setStats] = useState({
        totalMentorias: 0,
        alunosAtendidos: 0,
        sessoesHoje: 0,
        proximasSessoes: 0
    });

    useEffect(() => {
        setStats({
            totalMentorias: 8,
            alunosAtendidos: 45,
            sessoesHoje: 3,
            proximasSessoes: 5
        });
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Dashboard do</h1>
                <p>Bem-vindo! Aqui está um resumo das suas atividades.</p>
            </div>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faBook} />
                    </div>
                    <div className={styles.content}>
                        <h3>{stats.totalMentorias}</h3>
                        <p>Mentorias Ativas</p>
                    </div>
                </div>

                <div className={styles.statCard}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faUsers} />
                    </div>
                    <div className={styles.content}>
                        <h3>{stats.alunosAtendidos}</h3>
                        <p>Alunos Atendidos</p>
                    </div>
                </div>

                <div className={styles.statCard}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faCalendar} />
                    </div>
                    <div className={styles.content}>
                        <h3>{stats.sessoesHoje}</h3>
                        <p>Sessões Hoje</p>
                    </div>
                </div>

                <div className={styles.statCard}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faChartLine} />
                    </div>
                    <div className={styles.content}>
                        <h3>{stats.proximasSessoes}</h3>
                        <p>Próximas Sessões</p>
                    </div>
                </div>
            </div>

            <div className={styles.recentActivity}>
                <h2>Atividades Recentes</h2>
                <ul>
                    <li>Sessão de mentoria em JavaScript - 12 alunos</li>
                    <li>Nova turma criada: React Avançado</li>
                    <li>Perfil atualizado</li>
                </ul>
            </div>
        </div>
    );
}
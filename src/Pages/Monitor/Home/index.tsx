import { useState, useEffect } from "react";
import styles from "./index.module.css";
import { faChartLine, faUsers, faBook, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeMonitor = () => {
    // Simulando dados do dashboard
    const [stats, setStats] = useState({
        totalMonitorias: 0,
        alunosAtendidos: 0,
        sessoesHoje: 0,
        proximasSessoes: 0
    });

    useEffect(() => {
        // Aqui você pode buscar dados reais da API
        // Por enquanto, dados mockados
        setStats({
            totalMonitorias: 5,
            alunosAtendidos: 23,
            sessoesHoje: 2,
            proximasSessoes: 3
        });
    }, []);

    return (
        <div className={styles.container}>
            {/* <div className={styles.header}>
                <h1>Dashboard do Monitor</h1>
                <p>Bem-vindo! Aqui está um resumo das suas atividades.</p>
            </div>

            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={faBook} />
                    </div>
                    <div className={styles.content}>
                        <h3>{stats.totalMonitorias}</h3>
                        <p>Monitorias Ativas</p>
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
                    <li>Sessão de monitoria em Matemática - 15 alunos</li>
                    <li>Nova monitoria criada: Física Aplicada</li>
                    <li>Perfil atualizado</li>
                </ul>
            </div> */}
        </div>
    );
}

export default HomeMonitor;
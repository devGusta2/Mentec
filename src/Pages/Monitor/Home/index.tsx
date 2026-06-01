import styles from "./index.module.css";
import {
  faArrowRight,
  faBookOpen,
  faCalendarCheck,
  faCircleCheck,
  faClock,
  faStar,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const atalhos = [
  {
    titulo: "Monitorias do dia",
    descricao: "Veja as sessões de hoje e acesse rápido o que falta atender.",
    icone: faCalendarCheck,
    cor: "#b11226"
  },
  {
    titulo: "Turmas ativas",
    descricao: "Acompanhe os grupos que você atende com mais frequência.",
    icone: faUsers,
    cor: "#0f766e"
  },
  {
    titulo: "Materiais",
    descricao: "Abra resumos, links e conteúdos que você usa nas monitorias.",
    icone: faBookOpen,
    cor: "#1d4ed8"
  }
];

const prioridades = [
  "Preparar a monitoria de Matemática Aplicada às 14h",
  "Responder dúvidas pendentes no grupo de Programação",
  "Atualizar a lista de materiais para a próxima semana"
];

const atividades = [
  {
    titulo: "Sessão concluída",
    descricao: "Matemática Básica com 12 alunos atendidos",
    horario: "Hoje, 09:40"
  },
  {
    titulo: "Novo material anexado",
    descricao: "Resumo de funções e exercícios práticos",
    horario: "Hoje, 08:20"
  },
  {
    titulo: "Próxima sessão",
    descricao: "Estruturas de dados começa em 14:00",
    horario: "Hoje, 13:15"
  }
];

const destaques = [
  {
    valor: "05",
    label: "monitorias ativas"
  },
  {
    valor: "23",
    label: "alunos acompanhados"
  },
  {
    valor: "02",
    label: "sessões hoje"
  }
];

const HomeMonitor = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.pill}>Área do monitor</span>
          <h1>Seu ponto de partida para o dia</h1>
          <p>
            Acesse rapidamente suas monitorias, revise prioridades e acompanhe
            o que está acontecendo sem precisar abrir várias telas.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.primaryAction}>
              Ver monitorias de hoje
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <button className={styles.secondaryAction}>
              Atualizar agenda
            </button>
          </div>

          <div className={styles.quickStats}>
            {destaques.map((item) => (
              <article key={item.label} className={styles.statCard}>
                <strong>{item.valor}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>

        <aside className={styles.heroPanel}>
          <div className={styles.panelTop}>
            <FontAwesomeIcon icon={faClock} />
            <span>Próxima sessão em 45 min</span>
          </div>
          <h2>Foco do momento</h2>
          <p>
            Matemática Aplicada com a turma do 2º semestre. Separe os exemplos
            e o material de apoio antes do início.
          </p>

          <div className={styles.panelBadge}>
            <FontAwesomeIcon icon={faCircleCheck} />
            Tudo pronto para começar
          </div>
        </aside>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Atalhos rápidos</h2>
          <p>Os caminhos que você mais usa, reunidos em um lugar só.</p>
        </div>

        <div className={styles.cardsGrid}>
          {atalhos.map((card) => (
            <article key={card.titulo} className={styles.actionCard}>
              <div
                className={styles.actionIcon}
                style={{ backgroundColor: `${card.cor}18`, color: card.cor }}
              >
                <FontAwesomeIcon icon={card.icone} />
              </div>
              <h3>{card.titulo}</h3>
              <p>{card.descricao}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.bottomGrid}>
        <article className={styles.panel}>
          <div className={styles.sectionHeader}>
            <h2>Prioridades do dia</h2>
            <p>Uma visão curta do que realmente precisa da sua atenção.</p>
          </div>

          <ul className={styles.priorityList}>
            {prioridades.map((item) => (
              <li key={item}>
                <FontAwesomeIcon icon={faStar} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className={styles.panel}>
          <div className={styles.sectionHeader}>
            <h2>Atividade recente</h2>
            <p>O que aconteceu nas últimas horas na sua rotina.</p>
          </div>

          <div className={styles.activityList}>
            {atividades.map((item) => (
              <div key={item.titulo} className={styles.activityItem}>
                <div className={styles.activityDot} />
                <div>
                  <strong>{item.titulo}</strong>
                  <p>{item.descricao}</p>
                </div>
                <time>{item.horario}</time>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
};

export default HomeMonitor;

import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FaCommentDots, FaPlus, FaMagnifyingGlass } from "react-icons/fa6";
import { getApiUrl, getToken } from "../../../utils/AuthProvider";
import styles from "./index.module.css";

type Mensagem = {
  mensagem: string;
  usuario: string;
  statusModeracao: string | null;
};

type Topico = {
  id: number;
  titulo: string | null;
  descricao: string | null;
  statusModeracao: string | null;
  criador: string | null;
  mensagens: Mensagem[];
  ra: string
};

export default function ForumGestor() {
  const API_URL = getApiUrl();
  const TOKEN = getToken();

  const [topicos, setTopicos] = useState<Topico[]>([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState("");
  const [criandoTopico, setCriandoTopico] = useState(false);
  const [tituloNovo, setTituloNovo] = useState("");
  const [descricaoNova, setDescricaoNova] = useState("");

  const fetchTopicos = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/topicos/listar`, {
        headers: { Authorization: `Bearer ${TOKEN}` }
      });
      console.log(response.data)
      setTopicos(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Erro ao listar tópicos:", error);
      setTopicos([]);
    } finally {
      setLoading(false);
    }
  }, [API_URL, TOKEN]);

  useEffect(() => {
    fetchTopicos();
  }, [fetchTopicos]);

  const topicosFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();

    if (!termo) return topicos;

    return topicos.filter((topico) => {
      const campos = [
        topico.titulo ?? "",
        topico.descricao ?? "",
        ...(topico.mensagens ?? []).map(
          (item) => `${item.usuario} ${item.mensagem}`
        )
      ]
        .join(" ")
        .toLowerCase();

      return campos.includes(termo);
    });
  }, [busca, topicos]);

  const totalComentarios = topicos.reduce(
    (acc, topico) => acc + (topico.mensagens?.length || 0),
    0
  );

  const handleCriarTopico = async () => {
    if (!tituloNovo.trim() || !descricaoNova.trim()) {
      alert("Preencha o título e a descrição.");
      return;
    }

    try {
      await axios.post(
        `${API_URL}/topicos/criar`,
        {
          titulo: tituloNovo,
          descricao: descricaoNova,
          idUser: Number(localStorage.getItem("userId"))
        },
        { headers: { Authorization: `Bearer ${TOKEN}` } }
      );

      setTituloNovo("");
      setDescricaoNova("");
      setCriandoTopico(false);
      await fetchTopicos();
    } catch (error: any) {
      alert(error?.response?.data?.message || "Erro ao criar tópico.");
    }
  };

  const getStatusInfo = (status?: string | null) => {
    switch (status) {
      case "PERIGOSO":
        return {
          label: "🔴 Perigoso",
          border: "#dc2626",
          background: "#fef2f2"
        };

      case "SUSPEITO":
        return {
          label: "🟡 Suspeito",
          border: "#f59e0b",
          background: "#fffbeb"
        };

      case "SEGURO":
        return {
          label: "🟢 Seguro",
          border: "#16a34a",
          background: "#f0fdf4"
        };

      default:
        return {
          label: "⚪ Não analisado",
          border: "#9ca3af",
          background: "#ffffff"
        };
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1>Fórum</h1>
          <p>Lista simples dos tópicos e mensagens.</p>
        </div>

        <button className={styles.primaryAction} onClick={() => setCriandoTopico((prev) => !prev)}>
          <FaPlus />
          Novo tópico
        </button>
      </div>

      <div className={styles.metrics}>
        <article>
          <span>Tópicos</span>
          <strong>{topicos.length}</strong>
        </article>
        <article>
          <span>Mensagens</span>
          <strong>{totalComentarios}</strong>
        </article>
        <article>
          <span>Filtrados</span>
          <strong>{topicosFiltrados.length}</strong>
        </article>
      </div>

      <div className={styles.searchBox}>
        <FaMagnifyingGlass />
        <input value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Buscar tópico" />
      </div>

      {criandoTopico && (
        <div className={styles.createBox}>
          <h2>Criar novo tópico</h2>
          <div className={styles.formGrid}>
            <input
              value={tituloNovo}
              onChange={(e) => setTituloNovo(e.target.value)}
              placeholder="Título do tópico"
            />
            <textarea
              value={descricaoNova}
              onChange={(e) => setDescricaoNova(e.target.value)}
              placeholder="Descreva o assunto principal do tópico"
            />
          </div>
          <button className={styles.primaryAction} onClick={handleCriarTopico}>
            Publicar tópico
          </button>
        </div>
      )}

      <div className={styles.table}>
        <div className={styles.tableHead}>
          <div>ID</div>
          <div>Tópico</div>
          <div>Descrição</div>
          <div>Status</div>
          <div>Mensagens</div>
        </div>
        <div className={styles.tableBody}>
          {loading ? (
            <div className={styles.empty}>Carregando tópicos...</div>
          ) : topicosFiltrados.length === 0 ? (
            <div className={styles.empty}>Nenhum tópico encontrado.</div>
          ) : (
            topicosFiltrados.map((topico) => {
              const ultimaMensagem =
                topico.mensagens?.[topico.mensagens.length - 1];

              const status = getStatusInfo(
                topico.statusModeracao
              );

              return (
                <div
                  key={topico.id}
                  className={styles.row}
                  style={{
                    borderLeft: `8px solid ${status.border}`,
                    backgroundColor: status.background
                  }}
                >
                  <div className={styles.cellId}>
                    {topico.id}
                  </div>

                  <div className={styles.cellTitle}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        flexWrap: "wrap"
                      }}
                    >
                      <span>
                        {topico.titulo ?? "Sem título"}
                      </span>

                      <span
                        style={{
                          background: status.border,
                          color: "#fff",
                          padding: "4px 10px",
                          borderRadius: "999px",
                          fontSize: "12px",
                          fontWeight: 700
                        }}
                      >
                        {status.label}
                      </span>
                    </div>

                    <small
                      style={{
                        display: "block",
                        marginTop: "6px",
                        color: "#6b7280"
                      }}
                    >
                      Criado por: {topico.criador} 
                      <br />
                      Ra: {topico.ra}
                    </small>
                  </div>

                  <div className={styles.cellDesc}>
                    {topico.descricao ?? "Sem descrição"}
                  </div>

                  <div className={styles.cellCount}>
                    <span className={styles.countBadge}>
                      <FaCommentDots />
                      {topico.mensagens?.length || 0}
                    </span>

                    <p>
                      {ultimaMensagem
                        ? `${ultimaMensagem.usuario}: ${ultimaMensagem.mensagem}`
                        : "Sem mensagens"}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FaCommentDots, FaPlus, FaMagnifyingGlass } from "react-icons/fa6";
import { getApiUrl, getToken } from "../../../utils/AuthProvider";
import styles from "./index.module.css";

type Mensagem = {
  mensagem: string;
  nome: string;
};

type Topico = {
  id: number;
  titulo: string;
  descricao: string;
  mensagem: Mensagem[];
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
        topico.titulo,
        topico.descricao,
        ...(topico.mensagem ?? []).map((item) => `${item.nome} ${item.mensagem}`)
      ]
        .join(" ")
        .toLowerCase();

      return campos.includes(termo);
    });
  }, [busca, topicos]);

  const totalComentarios = topicos.reduce((acc, topico) => acc + (topico.mensagem?.length || 0), 0);

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
          <div>Mensagens</div>
        </div>

        <div className={styles.tableBody}>
          {loading ? (
            <div className={styles.empty}>Carregando tópicos...</div>
          ) : topicosFiltrados.length === 0 ? (
            <div className={styles.empty}>Nenhum tópico encontrado.</div>
          ) : (
            topicosFiltrados.map((topico) => {
              const ultimaMensagem = topico.mensagem?.[topico.mensagem.length - 1];

              return (
                <div key={topico.id} className={styles.row}>
                  <div className={styles.cellId}>{topico.id}</div>
                  <div className={styles.cellTitle}>{topico.titulo}</div>
                  <div className={styles.cellDesc}>{topico.descricao}</div>
                  <div className={styles.cellCount}>
                    <span className={styles.countBadge}>
                      <FaCommentDots />
                      {topico.mensagem?.length || 0}
                    </span>
                    <p>
                      {ultimaMensagem
                        ? `${ultimaMensagem.nome}: ${ultimaMensagem.mensagem}`
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

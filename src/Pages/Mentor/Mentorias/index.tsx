import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./index.module.css";
import { getApiUrl, getToken } from "../../../utils/AuthProvider";

export function MentoriasCards({ reload, onEdit }: any) {
  const API_URL = getApiUrl();
  const TOKEN = getToken();

  const [monitoriasData, setMonitoriasData] = useState<any[]>([]);
  const idUser = localStorage.getItem("useId");

  const fetchMonitorias = async () => {
    try {
      const resposta = await axios.get(
        `${API_URL}/monitorias/listarMonitoriasMonitor/${idUser}`,
        {
          headers: { Authorization: `Bearer ${TOKEN}` }
        }
      );
      setMonitoriasData(resposta.data);
    } catch (e) {
      alert("Erro ao listar monitorias");
    }
  };

  useEffect(() => {
    fetchMonitorias();
  }, [reload]);

  return (
    <div className={styles.cardsContainer}>
      {monitoriasData.length > 0 ? (
        monitoriasData.map((mentoria) => (
          <div key={mentoria.id} className={styles.card} style={{backgroundColor: mentoria.estado == "PENDENTE" ? "#fff3cd" : "#b8e6c1" }}>
            <div className={styles.cardInfo}>
              <h3>{mentoria.titulo}</h3>

              <p className={styles.descricao}>
                {mentoria.descricao || "Sem descrição"}
              </p>

              <div className={styles.infoGroup}>
                <div>
                  <span className={styles.label}>Disciplina</span>
                  <p>{mentoria.disciplinaDto?.nome}</p>
                </div>

                <div>
                  <span className={styles.label}>Data</span>
                  <p>{mentoria.data || "-"}</p>
                </div>

                <div>
                  <span className={styles.label}>Horário</span>
                  <p>{mentoria.horario || "-"}</p>
                </div>

                <div>
                  <span className={styles.label}>Alunos</span>
                  <p>{mentoria.qtdAlunos ?? 0}</p>
                </div>
              </div>

              {mentoria.link && (
                <div className={styles.linkContainer}>
                  <span className={styles.label}>Link</span>
                  <a
                    href={mentoria.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Acessar reunião
                  </a>
                </div>
              )}
            </div>

            <div className={styles.cardActions}>
              <button
                className={styles.edit}
                onClick={() => onEdit(mentoria)}
              >
                Editar / Completar
              </button>

              <button className={styles.delete}>
                Cancelar
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Nenhuma monitoria encontrada.</p>
      )}
    </div>
  );
}

function EditMentoriaModal({
  isOpen,
  onClose,
  onSuccess,
  mentoria
}: any) {

  const API_URL = getApiUrl();
  const TOKEN = getToken();

  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [imagem, setImagem] = useState("");
  const [link, setLink] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (mentoria) {
      setDescricao(mentoria.descricao || "");
      setData(mentoria.data || "");
      setHorario(mentoria.horario || "");
      setImagem(mentoria.imagem || "");
      setLink(mentoria.link || "");
    }
  }, [mentoria]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!descricao || !data || !horario) {
      alert("Preencha os campos obrigatórios");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        descricao,
        data,
        horario,
        imagem,
        link,
      };

      await axios.put(
        `${API_URL}/monitorias/ativar/${mentoria.id}`,
        payload,
        {
          headers: { Authorization: `Bearer ${TOKEN}` }
        }
      );

      onSuccess();
      onClose();

    } catch (e) {
      alert("Erro ao atualizar monitoria");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Completar Monitoria</h2>

        <form onSubmit={handleSubmit}>

          <div className={styles.formGroup}>
            <label>Descrição</label>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Data</label>
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Horário</label>
            <input
              type="time"
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Imagem (URL)</label>
            <input
              type="text"
              value={imagem}
              onChange={(e) => setImagem(e.target.value)}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Link da reunião</label>
            <input
              type="text"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>

          <div className={styles.actions}>
            <button type="button" onClick={onClose} className={styles.cancel}>
              Cancelar
            </button>

            <button type="submit" className={styles.submit} disabled={loading}>
              {loading ? "Salvando..." : "Ativar Monitoria"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default function Mentorias() {

  const [reloadTable, setReloadTable] = useState(false);
  const [selectedMentoria, setSelectedMentoria] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleEdit = (mentoria: any) => {
    setSelectedMentoria(mentoria);
    setOpenEditModal(true);
  };

  const handleSuccess = () => {
    setReloadTable(prev => !prev);
  };

  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <h2>Minhas monitorias</h2>
      </div>

      <input
        className={styles.search}
        placeholder="Buscar monitoria"
      />

      <MentoriasCards
        reload={reloadTable}
        onEdit={handleEdit}
      />

      <EditMentoriaModal
        isOpen={openEditModal}
        onClose={() => setOpenEditModal(false)}
        onSuccess={handleSuccess}
        mentoria={selectedMentoria}
      />

    </div>
  );
}
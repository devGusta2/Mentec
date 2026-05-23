import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./index.module.css";

import {
  FaPlus,
  FaTrash,
  FaClock,
  FaCalendarAlt
} from "react-icons/fa";

import {
  getApiUrl,
  getToken
} from "../../../utils/AuthProvider";

export function MentoriasCards({
  reload,
  onEdit
}: any) {

  const API_URL = getApiUrl();
  const TOKEN = getToken();

  const [monitoriasData, setMonitoriasData] =
    useState<any[]>([]);

  const idUser =
    localStorage.getItem("useId");

  const fetchMonitorias = async () => {
    try {

      const resposta = await axios.get(
        `${API_URL}/monitorias/listarMonitoriasMonitor/${idUser}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`
          }
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

          <div
            key={mentoria.id}
            className={styles.card}
            style={{
              backgroundColor:
                mentoria.estado === "PENDENTE"
                  ? "#fff3cd"
                  : "#b8e6c1"
            }}
          >

            <div className={styles.cardInfo}>

              <h3 className={styles.cardTitle}>
                {mentoria.titulo}
              </h3>

              <p className={styles.descricao}>
                {mentoria.descricao ||
                  "Sem descrição"}
              </p>

              <div className={styles.infoGroup}>

                <div>
                  <span className={styles.label}>
                    Disciplina
                  </span>

                  <p>
                    {mentoria.disciplinaDto?.nome}
                  </p>
                </div>

                <div>
                  <span className={styles.label}>
                    Data
                  </span>

                  <p>
                    {mentoria.data || "-"}
                  </p>
                </div>

                <div>
                  <span className={styles.label}>
                    Horário
                  </span>

                  <p>
                    {mentoria.horario || "-"}
                  </p>
                </div>

                <div>
                  <span className={styles.label}>
                    Alunos
                  </span>

                  <p>
                    {mentoria.qtdAlunos ?? 0}
                  </p>
                </div>

              </div>

              {mentoria.link && (
                <div
                  className={styles.linkContainer}
                >

                  <span className={styles.label}>
                    Link
                  </span>

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
                onClick={() =>
                  onEdit(mentoria)
                }
              >
                Editar / Completar
              </button>

              <button
                className={styles.delete}
              >
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

  const [step, setStep] = useState(1);

  const [descricao, setDescricao] =
    useState("");

  const [data, setData] =
    useState("");

  const [horario, setHorario] =
    useState("");

  const [imagem, setImagem] =
    useState("");

  const [link, setLink] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [aulas, setAulas] =
    useState<any[]>([
      {
        titulo: "",
        descricao: "",
        data: "",
        inicio: "",
        fim: ""
      }
    ]);

  useEffect(() => {

    if (mentoria) {

      setDescricao(
        mentoria.descricao || ""
      );

      setData(
        mentoria.data || ""
      );

      setHorario(
        mentoria.horario || ""
      );

      setImagem(
        mentoria.imagem || ""
      );

      setLink(
        mentoria.link || ""
      );

    }

  }, [mentoria]);

  const adicionarAula = () => {

    setAulas([
      ...aulas,
      {
        titulo: "",
        descricao: "",
        data: "",
        inicio: "",
        fim: ""
      }
    ]);

  };

  const removerAula = (
    index: number
  ) => {

    const novasAulas = [...aulas];

    novasAulas.splice(index, 1);

    setAulas(novasAulas);

  };

  const atualizarAula = (
    index: number,
    campo: string,
    valor: string
  ) => {

    const novasAulas = [...aulas];

    novasAulas[index][campo] =
      valor;

    setAulas(novasAulas);

  };

  const handleSubmit = async (
    e: any
  ) => {

    e.preventDefault();

    if (
      !descricao ||
      !data ||
      !horario
    ) {
      alert(
        "Preencha os campos obrigatórios"
      );

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
        aulas
      };

      await axios.put(
        `${API_URL}/monitorias/ativar/${mentoria.id}`,
        payload,
        {
          headers: {
            Authorization:
              `Bearer ${TOKEN}`
          }
        }
      );

      onSuccess();

      onClose();

    } catch (e) {

      alert(
        "Erro ao atualizar monitoria"
      );

    } finally {

      setLoading(false);

    }

  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>

      <div className={styles.modal}>

        <div className={styles.modalHeader}>

          <div>

            <span
              className={styles.modalBadge}
            >
              Completar monitoria
            </span>

            <h2>
              {mentoria?.titulo}
            </h2>

          </div>

          <button
            className={styles.closeButton}
            onClick={onClose}
          >
            ×
          </button>

        </div>

        {/* STEPS */}

        <div className={styles.stepsContainer}>

          <div
            className={`${styles.step} ${
              step >= 1
                ? styles.activeStep
                : ""
            }`}
          >

            <div
              className={styles.stepCircle}
            >
              1
            </div>

            <div>

              <h4>Informações</h4>

              <p>
                Complete os dados da
                monitoria
              </p>

            </div>

          </div>

          <div className={styles.stepLine} />

          <div
            className={`${styles.step} ${
              step >= 2
                ? styles.activeStep
                : ""
            }`}
          >

            <div
              className={styles.stepCircle}
            >
              2
            </div>

            <div>

              <h4>Aulas</h4>

              <p>
                Adicione o cronograma
              </p>

            </div>

          </div>

        </div>

        <form
          onSubmit={handleSubmit}
          className={styles.form}
        >

          {/* STEP 1 */}

          {step === 1 && (

            <div className={styles.section}>

              <h3>
                Informações gerais
              </h3>

              <div
                className={styles.formGroup}
              >

                <label>
                  Descrição
                </label>

                <textarea
                  value={descricao}
                  onChange={(e) =>
                    setDescricao(
                      e.target.value
                    )
                  }
                  placeholder="Descreva a monitoria"
                />

              </div>

              <div className={styles.row}>

                <div
                  className={styles.formGroup}
                >

                  <label>Data</label>

                  <input
                    type="date"
                    value={data}
                    onChange={(e) =>
                      setData(
                        e.target.value
                      )
                    }
                  />

                </div>

                <div
                  className={styles.formGroup}
                >

                  <label>
                    Horário
                  </label>

                  <input
                    type="time"
                    value={horario}
                    onChange={(e) =>
                      setHorario(
                        e.target.value
                      )
                    }
                  />

                </div>

              </div>

              <div
                className={styles.formGroup}
              >

                <label>
                  Imagem (URL)
                </label>

                <input
                  type="text"
                  value={imagem}
                  onChange={(e) =>
                    setImagem(
                      e.target.value
                    )
                  }
                />

              </div>

              <div
                className={styles.formGroup}
              >

                <label>
                  Link da reunião
                </label>

                <input
                  type="text"
                  value={link}
                  onChange={(e) =>
                    setLink(
                      e.target.value
                    )
                  }
                />

              </div>

              <div
                className={styles.stepActions}
              >

                <button
                  type="button"
                  className={styles.nextButton}
                  onClick={() =>
                    setStep(2)
                  }
                >
                  Próximo passo
                </button>

              </div>

            </div>
          )}

          {/* STEP 2 */}

          {step === 2 && (

            <div className={styles.section}>

              <div
                className={styles.sectionHeader}
              >

                <div>

                  <h3>
                    Cronograma de aulas
                  </h3>

                  <p>
                    Adicione as aulas
                    que os alunos
                    poderão visualizar
                    no app.
                  </p>

                </div>

                <button
                  type="button"
                  className={
                    styles.addClassButton
                  }
                  onClick={adicionarAula}
                >
                  <FaPlus />
                </button>

              </div>

              <div
                className={styles.aulasContainer}
              >

                {aulas.map(
                  (aula, index) => (

                    <div
                      key={index}
                      className={
                        styles.aulaCard
                      }
                    >

                      <div
                        className={
                          styles.aulaHeader
                        }
                      >

                        <h4>
                          Aula{" "}
                          {index + 1}
                        </h4>

                        {aulas.length >
                          1 && (

                          <button
                            type="button"
                            className={
                              styles.removeButton
                            }
                            onClick={() =>
                              removerAula(
                                index
                              )
                            }
                          >
                            <FaTrash />
                          </button>

                        )}

                      </div>

                      <div
                        className={
                          styles.formGroup
                        }
                      >

                        <label>
                          Título da aula
                        </label>

                        <input
                          type="text"
                          placeholder="Insira o título da aula"
                          value={
                            aula.titulo
                          }
                          onChange={(e) =>
                            atualizarAula(
                              index,
                              "titulo",
                              e.target
                                .value
                            )
                          }
                        />

                      </div>

                      <div
                        className={
                          styles.formGroup
                        }
                      >

                        <label>
                          Descrição e
                          tópicos
                        </label>

                        <textarea
                          placeholder="Insira uma descrição e tópicos da aula"
                          value={
                            aula.descricao
                          }
                          onChange={(e) =>
                            atualizarAula(
                              index,
                              "descricao",
                              e.target
                                .value
                            )
                          }
                        />

                      </div>

                      <div
                        className={styles.row}
                      >

                        <div
                          className={
                            styles.formGroup
                          }
                        >

                          <label>
                            Data
                          </label>

                          <div
                            className={
                              styles.inputIcon
                            }
                          >

                            <FaCalendarAlt />

                            <input
                              type="date"
                              value={
                                aula.data
                              }
                              onChange={(
                                e
                              ) =>
                                atualizarAula(
                                  index,
                                  "data",
                                  e.target
                                    .value
                                )
                              }
                            />

                          </div>

                        </div>

                        <div
                          className={
                            styles.formGroup
                          }
                        >

                          <label>
                            Início
                          </label>

                          <div
                            className={
                              styles.inputIcon
                            }
                          >

                            <FaClock />

                            <input
                              type="time"
                              value={
                                aula.inicio
                              }
                              onChange={(
                                e
                              ) =>
                                atualizarAula(
                                  index,
                                  "inicio",
                                  e.target
                                    .value
                                )
                              }
                            />

                          </div>

                        </div>

                        <div
                          className={
                            styles.formGroup
                          }
                        >

                          <label>
                            Fim
                          </label>

                          <div
                            className={
                              styles.inputIcon
                            }
                          >

                            <FaClock />

                            <input
                              type="time"
                              value={
                                aula.fim
                              }
                              onChange={(
                                e
                              ) =>
                                atualizarAula(
                                  index,
                                  "fim",
                                  e.target
                                    .value
                                )
                              }
                            />

                          </div>

                        </div>

                      </div>

                    </div>
                  )
                )}

              </div>

              <div
                className={styles.stepActions}
              >

                <button
                  type="button"
                  className={styles.backButton}
                  onClick={() =>
                    setStep(1)
                  }
                >
                  Voltar
                </button>

                <button
                  type="submit"
                  className={styles.submit}
                  disabled={loading}
                >
                  {loading
                    ? "Salvando..."
                    : "Ativar Monitoria"}
                </button>

              </div>

            </div>
          )}

        </form>

      </div>

    </div>
  );
}

export default function Mentorias() {

  const [reloadTable, setReloadTable] =
    useState(false);

  const [selectedMentoria,
    setSelectedMentoria] =
    useState(null);

  const [openEditModal,
    setOpenEditModal] =
    useState(false);

  const handleEdit = (
    mentoria: any
  ) => {

    setSelectedMentoria(mentoria);

    setOpenEditModal(true);

  };

  const handleSuccess = () => {

    setReloadTable(
      (prev) => !prev
    );

  };

  return (
    <div className={styles.container}>

      <div className={styles.header}>
        <h2>
          Minhas monitorias
        </h2>
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
        onClose={() =>
          setOpenEditModal(false)
        }
        onSuccess={handleSuccess}
        mentoria={selectedMentoria}
      />

    </div>
  );
}
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./index.module.css";
import { faPenToSquare, faTrash, faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getApiUrl, getToken } from "../../../utils/AuthProvider";

export function MentoriasTable({ reload }: { reload: boolean }) {
    const API_URL = getApiUrl();
    const TOKEN = getToken();
    const [mentorias, setMentorias] = useState<any[]>([]);
    const [editModalData, setEditModalData] = useState<any | null>(null);
    const [deleteModalData, setDeleteModalData] = useState<any | null>(null);

    const [monitoriasData, setMonitoriasData] = useState<any[]>([]);
    const idUser = localStorage.getItem("useId");

    const fetchMonitorias = async () => {
        try {
            const resposta = await axios.get(`${API_URL}/monitorias/listarMonitoriasMonitor/${idUser}`, {
                headers: { Authorization: `Bearer ${TOKEN}` }
            });
            setMonitoriasData(resposta.data);
        } catch (e: any) {
            alert("Ocorreu algum erro durante a listagem das suas monitorias!" + e?.response?.data?.message);
        }
    }

    useEffect(() => {
        fetchMonitorias();
        // console.log(idUser)
    }, [reload]);

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Data</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {monitoriasData.length > 0 ? (
                        monitoriasData.map((mentoria: any) => (
                            <tr key={mentoria.id}>
                                <td>{mentoria.id}</td>
                                <td>{mentoria.titulo}</td>
                                <td>{mentoria.descricao}</td>
                                <td>{mentoria.data}</td>
                                <td>{mentoria.status}</td>
                                <td>
                                    <button className={styles.edit} onClick={() => setEditModalData(mentoria)}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>
                                    <button className={styles.delete} onClick={() => setDeleteModalData(mentoria)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6}>Nenhuma monitoria encontrada.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

// ---------------- CreateMentoriaModal ----------------
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
    disciplinas: any[];
}

export function CreateMentoriaModal({ isOpen, onClose, onSuccess, disciplinas }: ModalProps) {
    const API_URL = getApiUrl();
    const TOKEN = getToken();

    const idUser = localStorage.getItem("useId");

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [data, setData] = useState("");
    const [horario, setHorario] = useState("");
    const [imagem, setImagem] = useState("");
    const [status, setStatus] = useState("ATIVO");
    const [idDisciplina, setIdDisciplina] = useState("");
    const [link, setLink] = useState("");

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!titulo || !descricao || !data || !horario || !idDisciplina) {
            alert("Preencha os campos obrigatórios");
            return;
        }

        try {
            setLoading(true);
            // console.log("ID Monitor:", idMonitor);
            const payload = {
                titulo,
                descricao,
                data,
                horario,
                imagem,
                status,
                idMonitor: idUser,
                idDisciplina
            };
  

            await axios.post(
                `${API_URL}/monitorias/criar`,
                payload,
                { headers: { Authorization: `Bearer ${TOKEN}` } }
            );

            setTitulo("");
            setDescricao("");
            setData("");
            setHorario("");
            setImagem("");
            setStatus("ATIVO");
            setIdDisciplina("");
            
            onSuccess();
            onClose();

        } catch (e: any) {
            alert("Erro ao cadastrar monitoria: " + e?.response?.data?.message);
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Nova Monitoria</h2>

                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label>Título</label>
                        <input
                            type="text"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </div>

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
                        <label>Link da equipe no teams (URL)</label>
                        <input
                            type="text"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Disciplina</label>
                        <select
                            value={idDisciplina}
                            onChange={(e) => setIdDisciplina(e.target.value)}
                        >
                            <option value="">Selecione uma disciplina</option>
                            {disciplinas.map((disciplina: any) => (
                                <option key={disciplina.id} value={disciplina.id}>
                                    {disciplina.nome}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label>Status</label>
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="ATIVO">Ativo</option>
                            <option value="INATIVO">Inativo</option>
                        </select>
                    </div>

                    <div className={styles.actions}>
                        <button type="button" onClick={onClose} className={styles.cancel}>
                            Cancelar
                        </button>

                        <button type="submit" className={styles.submit} disabled={loading}>
                            {loading ? "Salvando..." : "Criar"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// ---------------- Página principal ----------------
export default function Mentorias() {
    const [openModal, setOpenModal] = useState(false);
    const [reloadTable, setReloadTable] = useState(false);
    const API_URL = getApiUrl();
    const TOKEN = getToken();
    const [disciplinas, setDisciplinas] = useState<any[]>([]);

    const fetchDisciplinas = async () => {
        try {
            const resposta = await axios.get(`${API_URL}/disciplinas/listar`, {
                headers: { Authorization: `Bearer ${TOKEN}` }
            });
            setDisciplinas(resposta.data);
        } catch (e: any) {
            alert("Erro ao listar disciplinas!" + e?.response?.data?.message);
        }
    }

    const handleSuccess = () => {
        setReloadTable(prev => !prev);
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titleAndIcon}>
                    <FontAwesomeIcon id={styles.icon} icon={faPenToSquare} />
                    <p>Monitorias</p>
                </div>
                <button
                    className={styles.addButton}
                    onClick={() => {
                        setOpenModal(true);
                        fetchDisciplinas();
                    }}
                >
                    + Nova monitoria
                </button>
            </div>

            <MentoriasTable reload={reloadTable} />

            <CreateMentoriaModal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                onSuccess={handleSuccess}
                disciplinas={disciplinas}
            />
        </div>
    );
}
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./index.module.css";
import { faPenToSquare, faTrash, faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getApiUrl, getToken } from "../../../utils/AuthProvider";

// ---------------- TableData ----------------
export function TableData({ reload }: { reload: boolean }) {
    const API_URL = getApiUrl();
    const TOKEN = getToken();
    const [disciplinas, setDisciplinas] = useState<any[]>([]);
    const [editModalData, setEditModalData] = useState<any | null>(null);
    const [deleteModalData, setDeleteModalData] = useState<any | null>(null);

    const fetchDisciplinas = async () => {
        try {
            const response = await axios.get(`${API_URL}/disciplinas/listar`, {
                headers: { Authorization: `Bearer ${TOKEN}` }
            });
            // Atualiza status para true/false
            const updated = response.data.map((d: any) => ({
                ...d,
                status: !!d.status
            }));
            setDisciplinas(updated);
        } catch (e: any) {
            alert("Ocorreu algum erro durante a busca de disciplinas: " + e?.response?.data?.message);
        }
    }

    useEffect(() => {
        fetchDisciplinas();
    }, [reload]);

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Sigla</th>
                        <th>Data de criação</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {disciplinas.length > 0 ? (
                        disciplinas.map((disciplina: any) => (
                            <tr key={disciplina.id}>
                                <td>{disciplina.id}</td>
                                <td>{disciplina.nome}</td>
                                <td>
                                    {disciplina.nome
                                        .split(" ")
                                        .map((p: any) => p[0]?.toUpperCase())
                                        .join("")}
                                </td>
                                <td>{new Date(disciplina.dataCriacao).toLocaleDateString()}</td>
                                <td>{disciplina.status ? "Ativo" : "Inativo"}</td>
                                <td>
                                    <button className={styles.edit} onClick={() => setEditModalData(disciplina)}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>
                                    <button className={styles.delete} onClick={() => setDeleteModalData(disciplina)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                    <button className={styles.refresh} onClick={fetchDisciplinas}>
                                        <FontAwesomeIcon icon={faSync} />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6}>Nenhuma disciplina encontrada.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {editModalData && (
                <EditDisciplinaModal
                    disciplina={editModalData}
                    onClose={() => setEditModalData(null)}
                    onSuccess={fetchDisciplinas}
                />
            )}

            {deleteModalData && (
                <DeleteDisciplinaModal
                    disciplina={deleteModalData}
                    onClose={() => setDeleteModalData(null)}
                    onSuccess={fetchDisciplinas}
                />
            )}
        </div>
    );
}

// ---------------- CreateDisciplinaModal ----------------
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}
export function CreateDisciplinaModal({ isOpen, onClose, onSuccess }: ModalProps) {
    const API_URL = getApiUrl();
    const TOKEN = getToken();

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!nome || !descricao) {
            alert("Preencha todos os campos");
            return;
        }

        try {
            setLoading(true);
            await axios.post(
                `${API_URL}/disciplinas/cadastrar`,
                { nome, descricao },
                { headers: { Authorization: `Bearer ${TOKEN}` } }
            );
            setNome("");
            setDescricao("");
            onSuccess();
            onClose();
        } catch (e: any) {
            alert("Erro ao cadastrar disciplina: " + e?.response?.data?.message);
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Nova Disciplina</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label>Nome</label>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Ex: Estatística aplicada"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Descrição</label>
                        <textarea
                            value={descricao}
                            maxLength={1000}
                            onChange={(e) => setDescricao(e.target.value)}
                            placeholder="Ex: Estatística"
                        />
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

// ---------------- EditDisciplinaModal ----------------
interface EditModalProps {
    disciplina: any;
    onClose: () => void;
    onSuccess: () => void;
}
export function EditDisciplinaModal({ disciplina, onClose, onSuccess }: EditModalProps) {
    const API_URL = getApiUrl();
    const TOKEN = getToken();

    const [nome, setNome] = useState(disciplina.nome);
    const [descricao, setDescricao] = useState(disciplina.descricao);
    const [status, setStatus] = useState(disciplina.status);
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e: any) => {
        e.preventDefault();
        try {
            setLoading(true);
            await axios.put(
                `${API_URL}/disciplinas/atualizar/${disciplina.id}`,
                { nome, descricao, status },
                { headers: { Authorization: `Bearer ${TOKEN}` } }
            );
            onSuccess();
            onClose();
        } catch (e: any) {
            alert("Erro ao atualizar disciplina: " + e?.response?.data?.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Editar Disciplina</h2>
                <form onSubmit={handleUpdate}>
                    <div className={styles.formGroup}>
                        <label>Nome</label>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
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
                        <label>Status</label>
                        <select value={status ? "true" : "false"} onChange={(e) => setStatus(e.target.value === "true")}>
                            <option value="true">Ativo</option>
                            <option value="false">Inativo</option>
                        </select>
                    </div>

                    <div className={styles.actions}>
                        <button type="button" onClick={onClose} className={styles.cancel}>
                            Cancelar
                        </button>
                        <button type="submit" className={styles.submit} disabled={loading}>
                            {loading ? "Atualizando..." : "Salvar"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

// ---------------- DeleteDisciplinaModal ----------------
interface DeleteModalProps {
    disciplina: any;
    onClose: () => void;
    onSuccess: () => void;
}
export function DeleteDisciplinaModal({ disciplina, onClose, onSuccess }: DeleteModalProps) {
    const API_URL = getApiUrl();
    const TOKEN = getToken();
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        try {
            setLoading(true);
            await axios.delete(`${API_URL}/disciplinas/deletar/${disciplina.id}`, {
               headers: { Authorization: `Bearer ${TOKEN}` }
            });
            onSuccess();
            onClose();
        } catch (e: any) {
            alert("Erro ao deletar disciplina: " + e?.response?.data?.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Deletar Disciplina</h2>
                <p>Tem certeza que deseja deletar a disciplina <strong>{disciplina.nome}</strong>?</p>
                <div className={styles.actions}>
                    <button type="button" onClick={onClose} className={styles.cancel}>
                        Cancelar
                    </button>
                    <button type="button" onClick={handleDelete} className={styles.delete} disabled={loading}>
                        {loading ? "Deletando..." : "Deletar"}
                    </button>
                </div>
            </div>
        </div>
    );
}

// ---------------- Disciplinas (Main Component) ----------------
export default function Disciplinas() {
    const [openModal, setOpenModal] = useState(false);
    const [reloadTable, setReloadTable] = useState(false);

    const handleSuccess = () => {
        setReloadTable(prev => !prev); // alterna estado para recarregar a tabela
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titleAndIcon}>
                    <FontAwesomeIcon id={styles.icon} icon={faPenToSquare} />
                    <p>Disciplinas</p>
                </div>
                <button
                    className={styles.addButton}
                    onClick={() => setOpenModal(true)}
                >
                    + Nova disciplina
                </button>
            </div>

            <TableData reload={reloadTable} />

            <CreateDisciplinaModal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                onSuccess={handleSuccess}
            />
        </div>
    );
}
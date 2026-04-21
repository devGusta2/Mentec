import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./index.module.css";
import { faPenToSquare, faTrash, faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getApiUrl, getToken } from "../../../utils/AuthProvider";

// ---------------- TableData ----------------
export function MentoriasTable({ reload }: { reload: boolean }) {
    const API_URL = getApiUrl();
    const TOKEN = getToken();
    const [mentorias, setMentorias] = useState<any[]>([]);
    const [editModalData, setEditModalData] = useState<any | null>(null);
    const [deleteModalData, setDeleteModalData] = useState<any | null>(null);

    const fetchMentorias = async () => {
        try {
            const response = await axios.get(`${API_URL}/mentorias/listar`, {
                headers: { Authorization: `Bearer ${TOKEN}` }
            });
            const updated = response.data.map((m: any) => ({
                ...m,
                status: !!m.status
            }));
            setMentorias(updated);
        } catch (e: any) {
            alert("Erro ao buscar mentorias: " + e?.response?.data?.message);
        }
    }

    useEffect(() => {
        fetchMentorias();
    }, [reload]);

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Data de criação</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {mentorias.length > 0 ? (
                        mentorias.map((mentoria: any) => (
                            <tr key={mentoria.id}>
                                <td>{mentoria.id}</td>
                                <td>{mentoria.nome}</td>
                                <td>{mentoria.descricao}</td>
                                <td>{new Date(mentoria.dataCriacao).toLocaleDateString()}</td>
                                <td>{mentoria.status ? "Ativo" : "Inativo"}</td>
                                <td>
                                    <button className={styles.edit} onClick={() => setEditModalData(mentoria)}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>
                                    <button className={styles.delete} onClick={() => setDeleteModalData(mentoria)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                    <button className={styles.refresh} onClick={fetchMentorias}>
                                        <FontAwesomeIcon icon={faSync} />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6}>Nenhuma mentoria encontrada.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {editModalData && (
                <EditMentoriaModal
                    mentoria={editModalData}
                    onClose={() => setEditModalData(null)}
                    onSuccess={fetchMentorias}
                />
            )}

            {deleteModalData && (
                <DeleteMentoriaModal
                    mentoria={deleteModalData}
                    onClose={() => setDeleteModalData(null)}
                    onSuccess={fetchMentorias}
                />
            )}
        </div>
    );
}

// ---------------- CreateMentoriaModal ----------------
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}
export function CreateMentoriaModal({ isOpen, onClose, onSuccess }: ModalProps) {
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
                `${API_URL}/mentorias/cadastrar`,
                { nome, descricao },
                { headers: { Authorization: `Bearer ${TOKEN}` } }
            );
            setNome("");
            setDescricao("");
            onSuccess();
            onClose();
        } catch (e: any) {
            alert("Erro ao cadastrar mentoria: " + e?.response?.data?.message);
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Nova Mentoria</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label>Nome</label>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Ex: Desenvolvimento Web com React"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Descrição</label>
                        <textarea
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            placeholder="Ex: Acompanhamento completo em desenvolvimento web"
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

// ---------------- EditMentoriaModal ----------------
interface EditModalProps {
    mentoria: any;
    onClose: () => void;
    onSuccess: () => void;
}
export function EditMentoriaModal({ mentoria, onClose, onSuccess }: EditModalProps) {
    const API_URL = getApiUrl();
    const TOKEN = getToken();

    const [nome, setNome] = useState(mentoria.nome);
    const [descricao, setDescricao] = useState(mentoria.descricao);
    const [status, setStatus] = useState(mentoria.status);
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e: any) => {
        e.preventDefault();
        try {
            setLoading(true);
            await axios.put(
                `${API_URL}/mentorias/atualizar/${mentoria.id}`,
                { nome, descricao, status },
                { headers: { Authorization: `Bearer ${TOKEN}` } }
            );
            onSuccess();
            onClose();
        } catch (e: any) {
            alert("Erro ao atualizar mentoria: " + e?.response?.data?.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Editar Mentoria</h2>
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

// ---------------- DeleteMentoriaModal ----------------
interface DeleteModalProps {
    mentoria: any;
    onClose: () => void;
    onSuccess: () => void;
}
export function DeleteMentoriaModal({ mentoria, onClose, onSuccess }: DeleteModalProps) {
    const API_URL = getApiUrl();
    const TOKEN = getToken();
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        try {
            setLoading(true);
            await axios.delete(`${API_URL}/mentorias/deletar/${mentoria.id}`, {
                headers: { Authorization: `Bearer ${TOKEN}` }
            });
            onSuccess();
            onClose();
        } catch (e: any) {
            alert("Erro ao deletar mentoria: " + e?.response?.data?.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Deletar Mentoria</h2>
                <p>Tem certeza que deseja deletar a mentoria <strong>{mentoria.nome}</strong>?</p>
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

// ---------------- Mentorias (Main Component) ----------------
export default function Mentorias() {
    const [openModal, setOpenModal] = useState(false);
    const [reloadTable, setReloadTable] = useState(false);

    const handleSuccess = () => {
        setReloadTable(prev => !prev);
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.titleAndIcon}>
                    <FontAwesomeIcon id={styles.icon} icon={faPenToSquare} />
                    <p>Mentorias</p>
                </div>
                <button
                    className={styles.addButton}
                    onClick={() => setOpenModal(true)}
                >
                    + Nova mentoria
                </button>
            </div>

            <MentoriasTable reload={reloadTable} />

            <CreateMentoriaModal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                onSuccess={handleSuccess}
            />
        </div>
    );
}
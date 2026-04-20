import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./index.module.css";
import { faPenToSquare, faTrash, faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getApiUrl, getToken } from "../../../utils/AuthProvider";

// ---------------- TableData ----------------
export function MonitoriasTable({ reload }: { reload: boolean }) {
    const API_URL = getApiUrl();
    const TOKEN = getToken();
    const [monitorias, setMonitorias] = useState<any[]>([]);
    const [editModalData, setEditModalData] = useState<any | null>(null);
    const [deleteModalData, setDeleteModalData] = useState<any | null>(null);

    const fetchMonitorias = async () => {
        try {
            const response = await axios.get(`${API_URL}/monitorias/listar`, {
                headers: { Authorization: `Bearer ${TOKEN}` }
            });
            // Atualiza status para true/false
            const updated = response.data.map((m: any) => ({
                ...m,
                status: !!m.status
            }));
            setMonitorias(updated);
        } catch (e: any) {
            alert("Erro ao buscar monitorias: " + e?.response?.data?.message);
        }
    }

    useEffect(() => {
        fetchMonitorias();
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
                    {monitorias.length > 0 ? (
                        monitorias.map((monitoria: any) => (
                            <tr key={monitoria.id}>
                                <td>{monitoria.id}</td>
                                <td>{monitoria.nome}</td>
                                <td>{monitoria.descricao}</td>
                                <td>{new Date(monitoria.dataCriacao).toLocaleDateString()}</td>
                                <td>{monitoria.status ? "Ativo" : "Inativo"}</td>
                                <td>
                                    <button className={styles.edit} onClick={() => setEditModalData(monitoria)}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>
                                    <button className={styles.delete} onClick={() => setDeleteModalData(monitoria)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                    <button className={styles.refresh} onClick={fetchMonitorias}>
                                        <FontAwesomeIcon icon={faSync} />
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

            {editModalData && (
                <EditMonitoriaModal
                    monitoria={editModalData}
                    onClose={() => setEditModalData(null)}
                    onSuccess={fetchMonitorias}
                />
            )}

            {deleteModalData && (
                <DeleteMonitoriaModal
                    monitoria={deleteModalData}
                    onClose={() => setDeleteModalData(null)}
                    onSuccess={fetchMonitorias}
                />
            )}
        </div>
    );
}

// ---------------- CreateMonitoriaModal ----------------
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}
export function CreateMonitoriaModal({ isOpen, onClose, onSuccess }: ModalProps) {
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
                `${API_URL}/monitorias/cadastrar`,
                { nome, descricao },
                { headers: { Authorization: `Bearer ${TOKEN}` } }
            );
            setNome("");
            setDescricao("");
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
                        <label>Nome</label>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Ex: Matemática avançada"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Descrição</label>
                        <textarea
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                            placeholder="Ex: Acompanhamento de conteúdos de matemática"
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

// ---------------- EditMonitoriaModal ----------------
interface EditModalProps {
    monitoria: any;
    onClose: () => void;
    onSuccess: () => void;
}
export function EditMonitoriaModal({ monitoria, onClose, onSuccess }: EditModalProps) {
    const API_URL = getApiUrl();
    const TOKEN = getToken();

    const [nome, setNome] = useState(monitoria.nome);
    const [descricao, setDescricao] = useState(monitoria.descricao);
    const [status, setStatus] = useState(monitoria.status);
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e: any) => {
        e.preventDefault();
        try {
            setLoading(true);
            await axios.put(
                `${API_URL}/monitorias/atualizar/${monitoria.id}`,
                { nome, descricao, status },
                { headers: { Authorization: `Bearer ${TOKEN}` } }
            );
            onSuccess();
            onClose();
        } catch (e: any) {
            alert("Erro ao atualizar monitoria: " + e?.response?.data?.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Editar Monitoria</h2>
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

// ---------------- DeleteMonitoriaModal ----------------
interface DeleteModalProps {
    monitoria: any;
    onClose: () => void;
    onSuccess: () => void;
}
export function DeleteMonitoriaModal({ monitoria, onClose, onSuccess }: DeleteModalProps) {
    const API_URL = getApiUrl();
    const TOKEN = getToken();
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        try {
            setLoading(true);
            await axios.delete(`${API_URL}/monitorias/deletar/${monitoria.id}`, {
                headers: { Authorization: `Bearer ${TOKEN}` }
            });
            onSuccess();
            onClose();
        } catch (e: any) {
            alert("Erro ao deletar monitoria: " + e?.response?.data?.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Deletar Monitoria</h2>
                <p>Tem certeza que deseja deletar a monitoria <strong>{monitoria.nome}</strong>?</p>
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

// ---------------- Monitorias (Main Component) ----------------
export default function Monitorias() {
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
                    <p>Monitorias</p>
                </div>
                <button
                    className={styles.addButton}
                    onClick={() => setOpenModal(true)}
                >
                    + Nova monitoria
                </button>
            </div>

            <MonitoriasTable reload={reloadTable} />

            <CreateMonitoriaModal
                isOpen={openModal}
                onClose={() => setOpenModal(false)}
                onSuccess={handleSuccess}
            />
        </div>
    );
}
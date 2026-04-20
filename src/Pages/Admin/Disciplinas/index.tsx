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
    const [disciplinas, setDisciplinas] = useState([]);

    const fetchDisciplinas = async () => {
        try {
            const response = await axios.get(`${API_URL}/disciplinas/listar`, {
                headers: { Authorization: `Bearer ${TOKEN}` }
            });
            setDisciplinas(response.data);
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
                                        .split(" ")                // separa o nome em palavras
                                        .map((p: any) => p[0]?.toUpperCase()) // pega a primeira letra de cada palavra
                                        .join("")}                
                                </td>
                                <td>{new Date(disciplina.dataCriacao).toLocaleDateString()}</td>
                                <td>{disciplina.status || "Indefinido"}</td>
                                <td>
                                    <button className={styles.edit}><FontAwesomeIcon icon={faPenToSquare} /></button>
                                    <button className={styles.delete}><FontAwesomeIcon icon={faTrash} /></button>
                                    <button className={styles.refresh}><FontAwesomeIcon icon={faSync} /></button>
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
            onSuccess(); // atualiza tabela
            onClose();   // fecha modal
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
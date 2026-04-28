import axios from "axios";
import { useEffect, useState } from "react";
import { FaInbox, FaPenToSquare } from "react-icons/fa6";
import { getApiUrl, getToken } from "../../../utils/AuthProvider";
import styles from "./index.module.css";

export default function Monitorias() {
    const API_URL = getApiUrl();
    const TOKEN = getToken();

    const [monitorias, setMonitorias] = useState<any[]>([]);
    const [openModal, setOpenModal] = useState(false);

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [disciplinaId, setDisciplinaId] = useState("");
    const [monitorSelecionado, setMonitorSelecionado] = useState<number | null>(null);

    const [disciplinas, setDisciplinas] = useState<any[]>([]);
    const [monitores, setMonitores] = useState<any[]>([]);

    const [loading, setLoading] = useState(false);

    const fetchMonitores = async () => {
        try {
            const response = await axios.get(`${API_URL}/admin/usuarios/monitores/livre/list`, {
                headers: { Authorization: `Bearer ${TOKEN}` }
            });
            setMonitores(Array.isArray(response.data) ? response.data : []);
        } catch (e: any) {
            alert("Erro ao listar monitores!" + (e?.response?.data?.message || ""));
            setMonitores([]);
        }
    };

    const fetchMonitorias = async () => {
        try {
            const res = await axios.get(`${API_URL}/monitorias/listarTodas`, {
                headers: { Authorization: `Bearer ${TOKEN}` }
            });

            const data = Array.isArray(res.data) ? res.data : [];

            const safeData = data.map((m: any) => ({
                ...m,
                monitores: Array.isArray(m?.monitores) ? m.monitores : []
            }));

            setMonitorias(safeData);
        } catch (e: any) {
            alert("Erro ao listar monitorias!" + (e?.response?.data?.message || ""));
            setMonitorias([]);
        }
    };

    const fetchDisciplinas = async () => {
        try {
            const resposta = await axios.get(`${API_URL}/disciplinas/listar`, {
                headers: { Authorization: `Bearer ${TOKEN}` }
            });
            setDisciplinas(Array.isArray(resposta.data) ? resposta.data : []);
        } catch (e: any) {
            alert("Erro ao listar disciplinas!" + (e?.response?.data?.message || ""));
            setDisciplinas([]);
        }
    };

    useEffect(() => {
        fetchMonitorias();
    }, []);

    const selecionarMonitor = (id: number) => {
        setMonitorSelecionado(id);
    };

    const handleSubmit = async () => {
        if (!titulo || !descricao || !disciplinaId || monitorSelecionado === null) {
            alert("Preencha todos os campos");
            return;
        }

        try {
            setLoading(true);

            const payload = {
                titulo,
                descricao,
                imagem: "",
                status: "ATIVA",
                idDisciplina: disciplinaId ? Number(disciplinaId) : null,
                idMonitor: monitorSelecionado
            };

            await axios.post(`${API_URL}/monitorias/criar`, payload, {
                headers: { Authorization: `Bearer ${TOKEN}` }
            });

            setOpenModal(false);
            fetchMonitorias();

            setTitulo("");
            setDescricao("");
            setDisciplinaId("");
            setMonitorSelecionado(null);

        } catch (e: any) {
            alert("Erro ao criar monitoria!" + (e?.response?.data?.message || ""));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>

            <div className={styles.header}>
                <span>
                    <FaPenToSquare size={50} color="#b30000" />
                    <h1>Monitorias</h1>
                </span>
                <button
                    className={styles.addButton}
                    onClick={async () => {
                        await fetchDisciplinas();
                        await fetchMonitores();
                        setOpenModal(true);
                    }}
                >
                    Nova monitoria
                </button>
            </div>

            <div className={styles.list}>
                {monitorias.length === 0 ? (
                    <div className={styles.empty}>
                        <FaInbox size={60} color="#999" />
                        <p>Nenhuma monitoria cadastrada.</p>
                    </div>
                ) : (
                    monitorias.map((m) => (
                        <div key={m?.id ?? Math.random()} className={styles.card}>
                            <div>
                                <h2>{m?.titulo ?? "—"}</h2>
                                <p className={styles.sub}>{m?.descricao ?? "—"}</p>

                                <div className={styles.infoRow}>
                                    <div>
                                        <span className={styles.label}>Disciplina</span>
                                        <span>{m?.disciplinaNome ?? "—"}</span>
                                    </div>

                                    <div>
                                        <span className={styles.label}>Data</span>
                                        <span>{m?.data ? new Date(m.data).toLocaleDateString() : "—"}</span>
                                    </div>

                                    <div>
                                        <span className={styles.label}>Horário</span>
                                        <span>{m?.horario ?? "—"}</span>
                                    </div>

                                    <div>
                                        <span className={styles.label}>Alunos</span>
                                        <span>{m?.qtdAlunos ?? 0}</span>
                                    </div>

                                    <div>
                                        <span className={styles.label}>Monitor</span>
                                        <span>
                                            {Array.isArray(m?.monitores) && m.monitores.length > 0
                                                ? m.monitores.join(", ")
                                                : "—"}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div>{m?.estado ?? "—"}</div>

                            <div className={styles.actions}>
                                <button className={styles.edit}>Editar</button>
                                <button className={styles.cancel}>Cancelar</button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {openModal && (
                <div className={styles.overlay}>
                    <div className={styles.modal}>

                        <div className={styles.modalHeader}>
                            <span>
                                <FaPenToSquare size={30} color="#ae1313" />
                                <h2>Nova monitoria</h2>
                            </span>
                            <button onClick={() => setOpenModal(false)}>×</button>
                        </div>

                        <div className={styles.modalContent}>

                            <div className={styles.left}>
                                <label>Título</label>
                                <input
                                    value={titulo}
                                    placeholder="Insira um título para a monitoria"
                                    onChange={(e) => setTitulo(e.target.value)}
                                />

                                <label>Disciplina</label>
                                <select
                                    value={disciplinaId}
                                    onChange={(e) => setDisciplinaId(e.target.value)}
                                >
                                    <option value="">Selecione</option>
                                    {(disciplinas ?? []).map((d) => (
                                        <option key={d?.id ?? Math.random()} value={d?.id}>
                                            {d?.nome ?? "—"}
                                        </option>
                                    ))}
                                </select>

                                <label>Descrição</label>
                                <textarea
                                    value={descricao}
                                    placeholder="Insira uma descrição para a monitoria"
                                    onChange={(e) => setDescricao(e.target.value)}
                                />
                            </div>

                            <div className={styles.right}>
                                <label>Monitores disponíveis</label>

                                <div className={styles.monitorList}>
                                    {(monitores ?? []).map((m) => (
                                        <div
                                            key={m?.id ?? Math.random()}
                                            className={`${styles.monitorItem} ${
                                                monitorSelecionado === m?.id ? styles.selected : ""
                                            }`}
                                            onClick={() => m?.id && selecionarMonitor(m.id)}
                                        >
                                            <div className={styles.avatar} />

                                            <div className={styles.monitorInfo}>
                                                <strong>{m?.nome ?? "—"}</strong>
                                                <span>{m?.ra ?? "—"}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                        <div className={styles.modalFooter}>
                            <button onClick={handleSubmit} disabled={loading}>
                                {loading ? "Cadastrando..." : "Cadastrar monitoria"}
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}
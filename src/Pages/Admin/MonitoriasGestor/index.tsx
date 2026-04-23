import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { getApiUrl, getToken } from "../../../utils/AuthProvider";
import { FaPenToSquare } from "react-icons/fa6";
export default function Monitorias() {
    const API_URL = getApiUrl();
    const TOKEN = getToken();

    const [monitorias, setMonitorias] = useState<any[]>([]);
    const [openModal, setOpenModal] = useState(false);

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [disciplinaId, setDisciplinaId] = useState("");
    const [monitorSelecionado, setMonitorSelecionado] = useState<string | null>(null);

    const [disciplinas, setDisciplinas] = useState<any[]>([]);
    const [monitores, setMonitores] = useState<any[]>([]);

    const [loading, setLoading] = useState(false);



    const fetchMonitores = async () => {
        try {
            const response = await axios.get(`${API_URL}/admin/usuarios/monitores/livre/list`, {
                headers: { Authorization: `Bearer ${TOKEN}` }
            })
            setMonitores(response.data);
        } catch (e: any) {
            alert("Erro ao listar monitores!" + e?.response?.data?.message);
        }
    }


    useEffect(() => {
        fetchMonitorias();
    }, []);

    const fetchMonitorias = async () => {
        const res = await axios.get(`${API_URL}/monitorias/listar`, {
            headers: { Authorization: `Bearer ${TOKEN}` }
        });
        setMonitorias(res.data);
    };
    const fetchDisciplinas = async () => {
        try {
            const resposta = await axios.get(`${API_URL}/disciplinas/listar`, {
                headers: { Authorization: `Bearer ${TOKEN}` }
            });
            setDisciplinas(resposta.data);
        } catch (e: any) {
            alert("Erro ao listar disciplinas!" + e?.response?.data?.message);
        }
    };
    const openCreateModal = async () => {
        setOpenModal(true);

        const [discRes] = await Promise.all([
            axios.get(`${API_URL}/disciplinas/listar`, {
                headers: { Authorization: `Bearer ${TOKEN}` }
            }),

        ]);

        setDisciplinas(discRes.data);

    };

    const selecionarMonitor = (id: string) => {
        setMonitorSelecionado(id);
    };

    const handleSubmit = async () => {
        if (!titulo || !descricao || !disciplinaId) {
            alert("Preencha todos os campos");
            return;
        }

        try {
            setLoading(true);

            await axios.post(`${API_URL}/monitorias/cadastrar`, {
                titulo,
                descricao,
                imagem: "",
                status: "ATIVO",
                idDisciplina: disciplinaId,
                idMonitor: monitorSelecionado
            }, {
                headers: { Authorization: `Bearer ${TOKEN}` }
            });

            setOpenModal(false);
            fetchMonitorias();

            // reset
            setTitulo("");
            setDescricao("");
            setDisciplinaId("");
            setMonitoresSelecionados([]);

        } catch {
            alert("Erro ao criar monitoria");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>

            {/* HEADER */}
            <div className={styles.header}>
                <span>
                    <FaPenToSquare size={50} color="#b30000" />
                    <h1>Monitorias</h1>
                </span>
                <button className={styles.addButton} onClick={async () => {
                    await fetchDisciplinas();
                    setOpenModal(true);
                    fetchMonitores();
                }}>

                    Nova monitoria
                </button>
            </div>

            {/* LISTA */}
            <div className={styles.list}>
                {monitorias.map((m) => (
                    <div key={m.id} className={styles.card}>
                        <div>
                            <h2>{m.titulo}</h2>
                            <p className={styles.sub}>{m.descricao}</p>

                            <div className={styles.infoRow}>
                                <div>
                                    <span className={styles.label}>Disciplina</span>
                                    <span>{m.disciplinaNome}</span>
                                </div>

                                <div>
                                    <span className={styles.label}>Data</span>
                                    <span>{m.data}</span>
                                </div>

                                <div>
                                    <span className={styles.label}>Horário</span>
                                    <span>{m.horario}</span>
                                </div>

                                <div>
                                    <span className={styles.label}>Alunos</span>
                                    <span>{m.qtdAlunos || 0}</span>
                                </div>

                                <div>
                                    <span className={styles.label}>Monitor</span>
                                    <span>{m.monitores?.join(", ") || "—"}</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.actions}>
                            <button className={styles.edit}>Editar</button>
                            <button className={styles.cancel}>Cancelar</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL */}
            {openModal && (
                <div className={styles.overlay}>
                    <div className={styles.modal}>

                        <div className={styles.modalHeader}>
                            <span>  <FaPenToSquare size={30} color="#ae1313" />
                                <h2>Nova monitoria</h2></span>
                            <button onClick={() => { setOpenModal(false) }}>×</button>
                        </div>

                        <div className={styles.modalContent}>

                            {/* ESQUERDA */}
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

                                    {disciplinas.map((d) => (
                                        <option key={d.id} value={d.id}>
                                            {d.nome}
                                        </option>
                                    ))}
                                </select>
                                <label>Descrição</label>
                                <textarea
                                    placeholder="Insira uma descrição para a monitoria"
                                    value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)}
                                />
                            </div>

                            {/* DIREITA */}
                            <div className={styles.right}>
                                <label>Monitores disponíveis</label>

                                <div className={styles.monitorList}>
                                    {monitores.map((m) => (
                                        <div
                                            key={m.id}
                                            className={`${styles.monitorItem} ${monitorSelecionado === m.id ? styles.selected : ""
                                                }`}
                                            onClick={() => selecionarMonitor(m.id)}
                                        >
                                            <div className={styles.avatar} />

                                            <div className={styles.monitorInfo}>
                                                <strong>{m.nome}</strong>
                                                <span>{m.ra}</span>
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
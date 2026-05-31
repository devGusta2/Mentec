
import { useEffect, useState } from 'react';
import { getApiUrl, getToken } from '../../../utils/AuthProvider';
import styles from './index.module.css'
import { FaChalkboardTeacher, FaPlus, FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import axios from 'axios';
export default function Monitores() {

    const API_URL = getApiUrl();
    const TOKEN = getToken();
    const [monitores, setMonitores] = useState<any[]>([]);
    const [selectedMonitor, setSelectedMonitor] = useState<any | null>(null);
    const [monitor, setMonitor] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        cpf: "",
        senha: "",
        nivelExperiencia: "",
        especialidade: "",
        ra:"",
        curso:"",
        periodo:"",
        matricula:""
    })
    const [modal, setModal] = useState({
        create: false,
        update: false,
        delete: false
    })

    const resetMonitor = () => {
        setMonitor({
            nome: "",
            sobrenome: "",
            email: "",
            cpf: "",
            senha: "",
            nivelExperiencia: "",
            especialidade: "",
            ra: "",
            curso: "",
            periodo: "",
            matricula: ""
        });
    };

    const closeModal = () => {
        setModal({ create: false, update: false, delete: false });
        setSelectedMonitor(null);
        resetMonitor();
    };

    const openEditModal = (item: any) => {
        setSelectedMonitor(item);
        setMonitor(prev => ({
            ...prev,
            nome: item?.nome ?? "",
            sobrenome: item?.sobrenome ?? "",
            email: item?.email ?? "",
            nivelExperiencia: item?.nivelExperiencia ?? "",
            especialidade: item?.especialidades ?? ""
        }));
        setModal(prev => ({ ...prev, update: true }));
    };

    const openDeleteModal = (item: any) => {
        setSelectedMonitor(item);
        setModal(prev => ({ ...prev, delete: true }));
    };

    const createMonitor = async (e: React.FormEvent) => {
        e.preventDefault();
      try{
        await axios.post(`${API_URL}/admin/usuarios/cadastroMentor`, monitor,{
            headers: { Authorization: `Bearer ${TOKEN}` }
        })
        fetchMonitores();
        alert("Monitor criado com sucesso!");
        closeModal();
      }catch(e: any){
        alert("Erro ao criar monitor!" + e?.response?.data?.message);
      }
    }

    const updateMonitor = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedMonitor?.id) return;

        try {
            await axios.put(`${API_URL}/admin/usuarios/monitores/atualizar/${selectedMonitor.id}`, {
                nome: monitor.nome,
                sobrenome: monitor.sobrenome,
                email: monitor.email,
                nivelExperiencia: monitor.nivelExperiencia,
                especialidade: monitor.especialidade
            }, {
                headers: { Authorization: `Bearer ${TOKEN}` }
            });

            await fetchMonitores();
            alert("Monitor atualizado com sucesso!");
            closeModal();
        } catch (e: any) {
            alert("Erro ao atualizar monitor!" + (e?.response?.data?.message || ""));
        }
    };

    const deleteMonitor = async () => {
        if (!selectedMonitor?.id) return;

        try {
            await axios.delete(`${API_URL}/admin/usuarios/monitores/deletar/${selectedMonitor.id}`, {
                headers: { Authorization: `Bearer ${TOKEN}` }
            });

            await fetchMonitores();
            alert("Monitor excluído com sucesso!");
            closeModal();
        } catch (e: any) {
            alert("Erro ao excluir monitor!" + (e?.response?.data?.message || ""));
        }
    };

    const fetchMonitores = async () =>{
        try{
            const response = await axios.get(`${API_URL}/admin/usuarios/monitores/list`,{
                headers: { Authorization: `Bearer ${TOKEN}` }
            })
            setMonitores(response.data);
        }catch(e: any){
            alert("Erro ao listar monitores!" + e?.response?.data?.message);
        }
    }

    useEffect(()=>{
        fetchMonitores();
    },[])
    return (
        <div className={styles.container}>
            {/* <h1>Monitores</h1>
            <p>Lista de monitores cadastrados no sistema.</p> */}
            <div className={styles.header}>
                <span>
                    <FaChalkboardTeacher size={50} color="#b30000" />
                    <p>Monitores</p>
                </span>
                <button
                    onClick={() => {
                        setModal(prev => ({
                            ...prev,
                            create: true
                        }))
                    }}
                >
                    <FaPlus size={25} color="#fff" />
                    <p>Novo monitor</p>
                </button>
            </div>

            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Especialidades</th>
                            <th>Nível</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {monitores.map((monitor) => (
                            <tr key={monitor.id}>
                                <td><strong>{monitor.nome} {monitor.sobrenome}</strong></td>
                                <td>{monitor.email}</td>
                                <td>{monitor.especialidades}</td>
                                <td>
                                    <span className={`${styles.badge} ${styles[(monitor.nivelExperiencia || "").toLowerCase()] || ""}`}>
                                        {monitor.nivelExperiencia || "—"}
                                    </span>
                                </td>
                                <td>
                                    <div className={styles.actions}>
                                        <button
                                            className={styles.btnAction}
                                            title="Editar"
                                            onClick={() => openEditModal(monitor)}
                                        >
                                            <FaRegEdit size={18} />
                                        </button>
                                        <button
                                            className={styles.btnAction}
                                            title="Excluir"
                                            onClick={() => openDeleteModal(monitor)}
                                        >
                                            <FaRegTrashAlt size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>




            {
                modal.create && (
                    <div className={styles.overlay}>
                        <form onSubmit={createMonitor} className={styles.modal}>
                            <div className={styles.modalHeader}>
                                <span>
                                    <FaChalkboardTeacher size={32} color="#8B0E21" />
                                    <p>Cadastrar Novo Mentor</p>
                                </span>
                                <button
                                    type="button"
                                    className={styles.closeButton}
                                    onClick={closeModal}
                                >
                                    <MdClose className={styles.closeIcon} size={30} />
                                </button>
                            </div>



                            <div className={styles.form} >
                                <div className={styles.inputGroup}>
                                    <label>Nome</label>
                                    <input  required onChange={(e)=>setMonitor(prev=>({...prev, nome: e.target.value}))}type="text" placeholder="Ex: João" />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label>Sobrenome</label>
                                    <input required onChange={(e)=>{setMonitor(prev=>({...prev, sobrenome: e.target.value}))}} type="text" placeholder="Ex: Silva" />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label>E-mail</label>
                                    <input required onChange={(e)=>{setMonitor(prev=>({...prev, email: e.target.value}))}} type="email" placeholder="email@fatec.sp.gov.br" />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label>CPF</label>
                                    <input required onChange={(e)=>{setMonitor(prev=>({...prev, cpf: e.target.value}))}}  type="text" placeholder="000.000.000-00" />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label>Senha Inicial</label>
                                    <input required onChange={(e)=>{setMonitor(prev=>({...prev, senha: e.target.value}))}}  type="password" placeholder="********" />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label>Nível de Experiência</label>
                                    <select required onChange={(e)=>{setMonitor(prev=>({...prev, nivelExperiencia: e.target.value}))}} >
                                        <option value="">Selecione um nível de experiência</option>
                                        <option value="JUNIOR">Júnior (1-2 semestres)</option>
                                        <option value="PLENO">Pleno (3-4 semestres)</option>
                                        <option value="SENIOR">Sênior (5-6 semestres)</option>
                                    </select>
                                </div>

                                <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                    <label>Especialidade (Tecnologia/Disciplina)</label>
                                    <input required onChange={(e)=>{setMonitor(prev=>({...prev, especialidade: e.target.value}))}}  type="text" placeholder="Ex: Java, Spring Boot, Cálculo I..." />
                                </div>
                            </div>

                            {/* Rodapé com Ações */}
                            <div className={styles.modalFooter}>
                                {/* <button
                                    className={styles.btnCancel}
                                    onClick={() => setModal(prev => ({ ...prev, create: false }))}
                                >
                                    Cancelar
                                </button> */}
                                <button className={styles.btnSave} type="submit">
                                    Finalizar Cadastro
                                </button>
                            </div>
                        </form>
                    </div>
                )
            }

            {modal.update && (
                <div className={styles.overlay}>
                    <form onSubmit={updateMonitor} className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <span>
                                <FaChalkboardTeacher size={32} color="#8B0E21" />
                                <p>Editar Monitor</p>
                            </span>
                            <button type="button" className={styles.closeButton} onClick={closeModal}>
                                <MdClose className={styles.closeIcon} size={30} />
                            </button>
                        </div>

                        <div className={styles.form}>
                            <div className={styles.inputGroup}>
                                <label>Nome</label>
                                <input
                                    required
                                    value={monitor.nome}
                                    onChange={(e) => setMonitor(prev => ({ ...prev, nome: e.target.value }))}
                                    type="text"
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Sobrenome</label>
                                <input
                                    required
                                    value={monitor.sobrenome}
                                    onChange={(e) => setMonitor(prev => ({ ...prev, sobrenome: e.target.value }))}
                                    type="text"
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>E-mail</label>
                                <input
                                    required
                                    value={monitor.email}
                                    onChange={(e) => setMonitor(prev => ({ ...prev, email: e.target.value }))}
                                    type="email"
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Nível de Experiência</label>
                                <select
                                    required
                                    value={monitor.nivelExperiencia}
                                    onChange={(e) => setMonitor(prev => ({ ...prev, nivelExperiencia: e.target.value }))}
                                >
                                    <option value="">Selecione um nível de experiência</option>
                                    <option value="JUNIOR">Júnior (1-2 semestres)</option>
                                    <option value="PLENO">Pleno (3-4 semestres)</option>
                                    <option value="SENIOR">Sênior (5-6 semestres)</option>
                                </select>
                            </div>

                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                                <label>Especialidade (Tecnologia/Disciplina)</label>
                                <input
                                    required
                                    value={monitor.especialidade}
                                    onChange={(e) => setMonitor(prev => ({ ...prev, especialidade: e.target.value }))}
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className={styles.modalFooter}>
                            <button className={styles.btnSave} type="submit">
                                Salvar alterações
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {modal.delete && (
                <div className={styles.overlay}>
                    <div className={`${styles.modal} ${styles.confirmModal}`}>
                        <div className={styles.modalHeader}>
                            <span>
                                <FaRegTrashAlt size={28} color="#8B0E21" />
                                <p>Excluir Monitor</p>
                            </span>
                            <button type="button" className={styles.closeButton} onClick={closeModal}>
                                <MdClose className={styles.closeIcon} size={30} />
                            </button>
                        </div>

                        <div className={styles.confirmContent}>
                            <p>
                                Tem certeza que deseja excluir <strong>{selectedMonitor?.nome} {selectedMonitor?.sobrenome}</strong>?
                            </p>
                        </div>

                        <div className={styles.modalFooter}>
                            <button type="button" className={styles.btnCancel} onClick={closeModal}>
                                Cancelar
                            </button>
                            <button type="button" className={styles.btnDanger} onClick={deleteMonitor}>
                                Excluir monitor
                            </button>
                        </div>
                    </div>
                </div>
            )}


        </div>
    );
}

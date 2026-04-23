
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




    const createMonitor = async (e: React.FormEvent) => {
        e.preventDefault();
      try{
        await axios.post(`${API_URL}/admin/usuarios/cadastroMentor`, monitor,{
            headers: { Authorization: `Bearer ${TOKEN}` }
        })
        fetchMonitores();
        alert("Monitor criado com sucesso!");
        setModal(prev=>({...prev, create: false}))
      }catch(e: any){
        alert("Erro ao criar monitor!" + e?.response?.data?.message);
      }
    }

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
                                    <span className={`${styles.badge} ${styles[monitor.nivelExperiencia.toLowerCase()]}`}>
                                        {monitor.nivelExperiencia}
                                    </span>
                                </td>
                                <td>
                                    <div className={styles.actions}>
                                        <button className={styles.btnAction} title="Editar">
                                            <FaRegEdit size={18} />
                                        </button>
                                        <button className={styles.btnAction} title="Excluir">
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
                                    className={styles.closeButton}
                                    onClick={() => setModal(prev => ({ ...prev, create: false }))}
                                >
                                    <MdClose className={styles.closeIcon} size={30} onClick={() => {
                                        setModal(prev => ({
                                            ...prev,
                                            create: false
                                        }))
                                    }} />
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


        </div>
    );
}
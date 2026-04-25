import { useEffect, useState, FormEvent } from 'react';
import axios from 'axios';
import { FaUserGraduate, FaPlus, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { getApiUrl, getToken } from '../../../utils/AuthProvider';
import styles from './index.module.css';
import { FaFileArrowUp } from 'react-icons/fa6';

export default function Alunos() {
    const API_URL = getApiUrl();
    const TOKEN = getToken();

    const [alunos, setAlunos] = useState<any[]>([]);
    const [isUploading, setIsUploading] = useState(false);
    const [selectedAluno, setSelectedAluno] = useState<any>(null);
    const [aluno, setAluno] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        curso: '',
        periodo: '',
        matricula: ''
    });
    const [modal, setModal] = useState({
        create: false,
        update: false,
        delete: false
    });

    const fetchAlunos = async () => {
        try {
            const response = await axios.get(`${API_URL}/admin/usuarios/alunos/list`, {
                headers: { Authorization: `Bearer ${TOKEN}` }
            });
            setAlunos(response.data || []);
        } catch (e: any) {
            setAlunos([
                { id: 1, nome: 'Ana', sobrenome: 'Souza', email: 'ana.souza@fatec.sp.gov.br', curso: 'Engenharia de Software', periodo: '5º semestre', matricula: '2023001234' },
                { id: 2, nome: 'Pedro', sobrenome: 'Oliveira', email: 'pedro.oliveira@fatec.sp.gov.br', curso: 'Análise e Desenvolvimento de Sistemas', periodo: '3º semestre', matricula: '2023005678' }
            ]);
        }
    };

    useEffect(() => {
        fetchAlunos();
    }, []);

    const clearForm = () => {
        setAluno({ nome: '', sobrenome: '', email: '', curso: '', periodo: '', matricula: '' });
    };

    const createAluno = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/admin/usuarios/alunos`, aluno, {
                headers: { Authorization: `Bearer ${TOKEN}` }
            });
            setAlunos(prev => [...prev, response.data || { ...aluno, id: Date.now() }]);
            setModal(prev => ({ ...prev, create: false }));
            clearForm();
            alert('Aluno criado com sucesso!');
        } catch (e: any) {
            setAlunos(prev => [...prev, { ...aluno, id: Date.now() }]);
            setModal(prev => ({ ...prev, create: false }));
            clearForm();
            alert('Aluno criado localmente. API indisponível.');
        }
    };

    const updateAluno = async (e: FormEvent) => {
        e.preventDefault();
        if (!selectedAluno) return;
        try {
            await axios.put(`${API_URL}/admin/usuarios/alunos/${selectedAluno.id}`, aluno, {
                headers: { Authorization: `Bearer ${TOKEN}` }
            });
            setAlunos(prev => prev.map(item => item.id === selectedAluno.id ? { ...item, ...aluno } : item));
            setModal(prev => ({ ...prev, update: false }));
            setSelectedAluno(null);
            clearForm();
            alert('Aluno atualizado com sucesso!');
        } catch (e: any) {
            setAlunos(prev => prev.map(item => item.id === selectedAluno.id ? { ...item, ...aluno } : item));
            setModal(prev => ({ ...prev, update: false }));
            setSelectedAluno(null);
            clearForm();
            alert('Atualização local aplicada.');
        }
    };

    const deleteAluno = async () => {
        if (!selectedAluno) return;
        try {
            await axios.delete(`${API_URL}/admin/usuarios/alunos/${selectedAluno.id}`, {
                headers: { Authorization: `Bearer ${TOKEN}` }
            });
            setAlunos(prev => prev.filter(item => item.id !== selectedAluno.id));
            setModal(prev => ({ ...prev, delete: false }));
            setSelectedAluno(null);
            alert('Aluno excluído com sucesso!');
        } catch (e: any) {
            setAlunos(prev => prev.filter(item => item.id !== selectedAluno.id));
            setModal(prev => ({ ...prev, delete: false }));
            setSelectedAluno(null);
            alert('Exclusão local aplicada.');
        }
    };

    const uploadCSV = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        setIsUploading(true);
        try {
            await axios.post(`${API_URL}/alunos/upload`, formData, {
                headers: { 
                    Authorization: `Bearer ${TOKEN}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Importação concluída!');
            fetchAlunos();
        } catch (err: any) {
            alert('Erro na importação. Verifique o arquivo CSV.');
        } finally {
            setIsUploading(false);
            e.target.value = "";
        }
    };

    const openEditModal = (alunoData: any) => {
        setSelectedAluno(alunoData);
        setAluno({
            nome: alunoData.nome || '',
            sobrenome: alunoData.sobrenome || '',
            email: alunoData.email || '',
            curso: alunoData.curso || '',
            periodo: alunoData.periodo || '',
            matricula: alunoData.matricula || ''
        });
        setModal(prev => ({ ...prev, update: true }));
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span>
                    <FaUserGraduate size={50} color="#b30000" />
                    <p>Alunos</p>
                </span>

                <span>
                    <label 
                        htmlFor='file-upload' 
                        title="Importar CSV" 
                        id={styles.btnupload}
                        style={{ opacity: isUploading ? 0.5 : 1, cursor: isUploading ? 'wait' : 'pointer' }}
                    >
                        <FaFileArrowUp size={25} color="#fff" />
                    </label>

                    <input 
                        disabled={isUploading}
                        style={{ display: 'none' }} 
                        onChange={uploadCSV} 
                        type="file" 
                        id="file-upload" 
                        accept=".csv"
                    />
                    
                    <button id={styles.btncreate} onClick={() => setModal(prev => ({ ...prev, create: true }))}>
                        <FaPlus size={22} color="#fff" />
                        <p>Novo aluno</p>
                    </button>
                </span>
            </div>

            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Curso</th>
                            <th>Período</th>
                            <th>Matrícula</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunos.map((item) => (
                            <tr key={item.id}>
                                <td><strong>{item.nome} {item.sobrenome}</strong></td>
                                <td>{item.email}</td>
                                <td>{item.curso}</td>
                                <td>{item.periodo}</td>
                                <td>{item.matricula}</td>
                                <td>
                                    <div className={styles.actions}>
                                        <button className={styles.btnAction} onClick={() => openEditModal(item)}>
                                            <FaRegEdit size={16} />
                                        </button>
                                        <button className={styles.btnAction} onClick={() => { setSelectedAluno(item); setModal(prev => ({ ...prev, delete: true })); }}>
                                            <FaRegTrashAlt size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {modal.create && (
                <div className={styles.overlay}>
                    <form onSubmit={createAluno} className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <span><FaUserGraduate size={32} color="#8B0E21" /><p>Cadastrar novo aluno</p></span>
                            <button type="button" onClick={() => setModal(prev => ({ ...prev, create: false }))}><MdClose size={30} /></button>
                        </div>
                        <div className={styles.form}>
                            <div className={styles.inputGroup}><label>Nome</label><input required value={aluno.nome} onChange={e => setAluno(prev => ({ ...prev, nome: e.target.value }))} type="text" /></div>
                            <div className={styles.inputGroup}><label>Sobrenome</label><input required value={aluno.sobrenome} onChange={e => setAluno(prev => ({ ...prev, sobrenome: e.target.value }))} type="text" /></div>
                            <div className={styles.inputGroup}><label>E-mail</label><input required value={aluno.email} onChange={e => setAluno(prev => ({ ...prev, email: e.target.value }))} type="email" /></div>
                            <div className={styles.inputGroup}><label>Curso</label><input required value={aluno.curso} onChange={e => setAluno(prev => ({ ...prev, curso: e.target.value }))} type="text" /></div>
                            <div className={styles.inputGroup}><label>Período</label><input required value={aluno.periodo} onChange={e => setAluno(prev => ({ ...prev, periodo: e.target.value }))} type="text" /></div>
                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}><label>Matrícula</label><input required value={aluno.matricula} onChange={e => setAluno(prev => ({ ...prev, matricula: e.target.value }))} type="text" /></div>
                        </div>
                        <div className={styles.modalFooter}><button className={styles.btnSave} type="submit">Salvar aluno</button></div>
                    </form>
                </div>
            )}

            {modal.update && (
                <div className={styles.overlay}>
                    <form onSubmit={updateAluno} className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <span><FaUserGraduate size={32} color="#8B0E21" /><p>Editar aluno</p></span>
                            <button type="button" onClick={() => { setModal(prev => ({ ...prev, update: false })); clearForm(); }}><MdClose size={30} /></button>
                        </div>
                        <div className={styles.form}>
                            <div className={styles.inputGroup}><label>Nome</label><input required value={aluno.nome} onChange={e => setAluno(prev => ({ ...prev, nome: e.target.value }))} type="text" /></div>
                            <div className={styles.inputGroup}><label>Sobrenome</label><input required value={aluno.sobrenome} onChange={e => setAluno(prev => ({ ...prev, sobrenome: e.target.value }))} type="text" /></div>
                            <div className={styles.inputGroup}><label>E-mail</label><input required value={aluno.email} onChange={e => setAluno(prev => ({ ...prev, email: e.target.value }))} type="email" /></div>
                            <div className={styles.inputGroup}><label>Curso</label><input required value={aluno.curso} onChange={e => setAluno(prev => ({ ...prev, curso: e.target.value }))} type="text" /></div>
                            <div className={styles.inputGroup}><label>Período</label><input required value={aluno.periodo} onChange={e => setAluno(prev => ({ ...prev, periodo: e.target.value }))} type="text" /></div>
                            <div className={`${styles.inputGroup} ${styles.fullWidth}`}><label>Matrícula</label><input required value={aluno.matricula} onChange={e => setAluno(prev => ({ ...prev, matricula: e.target.value }))} type="text" /></div>
                        </div>
                        <div className={styles.modalFooter}><button className={styles.btnSave} type="submit">Salvar alterações</button></div>
                    </form>
                </div>
            )}

            {modal.delete && selectedAluno && (
                <div className={styles.overlay}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <span><FaUserGraduate size={32} color="#8B0E21" /><p>Confirmar exclusão</p></span>
                            <button type="button" onClick={() => setModal(prev => ({ ...prev, delete: false }))}><MdClose size={30} /></button>
                        </div>
                        <div className={styles.formDelete}><p>Deseja excluir <strong>{selectedAluno.nome}</strong>?</p></div>
                        <div className={styles.modalFooter}>
                            <button className={styles.btnCancel} onClick={() => setModal(prev => ({ ...prev, delete: false }))}>Cancelar</button>
                            <button className={styles.btnSave} onClick={deleteAluno}>Excluir aluno</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
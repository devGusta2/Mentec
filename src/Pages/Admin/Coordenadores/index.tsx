import { useEffect, useState } from 'react';
import { getApiUrl, getToken } from '../../../utils/AuthProvider';
import styles from './index.module.css';
import { FaUserTie, FaPlus, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import axios from 'axios';

const initialFormState = {
  nome: '',
  sobrenome: '',
  cpf: '',
  email: '',
  senha: '',
  departamento: '',
  telefone: ''
};

export default function Coordenadores() {
  const API_URL = getApiUrl();
  const TOKEN = getToken();
  const [coordenadores, setCoordenadores] = useState<any[]>([]);
  const [form, setForm] = useState(initialFormState);
  const [modal, setModal] = useState({ create: false, update: false, delete: false });
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const fetchCoordenadores = async () => {
    try {
      const response = await axios.get(`${API_URL}/admin/coordenadores/listar`, {
        headers: { Authorization: `Bearer ${TOKEN}` }
      });
      setCoordenadores(response.data);
    } catch (error: any) {
      alert('Erro ao listar coordenadores: ' + (error?.response?.data?.message || error.message));
    }
  };

  useEffect(() => {
    fetchCoordenadores();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetForm = () => {
    setForm(initialFormState);
    setSelectedId(null);
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/admin/coordenadores/cadastrar`, form, {
        headers: { Authorization: `Bearer ${TOKEN}` }
      });
      alert('Coordenador cadastrado com sucesso!');
      resetForm();
      setModal(prev => ({ ...prev, create: false }));
      fetchCoordenadores();
    } catch (error: any) {
      alert('Erro ao cadastrar coordenador: ' + (error?.response?.data?.message || error.message));
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedId) return;

    try {
      const payload: any = { ...form };
      if (!payload.senha) delete payload.senha;

      await axios.put(`${API_URL}/admin/coordenadores/atualizar/${selectedId}`, payload, {
        headers: { Authorization: `Bearer ${TOKEN}` }
      });
      alert('Coordenador atualizado com sucesso!');
      resetForm();
      setModal(prev => ({ ...prev, update: false }));
      fetchCoordenadores();
    } catch (error: any) {
      alert('Erro ao atualizar coordenador: ' + (error?.response?.data?.message || error.message));
    }
  };

  const handleDelete = async () => {
    if (!selectedId) return;

    try {
      await axios.delete(`${API_URL}/admin/coordenadores/deletar/${selectedId}`, {
        headers: { Authorization: `Bearer ${TOKEN}` }
      });
      alert('Coordenador excluído com sucesso!');
      resetForm();
      setModal(prev => ({ ...prev, delete: false }));
      fetchCoordenadores();
    } catch (error: any) {
      alert('Erro ao excluir coordenador: ' + (error?.response?.data?.message || error.message));
    }
  };

  const openUpdateModal = (coordenador: any) => {
    setForm({
      nome: coordenador.nome || '',
      sobrenome: coordenador.sobrenome || '',
      cpf: coordenador.cpf || '',
      email: coordenador.email || '',
      senha: '',
      departamento: coordenador.departamento || '',
      telefone: coordenador.telefone || ''
    });
    setSelectedId(coordenador.id);
    setModal(prev => ({ ...prev, update: true }));
  };

  const openDeleteModal = (coordenador: any) => {
    setSelectedId(coordenador.id);
    setModal(prev => ({ ...prev, delete: true }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>
          <FaUserTie size={50} color="#b30000" />
          <p>Coordenadores</p>
        </span>
        <button
          onClick={() => {
            resetForm();
            setModal(prev => ({ ...prev, create: true }));
          }}
        >
          <FaPlus size={20} color="#fff" />
          <p>Novo coordenador</p>
        </button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Departamento</th>
              <th>Telefone</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {coordenadores.length === 0 ? (
              <tr>
                <td colSpan={5} className={styles.emptyState}>
                  Nenhum coordenador encontrado.
                </td>
              </tr>
            ) : (
              coordenadores.map(coordenador => (
                <tr key={coordenador.id}>
                  <td><strong>{coordenador.nome} {coordenador.sobrenome}</strong></td>
                  <td>{coordenador.email}</td>
                  <td>{coordenador.departamento}</td>
                  <td>{coordenador.telefone}</td>
                  <td>
                    <div className={styles.actions}>
                      <button className={styles.btnAction} title="Editar" onClick={() => openUpdateModal(coordenador)}>
                        <FaRegEdit size={18} />
                      </button>
                      <button className={styles.btnAction} title="Excluir" onClick={() => openDeleteModal(coordenador)}>
                        <FaRegTrashAlt size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {modal.create && (
        <div className={styles.overlay}>
          <form onSubmit={handleCreate} className={styles.modal}>
            <div className={styles.modalHeader}>
              <span>
                <FaUserTie size={32} color="#8B0E21" />
                <p>Cadastrar Coordenador</p>
              </span>
              <button className={styles.closeButton} onClick={() => setModal(prev => ({ ...prev, create: false }))}>
                <MdClose className={styles.closeIcon} size={30} />
              </button>
            </div>
            <div className={styles.form}>
              <div className={styles.inputGroup}>
                <label>Nome</label>
                <input required value={form.nome} onChange={e => setForm(prev => ({ ...prev, nome: e.target.value }))} type="text" placeholder="Ex: João" />
              </div>
              <div className={styles.inputGroup}>
                <label>Sobrenome</label>
                <input required value={form.sobrenome} onChange={e => setForm(prev => ({ ...prev, sobrenome: e.target.value }))} type="text" placeholder="Ex: Silva" />
              </div>
              <div className={styles.inputGroup}>
                <label>E-mail</label>
                <input required value={form.email} onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))} type="email" placeholder="email@dominio.com" />
              </div>
              <div className={styles.inputGroup}>
                <label>CPF</label>
                <input required value={form.cpf} onChange={e => setForm(prev => ({ ...prev, cpf: e.target.value }))} type="text" placeholder="000.000.000-00" />
              </div>
              <div className={styles.inputGroup}>
                <label>Telefone</label>
                <input required value={form.telefone} onChange={e => setForm(prev => ({ ...prev, telefone: e.target.value }))} type="text" placeholder="(00) 00000-0000" />
              </div>
              <div className={styles.inputGroup}>
                <label>Departamento</label>
                <input required value={form.departamento} onChange={e => setForm(prev => ({ ...prev, departamento: e.target.value }))} type="text" placeholder="Ex: Engenharia" />
              </div>
              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label>Senha inicial</label>
                <input required value={form.senha} onChange={e => setForm(prev => ({ ...prev, senha: e.target.value }))} type="password" placeholder="********" />
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.btnSave} type="submit">Salvar</button>
            </div>
          </form>
        </div>
      )}

      {modal.update && (
        <div className={styles.overlay}>
          <form onSubmit={handleUpdate} className={styles.modal}>
            <div className={styles.modalHeader}>
              <span>
                <FaUserTie size={32} color="#8B0E21" />
                <p>Editar Coordenador</p>
              </span>
              <button className={styles.closeButton} onClick={() => setModal(prev => ({ ...prev, update: false }))}>
                <MdClose className={styles.closeIcon} size={30} />
              </button>
            </div>
            <div className={styles.form}>
              <div className={styles.inputGroup}>
                <label>Nome</label>
                <input required value={form.nome} onChange={e => setForm(prev => ({ ...prev, nome: e.target.value }))} type="text" />
              </div>
              <div className={styles.inputGroup}>
                <label>Sobrenome</label>
                <input required value={form.sobrenome} onChange={e => setForm(prev => ({ ...prev, sobrenome: e.target.value }))} type="text" />
              </div>
              <div className={styles.inputGroup}>
                <label>E-mail</label>
                <input required value={form.email} onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))} type="email" />
              </div>
              <div className={styles.inputGroup}>
                <label>CPF</label>
                <input required value={form.cpf} onChange={e => setForm(prev => ({ ...prev, cpf: e.target.value }))} type="text" />
              </div>
              <div className={styles.inputGroup}>
                <label>Telefone</label>
                <input required value={form.telefone} onChange={e => setForm(prev => ({ ...prev, telefone: e.target.value }))} type="text" />
              </div>
              <div className={styles.inputGroup}>
                <label>Departamento</label>
                <input required value={form.departamento} onChange={e => setForm(prev => ({ ...prev, departamento: e.target.value }))} type="text" />
              </div>
              <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
                <label>Nova senha (opcional)</label>
                <input value={form.senha} onChange={e => setForm(prev => ({ ...prev, senha: e.target.value }))} type="password" placeholder="Deixe em branco para manter a senha atual" />
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.btnSave} type="submit">Atualizar</button>
            </div>
          </form>
        </div>
      )}

      {modal.delete && (
        <div className={styles.overlay}>
          <div className={styles.deleteModal}>
            <div className={styles.modalHeader}>
              <span>
                <FaUserTie size={32} color="#8B0E21" />
                <p>Confirmar exclusão</p>
              </span>
              <button className={styles.closeButton} onClick={() => setModal(prev => ({ ...prev, delete: false }))}>
                <MdClose className={styles.closeIcon} size={30} />
              </button>
            </div>
            <div className={styles.deleteBody}>
              <p>Tem certeza que deseja excluir este coordenador?</p>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.btnCancel} onClick={() => setModal(prev => ({ ...prev, delete: false }))} type="button">Cancelar</button>
              <button className={styles.btnSave} onClick={handleDelete} type="button">Excluir</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

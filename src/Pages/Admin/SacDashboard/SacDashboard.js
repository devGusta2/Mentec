import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/pt-br';
import styles from './SacDashboard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHeadset, 
    faFilter, 
    faInbox, 
    faCheckCircle, 
    faClock, 
    faUser, 
    faTag,
    faTimes
} from '@fortawesome/free-solid-svg-icons';

moment.locale('pt-br');

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

const SacDashboard = () => {
  const [chamados, setChamados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtroTipo, setFiltroTipo] = useState('');
  const [filtroStatus, setFiltroStatus] = useState('');
  const [filtroDataInicio, setFiltroDataInicio] = useState('');
  const [filtroDataFim, setFiltroDataFim] = useState('');
  const [filtroAlunoEmail, setFiltroAlunoEmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [chamadoSelecionado, setChamadoSelecionado] = useState(null);

  const fetchChamados = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('jwtToken');
      const response = await axios.get(`${API_URL}/sac`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          tipo: filtroTipo || null,
          status: filtroStatus || null,
          dataInicio: filtroDataInicio ? moment(filtroDataInicio).toISOString() : null,
          dataFim: filtroDataFim ? moment(filtroDataFim).toISOString() : null,
          alunoEmail: filtroAlunoEmail || null,
        },
      });
      setChamados(response.data);
    } catch (err) {
      setError('Erro ao carregar chamados: ' + (err.response?.data?.message || err.message));
      console.error('Erro ao carregar chamados:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChamados();
  }, [filtroTipo, filtroStatus, filtroDataInicio, filtroDataFim, filtroAlunoEmail]);

  const handleAbrirModal = (chamado) => {
    setChamadoSelecionado(chamado);
    setModalOpen(true);
  };

  const handleFecharModal = () => {
    setModalOpen(false);
    setChamadoSelecionado(null);
  };

  const handleConcluirChamado = async () => {
    if (!chamadoSelecionado) return;

    try {
      const token = localStorage.getItem('jwtToken');
      await axios.patch(`${API_URL}/sac/${chamadoSelecionado.id}/status`, {
        status: 'CONCLUIDO',
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      handleFecharModal();
      fetchChamados();
    } catch (err) {
      alert('Erro ao concluir chamado: ' + (err.response?.data?.message || err.message));
    }
  };

  const calcularTempoEspera = (dataCriacao) => {
    const agora = moment();
    const criacao = moment(dataCriacao);
    const diffDias = agora.diff(criacao, 'days');
    if (diffDias === 0) return 'Hoje';
    return `Há ${diffDias} dia${diffDias > 1 ? 's' : ''}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>
          <FontAwesomeIcon icon={faHeadset} size="2x" color="#770B1C" />
          <h1>Atendimento ao Cliente (SAC)</h1>
        </span>
      </div>

      <div className={styles.filters}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', marginBottom: '10px' }}>
          <FontAwesomeIcon icon={faFilter} color="#888" />
          <span style={{ fontWeight: '600', color: '#666' }}>Filtros</span>
        </div>
        
        <select onChange={(e) => setFiltroTipo(e.target.value)} value={filtroTipo}>
          <option value="">Todos os Tipos</option>
          <option value="MONITORIA">Monitoria</option>
          <option value="MATERIAL">Material</option>
          <option value="CONTEUDO">Conteúdo</option>
          <option value="RECLAMACAO">Reclamação</option>
          <option value="OUTROS">Outros</option>
        </select>

        <select onChange={(e) => setFiltroStatus(e.target.value)} value={filtroStatus}>
          <option value="">Todos os Status</option>
          <option value="PENDENTE">Pendente</option>
          <option value="CONCLUIDO">Concluído</option>
        </select>

        <input
          type="date"
          value={filtroDataInicio}
          onChange={(e) => setFiltroDataInicio(e.target.value)}
          placeholder="Data Início"
        />
        <input
          type="date"
          value={filtroDataFim}
          onChange={(e) => setFiltroDataFim(e.target.value)}
          placeholder="Data Fim"
        />
        <input
          type="text"
          value={filtroAlunoEmail}
          onChange={(e) => setFiltroAlunoEmail(e.target.value)}
          placeholder="Email do Aluno"
        />
      </div>

      <div className={styles.list}>
        {loading ? (
          <div className={styles.empty}>Carregando chamados...</div>
        ) : chamados.length === 0 ? (
          <div className={styles.empty}>
            <FontAwesomeIcon icon={faInbox} size="4x" color="#ccc" />
            <p>Nenhum chamado encontrado.</p>
          </div>
        ) : (
          chamados.map((chamado) => (
            <div key={chamado.id} className={styles.card} onClick={() => handleAbrirModal(chamado)}>
              <div className={styles.cardContent}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h2>Chamado #{chamado.id}</h2>
                  <span className={`${styles.statusBadge} ${chamado.status === 'PENDENTE' ? styles.statusPendente : styles.statusConcluido}`}>
                    {chamado.status === 'PENDENTE' ? 'Pendente' : 'Concluído'}
                  </span>
                </div>
                <p className={styles.sub}>{chamado.descricao.substring(0, 100)}{chamado.descricao.length > 100 ? '...' : ''}</p>
                
                <div className={styles.infoRow}>
                  <div className={styles.infoItem}>
                    <span className={styles.label}><FontAwesomeIcon icon={faTag} style={{marginRight: '5px'}}/> Tipo</span>
                    <span className={styles.value}>{chamado.tipo}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.label}><FontAwesomeIcon icon={faUser} style={{marginRight: '5px'}}/> Aluno</span>
                    <span className={styles.value}>{chamado.alunoEmail}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.label}><FontAwesomeIcon icon={faClock} style={{marginRight: '5px'}}/> Criado em</span>
                    <span className={styles.value}>{moment(chamado.dataCriacao).format('DD/MM/YYYY HH:mm')}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.label}>Tempo de Espera</span>
                    <span className={styles.value}>{calcularTempoEspera(chamado.dataCriacao)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {modalOpen && chamadoSelecionado && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2>Detalhes do Chamado #{chamadoSelecionado.id}</h2>
              <button className={styles.closeButton} onClick={handleFecharModal}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            
            <div className={styles.modalBody}>
              <div className={styles.modalField}>
                <label>Tipo de Solicitação</label>
                <p>{chamadoSelecionado.tipo}</p>
              </div>
              
              <div className={styles.modalField}>
                <label>Descrição Completa</label>
                <p>{chamadoSelecionado.descricao}</p>
              </div>
              
              <div style={{ display: 'flex', gap: '40px' }}>
                <div className={styles.modalField}>
                  <label>Data de Abertura</label>
                  <p>{moment(chamadoSelecionado.dataCriacao).format('DD/MM/YYYY HH:mm')}</p>
                </div>
                <div className={styles.modalField}>
                  <label>Status Atual</label>
                  <p>{chamadoSelecionado.status === 'PENDENTE' ? 'Pendente' : 'Concluído'}</p>
                </div>
              </div>
              
              <div className={styles.modalField}>
                <label>E-mail do Aluno</label>
                <p>{chamadoSelecionado.alunoEmail}</p>
              </div>
            </div>

            <div className={styles.modalFooter}>
              {chamadoSelecionado.status === 'PENDENTE' ? (
                <button className={styles.concluirButton} onClick={handleConcluirChamado}>
                  <FontAwesomeIcon icon={faCheckCircle} style={{marginRight: '8px'}} />
                  Concluir Chamado
                </button>
              ) : (
                <button className={styles.concluirButton} disabled>
                  Chamado já Finalizado
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SacDashboard;

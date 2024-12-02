import styles from './MyMentorships.module.css';
import MenuTeacher from '../../../Components/Menu_Teacher/Menu_Taeacher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function MyMentorships() {
    const [mentorshipData, setMentorShipsData] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const loadMyMentorships = async () => {
        try {
            const result = await axios.get('http://localhost/Api_mentec/controller/Mentorships_control/Mentorships_controller.php');
            setMentorShipsData(result.data);
            console.log('resposta da API', result.data);
        } catch (error) {
            console.log("Erro ao carregar dados:", error);
        }
    };

    useEffect(() => {
        loadMyMentorships();
    }, []);

    // Função para iniciar a edição da mentoria específica
    const startEditing = (id) => {
        setEditingId(id);
    };

    // Função para finalizar a edição da mentoria específica
    const cancelEditing = () => {
        setEditingId(null);
    };

    // Função para atualizar o estado de uma mentoria específica
    const handleChange = (e, id) => {
        const { name, value } = e.target;
        setMentorShipsData((prevData) => 
            prevData.map((mentorship) => 
                mentorship.id === id ? { ...mentorship, [name]: value } : mentorship
            )
        );
    };

    const updateMentorship = async (id) => {
        if (window.confirm("Deseja alterar as informações?")) {
            try {
                const updatedMentorship = mentorshipData.find(m => m.id === id);
                
                const responseUpdate = await axios.post(
                    'http://localhost/Api_mentec/controller/Mentorships_control/Mentorships_update.php',
                    JSON.stringify(updatedMentorship),
                    {
                        headers: { 'Content-Type': 'application/json' },
                    }
                );
                console.log(responseUpdate.data);
                alert("Informações alteradas com sucesso!");
                loadMyMentorships();
            } catch (error) {
                console.log("Erro ao atualizar:", error);
            }
            cancelEditing();
        }
    };

    const deactivateMentorship = async (idMentorship) => {
        if (window.confirm("Tem certeza que deseja excluir esta mentoria?")) {
            try {
                const deactivateResponse = await axios.post(
                    'http://localhost/Api_mentec/controller/Mentorships_control/Mentorships_Delete.php',
                    { id: idMentorship },
                    { headers: { 'Content-Type': 'application/json' } }
                );
                console.log("Mentoria desativada:", deactivateResponse.data);
                loadMyMentorships();
            } catch (error) {
                console.log("Erro ao desativar:", error);
            }
        }
    };

    return (
        <div className={styles.MyMentorships}>
            <MenuTeacher />
            <div className={styles.mentorshipsContainter}>
                <div className={styles.top_elements}>
                    <div className={styles.inpt_box}>
                        <input placeholder='Busque uma de suas mentorias' />
                    </div>
                    <select className={styles.box_filter}>
                        <option>Tipo</option>
                    </select>
                    <select className={styles.box_filter}>
                        <option>Ordem</option>
                    </select>
                    <Link to='/CreateMentoring' className={styles.box_filter}>
                        <FontAwesomeIcon icon={faPlus} size="1x" style={{ height: '25px', width: '25px' }} />
                    </Link>
                </div>
                {mentorshipData.map((data) => (
                    <div key={data.id} className={styles.myMentoringCard}>
                        <div className={styles.infoContainer}>
                            <img src="https://th.bing.com/th/id/R.27af735fcc270df3cba0709c982c1a67?rik=Ek8T%2f5U8ClREZg&pid=ImgRaw&r=0" />
                            <div id={styles.description}>
                                <h3>Título:</h3>
                                <input
                                    type="text"
                                    name="title"
                                    value={editingId === data.id ? data.title : data.title}
                                    onChange={(e) => handleChange(e, data.id)}
                                    disabled={editingId !== data.id}
                                />
                                <h4>Descrição:</h4>
                                <input
                                    type="text"
                                    name="description"
                                    value={editingId === data.id ? data.description : data.description}
                                    onChange={(e) => handleChange(e, data.id)}
                                    disabled={editingId !== data.id}
                                />
                                <h4>Objetivo:</h4>
                                <input
                                    type="text"
                                    name="goal"
                                    value={editingId === data.id ? data.goals : data.goals}
                                    onChange={(e) => handleChange(e, data.id)}
                                    disabled={editingId !== data.id}
                                />
                            </div>
                        </div>
                        <div className={styles.btnBox}>
                            {editingId === data.id ? (
                                <div id={styles.btn_edit} onClick={() => updateMentorship(data.id)}>
                                    <FontAwesomeIcon icon={faPen} size="1x" style={{ height: '25px', width: '25px' }} />
                                    <h3>Salvar</h3>
                                </div>
                            ) : (
                                <div id={styles.btn_edit} onClick={() => startEditing(data.id)}>
                                    <FontAwesomeIcon icon={faPen} size="1x" style={{ height: '25px', width: '25px' }} />
                                    <h3>Editar</h3>
                                </div>
                            )}
                            <div id={styles.btn_delete} onClick={() => deactivateMentorship(data.id)}>
                                <FontAwesomeIcon icon={faTrash} size="1x" style={{ height: '25px', width: '25px' }} />
                                <h3>Deletar</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

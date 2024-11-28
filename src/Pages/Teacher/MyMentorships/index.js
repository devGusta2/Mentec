import styles from './MyMentorships.module.css';
import MenuTeacher from '../../../Components/Menu_Teacher/Menu_Taeacher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MyMentorships() {
    const [mentorshipData, setMentorShipsData] = useState([]);
    const [formData, setFormData] = useState({
        id: '', // ID para update
        title: '',
        goal: '',
        duration: '',
        target: '',
        frequency: '',
        period: '',
        requirements: '',
        date_begin: '',
        teacher: '',
        mode: '',
        description: '',
        content: '',
        methods: '',
        place: '',
        payment: '',
        feedback: '',
        price: '',
    });
    const loadMyMentorships = async () => {
        try {
            const result = await axios.get('http://localhost/Api_mentec/controller/Mentorships_control/Mentorships_controller.php');
            setMentorShipsData(result.data);
            console.log('resposta da API', result.data);
        } catch (error) {
            console.log("Erro ao carregar dados:", error);
        }
    };
    // Carregar dados da API
    useEffect(() => {

        loadMyMentorships();
    }, []);

    // Atualizar estado dos inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Preencher formData com dados existentes ao editar
    const populateFormData = (data) => {
        setFormData({
            id: data.id,
            title: data.title,
            goal: data.goals, // Certifique-se de que a chave está correta
            duration: data.duration,
            target: data.target,
            frequency: data.frequency,
            period: data.period,
            requirements: data.requirements,
            date_begin: data.date_begin,
            teacher: data.teacher,
            mode: data.mode,
            description: data.description,
            content: data.content,
            methods: data.methods,
            place: data.place,
            payment: data.payment,
            feedback: data.feedback,
            price: data.price,
        });
    };

    // Função para enviar atualização
    const updateMentorship = async () => {
        if (window.confirm("Deseja alterar as informações?")) {
            try {
                const payload = mentorshipData.find(m => m.id === formData.id); // Dados originais
                const updatedData = { ...payload, ...formData }; // Mescla alterações
                
                const responseUpdate = await axios.post(
                    'http://localhost/Api_mentec/controller/Mentorships_control/Mentorships_update.php',
                    JSON.stringify(updatedData),
                    {
                        headers: { 'Content-Type': 'application/json' },
                    }
                   
                );
                console.log(responseUpdate.data);
                console.log("Resposta do servidor:", responseUpdate.data);
                alert("Informações alteradas com sucesso!");
                
            } catch (error) {
                console.log("Erro ao atualizar:", error);
            }
        }
        loadMyMentorships();
    };
    

    // Função para desativar
    const deactivateMentorship = async (idMentorship) => {
        if (window.confirm("Tem certeza que deseja excluir esta mentoria?")) {
            try {
                const deactivateResponse = await axios.post(
                    'http://localhost/Api_mentec/controller/Mentorships_control/Mentorships_Delete.php',
                    { id: idMentorship },
                    { headers: { 'Content-Type': 'application/json' } }
                );
                console.log("Mentoria desativada:", deactivateResponse.data);
            } catch (error) {
                console.log("Erro ao desativar:", error);
            }
        }
        loadMyMentorships();
    };

    return (
        <div className={styles.MyMentorships}>
            <MenuTeacher />
            <div className={styles.mentorshipsContainter}>
                {mentorshipData.map((data) => (
                    <div key={data.id} className={styles.myMentoringCard}>
                        <div className={styles.infoContainer}>
                            <img src="https://th.bing.com/th/id/R.27af735fcc270df3cba0709c982c1a67?rik=Ek8T%2f5U8ClREZg&pid=ImgRaw&r=0" />
                            <div id={styles.description}>
                                <h3>Título:</h3>
                                <input
                                    type="text"
                                    name="title"
                                    defaultValue={data.title}
                                    onChange={handleChange}
                                    onClick={() => populateFormData(data)}
                                />
                                <h4>Descrição:</h4>
                                <input
                                    type="text"
                                    name="description"
                                    defaultValue={data.description}
                                    onChange={handleChange}
                                    onClick={() => populateFormData(data)}
                                />
                                <h4>Objetivo:</h4>
                                <input
                                    type="text"
                                    name="goal"
                                    defaultValue={data.goals}
                                    onChange={handleChange}
                                    onClick={() => populateFormData(data)}
                                />
                            </div>
                        </div>
                        <div className={styles.btnBox}>
                            <div id={styles.btn_edit} onClick={updateMentorship}>
                                <FontAwesomeIcon icon={faPen} size="1x" style={{ height: '25px', width: '25px' }} />
                                <h3>Alterar</h3>
                            </div>
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

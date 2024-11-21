import styles from './CreateMentoring.module.css';
import hat from '../../../assets/img/Arts/motarboard.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function CreateMentoring() {
    const [formData, setFormData] = useState({
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
        //a partir daqui nao foi implementado nada no forms
        content:'',
        methods:'',
        place:'',
        payment:'',
        feedback:'',
        price:'',

    });

    // Função para lidar com mudanças nos inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Função para enviar os dados
    const publicarMentoria = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost/Api_mentec/controller/Mentorships_control/Mentorships_controller.php', formData)
            .then((response) => {
                console.log(formData);
                console.log('Mentoria publicada com sucesso:', response.data);
                alert('Mentoria publicada com sucesso!');
            })
            .catch((error) => {
                console.error('Erro ao publicar mentoria:', error);
                alert('Erro ao publicar mentoria. Tente novamente.');
            });
    };

    return (
        <div className={styles.CreateMentoring}>
            <div className={styles.titles}>
                <div id={styles.line_detail}></div>
                <div className={styles.titles_art}>
                    <div className={styles.titles_box}>
                        <Link className={styles.link} to="../Teacher">
                            <h3>Voltar</h3>
                        </Link>
                        <p>Passo 1 de 2</p>
                        <h1>Compartilhe seu conhecimento</h1>
                        <p>Publique sua mentoria e inspire novos talentos!</p>
                    </div>
                    <img src={hat} id={styles.hat} alt="Graduation hat" />
                </div>
            </div>
            <div className={styles.form_container}>
                <form onSubmit={publicarMentoria}>
                    <div className={styles.title_inpt}>
                        <h3>* Título:</h3>
                        <input
                            //required
                            className={styles.text_inpt}
                            placeholder="Digite o título da sua mentoria"
                            name="title"
                            value={formData.titulo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.title_inpt}>
                        <h3>* Objetivo:</h3>
                        <input
                            //required
                            className={styles.text_inpt}
                            placeholder="Digite o objetivo da sua mentoria"
                            name="goal"
                            value={formData.objetivo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.title_inpt}>
                        <h3>* Duração:</h3>
                        <input
                            //required
                            type="number"
                            min={1}
                            max={200}
                            className={styles.text_inpt}
                            placeholder="Digite a duração da sua mentoria"
                            name="duration"
                            value={formData.duracao}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.title_inpt}>
                        <h3>* Público alvo:</h3>
                        <input
                            //required
                            className={styles.text_inpt}
                            placeholder="Quem você deseja alcançar"
                            name="target"
                            value={formData.publicoAlvo}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.title_inpt}>
                        <h3>* Frequência:</h3>
                        <input
                            //required
                            className={styles.text_inpt}
                            placeholder="Exemplo: duas vezes por semana"
                            name="frequency"
                            value={formData.frequencia}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.title_inpt}>
                        <h3>* Período:</h3>
                        <select
                            //required
                            className={styles.text_inpt}
                            name="period"
                            value={formData.periodo}
                            onChange={handleChange}
                        >
                            <option>Selecione um período</option>
                            <option>Manhã</option>
                            <option>Tarde</option>
                            <option>Noite</option>
                        </select>
                    </div>
                    <div className={styles.title_inpt}>
                        <h3>* Requisitos mínimos:</h3>
                        <input
                            //required
                            className={styles.text_inpt}
                            placeholder="Exemplo: curso técnico"
                            name="requirements"
                            value={formData.requisitos}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.title_inpt}>
                        <h3>* Data de início:</h3>
                        <input
                            //required
                            className={styles.text_inpt}
                            type="date"
                            name="date_begin"
                            value={formData.date_begin}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.title_inpt}>
                        <h3>* Instrutor:</h3>
                        <input
                            //required
                            className={styles.text_inpt}
                            placeholder="Informe quem serão os instrutores"
                            name="teacher"
                            value={formData.instrutor}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.title_inpt}>
                        <h3>* Modalidade:</h3>
                        <select
                            //required
                            className={styles.text_inpt}
                            name="mode"
                            value={formData.modalidade}
                            onChange={handleChange}
                        >
                            <option>Selecione uma modalidade</option>
                            <option>Presencial</option>
                            <option>Híbrido</option>
                            <option>Ead</option>
                        </select>
                    </div>
                    <div className={styles.title_text_area}>
                        <h3>* Descrição:</h3>
                        <textarea
                            style={{ padding: '10px' }}
                            className={styles.text_inpt}
                            //required
                            placeholder="Digite o título da sua mentoria"
                            name="description"
                            value={formData.descricao}
                            onChange={handleChange}
                        />
                    </div>
                    <button type='submit'>
                        <h3>Publicar mentoria</h3>
                    </button>
                </form>
            </div>
        </div>
    );
}

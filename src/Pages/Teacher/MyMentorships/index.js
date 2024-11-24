

import styles from './MyMentorships.module.css';
import MenuTeacher from '../../../Components/Menu_Teacher/Menu_Taeacher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faPen } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function MyMentorships(){
    //define a constante que vai receber os dados
    const [mentorshipData,setMentorShipsData] = useState([]);
    //requisição
    useEffect(()=>{
        const loadMyMentorships = async () =>{
            try{
                const result = await axios.get('http://localhost/Api_mentec/controller/Mentorships_control/Mentorships_controller.php');
                console.log("Dados recebidos", result.data);
                setMentorShipsData(result.data);
            }catch{
                
            }
        }    
        loadMyMentorships();
    },[]);
    return(
        <div className={styles.MyMentorships}>
            <MenuTeacher />
            <div className={styles.mentorshipsContainter}>
                {/* {
                    mentorshipData.map((data)=>(
                    <div key={data.id} className={styles.myMentoringCard} >
                        <div className={styles.infoContainer}>
                            <img src='https://th.bing.com/th/id/R.27af735fcc270df3cba0709c982c1a67?rik=Ek8T%2f5U8ClREZg&pid=ImgRaw&r=0'/>
                            <div id={styles.description}>
                                <h3>{data.title}</h3>
                                <h4>Descrição:</h4>
                                <p>{data.description}</p>
                                <h4>Objetivo:</h4>
                                <p>{data.goals}</p>
                            </div>
                        </div>
                        <div className={styles.btnBox}>
                            <div id={styles.btn_edit}>
                                <FontAwesomeIcon icon={faPen} size='1x' style={{height:'25px', width:'25px'}}/>
                                <h3>Editar</h3>
                            </div>
                            <div id={styles.btn_delete}>
                                <FontAwesomeIcon icon={faTrash} size='1x' style={{height:'25px', width:'25px'}}/>
                                <h3>Deletar</h3>
                            </div>
                        </div>
                    </div>
                    ))
                } */}
            </div>
        </div>
    )
}


import styles from './MyMentorships.module.css';
import MenuTeacher from '../../../Components/Menu_Teacher/Menu_Taeacher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faPen } from '@fortawesome/free-solid-svg-icons';
export default function MyMentorships(){
    
    return(
        <div className={styles.MyMentorships}>
            <MenuTeacher />
            <div className={styles.mentorshipsContainter}>
                <div className={styles.myMentoringCard}>
                    <div className={styles.infoContainer}>
                        <img src='https://th.bing.com/th/id/R.27af735fcc270df3cba0709c982c1a67?rik=Ek8T%2f5U8ClREZg&pid=ImgRaw&r=0'/>
                        <div id={styles.description}>
                            <h3>Php, da gambiarra aos 8,000.00</h3>
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
            </div>
        </div>
    )
}


import styles from './MyMentorships.module.css';
import MenuTeacher from '../../../Components/Menu_Teacher/Menu_Taeacher';

export default function MyMentorships(){
    return(
        <div className={styles.MyMentorships}>
            <MenuTeacher />
            <div className={styles.mentorshipsContainter}>
                <div className={styles.myMentoringCard}>
                    <div className={styles.infoContainer}>

                    </div>
                    <div className={styles.btnBox}>
                        <div id={styles.btn_edit}>
                            <h3>Editar</h3>
                        </div>
                        <div id={styles.btn_delete}>
                            <h3>Deletar</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
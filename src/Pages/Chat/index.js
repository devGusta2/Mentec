import styles from './Chat.module.css'

export default function Chat(){
    return(
        <div className={styles.container}>
            <div id={styles.menu}>
                <div id={styles.titlePageChat}>
                    <p>Chat</p>
                </div>
            </div>
        </div>
    );
}
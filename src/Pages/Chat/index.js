import styles from './Chat.module.css'

export default function Chat(){
    return(
        <div className={styles.container}>
            <div id={styles.menu}>
                <div id={styles.titlePageChat}>
                    <p>Chat</p>
                </div>
                <div id={styles.searchBarBox}>
                    <input placeholder='Pesquisar'/>
                </div>
                <div id={styles.conversations}>
                    <div className={styles.conversations_box}>
                        <div className={styles.imgBox}>
                        
                        </div>
                        <div className={styles.conversationsInfo}>
                            <div className={styles.nameMessage}></div>
                            <div className={styles.additionalInfo}></div>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div id={styles.contentMessages}>
                <div id={styles.upInfoBox}></div>
                <div className={styles.messagesBox}>
                    <div className={styles.senderMessage}>Bom dia</div>
                    <div className={styles.receiverMessage}>Boa tarde</div>
                </div>
                <div id={styles.messageInputBox}>
                    <input placeholder='DIgite sua mensagem'>

                    </input>
                    <div id={styles.optionalFunc}>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
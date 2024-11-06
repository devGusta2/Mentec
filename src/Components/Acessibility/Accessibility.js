import VLibras from "@djpfs/react-vlibras/";
import styles from './Accessibility.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus , faMinus} from '@fortawesome/free-solid-svg-icons';
//define variavel e obtem o elemento do body
let size_font = 15;
const body = document.querySelector('body');
// define a fuinção
//  (e) é o parametro recebido, pode ser 1 para umentar e 0 para diminuir
function font_size(e) {
    if (e === 1) {
        // Aumenta o tamanho da fonte até o limite máximo de 40
        if (size_font < 25) {
            size_font += 2;
        }
    } else {
        // Diminui o tamanho da fonte até o limite mínimo de 5
        if (size_font > 5) {
            size_font -= 2;
        }
    }
    // Aplica o tamanho da fonte ao body
    return (document.body.style.fontSize = size_font + 'px');
}
export default function acessibility(){
    return(
        <div className={styles.accessibility}>
            <VLibras forceOnload={true} />
            <div className="App-heaer">
         
            </div>
            <div className={styles.btn} onClick={() => font_size(1)}><FontAwesomeIcon icon={faPlus} size="1x"/></div>
            <div className={styles.btn} onClick={() => font_size(0)} ><FontAwesomeIcon icon={faMinus} size="1x"/></div>
        </div>
    )
}
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import style from './Forum.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import Accessibility from '../../Components/Acessibility/Accessibility';
export default function Forum(){
    return(
        <div className={style.container}>
            <Header></Header>
                <div className={style.mainLayout}>
                    <div className={style.menu}>
                        <ul>
                            <li>Discussões</li>
                            <li>Buscar</li>
                            <li>Últimos tópicos</li>
                            <li>Melhores tópicos</li>
                            <li>Salvos</li>
                        </ul>
                    </div>
                    <main className={style.main}>
                        <div className={style.title}>
                            <h1>Conectando mentes, moldando futuros</h1>
                            <p>
                                Um espaço para compartilhar conhecimento, 
                                trocar ideias e <br/> impulsionar a inovação tecnológica.
                            </p>
                            <div className={style.searchBar}>
                                <input 
                                    placeholder="Procuras tópicos"
                                />
                            </div>
                            <div className={style.btnNew}>
                                <FontAwesomeIcon icon={faPlus} size="2x"/>
                                <h4>Novo tópico</h4>
                            </div>
                        </div>
                        <div className={style.discussions}>
                            <h2>Comunidade e discussões gerais</h2>
                            <div className={style.card}>
                                <h3>Ajuda, meu mentor virou coach motivacional!</h3>
                                <p>Gente, preciso de ajuda URGENTE! 😅
Eu entrei nesse sistema de mentorias achando que ia aprender sobre JavaScript, React, essas coisas... Mas do nada, meu mentor começou a me mandar frases de autoajuda e vídeos motivacionais no meio das sessões!

Ao invés de "vamos revisar seu código", ele tá falando coisas tipo "Acredite no seu potencial, o bug está dentro de você, e só você pode resolvê-lo!". 😬
Eu só queria entender porque meu fetch não tá funcionando, e agora tô aqui meditando sobre "bug da vida" e "loops infinitos da alma". 😂
Alguém já passou por isso ou só eu que tô nessa jornada espiritual do código?
PS: Mandem help antes que eu tenha que fazer uma lista de gratidão em vez de um array!</p>
                            </div>
                             <div className={style.card}></div>  
                        </div>
                    </main>
                </div>
                <Accessibility/>
            <Footer></Footer>
        </div>
    );
}
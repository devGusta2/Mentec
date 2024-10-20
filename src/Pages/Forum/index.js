import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import style from './Forum.module.css'
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
                            <h3>Conectando mentes, moldando futuros</h3>
                            <p>
                                Um espaço para compartilhar conhecimento, 
                                trocar ideias e <br/> impulsionar a inovação tecnológica.
                            </p>
                            <div className={style.searchBar}>
                                <input 
                                    placeholder="Procuras tópicos"
                                />
                            </div>
                        </div>
                        <div className={style.discussions}>
                            <h2>Comunidade e discussões gerais</h2>
                            <div className={style.card}>

                            </div>
                        </div>
                    </main>
                </div>
            <Footer></Footer>
        </div>
    );
}

import './App.css';
import mentorShip from './assets/img/Arts/mentor-ship.png';
import form from './assets/img/Icons/form.png';
import mala from './assets/img/Icons/mala.png';
import relogio from './assets/img/Icons/relogio.png';
import monitor from './assets/img/Icons/monitor.png';
import foguete from './assets/img/Icons/foguete.png';
import notebook from './assets/img/Arts/notebook.png';


import bg1 from './assets/img/backgrounds/bgFatecFerraz-colors.png';
import bg2 from './assets/img/backgrounds/Background-provisorio2.jpg';

import { Link } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [bgMentec , setbgMentec] = useState(bg1);
  const changeBgMentec = () =>{
    setbgMentec(bgAnt => bgAnt === bg1 ? bg2 : bg1);
    
  }
  return (
    <div className="App">
          <main className='main'>
            <section style={{backgroundImage:`url(${bgMentec})` }}>
              <div className='up-box'>
                <div className='top-elements'>
                  <nav>
                     <button className='btn-darkMode' onClick={changeBgMentec}>Tema</button>
                    
                  </nav>
                </div>
                <div className='top-elements'>
                  <h1>Mentec</h1>
                </div>
              </div>
              <div className='center-box'>
                <div className='info-mentec'>
                <h1>Mentorias de<br/> tecnologia</h1>
                  <p>Transforme seus objetivos em realidade com a orientação 
                    certa. Junte-se a nós e comece sua jornada para o sucesso!</p>
                  <Link to='/Login'className='btn-find'>
                    <h3>Encontrar mentorias</h3>
                  </Link>
                </div>
              </div>
            </section>
            <section className='section-mentor-ship'>
              <div className='mentor-info'>
                <div className='mentor-sub-info'>
                  <h1>Transforme seu futuro com a mentoria ideal para você!</h1>
                  <p>
                  Você já se pegou pensando em como alcançar 
                  seus objetivos mais rapidamente? Imagina ter 
                  ao seu lado um mentor experiente, pronto para 
                  guiar seus passos, oferecer conselhos valiosos 
                  e ajudar a superar desafios com segurança e 
                  confiança. Agora, isso está ao seu alcance!
                  </p>
                </div>
              </div>
              <div className='mentor-info'>
                <img src={mentorShip} className='art'/>
              </div>
            </section>

            <section className='benefits'>
              <div className='cardsContainer'>
                <div className='row'>
                  <div className='card'>
                    <div className='rowCard'><h2>Mentores de alto nível</h2><img src={form}></img></div>
                    <p>Conecte-se com especialistas com anos de experiência, prontos para compartilhar seu conhecimento.</p>
                  </div>
                  <div className='card'>
                    <div className='rowCard'><h2>Mentoria personalizada</h2><img src={mala}></img></div>
                    <p>Receba orientações que são totalmente adaptadas às suas necessidades, seja você um iniciante ou um veterano em busca de novas perspectivas.</p>
                  </div>
                  <div className='card'>
                    <div className='rowCard'><h2>Flexibilidade total</h2><img src={relogio}></img></div>
                    <p>Agende sessões de mentoria no horário que mais se adapta à sua rotina. você tem a liberdade de aprender e crescer no seu próprio ritmo.</p>
                  </div>
                  
                </div>
                <div className='row'>
                <div className='card'>
                    <div className='rowCard'><h2>Plataforma intuitiva</h2><img src={monitor}></img></div>
                    <p>Navegue de forma simples e rápida, encontrando o mentor ideal em poucos cliques..</p>
                  </div>
                  <div className='card'>
                    <div className='rowCard'><h2>Oportunidades além da mentoria</h2><img src={foguete}></img></div>
                    <p>Investimento em uma ferramenta poderosa para transformar sua carreira e alcançar seus objetivos.</p>
                  </div>
                </div>
             
              </div>
            </section>
            <section className='ourApp'>
              <div className='column-app'>
                <h1>Baixe o app ou acesse nosso site</h1>
                <ul>
                  <li>Mentores de alto nível</li>
                  <li>Mentoria personalizada</li>
                  <li>Flexibilidade total</li>
                  <li>Comunidade de suporte</li>
                  <li>Oportunidades	além da mentoria</li>
                </ul>
              </div>
              <div className='column-app'></div>
              <div className='column-app'>
                <h1>Mentec</h1>
                <img 
                draggable='false'
                src={notebook}></img>
              </div>
            </section>
          </main>
          <footer>

          </footer>
        </div>

  );
}

export default App;

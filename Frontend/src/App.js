
import './App.css';
import mentorShip from './assets/img/Arts/mentor-ship.png';
import form from './assets/img/Icons/form.png';
import mala from './assets/img/Icons/mala.png';
import relogio from './assets/img/Icons/relogio.png';
import monitor from './assets/img/Icons/monitor.png';
import foguete from './assets/img/Icons/foguete.png';
import notebook from './assets/img/Arts/notebook.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

import bg1 from './assets/img/backgrounds/bgFatecFerraz-colors.png';
import bg2 from './assets/img/backgrounds/Background-provisorio2.jpg';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import Footer from './Components/Footer/Footer';
import { Helmet } from 'react-helmet';
function App() {

  const [bgMentec , setbgMentec] = useState(bg1);
  const changeBgMentec = () =>{
  const styleElement = [
    document.getElementById('section-mentor-ship'),
    document.getElementById('btn-findid'),
    document.getElementById('decs-ment'),
    document.getElementById('benefits-id'),
    document.getElementById('app-site'),
    document.getElementById('app-site1'),
    document.getElementById('app-site2'),
    
    ]; 

    setbgMentec(bgAnt => {
      if (bgAnt === bg1) {
        styleElement[0].style.cssText=`
          background-image:none;
          background-color:#00052B;
        `;

        styleElement[1].style.cssText=`
        color:#00BCD4;
        border:3px solid #00BCD4;
      `;


        styleElement[2].style.color='white';
        
        styleElement[3].style.backgroundColor='#0F1644';
        styleElement[4].style.backgroundColor='#00013C';
        styleElement[5].style.backgroundColor='#0F1644';
        styleElement[6].style.backgroundColor='#00052B';
        return bg2;

      } else {
        styleElement[0].style.cssText=`
        background-color:white;
        `

        styleElement[1].style.cssText=`
        color:white;
        border:3px solid white;
        `;
        styleElement[2].style.color='black';

        styleElement[3].style.backgroundColor='white';
        styleElement[4].style.backgroundColor='#A6192E';
        styleElement[5].style.backgroundColor='#910F25';
        styleElement[6].style.backgroundColor='#770B1C';
          return bg1;
      }
    });

 

    
  } 
  return (
    <div className="App">
      <Helmet>
        <title>Mentec</title>
        <meta name="description" content="Encontre mentorias personalizadas no Centro Paula Souza. Especialistas em tecnologia, inovação e desenvolvimento. Acelere seu aprendizado e carreira com nossos mentores." />
        <meta name="keywords" content="Centro Paula Souza, Mentec, mentorias, educação, desenvolvimento, tecnologia, inovação, carreira, especialistas, aprendizado" />
        <meta name="author" content="Centro Paula Souza Mentorias" />
        <meta name="robots" content="index, follow" />
      </Helmet>
          <main className='main'>
            <section style={{backgroundImage:`url(${bgMentec})` }}>
              <div className='up-box'>
                <div className='top-elements'>
                  <nav>
                     <button className='btn-darkMode' onClick={changeBgMentec}>
                      <FontAwesomeIcon id="icon-btn-dark" icon={faMoon} size='2x' color='white' />
                     </button>
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
                  <Link to='/Mentorships'className='btn-find' id="btn-findid">
                    <h3>Encontrar mentorias</h3>
                  </Link>
                </div>
              </div>
            </section>
            <section className='section-mentor-ship' id="section-mentor-ship">
              <div className='mentor-info'>
                <div className='mentor-sub-info' id="decs-ment">
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

            <section className='benefits' id="benefits-id">
              <div className='cardsContainer'>
                
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
                  
                
                
                <div className='card'>
                    <div className='rowCard'><h2>Plataforma intuitiva</h2><img src={monitor}></img></div>
                    <p>Navegue de forma simples e rápida, encontrando o mentor ideal em poucos cliques..</p>
                  </div>
                  <div className='card'>
                    <div className='rowCard'><h2>Oportunidades além da mentoria</h2><img src={foguete}></img></div>
                    <p>Investimento em uma ferramenta poderosa para transformar sua carreira e alcançar seus objetivos.</p>
                  </div>
                
             
              </div>
            </section>
            <section className='ourApp'>
              <div className='column-app' id="app-site">
                <h1>Baixe o app ou acesse nosso site</h1>
                <ul>
                  <li>Mentores de alto nível</li>
                  <li>Mentoria personalizada</li>
                  <li>Flexibilidade total</li>
                  <li>Comunidade de suporte</li>
                  <li>Oportunidades	além da mentoria</li>
                </ul>
              </div>
              <div className='column-app' id="app-site1"></div>
              <div className='column-app' id="app-site2">
                <h1>Mentec</h1>
                <img 
                draggable='false'
                src={notebook}></img>
              </div>
            </section>
          </main>
          <Footer/>
        </div>

  );
}

export default App;

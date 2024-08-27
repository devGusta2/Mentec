
import './App.css';
import mentorShip from './assets/img/Arts/mentor-ship.png';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
          <main className='main'>
            <section>
              <div className='up-box'>
                <div className='top-elements'>
                  <nav>
         
                    
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
                    <div className='rowCard'><h2>Mentores de alto nível</h2></div>
                    <p>Conecte-se com especialistas com anos de experiência, prontos para compartilhar seu conhecimento.</p>
                  </div>
                  <div className='card'>
                    <div className='rowCard'><h2>Mentoria personalizada</h2></div>
                    <p>Conecte-se com especialistas com anos de experiência, prontos para compartilhar seu conhecimento.</p>
                  </div>
                  <div className='card'>
                    <div className='rowCard'><h2>Flexibilidade total</h2></div>
                    <p>Conecte-se com especialistas com anos de experiência, prontos para compartilhar seu conhecimento.</p>
                  </div>
                  
                </div>
                <div className='row'>
                <div className='card'>
                    <div className='rowCard'><h2>Plataforma intuitiva</h2></div>
                    <p>Conecte-se com especialistas com anos de experiência, prontos para compartilhar seu conhecimento.</p>
                  </div>
                  <div className='card'>
                    <div className='rowCard'><h2>Oportunidades além da mentoria</h2></div>
                    <p>Conecte-se com especialistas com anos de experiência, prontos para compartilhar seu conhecimento.</p>
                  </div>
                </div>
             
              </div>
            </section>
            <section className='ourApp'>
              
            </section>
          </main>
        </div>

  );
}

export default App;

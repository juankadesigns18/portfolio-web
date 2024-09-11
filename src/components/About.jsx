import './About.css';
import juanLogo from '../assets/juan.png';
import githubLogo from '../assets/github.svg';
import linkedinLogo from '../assets/linkedin.svg';
import uruguayLogo from '../assets/uruguay.png';
import { Slide } from 'react-awesome-reveal';

const About = () => {
  return (
    <section id="sobre-mi" className="about">
      <div className="about-container">
        <Slide direction="left" triggerOnce>
          <div className="text-section">
            <h1>Juan Sansberro</h1>
            <p>
              Buenas, soy Juan Sansberro, soy un desarrollador web React, JavaScript y otras tecnologías modernas. 
              Me apasiona crear aplicaciones web eficientes y atractivas.
            </p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/juan-manuel-sansberro-pereyra-a50a1329a/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinLogo} alt="LinkedIn" />
              </a>
              <a href="https://github.com/juankadesigns18" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="GitHub" />
              </a>
              <a>
                <img src={uruguayLogo} alt="" />
              </a>
              <a href="src/assets/C.V juan_sansberro.pdf" download>
                <button>Descargar CV</button>
              </a>           
            </div>
          </div>
        </Slide>

        <Slide direction="right" triggerOnce>
          <div className="photo-section">
            <img src={juanLogo} alt="Tu Foto" />
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default About;

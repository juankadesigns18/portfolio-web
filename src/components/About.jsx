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
              Buenas, mi nombre es Juan Sansberro, tengo 19 años y resido en Uruguay. Cuento con conocimientos en desarrollo web, en base de datos, metodologías ágiles, diferentes tecnologías y Cloud Computing. Soy una persona muy comprometido, comunicativo, proactivo y empático con ánimos de emprender nuevos desafíos. En constante capacitación sobre las nuevas herramientas y tecnológicas actuales.
            </p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/juan-manuel-sansberro-pereyra-a50a1329a/" target="_blank" rel="noopener noreferrer" title="Visita mi perfil de LinkedIn">
                <img src={linkedinLogo} alt="Perfil de LinkedIn de Juan Sansberro" />
              </a>
              <a href="https://github.com/juankadesigns18" target="_blank" rel="noopener noreferrer" title="Visita mi perfil de Github">
                <img src={githubLogo} alt="Perfil de GitHub de Juan Sansberro" />
              </a>
              <a>
                <img src={uruguayLogo} alt="Bandera de Uruguay" title="Bandera de Uruguay"/>
              </a>
              <a href="src\assets\C.V juan_sansberro.pdf" title="Descargar CV de Juan Sansberro" download>
                <button>Descargar CV</button>
              </a>           
            </div>
          </div>
        </Slide>

        <Slide direction="right" triggerOnce>
          <div className="photo-section">
            <img src={juanLogo} alt="Foto de Juan Sansberro" />
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default About;

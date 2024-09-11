import './Header.css';
import { Slide } from 'react-awesome-reveal';
import logoLogo from '../assets/logo-3.png';

const Header = () => {
  return (
    <header className="header">
       <Slide direction="left" triggerOnce>
      <div className="logo-container">
        <img src={logoLogo} alt="Logo" className="logo" />
      </div>
      </Slide>
      <nav>
       <Slide direction="down" triggerOnce>
        <ul>
          <li><a href="#sobre-mi">Sobre Mí</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        </Slide>
      </nav>
    </header>
  );
};

export default Header;

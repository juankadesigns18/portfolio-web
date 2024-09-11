import './Header.css';
import logoLogo from '../assets/logo-3.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logoLogo} alt="Logo" className="logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#sobre-mi">Sobre Mí</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

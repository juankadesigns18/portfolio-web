import './Skills.css';
import { Slide } from 'react-awesome-reveal';
import html5Logo from '../assets/html-5.png';
import cssLogo from '../assets/css.png';
import reactLogo from '../assets/react.png';
import jsLogo from '../assets/js.png';
import figmaLogo from '../assets/figma.png';
import pythonLogo from '../assets/python.png';
import awsLogo from '../assets/aws.png';
import sqlLogo from '../assets/sql.png';
import linuxLogo from '../assets/linux.png';

const Skills = () => {
  return (
    <section id="habilidades" className="skills">
        <Slide direction="up" triggerOnce> 
        <h2>Mis habilidades</h2>
        </Slide>
        <Slide direction="up" triggerOnce>

        <div className='container-container'>
            <div className='skills'>
                 <img src={html5Logo} alt="HTML5 Logo" className='icon-skill'/>
                <p>HTML</p>
            </div>

            <div className='skills'>
                 <img src={cssLogo} alt="CSS Logo" className='icon-skill'/>
                <p>CSS</p>
            </div>
            <div className='skills'>
                 <img src={jsLogo} alt="JavaScript Logo" className='icon-skill'/>
                <p>JavaScript</p>
            </div>
            <div className='skills'>
                 <img src={reactLogo} alt="React Logo" className='icon-skill'/>
                <p>React</p>
            </div>
            <div className='skills'>
                 <img src={figmaLogo} alt="Figma Logo" className='icon-skill'/>
                <p>Figma</p>
            </div>
            <div className='skills'>
                 <img src={pythonLogo} alt="Python Logo" className='icon-skill'/>
                <p>Python</p>
            </div>
            <div className='skills'>
                 <img src={awsLogo} alt="AWS Logo" className='icon-skill'/>
                <p>AWS</p>
            </div>
            <div className='skills'>
                 <img src={sqlLogo} alt="SQL Logo" className='icon-skill'/>
                <p>SQL</p>
            </div>
            <div className='skills'>
                 <img src={linuxLogo} alt="Linux Logo" className='icon-skill'/>
                <p>Linux</p>
            </div>
        </div>
        </Slide>

    </section>
  );
};

export default Skills;

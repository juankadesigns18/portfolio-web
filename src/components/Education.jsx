import './Education.css';
import { Slide } from 'react-awesome-reveal';

const Education = () => {
  return (
    <section id="educacion">
      <div className="timeline">
        <Slide direction="left" triggerOnce>
          <h2 className='edu-title'>Educación</h2>
        </Slide>
        <div className="container left">
          <Slide direction="left" triggerOnce>
            <div className="content">
              <h2>2024</h2>
              <p>- Curso de AWS re/start de Cloud Computing.</p>
              <p>- Curso de Fundación Forge de entrenamiento para el trabajo y actividades socioemocionales.</p>
            </div>
          </Slide>
        </div>

        <div className="container right">
          <Slide direction="right" triggerOnce>
            <div className="content">
              <h2>2023</h2>
              <p>- Sexto Bachillerato de Físico Matemático.</p>
              <p>- Curso de Desarrollo Web con Desem.</p>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default Education;

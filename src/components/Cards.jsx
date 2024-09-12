import Card from "./Card";
import image1 from "../assets/certification1-1.png";
import image2 from '../assets/certific.png';
import image3 from '../assets/certification3.png';
import image4 from "../assets/certification4.png";
import image5 from '../assets/certification5.png';
import image6 from '../assets/certification6.png';
import { Slide } from 'react-awesome-reveal';


const cards = [
  {
    id: 1,
    title: "Cloud Practitioner",
    image: image1,
    text: "La certificación de AWS Cloud Practitioner valida un conocimiento básico sobre los servicios de TI y su uso en la nube de AWS.",
    url: "https://www.credly.com/badges/64011f94-98fe-4215-8678-b8975107825b/linked_in_profile",
  },
  {
    id: 2,
    title: "Re/start Graduate",
    image: image2,
    text: "Quienes obtienen esta insignia completaron el programa AWS re/Start, un curso de desarrollo de habilidades y capacitación laboral para carreras en la nube.",
    url: "https://www.credly.com/badges/906a13fe-6784-4a54-a430-bff45780a3c5/linked_in_profile",
  },
  {
    id: 3,
    title: "Compromiso con el Aprendizaje",
    image: image3,
    text: "El/la joven acreditado/a ha participado de un desafío que le permitió repensarse, adquirir recursos y planificar acciones para trabajar en sus aspectos de mejora.",
    url: "https://www.acreditta.com/credential/7e81c90e-0687-4218-b32f-d58da9b626ba?utm_source=linkedin_profile&resource_type=badge&resource=7e81c90e-0687-4218-b32f-d58da9b626ba",
  },
  {
    id: 4,
    title: "Orientación al Logro",
    image: image4,
    text: "El/la joven acreditado/a ha participado de un desafío que le permitió adquirir recursos y entrenar habilidades necesarias para atravesar con éxito una entrevista laboral.",
    url: "https://www.acreditta.com/credential/db0c7dd9-0685-453a-8e2c-01929c499631?utm_source=linkedin_profile&resource_type=badge&resource=db0c7dd9-0685-453a-8e2c-01929c499631",
  },
  {
    id: 5,
    title: "Liderazgo Personal",
    image: image5,
    text: "El/la joven acreditado/a ha participado de un desafío que le permitió ser consciente de las virtudes que posee para explotarlas en un futuro profesional.",
    url: "https://www.acreditta.com/credential/6c7172bd-3eab-4e7c-824a-1f727e6bb8d8?utm_source=linkedin_profile&resource_type=badge&resource=6c7172bd-3eab-4e7c-824a-1f727e6bb8d8",
  },
  {
    id: 6,
    title: "Trabajo en Equipo",
    image: image6,
    text: "El/la joven acreditado/a ha participado de la creación de una iniciativa comunitaria en la que desarrolló campañas en equipo para concientizar sobre los efectos de los discursos de odio que circulan en internet y redes sociales.",
    url: "https://www.acreditta.com/credential/4de8a09a-c57c-411c-b897-0dd5aa3598af?utm_source=linkedin_profile&resource_type=badge&resource=4de8a09a-c57c-411c-b897-0dd5aa3598af",
  },
];

function Cards() {
  return (
    <div>
      {/* Título grande */}
      <Slide direction="right" triggerOnce>
        <h4 className="title">Licencias y Certificaciones</h4>
      </Slide>

      {/* Contenedor de las tarjetas */}
      <Slide direction="left" triggerOnce>

      <div className="grid-container">
        {cards.map(({ title, image, text, url, id }) => (
          <Card key={id} imageSource={image} title={title} text={text} url={url} />
        ))}
      </div>
        </Slide>

    </div>
  );
}

export default Cards;

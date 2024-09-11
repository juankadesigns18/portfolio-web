import './Projects.css';

const projectsData = [
  {
    title: 'Services Doc',
    description: 'Esta es una página web sobre documentación de AWS.',
    link: 'https://66ac35f86e8dc3a34840ffa9--tourmaline-fudge-e02322.netlify.app/',
    image: '/src/assets/project-1-2.png',
    text: '2024' 
  },
  {
    title: 'Cuidados Ambientales',
    description: 'Esta es una página web sobre el cuidado del medio ambiente',
    link: 'https://656751ecc900b32807b64115--spectacular-macaron-a46455.netlify.app/',
    image: '/src/assets/project-2.png',
    text: '2023' 
  },
];

const Projects = () => {
  return (
    <section id="proyectos" className="projects">
      <h2>Proyectos</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <div className="text-overlay">{project.text}</div> {}
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Proyecto</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

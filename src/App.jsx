import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';
import Education from './components/Education';
import Cards from './components/Cards';
import MouseEffect from './components/MouseEffect';



const App = () => {
  return (
    <div>
      <MouseEffect />
      <Header />
      <About />
      <Projects />
      <Education />
      <Skills />
      <Cards />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
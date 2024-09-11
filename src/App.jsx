import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';
import Education from './components/Education';


const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
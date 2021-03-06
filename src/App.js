import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import NavBar from './components/NavBar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects'
import ExperienceAndEducation from './components/ExperienceAndEducation'
import Contact from './components/Contact'
function App() {
  return (
    <>
      <Particles
        className="particles_canvas"
        params={{
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 800,
              },
            },
          },
        }}
      />
      <NavBar />
      <Header />
      <About />
      <Projects />
      <ExperienceAndEducation />
      <Contact/>
    </>
  );
}

export default App;

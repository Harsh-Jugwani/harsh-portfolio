import './App.css'
import Nav from './component/Nav'
import Intro from './component/Intro.js'
import Skills from './component/Skills.js';
import Experience from './component/Experience.js';
import Contact from './component/Contact/Contact';
import Education from './Education';
import AccomplishmentPage from './component/AccomplishmentPage.js'
import Projects from './component/Projects/Projects.js'
import Footer from './Footer.js';


function App() {
  return (
    <div>
      <Nav/>
      <Intro/>
      <Education/>
      <Skills/>
      <Projects/>
      <Experience/>
      <AccomplishmentPage/>
      <Contact/>
      <Footer/>
    
    </div>
  );
}

export default App;

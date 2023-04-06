import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>   
  )
}

export default App;


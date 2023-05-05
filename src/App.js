import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import React, { useState, useEffect } from 'react';
import Preloader from './Components/Preloader/Preloader';


const App =() =>{

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className='App'>
    <Navbar/>
    {loading ? (
      <Preloader />
    ) : (
        <>
        <Home/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
        </>
       )}  
      </div>
  )
}

export default App;


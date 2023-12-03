
import React, { useState } from 'react'
import './App.css';
import Hero from './Components/hero/Hero.js'
import Navbar from './Components/navbar/Navbar.js';
import Skills from './Components/skills/Skills.js'
import Projects from './Components/Projects/Projects.js';
import Experience from './Components/experience/Experience.js';
import Contact from './Components/contact/Contact.js';
function App() {
  const [progress, setProgress] = useState(0)
  return (
    <><Navbar/>
   
    <Hero/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Contact/>
     </>
  );
}

export default App;

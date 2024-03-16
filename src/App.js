
import React, { useState,useEffect } from 'react'
import './App.css';
import { motion } from 'framer-motion';
import Hero from './Components/hero/Hero.js'
import Navbar from './Components/navbar/Navbar.js';
import Skills from './Components/skills/Skills.js'
import Projects from './Components/Projects/Projects.js';
import Experience from './Components/experience/Experience.js';
import Contact from './Components/contact/Contact.js';
import FloatingText from './Components/Floatingtext/FloatingText.js';
function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#efebe4",
      mixBlendMode: "difference"
    },
    button: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: "transparent",
      borderColor:"grey",
      borderStyle: "solid",
      borderWidth: 2,
      mixBlendMode: "add"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

 
    
  

  const buttonEnter = () => setCursorVariant("button");
  const buttonLeave = () => setCursorVariant("default");
  const [progress, setProgress] = useState(0)
  return (
    <>
    <Navbar/>
   
    <Hero/>
    <Skills/>
    <Projects/>
    <Experience/>
    <FloatingText/>
    <Contact/>
     </>
  );
}

export default App;

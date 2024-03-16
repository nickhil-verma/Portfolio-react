import React, { useState } from 'react';
import { motion } from "framer-motion";
import IG from "../../img/IG.png"
import SUDOKU from "../../img/Screenshot 2024-03-16 125315.png"
import "./Projects.css";
import BITT from "../../img/BITT.png"
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoOpenSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
const Projects = () => {

  return (
    <div id='projects'><h1 className='sectionheading'>Projects</h1>
        <div className='projects-holder'>
        
              <motion.div 
                
                  initial={{x:-100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.4,duration:0.8}} viewport={{
                    once:true,
                  }}
                
              className='projectcard'>
                <img className='thumbnail' src={IG}></img>
                <h3>Instagram Linktree</h3>
                <p>Tech stack:- 
                <FaReact  className='icon' /> &nbsp;
                <IoLogoJavascript  className='icon'/></p>
                <a  style={{backgroundColor:"transparent"}}href='https://github.com/nickhil-verma/Insta-biolinktree'>View Source code</a>
                <p>
                  <a style={{backgroundColor:"transparent"}} href="https://instalinksnikkhiilverma.netlify.app/"><IoOpenSharp className='icon'/></a>
                   &nbsp;
                  <a style={{backgroundColor:"transparent"}}href='https://github.com/nickhil-verma/Insta-biolinktree'><FaGithub  className='icon' /></a></p>
              </motion.div>
              <motion.div 
                initial={{x:-100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.3,duration:0.8}} viewport={{
                  once:true,
                }}
              className='projectcard'>
                <img className='thumbnail' src={BITT}></img>
                <h3>An organization webpage</h3>
                <p>Tech stack:- 
                <FaReact  className='icon' /> &nbsp;
                <IoLogoJavascript  className='icon'/></p>
                <a  style={{backgroundColor:"transparent"}}href='/'>View Source code</a>
                <p>
                  <a style={{backgroundColor:"transparent"}} href="https://bittdumka.netlify.app/://instalinksnikkhiilverma.netlify.app/"><IoOpenSharp className='icon'/></a>
                   &nbsp;
                  <a style={{backgroundColor:"transparent"}}href='/'><FaGithub  className='icon' /></a></p>
              </motion.div>
              <motion.div 
                initial={{x:-100 , opacity:0} } whileInView={{x:0,opacity:1}} transition={{delay:0.2,duration:0.8}} viewport={{
                  once:true,
                }}
              className='projectcard'>
                  <img className='thumbnail' src={SUDOKU}></img>
                <h3>Sudoku Solver</h3>
                <p>Project based On Data structure and algorithm </p>
                <a  style={{backgroundColor:"transparent"}}href='https://github.com/nickhil-verma/Sudoku_solver'>View Source code</a>
                <a style={{backgroundColor:"transparent"}}href='https://github.com/nickhil-verma/Sudoku_solver'><FaGithub  className='icon' /></a>
              </motion.div>
                 
        </div>
    
    </div>
  )
}

export default Projects
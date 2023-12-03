import React, { useState } from 'react';
import { motion } from "framer-motion";

import "./Projects.css";
const Projects = () => {

  return (
    <div id='projects'><h1 className='sectionheading'>Projects</h1>
        <div className='projects-holder'>
        
              <motion.div 
                
                  initial={{x:-100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.4,duration:0.8}} viewport={{
                    once:true,
                  }}
                
              className='projectcard'>
                <h3>Heaading</h3>
                <p>caption ..............caption..............caption............caption...............caption</p>
              </motion.div>
              <motion.div 
                initial={{x:-100, opacity:0}} whileInView={{x:0,opacity:1}} transition={{delay:0.3,duration:0.8}} viewport={{
                  once:true,
                }}
              className='projectcard'>
                <h3>Heaading</h3>
                <p>caption ..............caption..............caption............caption...............caption</p>
              </motion.div>
              <motion.div 
                initial={{x:-100 , opacity:0} } whileInView={{x:0,opacity:1}} transition={{delay:0.2,duration:0.8}} viewport={{
                  once:true,
                }}
              className='projectcard'>
                <h3>Heaading</h3>
                <p>caption ..............caption..............caption............caption...............caption</p>
              </motion.div>
                 
        </div>
    
    </div>
  )
}

export default Projects
import React from 'react'
import   { useState,useEffect } from 'react'
import { motion } from 'framer-motion';
import { useTypewriter,Cursor } from 'react-simple-typewriter';

function TextAnimation (){
   
  const [text] = useTypewriter({
    words: ['Hola,amigo! kese ho theek ho?','Hy! Welcome to my portfolio.', 'I am a web-developer.', 'I am a open source Contributor.' ],
    loop:Infinity,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })

  return (
    
    <div className='App'>
      <span  style={{color:"white"}}>{text}</span>
      <Cursor cursorColor='white' />
      
    </div>
  )
}

export default TextAnimation
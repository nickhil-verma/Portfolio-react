import React from 'react'

import { useTypewriter,Cursor } from 'react-simple-typewriter';

function TextAnimation (){
  const [text] = useTypewriter({
    words: ['Hola,amigo! kese ho theek ho?','Hy! Welcome to my portfolio.', 'I am a web-developer.', 'I am a open source Contributor.' ],
    loop:3,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })

  return (
    <div className='App'>
      <span style={{color:"white"}}>{text}</span>
      <Cursor cursorColor='white' />
    </div>
  )
}

export default TextAnimation
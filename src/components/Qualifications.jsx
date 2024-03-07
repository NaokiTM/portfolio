import React, { useState } from 'react';
import { ReactTyped } from 'react-typed'



const Qualifications = () => {
  const text = ['// GCSE //', 
  'Geography: 7', 
  'Computer science: 7', 
  'Maths: 7', 
  'English Literature: 6',
  'English Language: 6',
  'Business studies: 6',
  'Music: 6', 
  '// A LEVEL //', 
  'AS Music: B', 
  'Geography: C',
  'Maths: D',
  'Computer Science: D', 
  ]

  const [currentLine, setCurrentLine] = useState(0)

  const incrementLine = () => {
    if (currentLine < text.length - 1) {
      setCurrentLine(currentLine + 1)
    }
  }

  return (
    <div className='text-white relative w-full p-6 text-large '>
      <ReactTyped
        strings={text[currentLine]}
        typeSpeed={70}
        loop = {false}
        onComplete = {incrementLine}
      />
    </div>

  )
}

export default Qualifications
import React, { useState } from 'react'
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
      <div>//GCSE//</div>
      <div>Geography: 7</div>
      <div>Computer science: 7</div>
      <div>Maths: 7</div> 
      <div>English Literature: 6</div>
      <div>English Language: 6</div>
      <div>Business studies: 6</div> 
      <div>Music: 6</div> 
      <div>// A LEVEL //</div>
      <div> AS Music: B</div>
      <div> Geography: C</div>
      <div>Maths: D</div>
      <div>Computer Science: D</div>
    </div>

  )
}

export default Qualifications
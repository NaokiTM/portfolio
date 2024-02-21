import React from 'react'
import { ReactTyped } from 'react-typed'

const Hero = () => {
  return (
    <div className = "text-white relative font-mono">
      <div className = 'max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <div className = 'flex justify-center items-center'>
          <ReactTyped
            className='md:text-5xl sm:text-4xl text-xl md:pl-4 pl-2'
            strings={['Naoki Miyagawa', 'CS student']}
            typeSpeed={100}
            backSpeed={90}
            loop
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
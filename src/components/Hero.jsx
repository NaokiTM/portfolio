import React from 'react'
import { ReactTyped } from 'react-typed'

const Hero = () => {
  return (
    <div className = "relative sfsemibold">
      <div className ='pt-4' >
          <ReactTyped
            className='text-8xl pl-6'
            strings={['NAOKI MIYAGAWA', 'CS STUDENT.']}
            typeSpeed={70}
            backSpeed={50}
            loop
          />
        </div>
    </div>
  )
}

export default Hero
// 宮川 直宜
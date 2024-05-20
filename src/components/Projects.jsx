import React from 'react'
import portfolioImage from '../assets/portfolio-image.png'
import gameImage from '../assets/game.jpg'
import knightsTourImage from '../assets/knights-tour-image.png'


const Projects = () => {
  return (
    <div className='relative p-6 text-white'>
      
      <div className="text-3xl pt-6 text-white">Projects</div>


      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 py-[5rem]'>

        <div className='w-full shadow-xl shadow-white flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
            <img className='w-50 h-50 mx-auto mt-[-3rem] bg-transparent' src={portfolioImage} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Portfolio Site</h2>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8'>The site you are on right Now!</p>
                <p className='py-2 border-b mx-8'>Made using React and Tailwind CSS</p>
            </div>
              <button className='bg-black text w-[200px] rounded-md my-6 mx-auto px-6 py-3'>Github Repo</button>
        </div>



        <div className='w-full shadow-xl shadow-white flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
            <img className='w-50 h-50 mx-auto mt-[-3rem] bg-transparent' src={gameImage} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Obstacle game</h2>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 '>Made for a course module</p>
                <p className='py-2 border-b mx-8'>Made using Arduino C</p>
            </div>
            <button className='bg-black text w-[200px] rounded-md my-6 mx-auto px-6 py-3'>Github Repo</button>
        </div>



        <div className='w-full shadow-xl shadow-white flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
            <img className='w-50 h-50mx-auto mt-[-3rem] bg-transparent' src={knightsTourImage} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Knights tour solver</h2>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 '>Solves the Knights tour puzzle</p>
                <p className='py-2 border-b mx-8'>made using Python, Pygame</p>
            </div>
            <button className='bg-black text w-[200px] rounded-md my-6 mx-auto px-6 py-3'>Github Repo</button>
        </div>


      </div>
    </div>
  )
}

export default Projects
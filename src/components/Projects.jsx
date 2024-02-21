import React from 'react'

const Projects = () => {
  return (
    // <div className='text-white bg-black relative h-screen'>
    //   <div className='text'>
    //     <div className="text-3xl font-mono flex p-6">Projects:</div>
    //   </div>
    // </div>
    <div className='w-full px-4 bg-black'>
      <div className='text'>
        <div className="text-3xl font-mono p-6">Projects:</div>
      </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 py-[5rem]'>


        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
            {/* <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" /> */}
            <h2 className='text-2xl font-bold text-center py-8'>Portfolio Site</h2>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8'>The site you are on right Now!</p>
                <p className='py-2 border-b mx-8'>Made using ReactJS and Tailwind CSS</p>
            </div>
            <button className='bg-black text-[#9700FF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Github Repo</button>
        </div>



        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
            {/* <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" /> */}
            <h2 className='text-2xl font-bold text-center py-8'>Obstacle game</h2>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 '>Made for a course module</p>
                <p className='py-2 border-b mx-8'>Made using Arduino C</p>
            </div>
            <button className='bg-black text-[#9700FF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Github Repo</button>
        </div>



        <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
            {/* <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" /> */}
            <h2 className='text-2xl font-bold text-center py-8'>Knights tour solver</h2>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 '>Solves the Knights tour puzzle, and lets the user play the puzzle interactively</p>
                <p className='py-2 border-b mx-8'>made using Python, Pygame</p>
            </div>
            <button className='bg-black text-[#9700FF] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Github Repo</button>
        </div>


    </div>
  </div>
  )
}

export default Projects
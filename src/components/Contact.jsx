import React from 'react'

const Contact = () => {
  return (
    <div className = 'text-black bg-white relative z-10 '>
    <div className = 'p-4 font-mono justify-center flex text-2xl'>Contact Me!</div>
          <div className = ' p-5 flex justify-center'>
            <input
              className = 'p-3 w-[80%] bg-white border-black border-2 rounded-md  text-black placeholder-black font-mono '
              type = 'email'
              placeholder = 'Enter Email'
            />
          </div>
    <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
        Send Message
    </button>
    </div>
  )
}

export default Contact
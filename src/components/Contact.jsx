import React from 'react'

const Contact = () => {
  return (
    <div className = 'text-black bg-white font-sans'>

    <div className = 'p-4 justify-center flex text-2xl font-bold'>Contact Me</div>
    
          <div className = 'pl-[25%] p-5 grid gap-3 items-center w-[100%]'>
            <input
              className = 'p-3 w-[70%] bg-white border-black border-2 rounded-md  text-black placeholder-black '
              type = 'text'
              placeholder = 'Name:'
            />
            <input
              className = 'p-3 w-[70%] bg-white border-black border-2 rounded-md  text-black placeholder-black '
              type = 'email'
              placeholder = 'Email:'
            />
            <input 
              className = 'p-3 w-[70%] bg-white border-black border-2 rounded-md  text-black placeholder-black '
              type = 'text'
              placeholder='Message:'
            />
          </div>
      <div className='justify-center flex' >
        <button className='bg-[#FF0000] text-black rounded-3xl border-2 w-[200px] ml-4 my-6 px-6 py-3'>
            Send Message
        </button>
      </div>
    </div>
  )
}

export default Contact
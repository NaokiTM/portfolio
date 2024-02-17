import React, {useState} from 'react'
import { BiMenuAltLeft } from 'react-icons/bi';
import { IoMdCloseCircleOutline } from "react-icons/io";
import DeviceDetector from './DeviceDetector';

const Navbar = () => {
  const isMobile = DeviceDetector()
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav) 
  }

  return (
    <div className = 'text-white flex items-center justify-end mx-auto px-6'>
      {isMobile ? (
        <>
          <div className='w-full p-6 md:hidden' onClick={handleNav}>
            {nav ? <BiMenuAltLeft size = {25} />  :  <IoMdCloseCircleOutline size = {25} /> }
          </div>

          {/* border-r sets a border on the right hand side of the page, h-full makes the border reach the bottom of the page */}
          <div className= {!nav ? 'fixed right-0 top-0 w-[80%] h-full bg-gray-700 ease-in-out duration-500' :  'fixed right-[-100%]'}> 
            <ul className='text-3xl p-6'>
              <li className='p-1'>Home</li>
              <li className='p-1'>About</li>
              <li className='p-1'>Qualfications</li>
              <li className='p-1'>Projects</li>
              <li className='p-1'>Contact</li>
            </ul>
          </div>

        </>

      ) : (

        <>
          <div className='w-full p-6 md:hidden' onClick={handleNav}>
            {nav ? <IoMdCloseCircleOutline className = 'p-4' size = {25} />  :  <BiMenuAltLeft className = 'p-4' size = {25} /> }
          </div>

          {/* generic navbar, hides when screen width is above 768 pixels */}
          <div className="flex justify-end">            
            <ul className="p-6 hidden md:flex">
              <li className="p-4">Home</li>
              <li className="p-4">About</li>
              <li className="p-4">Qualifications</li>
              <li className="p-4">Projects</li>
              <li className="p-4">Contact</li>
            </ul>
          </div>

          {/* border-r sets a border on the right hand side of the page, h-full makes the border reach the bottom of the page */}
          <div className='fixed right-0 top-0 w-[70%] h-full bg-gray-700 md:hidden' > 
            <ul className='text-4xl p-6'>
              <li className='p-1'>Home</li>
              <li className='p-1'>About</li>
              <li className='p-1'>Qualfications</li>
              <li className='p-1'>Projects</li>
              <li className='p-1'>Contact</li>
            </ul>
          </div>
        </>
     
      )}
  </div>
  )
}

export default Navbar
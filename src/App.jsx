import './index.css';
import Qualifications from './components/Qualifications';
import React, { useState, useEffect } from 'react';


import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed (in milliseconds)

    return () => clearTimeout(delay); //prevents memory leaks
  }, []);

  return (
     <>
        <div className = "bg-gray-200 bg-image text-white font-light font-mono"> 
          <Hero />
          <Qualifications />
          <Projects />
          <Contact />
          <Footer />
        </div>
     </>
  );
}

export default App;
{/* <div className='fadeText flex justify-center items-center flex-col h-screen text-9xl jpFont'>
<div>宮</div>
<div>川</div>
<div>直</div>
<div>宜</div>
</div> */}

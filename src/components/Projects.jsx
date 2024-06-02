import portfolioImage from "../assets/portfolio-image.png";
import gameImage from "../assets/game.jpg";
import knightsTourImage from "../assets/knights-tour-image.png";
import React, { useState } from 'react';

const Projects = () => {
  const handleButtonClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const [hovered1, changeHoverState1] = useState(false);
  const [hovered2, changeHoverState2] = useState(false);
  const [hovered3, changeHoverState3] = useState(false);

  return (
    <div className = "relative text-white">
      <div className = " mx-auto grid md:grid-cols-3" style={{ height: 'calc(100vw / 3)' }}>

      {/* portfolio card */}
      <div className = "relative overflow-hidden" 
      onMouseEnter={() => changeHoverState1(true)} onMouseLeave={() => changeHoverState1(false)}> 
        <img
          className={`absolute inset-0 w-full height-full mx-auto bg-transparent object-cover ${hovered1 ? 'opacity-0' : 'opacity-100'}`}
          src={portfolioImage}
          alt="/"
        />
        <div className = {`absolute inset-0 flex items-center justify-center bg-black text-center transition-opacity duration-300 ${!hovered1 ? 'opacity-0' : 'opacity-100'}`}>
          PORTFOLIO SITE.
          <button>Github</button>
        </div>
      </div>

      {/* obstacle game card*/}
      <div className = "relative overflow-hidden" 
      onMouseEnter={() => changeHoverState2(true)} onMouseLeave={() => changeHoverState2(false)}> 
        <img
          className={`absolute inset-0 w-full height-full mx-auto bg-transparent object-cover ${hovered2 ? 'opacity-0' : 'opacity-100'}`}
          src={gameImage}
          alt="/"
        />
        <div className = {`absolute inset-0 flex items-center justify-center bg-black text-center transition-opacity duration-300 ${!hovered2 ? 'opacity-0' : 'opacity-100'}`}>
          ARDUINO OBSTACLE GAME.
          <button>Github</button>
        </div>
      </div>

      {/* chess puzzle card*/}
      <div className = "relative overflow-hidden" 
      onMouseEnter={() => changeHoverState3(true)} onMouseLeave={() => changeHoverState3(false)}> 
        <img
          className={`absolute inset-0 w-full height-full mx-auto bg-transparent object-cover ${hovered3 ? 'opacity-0' : 'opacity-100'}`}
          src={knightsTourImage}
          alt="/"
        />
        <div className = {`absolute inset-0 flex items-center justify-center bg-black text-center transition-opacity duration-300 ${!hovered3 ? 'opacity-0' : 'opacity-100'}`}>
          KNIGHTS TOUR SIMULATOR.
          <button>Github</button>
        </div>
      </div>



      </div>
    </div>
  );
};

export default Projects;

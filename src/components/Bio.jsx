import React, { useState, useEffect } from "react";
import Typed from "./typed";
import ThreeScene from "./ThreeScene";
import DeviceDetector from "./DeviceDetector";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

const Bio = () => {

  const isMobile = DeviceDetector();
  const [halfViewportWidth, setHalfViewportWidth] = useState(window.innerWidth / 2);

  useEffect(() => {
    const handleResize = () => {
      setHalfViewportWidth(window.innerWidth / 2);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`text-3xl importFont relative w-full p-4 text-white ${isMobile ? 'grid grid-cols-1': 'grid grid-cols-2'}`}>
      <div className="border" style={{ width: isMobile ? 'calc(100vw - 32px)' : 'calc(50vw - 32px)'}}>
        {/* -34 to account for padding in container div, which is 16 pixels, space between the bio text, and accounting for the 2 pixel padding (16 x 2 + 2 = 34)*/}
        <ThreeScene width = {isMobile ? halfViewportWidth * 2 - 34 : halfViewportWidth - 34} height = {400}/>  
      </div>
      <div className="">
        <Typed strings={['Hey i`m Naoki, a first year CS student. If you want to contact me, drop me a message via email at the bottom of this page. (Jupiter is my favourite planet by the way!)']} />
      </div>
    </div>
  );
};

export default Bio;

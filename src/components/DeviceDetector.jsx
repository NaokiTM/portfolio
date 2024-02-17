import { useState, useEffect } from 'react';

const DeviceDetector = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768); //to switch debug from desktop to mobile vice versa manually, flip the inequality sign
    };

    // Initial call to set device type
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

export default DeviceDetector;
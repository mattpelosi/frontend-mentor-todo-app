import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
  const { innerHeight, innerWidth } = window;
  return { innerHeight, innerWidth };
};

const useWindowDimensions = () => {
  const [{ innerHeight, innerWidth }, setWindowDimensions] =
    useState(getWindowDimensions);

  useEffect(() => {
    function handleWindowResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return { 
    innerHeight, 
    innerWidth, 
    isMobile: innerWidth <= 375 
  };
};

export default useWindowDimensions;

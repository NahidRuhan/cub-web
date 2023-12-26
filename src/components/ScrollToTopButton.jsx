import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaCanadianMapleLeaf } from "react-icons/fa";


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  };

  // Listen to changes in the location and show/hide the button accordingly
  React.useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [location]);

  return (
    <>
      {isVisible && (
        <button className='fixed bottom-12 right-5 p-4 lg:p-6 z-50 bg-logoRed text-white rounded-full cursor-pointer'
          onClick={scrollToTop}
        >
          <p className='text-xl lg:text-3xl'><FaCanadianMapleLeaf /></p>

        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;

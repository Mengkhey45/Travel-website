import React, { useState, useEffect } from 'react';

const Scroll = () => {
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // If the user scrolls down more than one viewport height, show the button
      if (window.scrollY > window.innerHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Check if we are on the homepage (root path or /home)
    const path = window.location.pathname;
    if (path === "/" || path === "/home") {
      setVisible(false); // Hide the button if on Home page
    }

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const currentPosition = window.scrollY; // Get the current scroll position
    const targetPosition = 0; // Target scroll position (top)

    const distance = currentPosition - targetPosition;
    const duration = 400; // Delay duration in milliseconds (1.5 seconds)

    let startTime;

    const smoothScroll = (timestamp) => {
      if (!startTime) startTime = timestamp; // Set start time on the first frame
      const timeElapsed = timestamp - startTime;

      const scrollProgress = Math.min(timeElapsed / duration, 1); // Calculate progress

      // Scroll position as a smooth transition
      window.scrollTo(0, currentPosition - distance * scrollProgress);

      if (timeElapsed < duration) {
        window.requestAnimationFrame(smoothScroll); // Continue scrolling
      } else {
        window.scrollTo(0, targetPosition); // Ensure it reaches exactly the top
      }
    };

    window.requestAnimationFrame(smoothScroll); // Start the smooth scroll animation

    setClicked(true); // Track that the button was clicked
  };

  useEffect(() => {
    if (clicked) {
      // Wait a moment to check if the user is back at the homepage
      const path = window.location.pathname;
      if (path === "/" || path === "/home") {
        setVisible(false); // Hide the button on the homepage
      } else {
        setVisible(true); // Show the button on other pages
      }
    }
  }, [clicked]);

  return (
    <a
      href="#"
      className={`fixed flex items-center bottom-5 right-0 px-1 py-[5px] mb-5 mr-5 bg-white/30 backdrop-blur-md rounded-md transition-opacity duration-700 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      id="scroll-up"
      onClick={scrollToTop}
    >
      <i className='bx bx-up-arrow-alt text-white text-2xl transition-transform duration-300 hover:-translate-y-[4px]'></i>
    </a>
  );
};

export default Scroll;

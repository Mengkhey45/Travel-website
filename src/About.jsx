import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5, // trigger animation when 50% of the element is in view
      }
    );

    if (textRef.current && imgRef.current) {
      observer.observe(textRef.current);
      observer.observe(imgRef.current);
    }

    return () => {
      if (textRef.current && imgRef.current) {
        observer.unobserve(textRef.current);
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
  
    <section id="about" className="bg-gray py-20 px-10 flex justify-center">
      <div className="text-white flex flex-col gap-10 md:flex-row lg:mx-20 md:mx-10 justify-center items-center  ">
        {/* Text Section - Fades from Right to Left */}
        <div
          ref={textRef}
          className={` text-center inline-block md:text-start xl:max-w-200  self-center transition-opacity duration-500 x ${
            isVisible ? 'fade-in-right' : ''
          }`}
        >
          <h1 className="text-2xl xl:text-4xl md:text-3xl font-semibold">Learn More About Travel</h1>
          <p className="text-base leading-7 mt-7 xl:max-w-130 xl:leading-10 mb-5">
            All the trips around the world are a great pleasure and happiness for anyone, enjoy the sights when you travel the world.
            Travel safely and without worries, get your trip and explore the paradises of the world.
          </p>
          <button className="font-medium text-lg px-7 py-5 bg-white/20 backdrop-blur-sm group">
            Explore Travel{' '}
            <i className="bx bx-right-arrow-alt transform group-hover:translate-x-2 transition duration-300 "></i>
          </button>
        </div>

        {/* Image - Fades from Left to Right */}
        <div ref={imgRef} className={`relative transition-opacity duration-500 justify-items-center md:justify-items-start ${
            isVisible ? 'fade-in-left' : ''
          }`}>
            <img
                ref={imgRef}
                className={`md: max-w-140 w-80 h-85 transition-opacity duration-500  2xl:ml-0 2xl:size-120  ${
                isVisible ? 'fade-in-left' : ''}`}
         src="/img/about-beach.jpg"
          alt="beach-photo"
        />
        <div ref={imgRef} className={` 2xl:ml-0 w-full absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-nonetransition-opacity duration-500 md:self-start ${
                isVisible ? 'fade-in-left' : ''}`}></div>
        </div>
        
      </div>
    </section>
  );
};

export default About;

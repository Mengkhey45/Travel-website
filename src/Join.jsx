import React, { useEffect, useRef, useState } from 'react';

const Join = () => {
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
        threshold: 0.5,
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
    <section>
      <div className='flex flex-col gap-15 md:gap-8 lg:gap-20 xl:gap-25 md:mx-8 md:flex-row-reverse  justify-center items-center bg-black text-white mb-10 xl:mb-20'>
        <div
          ref={textRef}
          className={`items-center text-center md:text-start transition-opacity duration-500 ${
            isVisible ? 'fade-in-right' : ''
          }`}
        >
          <h1 className='font-semibold text-4xl xl:text-5xl leading-15 xl:leading-20'>Your Journey</h1>
          <h1 className='font-semibold text-4xl xl:text-5xl mb-10 xl:mb-18'>Starts here</h1>
          <p className='mb-5 text-white/60'>Get up to date with the latest travel information from us.</p>
          <input type='email' placeholder='Enter your email' className='mb-5 outline-none w-full px-7 py-5 bg-white/10 item-center' />
          <button className='text-lg font-medium w-full px-7 py-5 bg-white/20 group flex items-center gap-2 hover:cursor-pointer'>
            Subscribe Our Newsletter
            <i className='bx bx-right-arrow-alt transform group-hover:translate-x-2 transition duration-300'></i>
          </button>
        </div>
        <div
          ref={imgRef}
          className={`overflow-hidden relative size-85 xl:size-120 transition-opacity duration-500 ${
            isVisible ? 'fade-in-left' : ''
          }`}
        >
          <img className='transform transition-all duration-500 hover:scale-115 w-full h-full object-cover' src='/assets/img/join-island.jpg'  alt='island' />
          <div className='absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent pointer-events-none'></div>
        </div>
      </div>
    </section>

  );
};

export default Join;

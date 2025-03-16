import React, { useEffect, useRef, useState } from 'react';

const Popular = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="popular" ref={sectionRef} className='flex items-center flex-col gap-10 bg-black py-15 mb-30'>
      <h1 
        className={`text-4xl text-white xl:text-5xl xl:max-w-100 xl:leading-17 font-semibold leading-15 max-w-80 text-center transition-all duration-700 mb-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        Enjoy The Beauty Of The World
      </h1> 
      <div className='grid md:grid-cols-2 gap-10  lg:grid-cols-3 xl:gap-x-20  gap-y-25 items-center  bg-black text-white'>
        {[
          { img: "popular-mountain.jpg", title: "Logan Mountain", location: "Canada", delay: "delay-200", duration: "duration-1000" },
          { img: "popular-forest.jpg", title: "Spike Forest", location: "Ireland", delay: "delay-400", duration: "duration-1500" },
          { img: "popular-lake.jpg", title: "Garda Lake", location: "Italy", delay: "delay-600", duration: "duration-2000" }
        ].map((place, index) => (
          <article 
            key={index} 
            className={`relative w-70 h-73  transition-all ${place.duration} ${isVisible ? `opacity-100 translate-y-0 ${place.delay}` : 'opacity-0 translate-y-10'}`}
          >
            <div className='relative w-70 h-73 xl:w-80 xl:h-85  overflow-hidden'>
              <img 
                className='w-full h-full object-cover transform transition-all duration-500 hover:scale-110' 
                src={`/assets/img/${place.img}`} 
                alt={place.title} 
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
            <h2 className='text-xl font-medium mt-3 '>{place.title}</h2>
            <p className='text-white/70'><i className='bx bx-location-plus '></i> {place.location}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Popular;

import React, { useState, useEffect, useRef } from 'react';
import exploreProfile from '../assets/img/explore-perfil.png';

const Explore = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
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
    <>
      <section id="explore" ref={sectionRef} className="relative bg-black h-140 xl:h-160 mt-30  xl:mt-70 xl:mb-40  mb-20">
        <div
          className="relative w-full h-80 xl:h-130 bg-cover bg-center"
          style={{ backgroundImage: "url('src/assets/img/explore-beach.jpg')" }}
        >
          {/* Dark overlay at both top and bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>

          <div className="items-center text-center z-10 flex justify-center h-full text-white">
            <div
              className={`mt-100 absolute flex flex-col xl:flex-row justify-center items-center gap-5 h-full lg:mt-110 xl:mt-125 xl:gap-x-50 text-white transition-all duration-2000 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
              }`}
            >
              <div>
                <div className="text-white lg:text-4xl text-center font-semibold text-3xl mb-5 xl:leading-13 xl:text-5xl xl:text-start xl:mb-7">
                  <h1>Explore The </h1>
                  <h1>Best Paradises</h1>
                </div>
                <p className="mx-6 max-w-100 leading-7 text-center xl:max-w-150 xl:text-start xl:leading-8 text-white/70">
                  Exploring paradises such as islands and valleys when traveling the world is one of the greatest experiences when you travel, 
                  it offers you harmony and peace and you can enjoy it with great comfort.
                </p>
              </div>
              <div className="flex items-center gap-5">
                <img className="size-10 rounded-full brightness-125" src={exploreProfile} alt="profile-picture" />
                <h3>Paul Jeams</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;

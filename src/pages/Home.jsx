import React from 'react';
import homeBeach from '../assets/img/home-beach.jpg';
import homeLake from '../assets/img/home-lake.jpg';
import homeMountain from '../assets/img/home-mountain.jpg';
import homeTrees from '../assets/img/home-trees.jpg';
import homeBg from '../assets/img/home-bg.jpg';

const Home = () => {
  const images = [
    { src: homeTrees, country: "Croatia" },
    { src: homeLake, country: "Iceland" },
    { src: homeMountain, country: "Italy" },
    { src: homeBeach, country: "Spain" }
  ];

  return (
    <section className='xl:mb-20 2xl:mb-30'>
      <div 
        className="h-auto xl:h-200 bg-cover bg-center relative" 
        style={{ backgroundImage: `url(${homeBg})` }}
      >
        <div className='flex flex-col items-center relative'>
          <div className="z-0 absolute h-auto inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black"></div>

          <div className='z-10 flex flex-col justify-center text-white text-center items-center mt-40 mb-20 leading-10 animate-fade-down'>
            <h3 className='font-semibold text-2xl xl:text-3xl 2xl:text-4xl mb-5 xl:mb-8 xl:mt-15'>Welcome to Travel</h3>
            <h1 className='text-6xl font-medium xl:text-7xl'>Explore <br /> The World</h1>
            <p className='leading-7 mt-5 max-w-xl'>
              Voice the trips exploring the world, dive into paradise, islands, mountains, and much more. Get your own trip now.
            </p>
            <button className="text-xl mt-15 px-10 py-5 bg-white/25 backdrop-blur-sm group flex items-center gap-2 hover:cursor-pointer">
              Start your Journey <i className="bx bx-right-arrow-alt transform group-hover:translate-x-2 transition duration-300"></i>
            </button>
          </div>

          <div className='z-10 grid grid-cols-1 mb-10 justify-items-center self-center xl:flex gap-5 md:grid-cols-2 animate-fade-down'>
            {images.map((image, index) => (
              <article key={index} className='relative w-70 h-48 overflow-hidden'>
                <img 
                  className='transform transition-all duration-500 hover:scale-115 w-full h-full object-cover' 
                  src={image.src} 
                  alt={image.country} 
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                <h3 className='z-10 absolute bottom-5 left-4 text-white font-semibold'>{image.country}</h3> 
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
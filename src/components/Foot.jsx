import React from 'react'

const Foot = () => {
  return (
    <>
     <footer>
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-8 bg-black text-white xl:flex xl:justify-center xl:gap-30'>
                <div className='lg:ml-20 '>
                    <h1 className='font-bold text-2xl leading-15 '>Travel</h1>
                    <p className='max-w-55 text-lg leading-10  text-white/50' >Travle with us and explore the world without limits.</p>
                </div>
        
                <div className='grid grid-cols-2 md:grid-cols-3 gap-5 xl:grid-cols-4  xl:gap-20'>
                    <div className='block'>
                        <h3 className='font-semibold text-xl leading-14'>About</h3>
                        <ul className='gap-5 text-base font-medium text-white/50 list-none leading-10'>
                            <li className='hover:text-white'><a href="#">About Us</a></li>
                            <li className='hover:text-white'><a href="#">Features</a></li>
                            <li className='hover:text-white'><a href="#">news & BLog</a></li>
                        </ul>
                    </div>
                    <div className='block'>
                        <h3 className='font-semibold text-xl leading-14'>Company</h3>
                        <ul className='gap-5 text-base font-medium text-white/50 list-none leading-10'>
                            <li className='hover:text-white'><a href="#">FAQS</a></li>
                            <li className='hover:text-white'><a href="#">History</a></li>
                            <li className='hover:text-white'><a href="#">testimonials</a></li>
                        </ul>
                    </div>
                    <div className='block'>
                        <h3 className='font-semibold text-xl leading-14'>Contact</h3>
                        <ul className='gap-5 text-base font-medium text-white/50 list-none leading-10'>
                            <li className='hover:text-white'><a href="#">Call Center</a></li>
                            <li className='hover:text-white'><a href="#">Support Center</a></li>
                            <li className='hover:text-white'><a href="#">COntact Us</a></li>
                        </ul>
                    </div>
                    <div className='block'>
                        <h3 className='font-semibold text-xl leading-14'>Support</h3>
                        <ul className='gap-5 text-base font-medium text-white/50 list-none leading-10'>
                            <li className='hover:text-white'><a href="#">Privacy Policy</a></li>
                            <li className='hover:text-white'><a href="#">Terms & Services</a></li>
                            <li className='hover:text-white'><a href="#">Payments</a></li>
                        </ul>
                    </div>
                </div>
            </div>
          

            <div className='p-8 bg-gradient-to-r text-white/70 text-center  flex flex-col  lg:flex-row-reverse justify-center items-center gap-5 lg:gap-70'>
            {/* Social Icons Container */}
                <div className='flex justify-between max-w-70 min-w-70 bg-gradient-to-l from-blue-500 via-purple-700 to-pink-500 p-2 rounded-full '>
                    <a className='hover:text-white ml-5 transition-transform duration-300 hover:-translate-y-1' href="https://www.facebook.com/">
                        <i className='bx bxl-facebook text-2xl'></i>
                    </a>
                    <a className='hover:text-white transition-transform duration-300 hover:-translate-y-1' href="https://www.instagram.com/">
                        <i className='bx bxl-instagram text-2xl'></i>
                    </a>
                    <a className='hover:text-white transition-transform duration-300 hover:-translate-y-1' href="https://x.com/?lang=en">
                        <i className='bx bxl-twitter text-2xl'></i>
                    </a>
                    <a className='hover:text-white mr-5 transition-transform duration-300 hover:-translate-y-1' href="https://www.youtube.com/">
                        <i className='bx bxl-youtube text-2xl'></i>
                    </a>
                </div>

                {/* Copyright Text */}
    <div>
        <span className='text-white'>&#169; Copyright Mengkhey Khorn. All rights reserved</span>
    </div>
</div>


           
        
       
       

        </div>
        
     </footer>
    </>
  )
}

export default Foot
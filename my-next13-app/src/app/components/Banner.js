import Link from 'next/link';
import React from 'react';

function Banner() {
  return (
    <div className="font-exo relative w-full h-[600px] lg:h-[800px] overflow-hidden" 
    style={{
      backgroundImage: `url('/Images/photo2.webp')`,
      backgroundSize: "cover",
      filter: "brightness(1.3) grayscale(0.5)", 
      backgroundAttachment: "fixed", // Keeps background fixed during scroll
    }}
    >
      
  <div
        className="absolute inset-0 bg-black bg-opacity-60"
        aria-hidden="true"
      ></div>

      <div className="absolute top-[45%] left-[40%] xl:left-[25%] transform -translate-x-1/2 -translate-y-1/2  text-white z-10">
      <div className=' '>
      <h3 className="exo text-4xl md:text-7xl ">Your Sound </h3>
      <h3 className='font-extralight text-4xl md:text-7xl mb-8'>is our Business.</h3>
        <p className="exo-400 text-xl lg:text-3xl font-medium mb-8 lg:mb-12 text-[#f7931e]" style={{letterSpacing:'1px'}}>Kaushalya Records

        </p>
        <a 
      href="https://wa.me/919462327667" 
      className="p-2 lg:px-6 lg:py-4 border-white border" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      Get In Touch
    </a>
      </div>
       

      </div>

    </div>
  );
}

export default Banner;


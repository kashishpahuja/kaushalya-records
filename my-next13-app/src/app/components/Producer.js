import React from 'react';

function Producer() {
  return (
    <div
      className="my-12 mx-6 lg:mx-12 text-white rounded-xl h-[500px] lg:h-[600px]  relative py-32 lg:py-0"
      style={{
        backgroundImage: `url('/Images/Producer.webp')`,
        backgroundSize: 'cover',
        backgroundPosition:'center',
        filter: 'brightness(1.3) grayscale(0.5)',
        
      }}
    >
      {/* Top-left content */}
      <div className="absolute  top-4 left-4  text-start lg:w-[520px]">
      <div
        className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"
        aria-hidden="true"
      ></div>
      <p className='exo-200 relative z-20 text-sm lg:text-xl'>
        “At Kaushalya Records, we are taking a new route to the beautiful world of music and talent. Our purpose is to enable artists to realize their potential, embrace talent in its full measure.”
        </p>
      </div>

      {/* Bottom-right content */}
      <div className="absolute bottom-4 right-4 lg:text-3xl text-end lg:w-[250px]">
      <div
        className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"
        aria-hidden="true"
      ></div>
      <div className='relative z-20  p-2'>
      <h3 className='text-xl lg:text-3xl'>NIRBHAI SINGH</h3>
      <p className='text-yellow-500 text-lg text-center'>PRODUCER</p>
      </div>
          </div>
    </div>
  );
}

export default Producer;
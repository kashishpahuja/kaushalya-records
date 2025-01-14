'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function Producer() {
  const slides = [
    { 
      image: '/Images/album1.webp', 
      title: 'DJ Christopher Johnson', 
      subtitle: 'Live from UV Studio, USA' 
    },
    { 
      image: '/Images/album3.webp', 
      title: 'DJ Sarah Parker', 
      subtitle: 'Live from NY Studio, USA' 
    },
    { 
        image: '/Images/album1.webp', 
        title: 'DJ Christopher Johnson', 
        subtitle: 'Live from UV Studio, USA' 
      },
      { 
        image: '/Images/album3.webp', 
        title: 'DJ Sarah Parker', 
        subtitle: 'Live from NY Studio, USA' 
      },
  ];

  return (
    <div className="py-24">
      <h1 className="text-[26px] lg:text-[38px] text-white text-center font-bold">OUR WORK</h1>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={0} // Space between slides
        slidesPerView={1} // Default to 1 slide per view
        breakpoints={{
          1024: { // For large screens (lg and above)
            slidesPerView: 1, // Show 1 slide per view
          },
        }}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1">
              <div
                className="lg:my-12 mx-6 lg:mx-12 text-white rounded-xl h-[400px] md:h-[500px] lg:h-[600px] relative flex items-center justify-center"
              >
                {/* Image inside the div */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="rounded-xl w-full h-full object-contain lg:object-cover"
                  style={{
                    filter: 'brightness(1.3) grayscale(0.5)',
                  }}
                />
                {/* Absolute text remains unchanged */}
                <div className="absolute top-[80%] right-4 text-start">
                  <div
                    className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"
                    aria-hidden="true"
                  ></div>
                  <h3
                    className="exo-200 relative z-20 text-xl lg:text-3xl text-white font-bold"
                    style={{ fontFamily: 'Arial' }}
                  >
                    {slide.title}
                  </h3>
                  <p className="text-sm lg:text-lg relative text-white text-center">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Producer;

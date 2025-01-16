'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Link from "next/link";

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
      { 
        image: '/Images/album3.webp', 
        title: 'DJ Sarah Parker', 
        subtitle: 'Live from NY Studio, USA' 
      },
      { 
        image: '/Images/album3.webp', 
        title: 'DJ Sarah Parker', 
        subtitle: 'Live from NY Studio, USA' 
      },
      { 
        image: '/Images/album3.webp', 
        title: 'DJ Sarah Parker', 
        subtitle: 'Live from NY Studio, USA' 
      },
  ];

  return (
    <div className="py-24">
      <h1 className="exo-bold text-[26px] lg:text-[38px] text-white text-center font-bold">OUR ALBUMS</h1>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: false }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={5} // Space between slides
        slidesPerView={1} // Default to 1 slide per view
        breakpoints={{
          1024: { // For large screens (lg and above)
            slidesPerView: 4, // Show 1 slide per view
          },
        }}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 ">
            <Link href={'/albums'}>

              <div
                className=" lg:my-12 mx-6 lg:mx-12 text-white  w-full h-[400px] md:h-[500px] lg:h-[500px] relative flex items-center justify-center"
              >
                {/* Image inside the div */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className=" w-full h-[100%]  object-cover"
                  style={{
                    filter: 'brightness(1.3) grayscale(0.5)',
                  }}
                />
                {/* Absolute text remains unchanged */}
                <div className="absolute top-[80%] left-6 text-start">
                  <div
                    className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"
                    aria-hidden="true"
                  ></div>
                  <h3
                    className="exo-200 relative z-20 text-xl lg:text-3xl xl:text-xl text-white font-bold"
                    style={{ fontFamily: 'Arial' }}
                  >
                    {slide.title}
                  </h3>
                  <p className="text-sm lg:text-lg relative text-white text-center">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
              </Link>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Producer;

'use client';
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function Producer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const slides = [
    { 
      image: '/Images/album4.webp', 
      title: 'DJ Christopher Johnson', 
      subtitle: 'Live from UV Studio, USA',
      videoLink: 'https://www.youtube.com/embed/xyz123' // Add the YouTube link here
    },
    { 
      image: '/Images/album3.webp', 
      title: 'DJ Sarah Parker', 
      subtitle: 'Live from NY Studio, USA',
      videoLink: 'https://www.youtube.com/embed/abc456' // Add the YouTube link here
    },
    // { 
    //   image: '/Images/album1.webp', 
    //   title: 'DJ Christopher Johnson', 
    //   subtitle: 'Live from UV Studio, USA',
    //   videoLink: 'https://www.youtube.com/embed/xyz123' // Add the YouTube link here
    // },
    // { 
    //   image: '/Images/album3.webp', 
    //   title: 'DJ Sarah Parker', 
    //   subtitle: 'Live from NY Studio, USA',
    //   videoLink: 'https://www.youtube.com/embed/abc456' // Add the YouTube link here
    // },
  ];

  const handleImageClick = (videoLink) => {
    setVideoUrl(videoLink);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl('');
  };

  return (
    <div className="py-24 mx-4 lg:mx-20">
      {/* Removed Swiper */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-1 xl:grid-cols-2">
        {slides.map((slide, index) => (
          <div key={index} className="relative rounded-xl overflow-hidden">
            {/* Image inside the div */}
            <div className="w-full h-[400px]">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[100%] object-cover cursor-pointer"
              style={{
                filter: 'brightness(1.3) grayscale(0.5)',
              }}
              onClick={() => handleImageClick(slide.videoLink)} // Set video on click
            />
            </div>
           
            {/* Absolute text remains unchanged */}
            {/* <div className="absolute bottom-4 left-4 text-start text-white"> */}
            <div className="absolute bottom-4 left-4 text-start text-white">

              <div
                className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"
                aria-hidden="true"
              ></div>
              <h3
                className="relative z-20 text-xl lg:text-3xl font-bold"
                style={{ fontFamily: 'Arial' }}
              >
                {slide.title}
              </h3>
              <p className="relative text-sm lg:text-lg text-center">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

    
       {/* Video Popup */}
       {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-[99999999]">
          <AiOutlineClose
            className="absolute top-6 right-6 text-4xl text-white cursor-pointer border-2 rounded-full border-white p-2"
            onClick={closeModal}
          />
          <div className="p-1 bg-[#f6f6f5] ">
            <iframe
            //   width="660"
            //   height="425"
              className="w-[300px] h-[400px] md:w-[540px] lg:w-[660px] md:h-[400px] lg:h-[425px]"
              src={videoUrl}
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Producer;

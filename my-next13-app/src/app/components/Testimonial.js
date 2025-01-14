'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function Testimonials() {
  const testimonials = [
    {
      name: "Aarav Sharma",
      text: "Kaushalya Records transformed our vision into incredible music, boosting our business to new heights.",
      image: "/Images/testimonial1.jpg",
    },
    {
      name: "Rohan Khanna",
      text: "Thanks to Kaushalya Records, our project not only sounded amazing but also helped us grow our brand.",
      image: "/Images/testimonial2.jpg",
    },
    {
      name: "Harkirat Singh",
      text: "Kaushalya Records brought creativity and precision, helping our brand connect with the audience.",
      image: "/Images/testimonial3.jpg",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-8 items-center p-6 mx-4 md:mx-8 lg:mx-0 py-24">
      {/* Left Side Text */}
      <div className="w-full lg:w-1/2 text-left lg:ml-20">
        <img src="/Images/testimonials.webp" alt="" />
      </div>

      {/* Right Side Swiper */}
      <div
        className="py-10 px-2 md:px-8 w-full lg:w-1/2 bg-cover bg-center rounded-lg relative"
        style={{
          backgroundImage: "url(/Images/Offerbg.webp)",
          backgroundRepeat: "no-repeat",
          textAlign: "center",
        }}
      >
        {/* Swiper Component */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1} 
          loop={true} 
          autoplay={{ delay: 3000 ,
            disableOnInteraction:false,
          }}
          pagination={{ clickable: true }} 
          navigation={false} 
          modules={[Autoplay]}
        >
          {/* Testimonial Slides */}
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-start justify-center">
                <p className="servicePara mt-4 text-gray-500 text-xl xl:w-[600px] text-justify">
                  {testimonial.text}
                </p>

                {/* Customer Image & Name */}
                <div className="flex items-center gap-2 justify-start mt-6">
                  {/* <img
                    src={testimonial.image}
                    alt="img"
                    className="rounded-full w-16 h-16 object-cover"
                  /> */}

<p
                    src={testimonial.image}
                    alt="Customer"
                    className="rounded-full bg-yellow-600 text-white text-lg font-bold px-4 py-2 object-cover"
                  >
                    {(testimonial.name).charAt(0)}
                  </p>
                  <h3 className=" text-lg text-[#979493]">{testimonial.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;

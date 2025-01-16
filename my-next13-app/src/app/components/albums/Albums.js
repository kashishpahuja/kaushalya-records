"use client";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

function Producer() {
  const slides = [
    {
      id: "dj-christopher-johnson",
      image: "/Images/album4.webp",
      title: "DJ Christopher Johnson",
      subtitle: "Live from UV Studio, USA",
    },
    {
      id: "dj-sarah-parker",
      image: "/Images/album3.webp",
      title: "DJ Sarah Parker",
      subtitle: "Live from NY Studio, USA",
    },
    {
      id: "dj-live-session",
      image: "/Images/album1.webp",
      title: "DJ Live Session",
      subtitle: "Special Event",
    },
    ,
    {
      id: "dj-sarah-parker",
      image: "/Images/album3.webp",
      title: "DJ Sarah Parker",
      subtitle: "Live from NY Studio, USA",
    },
    {
      id: "dj-live-session",
      image: "/Images/album1.webp",
      title: "DJ Live Session",
      subtitle: "Special Event",
    },
  ];

  return (
    <div className="py-24 mx-4 lg:mx-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="p-4 overflow-hidden border border-gray-500 hover:border-white rounded-xl"
          >
            <Link href={`/album/${slide.id}`}>
              <div className="w-full h-[400px] cursor-pointer">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[100%] object-cover rounded-xl"
                  style={{
                    filter: "brightness(1.3) grayscale(0.5)",
                  }}
                />
              </div>
            </Link>

            <div className="text-white mt-4">
              <div className="flex items-center justify-between py-4">
                <div className="text-sm lg:text-lg text-gray-600">
                  {slide.subtitle}
                </div>
                <div>
                  <IoIosArrowForward className="w-4 h-4 text-gray-600" />
                </div>
              </div>
              <h3
                className="exo-bold text-xl lg:text-2xl font-bold"
                style={{ fontFamily: "Arial" }}
              >
                {slide.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Producer;

'use client';
import React from "react";

function Testimonials() {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-8 items-center p-6 mx-4 md:mx-8 lg:mx-0 py-24">
      {/* Left Side Image */}
      <div className="w-full lg:w-1/2 text-left lg:ml-20 h-[400px]">
        <img src="/Images/producer2.webp" alt="Music Producer"  className="w-full h-[100%] object-cover  rounded-xl"/>
      </div>

      {/* Right Side Text */}
      <div
        className="exo-200 py-10 px-2 md:px-8 w-full lg:w-1/2 bg-cover bg-center rounded-lg relative text-white">
        <p className="text-sm lg:text-lg mb-6">
        Kaushalya Records is a professional music producing company led by a visionary producer who has lots of eagerness and skill in the music production. Here are three key aspects of his expertise:
        </p>
        <ul className="list-disc list-inside text-sm lg:text-lg">
          <li className="mb-2 ">A talented song writer who writes powerful and meaningful lyrics of accepted songs listened by listeners.</li>
          <li className="mb-2 ">A well achieved actor and actively engaged in the services of the entertainment fraternity.</li>
          <li className="mb-2 ">Extremely talented Music Producer well familiar with sound designing and various methods of music producing.</li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;

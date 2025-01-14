import Link from "next/link";
import React from "react";

function Music() {
  return (
    <div
      className="font-exo text-white relative w-full h-auto overflow-hidden"
      style={{
        backgroundImage: `url('/Images/music/bg.webp')`,
        backgroundSize: "cover",
        filter: "brightness(1.3) grayscale(0.5)",
        backgroundAttachment: "fixed", // Keeps background fixed during scroll
      }}
    >
           <div
        className="absolute inset-0 bg-black bg-opacity-60 z-0"
        aria-hidden="true"
      ></div>
        <div className="relative flex flex-col gap-8 py-24 items-center z-10">
     
       
        <h1 className="text-[26px] lg:text-[38px] font-bold">BOOKING & CONTACT</h1>
        <Link 
  href="https://wa.me/1234567890" 
  className="border bg-white text-black py-2 px-4 text-lg " 
  style={{ fontFamily: 'Arial' }}
>
  LET'S CONNECT
</Link>

        </div>
    </div>
  );
}

export default Music;

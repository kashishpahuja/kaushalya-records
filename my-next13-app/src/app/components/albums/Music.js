import Link from "next/link";
import React from "react";

function Music() {
  return (
    <div
      className="font-exo text-white relative w-full h-auto overflow-hidden"
    //   style={{
    //     backgroundImage: `url('/Images/music/bg.webp')`,
    //     backgroundSize: "cover",
    //     filter: "brightness(1.3) grayscale(0.5)",
    //     backgroundAttachment: "fixed", // Keeps background fixed during scroll
    //   }}
    >
           <div
        className="absolute inset-0 bg-black bg-opacity-60 z-0"
        aria-hidden="true"
      ></div>
        <div className="relative flex flex-col gap-8 py-24 items-center z-10">
     
       
        <h3 className=" text-xl text-gray-500">Music</h3>
        <h1 className="text-[26px] lg:text-[38px] font-bold">ON ALL PLATFORMS</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 md:mt-8">
        <div className="w-36 h-12 px-4 ">
                <img src="/Images/music/spotify.webp" alt="" className="w-full h-[100%] object-contain"/> 
            </div>
            <div className="w-36 h-12  px-4 ">
                <img src="/Images/music/appleMusic.webp" alt="" className="w-full h-[100%] object-contain"/> 
            </div> <div className="w-36 h-12  px-4 ">
                <img src="/Images/music/tidal.webp" alt="" className="w-full h-[100%] object-contain"/> 
            </div> <div className="w-36 h-12  px-4 ">
                <img src="/Images/music/itunes.webp" alt="" className="w-full h-[100%] object-contain"/> 
            </div> <div className="w-36 h-12  px-4 ">
                <img src="/Images/music/youtube.webp" alt="" className="w-full h-[100%] object-contain"/> 
            </div>
            <div className="w-36 h-12  px-4 ">
                <img src="/Images/music/soundCloud.webp" alt="" className="w-full h-[100%] object-contain"/> 
            </div>
        </div>
        </div>
    </div>
  );
}

export default Music;

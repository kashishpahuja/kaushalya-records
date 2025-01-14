import React from "react";

function Features() {
  return (
    <div className="text-center py-24 text-white px-8 md:px-12 lg:px-40">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <div className="flex flex-col items-center ">
          <div className="w-20 h-20 lg:w-28 lg:h-28 ">
            <img
              src="/Images/features/1.webp"
              alt="bht"
              className="w-full h-[100%] object-cover"
            />
          </div>
          <h1 className="text-xl font-bold">Vocal & mixing tools</h1>
          <h3 className=" text-md mt-4">
            Reverb, Distortion, EQ, Delay, Compressor, and more.
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 lg:w-28 lg:h-28 ">
            <img
              src="/Images/features/2.webp"
              alt=""
              className="w-full h-[100%] object-cover"
            />
          </div>
          <h1 className="text-xl font-bold">Virtual instruments</h1>
          <h3 className=" text-md mt-4">
            Beatmaker, software synths, drum kits, and 808 with Glide sounds.
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 lg:w-28 lg:h-28 ">
            <img
              src="/Images/features/3.webp"
              alt=""
              className="w-full h-[100%] object-cover"
            />
          </div>
          <h1 className="text-xl font-bold">Royalty-free sounds</h1>
          <h3 className=" text-md mt-4">
            Thousands of loops, samples, one-shots, and sound effects.
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 lg:w-28 lg:h-28 ">
            <img
              src="/Images/features/4.webp"
              alt=""
              className="w-full h-[100%] object-cover"
            />
          </div>
          <h1 className="text-xl font-bold">Collaborative studio</h1>
          <h3 className=" text-md mt-4">
            Make music online anytime, with anyone, on any device.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Features;

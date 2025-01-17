import Link from "next/link";
import React from "react";

function Header({ title, content, url }) {
  return (
    <div
      className="h-[240px] lg:h-[410px] w-full "
      style={{
        backgroundImage: "url(/Images/aboutBanner.webp)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col gap-6 items-end  justify-end py-20 mr-8 md:mr-24 lg:mr-32 xl:mr-60">
        <h3 className="exo-bold text-3xl md:text-5xl text-[#f7931e] ">
          {title}
        </h3>
        <a
          href="https://wa.me/919462327667"
                target="_blank" 
      rel="noopener noreferrer"
          className="exo-bold p-2 lg:px-6 lg:py-4  border-white hover:border-black hover:text-black hover:bg-white w-fit text-white border md:mr-12"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
}

export default Header;

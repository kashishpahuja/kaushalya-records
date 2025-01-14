'use client';
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Popup from "./Popup";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Add scroll event listener to check scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Listen to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
    className={`${
      isScrolled
        ? "bg-opacity-70  bg-black text-white"
        : " bg-black"
    } h-[110px] text-white shadow-md sticky top-0 z-[99999] transition-all ease-in-out duration-300`}
  >
      <div className="flex items-center justify-between px-6 lg:px-20 h-full mx-4 lg:mx-16">
        {/* Logo */}
        <div className=" h-20 xl:h-24 ">
          <Link href={'/'}>
          <img src="/Images/logo.webp" alt="" className="w-full h-[100%] object-contain" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <ul className="flex items-center justify-center gap-16 text-md">
            <li className="hover:border-b-2 border-[#f7931e] text-white transition duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:border-b-2 border-[#f7931e] text-white transition duration-300">
              <Link href="/about">About Us</Link>
            </li>
            <li className="hover:border-b-2 border-[#f7931e] text-white transition duration-300">
              <Link href="/albums">Our Albums</Link>
            </li>
            <li className="hover:border-b-2 border-[#f7931e] text-white transition duration-300">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl text-white focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Popup */}
      {menuOpen && <Popup menuOpen={toggleMenu} />}
    </div>
  );
}

export default Navbar;

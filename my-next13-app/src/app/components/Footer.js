"use client";
import React from "react";
import {
  FaPhoneAlt,
  FaMailBulk,
  FaYoutube,
  FaTwitter,
  FaFacebook,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="relative text-white min-h-[80vh] flex flex-col"
      style={{
        backgroundImage: `url('/Images/footerBG.webp')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed", // Keeps background fixed during scroll
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-60"
        aria-hidden="true"
      ></div>

      {/* Footer Content */}
      <div className="relative z-10 flex-grow flex items-end p-6 lg:px-20 mx-8 xl:mx-40">
        <div className="w-full pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left Section: Contact Details and Logo */}
            <div className="lg:text-left flex flex-col items-center lg:items-start">
                {/* Logo */}
                <div className="mb-6 -ml-8">
                <img
                  src="/Images/logo.webp"
                  alt="Logo"
                  className="w-32 md:w-40 lg:w-40 "
                />
              </div>
              <p className="mb-4 text-sm lg:text-md text-center lg:text-justify">
              "From inspiration to perfection – we produce hits."
              Kaushalya Records transforms your ideas into chart-worthy tracks with expert precision.
                </p>
              {/* Contact Details */}
              <div className="text-center lg:text-left mb-6">
                <p className="mb-4">
                  <Link
                    href="tel:+91 94623-27667"
                    className="hover:underline text-sm lg:text-md"
                  >
                    +91 94623-27667
                  </Link>
                </p>
                <p className="mb-4 text-sm lg:text-md">
                  70 Hermann Ave Carteret New Jersey 07008
                </p>
                <p>
                  <Link
                    href="mailto:info@srscargopackers.in"
                    className="hover:underline text-sm lg:text-md"
                  >
                    info@srscargopackers.in
                  </Link>
                </p>
              </div>
            
              {/* Social Media Links */}
              <div className="flex justify-center gap-6">
                <Link href="#" className="text-white text-2xl hover:text-gray-300">
                  <FaTwitter />
                </Link>
                <Link href="#" className="text-white text-2xl hover:text-gray-300">
                  <FaFacebook />
                </Link>
                <Link href="#" className="text-white text-2xl hover:text-gray-300">
                  <FaPinterestP />
                </Link>
                <Link href="#" className="text-white text-2xl hover:text-gray-300">
                  <FaInstagram />
                </Link>
                <Link href="#" className="text-white text-2xl hover:text-gray-300">
                  <FaYoutube />
                </Link>
              </div>
            </div>

            {/* Right Section: Map Placeholder */}
            <div className="lg:text-right">
            <div className="w-full h-[240px] md:h-[430px] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.726002954475!2d76.4027356!3d30.358736000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910291ec53226d3%3A0xd81cade77ecfa8d3!2sDigital%20Paaji!5e0!3m2!1sen!2sin!4v1735063353416!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="object-cover"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-white mx-40"></div>

      {/* Footer Bottom Section */}
      <div className="relative z-10 text-sm text-center pt-6 pb-4">
        <p>
          Copyright © 2024 FreshEat Respondent.{" "}
          <Link href="#" className="hover:underline">
            Designed by Digital Paaji.
          </Link>{" "}
          All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

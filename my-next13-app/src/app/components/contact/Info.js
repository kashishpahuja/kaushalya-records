import React from 'react'
import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

function info() {
  return (
    <div className="flex flex-col lg:flex-row items-stretch mx-4 md:mx-12 xl:mx-0 py-8 lg:py-0">
        {/* Map Section */}
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
  )
}

export default info
'use client'
import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaInstagram, FaFacebookF } from "react-icons/fa";
import Image from "next/image";
const Whatsapp = () => {
   return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-center gap-3">
     
       
      {/* <a
        href="https://wa.me/+918130385561"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp "
        className="hidden md:block fixed bottom-5 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition animate-bounce"
      >
        <FaWhatsapp size={30} />
      </a> */}
      <a
        href="https://www.instagram.com/j_l_industries_hub/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit us on Instagram"
        className="hidden md:block p-3 rounded-full shadow-lg text-white transition hover:scale-110 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
      >
        <FaInstagram size={30} />
      </a>
 
      <a
        href="https://www.facebook.com/profile.php?id=100064843774189"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit us on Facebook"
        className="hidden md:block p-3 rounded-full shadow-lg bg-[#1877F2] text-white transition hover:scale-110 hover:bg-[#145dbf]"
      >
        <FaFacebookF size={30} />
      </a>

      <a
        href="tel:+919891000561"
        aria-label="Call Us"
        className="p-3 rounded-full shadow-lg bg-white text-green-600 transition"
      >
        <Image src="/561253.png" alt="Phone Icon" width={30} height={30} />
      </a>
    </div>
  );
};

export default Whatsapp;
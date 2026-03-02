import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX, BsInstagram } from "react-icons/bs";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-stone-800 text-white px-6 md:px-12 lg:px-20 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Copyright */}
        <div className="text-center md:text-left space-y-2">
          <p className="text-sm text-gray-400">
            © {year} All rights reserved
          </p>

          <div className="w-20 h-[2px] bg-orange-500 mx-auto md:mx-0"></div>

          <p className="text-sm">
            Created by{" "}
            <span className="font-semibold text-orange-500">
              Omolisa Olayemi
            </span>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition duration-300"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition duration-300"
          >
            <BsTwitterX />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition duration-300"
          >
            <BsInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition duration-300"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
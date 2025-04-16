import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="w-full h-[1px] mx-auto bg-[#434343] rounded-full"></div>
      <div className="">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 sm:gap-16 items-center justify-between max-w-screen-xl mx-auto  py-12">
          {/* Social Icons and Heading */}
          <div className="flex flex-col items-start md:items-end gap-4 text-[#DAD9D9] px-6">
            <div className="flex justify-center md:justify-start gap-6 mb-4">
              <a
                href="#"
                className="text-2xl sm:text-3xl py-1 px-1 sm:px-2 border border-[#DAD9D9] rounded-lg hover:text-[#E9204F] hover:border-[#E9204F]"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="#"
                className="text-2xl sm:text-3xl py-1 px-1 sm:px-2 border border-[#DAD9D9] rounded-lg hover:text-[#E9204F] hover:border-[#E9204F]"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="#"
                className="text-2xl sm:text-3xl py-1 px-1 sm:px-2 border border-[#DAD9D9] rounded-lg hover:text-[#E9204F] hover:border-[#E9204F]"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-2xl sm:text-3xl py-1 px-1 sm:px-2 border border-[#DAD9D9] rounded-lg hover:text-[#E9204F] hover:border-[#E9204F]"
              >
                <FaWhatsappSquare />
              </a>
            </div>
            <h2 className="text-5xl sm:text-6xl mb-2">LET'S TALK?</h2>
            <p className="text-lg font-malayalam">CELL: +92 0345 8507 835</p>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col items-start gap-6 text-[#DAD9D9] uppercase font-malayalam px-6">
            <div className="flex flex-col w-full">
              <label htmlFor="">Your Name</label>
              <input
                type="text"
                className="bg-black border-b border-gray-700 py-1 placeholder-gray-500 focus:outline-none focus:border-[#E9204F] w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="">Your Email</label>
              <input
                type="text"
                className="bg-black border-b border-gray-700 py-1 placeholder-gray-500 focus:outline-none focus:border-[#E9204F] w-full"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="">Your message</label>
              <input
                className="bg-black border-b border-gray-700 py-1 placeholder-gray-500 focus:outline-none focus:border-[#E9204F] w-full"
                rows="3"
              ></input>
            </div>
            <button className="bg-[#E9204F] hover:bg-[#e9204fad] w-auto px-10 py-1 uppercase cursor-pointer active:bg-[#E9204F]">
              Send
            </button>
          </div>

          {/* Subscribe Section */}
          <div className="flex items-center gap-6 font-malayalam px-6 ">
            <input
              type="email"
              placeholder="Enter your email"
              className=" border border-gray-700 placeholder-[#A6A5A5] text-black rounded-full px-4 py-2 bg-[#F5F8FF]  focus:outline-none focus:ring-2 focus:ring-[#F2C146] w-full md:w-auto"
            />
            <button className="bg-[#171717] hover:bg-[#313030] text-[#F2C146] uppercase rounded-full px-6 py-2">
              Subscribe
            </button>
          </div>
        </div>

        <div className="w-full h-[1px] bg-[#434343] rounded-full"></div>

        {/* Footer */}
        <div className="px-6 py-10 text-center text-sm sm:text-base flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-14 text-[#DAD9D9] tracking-wide font-malayalam">
          <p>© 2024 print fly communications all rights reserved.</p>
          <div className="flex justify-center flex-wrap gap-4">
            <a href="#" className="hover:text-white">
              TERMS OF USE
            </a>
            <a href="#" className="hover:text-white">
              PRIVACY POLICY
            </a>
            <a href="#" className="hover:text-white">
              COOKIE POLICY
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

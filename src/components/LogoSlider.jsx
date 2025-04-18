import React, { useState, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft  } from "react-icons/fa6";
import logo from "../assets/home-images/work-images/graybg.png";
import logo2 from "../assets/home-images/work-images/client-image.png";

const logos = [
  logo,
  logo2,
  logo,
  logo2,
  logo,
  logo2,
  logo,
  logo,
  logo,
];

const ClientCarousal = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5); // default for desktop

  // Handle responsiveness
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2); // mobile
      } else {
        setVisibleCount(5); // tablet and up
      }
    };

    updateVisibleCount(); // initial load
    window.addEventListener('resize', updateVisibleCount); // on resize

    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 1 > logos.length - visibleCount ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? logos.length - visibleCount : prevIndex - 1
    );
  };

  const visibleLogos = logos.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="pt-10">
      <div className="container mx-auto max-w-screen-xl text-center">
        <div className="flex items-center justify-center gap-4 sm:gap-8 lg:gap-40">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className=" text-white p-3 rounded-full cursor-pointer hover:bg-[#101010] text-xl"
          >
            <FaChevronLeft />
          </button>

          {/* Logo Carousel */}
          <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 overflow-hidden">
            {visibleLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center border rounded-lg shadow-md p-2 sm:p-3"
              >
                <img
                  src={logo}
                  alt={`Logo ${index}`}
                  className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-full"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="text-white p-3 rounded-full cursor-pointer hover:bg-[#101010] text-xl"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousal;

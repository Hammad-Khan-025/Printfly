import React, { useState, useEffect, useRef } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import logoSlider1 from "../assets/home-images/logo-slider/logo1.jpg";
import logoSlider2 from "../assets/home-images/logo-slider/logo2.jpg";
import logoSlider3 from "../assets/home-images/logo-slider/logo3.jpg";
import logoSlider4 from "../assets/home-images/logo-slider/logo4.jpg";
import logoSlider5 from "../assets/home-images/logo-slider/logo5.jpg";
import logoSlider6 from "../assets/home-images/logo-slider/logo6.jpg";

const originalLogos = [
  logoSlider1,
  logoSlider2,
  logoSlider3,
  logoSlider4,
  logoSlider5,
  logoSlider6,
];

const ClientCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const totalLogos = originalLogos.length;

  // Duplicate logos for seamless looping
  const logos = [...originalLogos, ...originalLogos];

  // Update visible count based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2);
      } else {
        setVisibleCount(5);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  // Auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      moveNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [startIndex]);

  // Reset logic for seamless infinite scroll
  useEffect(() => {
    if (startIndex === totalLogos) {
      setTimeout(() => {
        setTransitionEnabled(false);
        setStartIndex(0);
      }, 500);
    } else {
      setTransitionEnabled(true);
    }
  }, [startIndex, totalLogos]);

  const moveNext = () => {
    setStartIndex((prev) => prev + 1);
  };

  const movePrev = () => {
    if (startIndex === 0) {
      // Jump to duplicate set for seamless reverse scroll
      setTransitionEnabled(false);
      setStartIndex(totalLogos);
      setTimeout(() => {
        setTransitionEnabled(true);
        setStartIndex(totalLogos - 1);
      }, 20); // Small delay to allow DOM to catch up
    } else {
      setStartIndex((prev) => prev - 1);
    }
  };

  const getTranslateX = () => {
    const percentage = (100 / logos.length) * startIndex;
    return `-${percentage}%`;
  };

  return (
    <section className="pt-10">
      <div className="container mx-auto max-w-screen-xl text-center">
        <div className="flex items-center justify-center gap-4 sm:gap-8 lg:gap-40">
          {/* Left Arrow */}
          <button
            onClick={movePrev}
            className="text-white p-3 rounded-full cursor-pointer hover:bg-[#101010] text-xl"
          >
            <FaChevronLeft />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden w-full">
            <div
              className="flex"
              style={{
                transform: `translateX(${getTranslateX()})`,
                transition: transitionEnabled ? 'transform 0.5s ease-in-out' : 'none',
                width: `${(logos.length * 100) / visibleCount}%`,
              }}
            >
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center border rounded-lg shadow-md p-2 sm:p-3"
                  style={{ width: `${100 / logos.length}%` }}
                >
                  <img
                    src={logo}
                    alt={`Logo ${index}`}
                    className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={moveNext}
            className="text-white p-3 rounded-full cursor-pointer hover:bg-[#101010] text-xl"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;

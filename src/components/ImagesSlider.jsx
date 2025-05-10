import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const ImagesSlider = ({ images, title, para }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setItemsPerView(3); // Desktop
      } else if (width >= 640) {
        setItemsPerView(2); // Tablet
      } else {
        setItemsPerView(1); // Mobile
      }
    };

    updateItemsPerView(); // Initial check
    window.addEventListener("resize", updateItemsPerView);

    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const visibleImages = [];
  for (let i = 0; i < itemsPerView; i++) {
    visibleImages.push(images[(startIndex + i) % images.length]);
  }

  return (
    <>
      <div className="text-center mb-10 sm:mb-16">
        <h2 className="text-2xl sm:text-4xl text-[#B2B1B1] tracking-wide">
          {title}
        </h2>
        <p className="text-[#E9204F] mt-2 text-sm sm:text-base">{para}</p>
        <div className="w-66 h-[1px] mt-4 mx-auto bg-[#E9204F] rounded-full"></div>
      </div>
      <div className="relative">
        <div className="flex overflow-hidden gap-5 px-5">
          {visibleImages.map((image, index) => {
            const Wrapper = image.buttonLink ? Link : "div";
            const wrapperProps = image.buttonLink
              ? { to: image.buttonLink, className: "block group" }
              : { className: "group" };

            return (
              <div
                key={index}
                className={`flex-shrink-0 w-full transition-transform duration-300 ${
                  itemsPerView === 2
                    ? "sm:w-1/2"
                    : itemsPerView === 3
                    ? "lg:w-1/3 sm:w-1/2"
                    : "w-full"
                }`}
              >
                <Wrapper {...wrapperProps}>
                  <div className="overflow-hidden">
                    <img
                      src={image.src || image}
                      alt={`Slide ${index}`}
                      className="w-full h-64 sm:h-72 object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>

                  {image.description || image.buttonText ? (
                    <div className="mt-4 ">
                      {image.description && (
                        <p className="text-sm text-[#DBDBDB] mb-4">
                          {image.description}
                        </p>
                      )}
                      {image.buttonText && (
                        <p className="inline-block text-[#E9204F] border-b border-b-gray-700 group-hover:border-b-[#c71a43] transition">
                          {image.buttonText}
                        </p>
                      )}
                    </div>
                  ) : null}
                </Wrapper>
              </div>
            );
          })}
        </div>

        {/* Arrows for sm+ screens (absolute left/right) */}
        <div className="hidden sm:block">
          <button
            onClick={handlePrev}
            className="absolute -left-12 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full z-10 text-2xl cursor-pointer"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="absolute -right-16 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full z-10 text-2xl cursor-pointer"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Arrows below image for mobile only */}
        <div className="flex justify-center gap-6 mt-4 sm:hidden ">
          <button
            onClick={handlePrev}
            className="text-white p-2 rounded-full bg-black bg-opacity-60 cursor-pointer"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="text-white p-2 rounded-full bg-black bg-opacity-60 cursor-pointer"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-10">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === startIndex ? "bg-[#E9204F]" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </>
  );
};

export default ImagesSlider;

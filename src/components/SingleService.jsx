import React, { useState, useEffect } from "react";

const SingleService = ({
  logo,
  bgImage,
  title,
  description,
  aboutPara1,
  aboutPara2,
  gridItems
}) => {

  const MiniSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleMouseEnter = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    return (
      <div
        className="relative w-full h-full overflow-hidden perspective-1000"
        onMouseEnter={handleMouseEnter}
      >
        {images.map((img, idx) => {
          const isCurrent = idx === currentIndex;
          return (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                isCurrent ? "opacity-100 z-20" : "opacity-0 z-10"
              }`}
            >
              <img
                src={img}
                alt={`Slide ${idx}`}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    );
  };
  
  

  return (
    <section>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          height: "auto",
        }}
        className="pt-40 sm:pt-60 pb-20"
      >
        <div className="flex items-center max-w-screen-xl mx-auto gap-6 sm:gap-20 px-4">
          <img src={logo} alt="Service Icon" className="w-16 sm:w-auto" />
          <div className="text-[#B2B1B1] flex flex-col">
            <h1 className="text-xl sm:text-4xl tracking-wide mb-2 uppercase">
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full h-[1px] mx-auto bg-[#434343] rounded-full"></div>
      <div className="bg-[#101010] px-4 sm:px-0">
        <div className="max-w-screen-xl mx-auto py-10 sm:py-16 tracking-wide">
          <p className="text-[#B2B1B1] text-sm sm:text-xl py-5 leading-7 sm:leading-10 font-glegoo">
            {aboutPara1}
          </p>
          <div className="text-[#E9204F] text-lg sm:text-2xl leading-7 sm:leading-14 mt-6 sm:mt-10">
            {aboutPara2
              .split(".")
              .filter((sentence) => sentence.trim() !== "")
              .map((sentence, idx) => (
                <p key={idx}>{sentence.trim()}.</p>
              ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] mx-auto bg-[#434343] rounded-full"></div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 sm:py-20 px-5 sm:px-0 bg-black text-white max-w-screen-xl mx-auto">
        {gridItems.map((item, index) => (
          <div
            key={index}
            className={`aspect-[4/3] ${
              item.type === "text"
                ? "bg-white text-black p-4 sm:p-6 flex items-center justify-center"
                : ""
            }`}
          >
            {item.type === "slider" ? (
              <MiniSlider images={item.images} />
            ) : (
              <div className="font-glegoo sm:px-8">
                <h2 className="font-semibold text-xl sm:text-2xl mb-2 text-[#121212]">
                  {item.title}
                </h2>
                <p className="text-sm leading-7 text-[#121212]">
                  {item.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SingleService;

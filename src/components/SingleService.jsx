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

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [images.length]);

    return (
      <div className="relative w-full h-full overflow-hidden">
        {images.map((img, idx) => {
          const isCurrent = idx === currentIndex;
          const isPrevious =
            idx === (currentIndex - 1 + images.length) % images.length;

          return (
            <img
              key={idx}
              src={img}
              alt={`Slide ${idx}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 ease-in-out ${
                isCurrent
                  ? "translate-y-0 z-20"
                  : isPrevious
                  ? "translate-y-full z-10"
                  : "-translate-y-full z-0"
              }`}
            />
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
            <p className=" max-w-[22rem] text-xs font-glegoo leading-6">
              {description}
            </p>
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
          <div className="text-[#555454] text-lg sm:text-3xl leading-7 sm:leading-14 mt-6 sm:mt-10">
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

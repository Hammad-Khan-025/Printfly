import React from "react";

const SingleService = ({
  logo,
  bgImage,
  title,
  aboutPara1,
  aboutPara2,
  gridItems,
}) => {
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
            className={`aspect-[4/3] overflow-hidden flex ${
              item.type === "text"
                ? "bg-white text-black p-4 sm:p-6 items-center justify-center"
                : "bg-black"
            }`}
          >
            {item.type === "slider" ? (
              <img
                src={item.image}
                alt={`Grid item ${index}`}
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
              />
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
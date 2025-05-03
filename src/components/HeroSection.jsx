import React from "react";
import bannerImg from "../assets/home-images/banner-image.png";

const HeroSection = () => {
  return (
    <div className="bg-black text-white flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto px-5 sm:px-0 pt-5 pb-0 gap-10 md:gap-20  mt-10 sm:mt-0 ">
      {/* Text Section */}
      <div className="max-w-md text-[#B2B1B1] flex flex-col">
        <h2 className="text-2xl md:text-5xl text-center">We’re a digital</h2>
        <h1 className="tracking-widest text-6xl md:text-9xl text-center mb-2 sm:-mt-4">agency</h1>
        <p className="mt-6 text-sm leading-7 font-glegoo text-[#B2B1B1]">
          We are a creative digital agency specializing in {" "}
          <span className="text-[#E9204F]">
            graphic design, web design, and e-learning development
          </span>
          , helping brands stand out with innovative solutions. Let’s bring your vision to life!
        </p>
      </div>

      {/* Image Section */}
<div className="relative sm:-mr-28">
  <img
    src={bannerImg}
    alt="Vibrant digital eye illustration"
    className="object-cover w-[800px] rounded-xl shadow-2xl"
  />
</div>

    </div>
  );
};

export default HeroSection;
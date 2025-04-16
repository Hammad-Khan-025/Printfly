import React from "react";
import eyeImage from "../assets/home-images/eye-image.png";

const HeroSection = () => {
  return (
    <div className="bg-black text-white flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto p-5 sm:p-8 gap-10 mt-10 sm:mt-0">
      {/* Text Section */}
      <div className="max-w-sm text-[#B2B1B1] flex flex-col">
        <h2 className="text-2xl sm:text-4xl text-center">We’re a digital</h2>
        <h1 className="tracking-widest text-6xl sm:text-8xl text-center mb-2">agency</h1>
        <p className="mt-6 text-sm leading-6">
          We are a creative digital agency specializing in {" "}
          <span className="text-[#E9204F]">
            graphic design, web design, and e-learning development
          </span>
          , helping brands stand out with innovative solutions. Let’s bring your vision to life!
        </p>
      </div>
      {/* Image Section */}
      <div className="max-w-4xl">
        <img
          src={eyeImage}
          alt="Vibrant digital eye illustration"
          className="object-cover w-[1100px] rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
import React, { useState } from "react";
import eyeImage from "../assets/home-images/eye-image.png";
import icon1 from "../assets/home-images/icon1.png";
import icon2 from "../assets/home-images/icon2.png";
import icon3 from "../assets/home-images/icon3.png";
import icon4 from "../assets/home-images/icon4.png";
import icon5 from "../assets/home-images/icon5.png";
import icon6 from "../assets/home-images/icon6.png";
import icon7 from "../assets/home-images/icon7.png";
import icon8 from "../assets/home-images/icon8.png";
import icon9 from "../assets/home-images/icon9.png";
import icon10 from "../assets/home-images/icon10.png";
import icon11 from "../assets/home-images/icon11.png";
import icon12 from "../assets/home-images/icon12.png";
import { FaChevronRight } from "react-icons/fa6";

const Home = () => {
  const services = [
    { title: "Graphic Designing", icon: icon1 },
    { title: "UI/UX Design", icon: icon2 },
    { title: "E-Learning Training Courses", icon: icon3 },
    { title: "Desktop Publication", icon: icon4 },
    { title: "Web & App Development", icon: icon5 },
    { title: "E-Learning Training Videos", icon: icon6 },
    { title: "Illustration Design", icon: icon7 },
    { title: "Search Engine Optimization", icon: icon8 },
    { title: "Documentary Videos", icon: icon9 },
    { title: "Printing Publication", icon: icon10 },
    { title: "E-Commerce Store Services", icon: icon11 },
    { title: "Illustrations Videos", icon: icon12 },
  ];

  const [activeService, setActiveService] = useState(null);

  const handleClick = (index) => {
    setActiveService(index);
  };

  return (
    <article className="pt-20">
      {/* hero section */}
      <div className=" bg-black text-white flex flex-col md:flex-row items-center justify-center max-w-screen-xl mx-auto p-5 sm:p-8 gap-10 mt-10 sm:mt-0">
        {/* Text Section */}
        <div className="max-w-sm text-[#B2B1B1] flex flex-col">
          <h2 className="text-2xl sm:text-4xl text-center">We’re a digital</h2>
          <h1 className="tracking-widest text-6xl sm:text-8xl text-center mb-2">
            agency
          </h1>
          <p className="mt-6 text-sm leading-6">
            We are a creative digital agency specializing in{" "}
            <span className="text-[#E9204F]">
              graphic design, web design, and e-learning development
            </span>
            , helping brands stand out with innovative solutions. Let’s bring
            your vision to life!
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

      <section className="bg-[#101010] border-t border-b border-[#434343] pt-3 sm:pt-10 pb-5 sm:pb-20">
        <div className="py-10 px-4 max-w-screen-xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl text-[#B2B1B1] tracking-wide">
              SERVICES
            </h2>
            <p className="text-[#E9204F] mt-2 text-sm sm:text-base">
              we work with you, not for you
            </p>
            <div className="w-66 h-[1px] mt-4 mx-auto bg-[#E9204F] rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={`flex items-center justify-between p-4 transition-all uppercase cursor-pointer ${
                  activeService === index
                    ? "bg-[#E9204F] text-white"
                    : "bg-[#D9D9D9] text-black hover:bg-[#E9204F] hover:text-white"
                }`}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-10 sm:w-16 h-10 sm:h-16"
                  />
                  <span className="font-medium text-sm sm:text-lg text-start">
                    {service.title}
                  </span>
                </div>
                <FaChevronRight />
              </button>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};

export default Home;

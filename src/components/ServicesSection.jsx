import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

import icon1 from "../assets/home-images/services-images/icon1.png";
import icon2 from "../assets/home-images/services-images/icon2.png";
import icon3 from "../assets/home-images/services-images/icon3.png";
import icon4 from "../assets/home-images/services-images/icon4.png";
import icon5 from "../assets/home-images/services-images/icon5.png";
import icon6 from "../assets/home-images/services-images/icon6.png";
import icon7 from "../assets/home-images/services-images/icon7.png";
import icon8 from "../assets/home-images/services-images/icon8.png";
import icon9 from "../assets/home-images/services-images/icon9.png";
import icon10 from "../assets/home-images/services-images/icon10.png";
import icon11 from "../assets/home-images/services-images/icon11.png";
import icon12 from "../assets/home-images/services-images/icon12.png";

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    { title: "Graphic Designing", icon: icon1, path: "/graphic-designing" },
    { title: "UI/UX Design", icon: icon2, path: "/ui-ux-design" },
    { title: "E-Learning Training Courses", icon: icon3, path: "/e-learning-training-courses" },
    { title: "Desktop Publication", icon: icon4, path: "/desktop-publication" },
    { title: "Web & App Development", icon: icon5, path: "/web-app-development" },
    { title: "E-Learning Training Videos", icon: icon6, path: "/e-learning-training-videos" },
    { title: "Illustration Design", icon: icon7, path: "/illustration-design" },
    { title: "Search Engine Optimization", icon: icon8, path: "/search-engine-optimization" },
    { title: "Documentary Videos", icon: icon9, path: "/documentary-videos" },
    { title: "Printing Publication", icon: icon10, path: "/printing-publication" },
    { title: "E-Commerce Store Services", icon: icon11, path: "/ecommerce-store-services" },
    { title: "Illustrations Videos", icon: icon12, path: "/illustrations-videos" },
  ];
  

  return (
    <section className="bg-[#101010] border-t border-b border-[#434343] pt-3 sm:pt-10 pb-5 sm:pb-20">
      <div className="py-10 px-4 max-w-screen-xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl text-[#B2B1B1] tracking-wide">SERVICES</h2>
          <p className="text-[#E9204F] mt-2 text-sm sm:text-base">we work with you, not for you</p>
          <div className="w-66 h-[1px] mt-4 mx-auto bg-[#E9204F] rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              onClick={() => setActiveService(index)}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

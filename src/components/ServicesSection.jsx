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
    {
      title: "Graphic Designing",
      icon: icon1,
      path: "/services/graphic-designing",
    },
    { title: "UI/UX Design", icon: icon2, path: "/services/ui-ux-design" },
    {
      title: "E-Learning Training Courses",
      icon: icon3,
      path: "/services/e-learning-training-courses",
    },
    {
      title: "Desktop Publication",
      icon: icon4,
      path: "/services/desktop-publication",
    },
    {
      title: "Web & App Development",
      icon: icon5,
      path: "/services/web-app-development",
    },
    {
      title: "E-Learning Training Videos",
      icon: icon6,
      path: "/services/e-learning-training-videos",
    },
    {
      title: "Illustration Design",
      icon: icon7,
      path: "/services/illustration-design",
    },
    {
      title: "Search Engine Optimization",
      icon: icon8,
      path: "/services/search-engine-optimization",
    },
    {
      title: "Documentary Videos",
      icon: icon9,
      path: "/services/documentary-videos",
    },
    {
      title: "Printing Publication",
      icon: icon10,
      path: "/services/printing-publication",
    },
    {
      title: "E-Commerce Store Services",
      icon: icon11,
      path: "/services/ecommerce-store-services",
    },
    {
      title: "Illustrations Videos",
      icon: icon12,
      path: "/services/illustrations-videos",
    },
  ];

  return (
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.path}
              onClick={() => setActiveService(index)}
              className={`relative group flex items-center justify-between p-4 uppercase cursor-pointer overflow-hidden ${
                activeService === index ? "text-white" : "text-black"
              }`}
            >
              {/* Pseudo-element for background */}
              <span className="absolute inset-0 bg-[#D9D9D9] before:absolute before:inset-0 before:bg-[#E9204F] before:scale-x-0 before:origin-left before:transition-transform before:duration-500 group-hover:before:scale-x-100"></span>

              {/* Content */}
              <div className="relative z-10 flex items-center gap-4 group-hover:text-white transition-colors duration-300">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-10 sm:w-16 h-10 sm:h-16"
                />
                <span className="font-medium text-sm sm:text-lg text-start">
                  {service.title}
                </span>
              </div>
              <FaChevronRight className="relative z-10 group-hover:text-white transition-colors duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

import icon1a from "../assets/home-images/services-images/icon1a.png";
import icon2a from "../assets/home-images/services-images/icon2a.png";
import icon3a from "../assets/home-images/services-images/icon3a.png";
import icon4a from "../assets/home-images/services-images/icon4a.png";
import icon5a from "../assets/home-images/services-images/icon5a.png";
import icon6a from "../assets/home-images/services-images/icon6a.png";
import icon7a from "../assets/home-images/services-images/icon7a.png";
import icon8a from "../assets/home-images/services-images/icon8a.png";
import icon9a from "../assets/home-images/services-images/icon9a.png";
import icon10a from "../assets/home-images/services-images/icon10a.png";
import icon11a from "../assets/home-images/services-images/icon11a.png";
import icon12a from "../assets/home-images/services-images/icon12a.png";

import icon1b from "../assets/home-images/services-images/icon1b.png";
import icon2b from "../assets/home-images/services-images/icon2b.png";
import icon3b from "../assets/home-images/services-images/icon3b.png";
import icon4b from "../assets/home-images/services-images/icon4b.png";
import icon5b from "../assets/home-images/services-images/icon5b.png";
import icon6b from "../assets/home-images/services-images/icon6b.png";
import icon7b from "../assets/home-images/services-images/icon7b.png";
import icon8b from "../assets/home-images/services-images/icon8b.png";
import icon9b from "../assets/home-images/services-images/icon9b.png";
import icon10b from "../assets/home-images/services-images/icon10b.png";
import icon11b from "../assets/home-images/services-images/icon11b.png";
import icon12b from "../assets/home-images/services-images/icon12b.png";

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      title: "Graphic Designing",
      iconA: icon1a,
      iconB: icon1b,
      path: "/services/graphic-designing",
    },
    {
      title: "UI/UX Design",
      iconA: icon2a,
      iconB: icon2b,
      path: "/services/ui-ux-design",
    },
    {
      title: "E-Learning Training Courses",
      iconA: icon3a,
      iconB: icon3b,
      path: "/services/e-learning-training-courses",
    },
    {
      title: "Desktop Publication",
      iconA: icon4a,
      iconB: icon4b,
      path: "/services/desktop-publication",
    },
    {
      title: "Web & App Development",
      iconA: icon5a,
      iconB: icon5b,
      path: "/services/web-app-development",
    },
    {
      title: "E-Learning Training Videos",
      iconA: icon6a,
      iconB: icon6b,
      path: "/services/e-learning-training-videos",
    },
    {
      title: "Illustration Design",
      iconA: icon7a,
      iconB: icon7b,
      path: "/services/illustration-design",
    },
    {
      title: "Search Engine Optimization",
      iconA: icon8a,
      iconB: icon8b,
      path: "/services/search-engine-optimization",
    },
    {
      title: "Documentary Videos",
      iconA: icon9a,
      iconB: icon9b,
      path: "/services/documentary-videos",
    },
    {
      title: "Printing Publication",
      iconA: icon10a,
      iconB: icon10b,
      path: "/services/printing-publication",
    },
    {
      title: "E-Commerce Store Services",
      iconA: icon11a,
      iconB: icon11b,
      path: "/services/ecommerce-store-services",
    },
    {
      title: "Illustrations Videos",
      iconA: icon12a,
      iconB: icon12b,
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
                <div className="relative w-10 sm:w-16 h-10 sm:h-16">
                  <img
                    src={service.iconA}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                  />
                  <img
                    src={service.iconB}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />
                </div>

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

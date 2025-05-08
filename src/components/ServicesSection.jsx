import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaArrowRight } from "react-icons/fa6";

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
      description:
        "Graphic designing is the art of visual communication that brings ideas to life through creativity and style. It combines aesthetics and strategy to deliver powerful, memorable messages.",
    },
    {
      title: "UI/UX Design",
      iconA: icon2a,
      iconB: icon2b,
      path: "/services/ui-ux-design",
      description:
        "Graphic designing is the art of visual communication that brings ideas to life through creativity and style. It combines aesthetics and strategy to deliver powerful, memorable messages.",
    },
    {
      title: "E-Learning Training Courses",
      iconA: icon3a,
      iconB: icon3b,
      path: "/services/e-learning-training-courses",
      description:
        "Graphic designing is the art of visual communication that brings ideas to life through creativity and style. It combines aesthetics and strategy to deliver powerful, memorable messages.",
    },
    {
      title: "Desktop Publication",
      iconA: icon4a,
      iconB: icon4b,
      path: "/services/desktop-publication",
      description:
        "Graphic designing is the art of visual communication that brings ideas to life through creativity and style. It combines aesthetics and strategy to deliver powerful, memorable messages.",
    },
    {
      title: "Web & App Development",
      iconA: icon5a,
      iconB: icon5b,
      path: "/services/web-app-development",
      description:
        "Graphic designing is the art of visual communication that brings ideas to life through creativity and style. It combines aesthetics and strategy to deliver powerful, memorable messages.",
    },
    {
      title: "E-Learning Training Videos",
      iconA: icon6a,
      iconB: icon6b,
      path: "/services/e-learning-training-videos",
      description:
        "Graphic designing is the art of visual communication that brings ideas to life through creativity and style. It combines aesthetics and strategy to deliver powerful, memorable messages.",
    },
    {
      title: "Illustration Design",
      iconA: icon7a,
      iconB: icon7b,
      path: "/services/illustration-design",
      description:
        "Graphic designing is the art of visual communication that brings ideas to life through creativity and style. It combines aesthetics and strategy to deliver powerful, memorable messages.",
    },
    {
      title: "Search Engine Optimization",
      iconA: icon8a,
      iconB: icon8b,
      path: "/services/search-engine-optimization",
      description:
        "Graphic designing is the art of visual communication that brings ideas to life through creativity and style. It combines aesthetics and strategy to deliver powerful, memorable messages.",
    },
    {
      title: "Documentary Videos",
      iconA: icon9a,
      iconB: icon9b,
      path: "/services/documentary-videos",
      description:
        "Graphic designing is the art of visual communication that brings ideas to life through creativity and style. It combines aesthetics and strategy to deliver powerful, memorable messages.",
    },
    {
      title: "Printing Publication",
      iconA: icon10a,
      iconB: icon10b,
      path: "/services/printing-publication",
      description:
        "Graphic designing is the art of visual communication that brings ideas to life through creativity and style. It combines aesthetics and strategy to deliver powerful, memorable messages.",
    },
    {
      title: "E-Commerce Store Services",
      iconA: icon11a,
      iconB: icon11b,
      path: "/services/ecommerce-store-services",
      description:
        "Graphic designing is the art of visual communication that brings ideas to life through creativity and style. It combines aesthetics and strategy to deliver powerful, memorable messages.",
    },
    {
      title: "Illustrations Videos",
      iconA: icon12a,
      iconB: icon12b,
      path: "/services/illustrations-videos",
      description:
        "Graphic designing is the art of visual communication that brings ideas to life through creativity and style. It combines aesthetics and strategy to deliver powerful, memorable messages.",
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
              className={`group p-6 sm:p-8 bg-[#D9D9D9] text-black hover:bg-[#E9204F] hover:text-white transition-all duration-500 ease-in-out`}
            >
              <div className="flex flex-col justify-between h-full transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex flex-col gap-4">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 relative">
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
                  <h1 className="text-lg sm:text-xl uppercase">
                    {service.title}
                  </h1>
                  <p className="font-glegoo">
                    {service.description}
                  </p>
                </div>

                {/* Arrow appears from bottom */}
                <div className="mt-6 h-5 overflow-hidden">
                  <FaArrowRight className="transform translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out text-xl sm:text-2xl" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

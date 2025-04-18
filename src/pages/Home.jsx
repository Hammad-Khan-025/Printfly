import React, { useState } from "react";
import clientImage from "../assets/home-images/work-images/client-image.png";
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

import workSlider1 from "../assets/home-images/work-images/carousal1.png";
import workSlider2 from "../assets/home-images/work-images/carousal2.png";
import workSlider3 from "../assets/home-images/work-images/laptop.jpg";
import workSlider4 from "../assets/home-images/work-images/client-image.png";
import workSlider5 from "../assets/home-images/work-images/shoes.jpg";

import blogSlider1 from "../assets/home-images/blog-images/carousal2.png";
import blogSlider2 from "../assets/home-images/blog-images/client-image.png";
import blogSlider3 from "../assets/home-images/blog-images/carousal1.png";
import blogSlider4 from "../assets/home-images/blog-images/laptop.jpg";
import blogSlider5 from "../assets/home-images/blog-images/shoes.jpg";

import LogoSlider from "../components/LogoSlider";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import ImagesSlider from "../components/ImagesSlider";

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

  const workSliderImages = [workSlider1, workSlider2, workSlider3, workSlider4, workSlider5];
  const blogSliderImages = [blogSlider1, blogSlider2, blogSlider3, blogSlider4, blogSlider5];

  return (
    <article className="pt-20">
      {/* Home Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Services Section */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Work Section */}
      <section id="work" className="max-w-screen-xl mx-auto py-14">
        <ImagesSlider images={workSliderImages} title='WORK' para='things we’ve made' /> 
      </section>

      <div className="w-full h-[1px] mt-4 mx-auto bg-[#434343] rounded-full"></div>

      {/* Clients Section */}
      <section id="clients" className="py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row justify-center items-center text-center gap-10 sm:gap-20 mx-5">
          <img src={clientImage} alt="" />
          <div>
            <h1 className="text-[#B2B1B1] text-2xl sm:text-4xl">WHAT CLIENT SAY.</h1>
            <h2 className="text-[#E9204F] mt-3">from all over the world </h2>
            <div className="w-full h-[1px] mt-3 mx-auto bg-[#E9204F] rounded-full"></div>
            <p className="text-[#535252] max-w-[23rem] mt-3">
              Client testimonials are a crucial part of a digital agency's branding and marketing strategy.
              They provide social proof and help build trust with potential clients.
            </p>
          </div>
        </div>
          <LogoSlider />
      </section>

      <div className="w-full h-[1px] mt-4 mx-auto bg-[#434343] rounded-full"></div>

      {/* Blogs Section */}
      <section id="blogs" className="max-w-screen-xl mx-auto py-14">
        <ImagesSlider images={blogSliderImages} title='LATEST NEWS & BLOGS' para='check out some of our thinking' />
      </section>

      {/* Contact Section */}
      <section id="contact" className="">
      </section>
    </article>
  );
};

export default Home;

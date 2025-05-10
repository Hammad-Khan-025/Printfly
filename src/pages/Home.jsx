import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import clientImage from "../assets/home-images/client-image.jpg";
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

import workSlider1 from "../assets/home-images/work-images/slider1.jpg";
import workSlider2 from "../assets/home-images/work-images/slider2.jpg";
import workSlider3 from "../assets/home-images/work-images/slider3.jpg";
import workSlider4 from "../assets/home-images/work-images/slider4.jpg";
import workSlider5 from "../assets/home-images/work-images/slider5.jpg";

import blogSlider1 from "../assets/home-images/blog-images/slider1.jpg";
import blogSlider2 from "../assets/home-images/blog-images/slider2.jpg";
import blogSlider3 from "../assets/home-images/blog-images/slider3.jpg";
import blogSlider4 from "../assets/home-images/blog-images/slider4.jpg";
import blogSlider5 from "../assets/home-images/blog-images/slider5.jpg";

import { blogsData } from "../components/BlogData";

import LogoSlider from "../components/LogoSlider";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import ImagesSlider from "../components/ImagesSlider";

const Home = () => {
  const location = useLocation();
  const [scrollToId, setScrollToId] = useState(null);

  useEffect(() => {
    if (location.state && location.state.scrollToId) {
      setScrollToId(location.state.scrollToId);
    }
  }, [location.state]);

  useEffect(() => {
    if (scrollToId) {
      const section = document.getElementById(scrollToId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      // Clear the state so it doesn't trigger on subsequent renders
      setScrollToId(null);
    }
  }, [scrollToId]);

  const services = [
    { title: "Graphic Designing", icon: icon1a },
    { title: "UI/UX Design", icon: icon2a },
    { title: "E-Learning Training Courses", icon: icon3a },
    { title: "Desktop Publication", icon: icon4a },
    { title: "Web & App Development", icon: icon5a },
    { title: "E-Learning Training Videos", icon: icon6a },
    { title: "Illustration Design", icon: icon7a },
    { title: "Search Engine Optimization", icon: icon8a },
    { title: "Documentary Videos", icon: icon9a },
    { title: "Printing Publication", icon: icon10a },
    { title: "E-Commerce Store Services", icon: icon11a },
    { title: "Illustrations Videos", icon: icon12a },
  ];

  const workSliderImages = [workSlider1, workSlider2, workSlider3, workSlider4, workSlider5];

  const blogSliderImages = blogsData.map((blog) => ({
    id: blog.id,
    src: blog.bannerImage,
    description: blog.title,
    buttonText: blog.buttonText,
    buttonLink: `/blogs/${blog.id}`,
  }));

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
        <ImagesSlider images={workSliderImages} title="WORK" para="things we’ve made" />
      </section>

      <div className="w-full h-[1px] mt-4 mx-auto bg-[#434343] rounded-full"></div>

      {/* Clients Section */}
      <section id="clients" className="py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row justify-center items-center text-center gap-10 sm:gap-20 mx-5">
          <div className="sm:max-w-[30rem] overflow-hidden">
            <img
              src={clientImage}
              alt=""
              className="w-full h-auto object-cover filter grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
            />
          </div>
          <div>
            <h1 className="text-[#B2B1B1] text-2xl sm:text-4xl">WHAT CLIENT SAY.</h1>
            <h2 className="text-[#E9204F] mt-3">from all over the world </h2>
            <div className="w-60 sm:w-full h-[1px] mt-3 mx-auto bg-[#E9204F] rounded-full"></div>
            <p className="text-[#535252] max-w-[23rem] mt-3">
              Client testimonials are a crucial part of a digital agency's branding and marketing strategy. They provide
              social proof and help build trust with potential clients.
            </p>
          </div>
        </div>
        {/* <LogoSlider /> */}
      </section>

      <div className="w-full h-[1px] mt-4 mx-auto bg-[#434343] rounded-full"></div>

      {/* Blogs Section */}
      <section id="blogs" className="max-w-screen-xl mx-auto py-14">
        <ImagesSlider
          images={blogSliderImages}
          title="LATEST NEWS & BLOGS"
          para="check out some of our thinking"
        />
      </section>

      {/* Contact Section */}
      <section id="contact" className=""></section>
    </article>
  );
};

export default Home;
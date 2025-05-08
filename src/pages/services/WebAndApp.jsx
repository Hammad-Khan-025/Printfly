import React from "react";
import bgImage from "../../assets/home-images/services-images/web-and-app/bgImage.png";
import logo from "../../assets/home-images/services-images/web-and-app/logo.png";

import img1a from "../../assets/home-images/services-images/web-and-app/img1/img1a.jpg";
import img1b from "../../assets/home-images/services-images/web-and-app/img1/img1b.jpg";
import img1c from "../../assets/home-images/services-images/web-and-app/img1/img1c.jpg";

import img2a from "../../assets/home-images/services-images/web-and-app/img2/img2a.jpg";
import img2b from "../../assets/home-images/services-images/web-and-app/img2/img2b.jpg";
import img2c from "../../assets/home-images/services-images/web-and-app/img2/img2c.jpg";

import img3a from "../../assets/home-images/services-images/web-and-app/img3/img3a.jpg";
import img3b from "../../assets/home-images/services-images/web-and-app/img3/img3b.jpg";
import img3c from "../../assets/home-images/services-images/web-and-app/img3/img3c.jpg";

import img4a from "../../assets/home-images/services-images/web-and-app/img4/img4a.jpg";
import img4b from "../../assets/home-images/services-images/web-and-app/img4/img4b.jpg";
import img4c from "../../assets/home-images/services-images/web-and-app/img4/img4c.jpg";

import img5a from "../../assets/home-images/services-images/web-and-app/img5/img5a.jpg";
import img5b from "../../assets/home-images/services-images/web-and-app/img5/img5b.jpg";
import img5c from "../../assets/home-images/services-images/web-and-app/img5/img5c.jpg";

import img6a from "../../assets/home-images/services-images/web-and-app/img6//img6a.jpg";
import img6b from "../../assets/home-images/services-images/web-and-app/img6//img6b.jpg";
import img6c from "../../assets/home-images/services-images/web-and-app/img6//img6c.jpg";

import slider1 from "../../assets/home-images/services-images/web-and-app/slider1.jpg";
import slider2 from "../../assets/home-images/services-images/web-and-app/slider2.jpg";
import slider3 from "../../assets/home-images/services-images/web-and-app/slider3.jpg";
import slider4 from "../../assets/home-images/services-images/web-and-app/slider4.jpg";
import slider5 from "../../assets/home-images/services-images/web-and-app/slider5.jpg";

import SingleService from "../../components/SingleService";
import ImagesSlider from "../../components/ImagesSlider";

const WebAndApp = () => {

  const sliderImages = [
    [img1a, img1b, img1c], 
    [img2a, img2b, img2c], 
    [img3a, img3b, img3c], 
    [img4a, img4b, img4c], 
    [img5a, img5b, img5c], 
    [img6a, img6b, img6c], 
  ];

  const gridItems = [
    {
      type: "slider",
      images: sliderImages[0],
    },
    {
      type: "text",
      title: "Custom Website Development:",
      content: `Responsive, SEO-friendly websites built to represent your brand and drive results.`,
    },
    {
      type: "slider",
      images: sliderImages[1],
    },
    {
      type: "text",
      title: "E-Commerce Development:",
      content: `Scalable, secure online stores that offer smooth shopping experiences and boost sales.`,
    },
    {
      type: "slider",
      images: sliderImages[2],
    },
    {
      type: "text",
      title: "Web Application Development:",
      content: `Complex, dynamic applications built for speed, functionality, and user engagement.`,
    },
    {
      type: "slider",
      images: sliderImages[3],
    },
    {
      type: "text",
      title: "Mobile App Development:",
      content: `Native and cross-platform apps (iOS and Android) designed to deliver top performance and usability.`,
    },
    {
      type: "slider",
      images: sliderImages[4],
    },
    {
      type: "text",
      title: "Content Management Systems (CMS):",
      content: `Easy-to-manage websites powered by platforms like WordPress, Webflow, Shopify, and custom solutions.`,
    },
    {
      type: "slider",
      images: sliderImages[5],
    },
    {
      type: "text",
      title: "Maintenance & Support:",
      content: `Ongoing updates, security monitoring, and performance optimization for all your digital products.`,
    },
  ];

  const images = [slider1, slider2, slider3, slider4, slider5];
  return (
    <article>
      <SingleService
        logo={logo}
        // bgImage={bgImage}
        title="web and app development"
        aboutPara1="At Print Fly Communications, we specialize in custom web and mobile app development that transforms ideas into seamless, scalable digital experiences. Whether you need a marketing website, a full-scale web application, or a feature-rich mobile app, we deliver high-performance solutions tailored to your goals."

        aboutPara2="Your website or app isn’t just a project - it’s your brand’s gateway to the world. We help you create smart, powerful, and beautiful digital solutions that deliver real results."
        gridItems={gridItems}
      />

    </article>
  );
};

export default WebAndApp;

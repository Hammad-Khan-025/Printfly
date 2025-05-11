import React from "react";
import bgImage from "../../assets/home-images/services-images/web-and-app/bgImage.png";
import logo from "../../assets/home-images/services-images/web-and-app/logo.png";

import img1 from "../../assets/home-images/services-images/web-and-app/img1.jpg";
import img2 from "../../assets/home-images/services-images/web-and-app/img2.jpg";
import img3 from "../../assets/home-images/services-images/web-and-app/img3.jpg";
import img4 from "../../assets/home-images/services-images/web-and-app/img4.jpg";
import img5 from "../../assets/home-images/services-images/web-and-app/img5.jpg";
import img6 from "../../assets/home-images/services-images/web-and-app/img6.jpg";


import SingleService from "../../components/SingleService";
import ImagesSlider from "../../components/ImagesSlider";

const WebAndApp = () => {

  const sliderImages = [img1, img2, img3, img4, img5, img6];

  const gridItems = [
    {
      type: "slider",
      image: sliderImages[0],
    },
    {
      type: "text",
      title: "Custom Website Development:",
      content: `Responsive, SEO-friendly websites built to represent your brand and drive results.`,
    },
    {
      type: "slider",
      image: sliderImages[1],
    },
    {
      type: "text",
      title: "E-Commerce Development:",
      content: `Scalable, secure online stores that offer smooth shopping experiences and boost sales.`,
    },
    {
      type: "slider",
      image: sliderImages[2],
    },
    {
      type: "text",
      title: "Web Application Development:",
      content: `Complex, dynamic applications built for speed, functionality, and user engagement.`,
    },
    {
      type: "slider",
      image: sliderImages[3],
    },
    {
      type: "text",
      title: "Mobile App Development:",
      content: `Native and cross-platform apps (iOS and Android) designed to deliver top performance and usability.`,
    },
    {
      type: "slider",
      image: sliderImages[4],
    },
    {
      type: "text",
      title: "Content Management Systems (CMS):",
      content: `Easy-to-manage websites powered by platforms like WordPress, Webflow, Shopify, and custom solutions.`,
    },
    {
      type: "slider",
      image: sliderImages[5],
    },
    {
      type: "text",
      title: "Maintenance & Support:",
      content: `Ongoing updates, security monitoring, and performance optimization for all your digital products.`,
    },
  ];

  // const images = [slider1, slider2, slider3, slider4, slider5];
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

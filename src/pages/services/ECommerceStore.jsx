import React from "react";
import bgImage from "../../assets/home-images/services-images/e-commerce-store/bgImage.png";
import logo from "../../assets/home-images/services-images/e-commerce-store/logo.png";

import img1 from "../../assets/home-images/services-images/e-commerce-store/img1.jpg";
import img2 from "../../assets/home-images/services-images/e-commerce-store/img2.jpg";
import img3 from "../../assets/home-images/services-images/e-commerce-store/img3.jpg";
import img4 from "../../assets/home-images/services-images/e-commerce-store/img4.jpg";
import img5 from "../../assets/home-images/services-images/e-commerce-store/img5.jpg";
import img6 from "../../assets/home-images/services-images/e-commerce-store/img6.jpg";

import slider1 from "../../assets/home-images/services-images/e-commerce-store/slider1.jpg";
import slider2 from "../../assets/home-images/services-images/e-commerce-store/slider2.jpg";
import slider3 from "../../assets/home-images/services-images/e-commerce-store/slider3.jpg";
import slider4 from "../../assets/home-images/services-images/e-commerce-store/slider4.jpg";
import slider5 from "../../assets/home-images/services-images/e-commerce-store/slider5.jpg";

import SingleService from "../../components/SingleService";
import ImagesSlider from "../../components/ImagesSlider";

const ECommerceStore = () => {

  const sliderImages = [img1, img2, img3, img4, img5, img6];

  const gridItems = [
    {
      type: "slider",
      image: sliderImages[0],
    },
    {
      type: "text",
      title: "Custom E-commerce Website Development:",
      content: `Fully tailored online stores with responsive design, optimized for all devices.`,
    },
    {
      type: "slider",
      image: sliderImages[1],
    },
    {
      type: "text",
      title: "Platform Expertise:",
      content: `Shopify, WooCommerce, Magento, Big Commerce, Wix, Squarespace, and custom-built platforms.`,
    },
    {
      type: "slider",
      image: sliderImages[2],
    },
    {
      type: "text",
      title: "Product Management and Catalog Setup: ",
      content: `Seamless organization of your products, categories, pricing, inventory, and more.`,
    },
    {
      type: "slider",
      image: sliderImages[3],
    },
    {
      type: "text",
      title: "Payment Gateway Integration:",
      content: `Secure, flexible payment solutions including PayPal, Stripe, Square, and others.`,
    },
    {
      type: "slider",
      image: sliderImages[4],
    },
    {
      type: "text",
      title: "Mobile-Optimized Shopping Experiences:",
      content: `Fast, easy-to-navigate stores that look great and perform well on any device.`,
    },
    {
      type: "slider",
      image: sliderImages[5],
    },
    {
      type: "text",
      title: "Ongoing Support and Maintenance:",
      content: `Continuous updates, security checks, and performance enhancements to keep your store at its best.`,
    },
  ];

  const images = [slider1, slider2, slider3, slider4, slider5];
  return (
    <article>
      <SingleService
        logo={logo}
        // bgImage={bgImage}
        title="E-Commerce Store services"
        aboutPara1="At Print Fly Communications, we design and develop powerful e-commerce stores that not only look stunning but are built to convert visitors into loyal customers."

        aboutPara2="Your e-commerce store is your brand’s virtual showroom. We help you build a professional, easy-to-manage, and conversion-optimized online store that attracts, engages, and sells - 24/7."
        gridItems={gridItems}
      />

    </article>
  );
};

export default ECommerceStore;

import React from "react";
import bgImage from "../../assets/home-images/services-images/e-commerce-store/bgImage.png";
import logo from "../../assets/home-images/services-images/e-commerce-store/logo.png";

import img1a from "../../assets/home-images/services-images/e-commerce-store/img1/img1a.png";
import img1b from "../../assets/home-images/services-images/e-commerce-store/img1/img1b.png";
import img1c from "../../assets/home-images/services-images/e-commerce-store/img1/img1c.png";

import img2a from "../../assets/home-images/services-images/e-commerce-store/img2/img2a.png";
import img2b from "../../assets/home-images/services-images/e-commerce-store/img2/img2b.png";
import img2c from "../../assets/home-images/services-images/e-commerce-store/img2/img2c.png";

import img3a from "../../assets/home-images/services-images/e-commerce-store/img3/img3a.png";
import img3b from "../../assets/home-images/services-images/e-commerce-store/img3/img3b.png";
import img3c from "../../assets/home-images/services-images/e-commerce-store/img3/img3c.png";

import img4a from "../../assets/home-images/services-images/e-commerce-store/img4/img4a.png";
import img4b from "../../assets/home-images/services-images/e-commerce-store/img4/img4b.png";
import img4c from "../../assets/home-images/services-images/e-commerce-store/img4/img4c.png";

import img5a from "../../assets/home-images/services-images/e-commerce-store/img5/img5a.png";
import img5b from "../../assets/home-images/services-images/e-commerce-store/img5/img5b.png";
import img5c from "../../assets/home-images/services-images/e-commerce-store/img5/img5c.png";

import img6a from "../../assets/home-images/services-images/e-commerce-store/img6//img6a.png";
import img6b from "../../assets/home-images/services-images/e-commerce-store/img6//img6b.png";
import img6c from "../../assets/home-images/services-images/e-commerce-store/img6//img6c.png";

import slider1 from "../../assets/home-images/services-images/e-commerce-store/slider1.png";
import slider2 from "../../assets/home-images/services-images/e-commerce-store/slider2.png";
import slider3 from "../../assets/home-images/services-images/e-commerce-store/slider3.png";
import slider4 from "../../assets/home-images/services-images/e-commerce-store/slider4.png";
import slider5 from "../../assets/home-images/services-images/e-commerce-store/slider5.png";

import SingleService from "../../components/SingleService";
import ImagesSlider from "../../components/ImagesSlider";

const ECommerceStore = () => {

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
      title: "Custom E-commerce Website Development:",
      content: `Fully tailored online stores with responsive design, optimized for all devices.`,
    },
    {
      type: "slider",
      images: sliderImages[1],
    },
    {
      type: "text",
      title: "Platform Expertise:",
      content: `Shopify, WooCommerce, Magento, Big Commerce, Wix, Squarespace, and custom-built platforms.`,
    },
    {
      type: "slider",
      images: sliderImages[2],
    },
    {
      type: "text",
      title: "Product Management and Catalog Setup: ",
      content: `Seamless organization of your products, categories, pricing, inventory, and more.`,
    },
    {
      type: "slider",
      images: sliderImages[3],
    },
    {
      type: "text",
      title: "Payment Gateway Integration:",
      content: `Secure, flexible payment solutions including PayPal, Stripe, Square, and others.`,
    },
    {
      type: "slider",
      images: sliderImages[4],
    },
    {
      type: "text",
      title: "Mobile-Optimized Shopping Experiences:",
      content: `Fast, easy-to-navigate stores that look great and perform well on any device.`,
    },
    {
      type: "slider",
      images: sliderImages[5],
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

      {/* client work section */}
      <div className="w-full h-[1px] bg-[#434343]"></div>
      <div className="py-10 sm:py-16 max-w-screen-xl mx-auto">
        <ImagesSlider
          images={images}
          title="CLIENT WORK"
          para="things we’ve made"
        />
      </div>
    </article>
  );
};

export default ECommerceStore;

import React from "react";
import bgImage from "../../assets/home-images/services-images/printing-publication/bgImage.png";
import logo from "../../assets/home-images/services-images/printing-publication/logo.png";

import img1a from "../../assets/home-images/services-images/printing-publication/img1/img1a.png";
import img1b from "../../assets/home-images/services-images/printing-publication/img1/img1b.png";
import img1c from "../../assets/home-images/services-images/printing-publication/img1/img1c.png";

import img2a from "../../assets/home-images/services-images/printing-publication/img2/img2a.png";
import img2b from "../../assets/home-images/services-images/printing-publication/img2/img2b.png";
import img2c from "../../assets/home-images/services-images/printing-publication/img2/img2c.png";

import img3a from "../../assets/home-images/services-images/printing-publication/img3/img3a.png";
import img3b from "../../assets/home-images/services-images/printing-publication/img3/img3b.png";
import img3c from "../../assets/home-images/services-images/printing-publication/img3/img3c.png";

import img4a from "../../assets/home-images/services-images/printing-publication/img4/img4a.png";
import img4b from "../../assets/home-images/services-images/printing-publication/img4/img4b.png";
import img4c from "../../assets/home-images/services-images/printing-publication/img4/img4c.png";

import img5a from "../../assets/home-images/services-images/printing-publication/img5/img5a.png";
import img5b from "../../assets/home-images/services-images/printing-publication/img5/img5b.png";
import img5c from "../../assets/home-images/services-images/printing-publication/img5/img5c.png";

import img6a from "../../assets/home-images/services-images/printing-publication/img6//img6a.png";
import img6b from "../../assets/home-images/services-images/printing-publication/img6//img6b.png";
import img6c from "../../assets/home-images/services-images/printing-publication/img6//img6c.png";

import slider1 from "../../assets/home-images/services-images/printing-publication/slider1.png";
import slider2 from "../../assets/home-images/services-images/printing-publication/slider2.png";
import slider3 from "../../assets/home-images/services-images/printing-publication/slider3.png";
import slider4 from "../../assets/home-images/services-images/printing-publication/slider4.png";
import slider5 from "../../assets/home-images/services-images/printing-publication/slider5.png";

import SingleService from "../../components/SingleService";
import ImagesSlider from "../../components/ImagesSlider";

const PrintingPublication = () => {

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
      title: "Offset Printing:",
      content: `Ideal for high-volume projects requiring sharp, consistent quality and color accuracy.`,
    },
    {
      type: "slider",
      images: sliderImages[1],
    },
    {
      type: "text",
      title: "Digital Printing:",
      content: `Perfect for short runs, quick turnarounds, and personalized prints with vibrant results.`,
    },
    {
      type: "slider",
      images: sliderImages[2],
    },
    {
      type: "text",
      title: "Large Format Printing:",
      content: `High-impact banners, posters, signs, and displays for events, promotions, and storefronts.`,
    },
    {
      type: "slider",
      images: sliderImages[3],
    },
    {
      type: "text",
      title: "Flexographic Printing:",
      content: `A fast and cost-effective solution for printing on packaging materials like labels and bags.`,
    },
    {
      type: "slider",
      images: sliderImages[4],
    },
    {
      type: "text",
      title: "3D Printing:",
      content: `Innovative prototyping and product development with detailed three-dimensional output.`,
    },
    {
      type: "slider",
      images: sliderImages[5],
    },
    {
      type: "text",
      title: "Screen Printing:",
      content: `Best for apparel, packaging, and specialty surfaces with bold, durable colors.`,
    },
  ];

  const images = [slider1, slider2, slider3, slider4, slider5];
  return (
    <article>
      <SingleService
        logo={logo}
        // bgImage={bgImage}
        title="Printing Publication"
        aboutPara1="At Print Fly Communications, we offer professional printing publication services that ensure your materials are produced with precision, vibrant quality, and a flawless finish. From business essentials to large marketing campaigns, we manage every detail-delivering printed products that make a powerful impression."

        aboutPara2="Printed materials are more than just paper -they’re a tangible expression of your brand's identity. We combine expert craftsmanship, cutting-edge technology, and a deep commitment to excellence to deliver publications that you'll be proud to share."
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

export default PrintingPublication;

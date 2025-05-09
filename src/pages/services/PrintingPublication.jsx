import React from "react";
import bgImage from "../../assets/home-images/services-images/printing-publication/bgImage.png";
import logo from "../../assets/home-images/services-images/printing-publication/logo.png";

import img1 from "../../assets/home-images/services-images/printing-publication/img1.jpg";
import img2 from "../../assets/home-images/services-images/printing-publication/img2.jpg";
import img3 from "../../assets/home-images/services-images/printing-publication/img3.jpg";
import img4 from "../../assets/home-images/services-images/printing-publication/img4.jpg";
import img5 from "../../assets/home-images/services-images/printing-publication/img5.jpg";
import img6 from "../../assets/home-images/services-images/printing-publication/img6.jpg";

import slider1 from "../../assets/home-images/services-images/printing-publication/slider1.jpg";
import slider2 from "../../assets/home-images/services-images/printing-publication/slider2.jpg";
import slider3 from "../../assets/home-images/services-images/printing-publication/slider3.jpg";
import slider4 from "../../assets/home-images/services-images/printing-publication/slider4.jpg";
import slider5 from "../../assets/home-images/services-images/printing-publication/slider5.jpg";

import SingleService from "../../components/SingleService";
import ImagesSlider from "../../components/ImagesSlider";

const PrintingPublication = () => {

  const sliderImages = [img1, img2, img3, img4, img5, img6];

  const gridItems = [
    {
      type: "slider",
      image: sliderImages[0],
    },
    {
      type: "text",
      title: "Offset Printing:",
      content: `Ideal for high-volume projects requiring sharp, consistent quality and color accuracy.`,
    },
    {
      type: "slider",
      image: sliderImages[1],
    },
    {
      type: "text",
      title: "Digital Printing:",
      content: `Perfect for short runs, quick turnarounds, and personalized prints with vibrant results.`,
    },
    {
      type: "slider",
      image: sliderImages[2],
    },
    {
      type: "text",
      title: "Large Format Printing:",
      content: `High-impact banners, posters, signs, and displays for events, promotions, and storefronts.`,
    },
    {
      type: "slider",
      image: sliderImages[3],
    },
    {
      type: "text",
      title: "Flexographic Printing:",
      content: `A fast and cost-effective solution for printing on packaging materials like labels and bags.`,
    },
    {
      type: "slider",
      image: sliderImages[4],
    },
    {
      type: "text",
      title: "3D Printing:",
      content: `Innovative prototyping and product development with detailed three-dimensional output.`,
    },
    {
      type: "slider",
      image: sliderImages[5],
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

    </article>
  );
};

export default PrintingPublication;

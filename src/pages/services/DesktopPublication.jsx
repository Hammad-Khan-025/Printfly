import React from "react";
import bgImage from "../../assets/home-images/services-images/desktop-publication/bgImage.png";
import logo from "../../assets/home-images/services-images/desktop-publication/logo.png";

import img1a from "../../assets/home-images/services-images/desktop-publication/img1/img1a.jpg";
import img1b from "../../assets/home-images/services-images/desktop-publication/img1/img1b.jpg";
import img1c from "../../assets/home-images/services-images/desktop-publication/img1/img1c.jpg";

import img2a from "../../assets/home-images/services-images/desktop-publication/img2/img2a.jpg";
import img2b from "../../assets/home-images/services-images/desktop-publication/img2/img2b.jpg";
import img2c from "../../assets/home-images/services-images/desktop-publication/img2/img2c.jpg";

import img3a from "../../assets/home-images/services-images/desktop-publication/img3/img3a.jpg";
import img3b from "../../assets/home-images/services-images/desktop-publication/img3/img3b.jpg";
import img3c from "../../assets/home-images/services-images/desktop-publication/img3/img3c.jpg";

import img4a from "../../assets/home-images/services-images/desktop-publication/img4/img4a.jpg";
import img4b from "../../assets/home-images/services-images/desktop-publication/img4/img4b.jpg";
import img4c from "../../assets/home-images/services-images/desktop-publication/img4/img4c.jpg";

import img5a from "../../assets/home-images/services-images/desktop-publication/img5/img5a.jpg";
import img5b from "../../assets/home-images/services-images/desktop-publication/img5/img5b.jpg";
import img5c from "../../assets/home-images/services-images/desktop-publication/img5/img5c.jpg";

import img6a from "../../assets/home-images/services-images/desktop-publication/img6//img6a.jpg";
import img6b from "../../assets/home-images/services-images/desktop-publication/img6//img6b.jpg";
import img6c from "../../assets/home-images/services-images/desktop-publication/img6//img6c.jpg";

import slider1 from "../../assets/home-images/services-images/desktop-publication/slider1.jpg";
import slider2 from "../../assets/home-images/services-images/desktop-publication/slider2.jpg";
import slider3 from "../../assets/home-images/services-images/desktop-publication/slider3.jpg";
import slider4 from "../../assets/home-images/services-images/desktop-publication/slider4.jpg";
import slider5 from "../../assets/home-images/services-images/desktop-publication/slider5.jpg";

import SingleService from "../../components/SingleService";
import ImagesSlider from "../../components/ImagesSlider";

const DesktopPublication = () => {

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
      title: "Brochures, Flyers, and Posters:",
      content: `Beautiful layouts that balance visuals and messaging to attract and engage.`,
    },
    {
      type: "slider",
      images: sliderImages[1],
    },
    {
      type: "text",
      title: "Magazines and Newsletters:",
      content: `Editorial designs that captivate readers and enhance storytelling.`,
    },
    {
      type: "slider",
      images: sliderImages[2],
    },
    {
      type: "text",
      title: "Books and eBooks:",
      content: `lear, structured layouts for a smooth and enjoyable reading experience.`,
    },
    {
      type: "slider",
      images: sliderImages[3],
    },
    {
      type: "text",
      title: "Corporate Reports and Manuals:",
      content: `Professional documents that reflect your company’s credibility and attention to detail`,
    },
    {
      type: "slider",
      images: sliderImages[4],
    },
    {
      type: "text",
      title: "Catalogs and Product Sheets:",
      content: `Organized, visually attractive materials that help showcase and sell your products.`,
    },
    {
      type: "slider",
      images: sliderImages[5],
    },
    {
      type: "text",
      title: "Multilingual Desktop Publishing:",
      content: `Formatting materials in different languages while maintaining visual consistency`,
    },
  ];

  const images = [slider1, slider2, slider3, slider4, slider5];
  return (
    <article>
      <SingleService
        logo={logo}
        // bgImage={bgImage}
        title="Desktop Publication"
        aboutPara1="At Print Fly communications, we specialize in Desktop Publishing (DTP) solutions that combine creativity with precision. Whether you need beautifully formatted brochures, magazines, eBooks, or corporate documents, we ensure your content is visually appealing, brand-consistent, and ready for print or digital distribution."

        aboutPara2="High-quality print-ready and digital files. Brand consistency across all materials. Fast turnaround times with meticulous quality control. Custom designs tailored to your audience and goals"
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

export default DesktopPublication;

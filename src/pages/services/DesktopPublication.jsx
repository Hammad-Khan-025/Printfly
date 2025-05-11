import React from "react";
import bgImage from "../../assets/home-images/services-images/desktop-publication/bgImage.png";
import logo from "../../assets/home-images/services-images/desktop-publication/logo.png";

import img1 from "../../assets/home-images/services-images/desktop-publication/img1.jpg";
import img2 from "../../assets/home-images/services-images/desktop-publication/img2.jpg";
import img3 from "../../assets/home-images/services-images/desktop-publication/img3.jpg";
import img4 from "../../assets/home-images/services-images/desktop-publication/img4.jpg";
import img5 from "../../assets/home-images/services-images/desktop-publication/img5.jpg";
import img6 from "../../assets/home-images/services-images/desktop-publication/img6.jpg";


import SingleService from "../../components/SingleService";
import ImagesSlider from "../../components/ImagesSlider";

const DesktopPublication = () => {

  const sliderImages = [img1, img2, img3, img4, img5, img6];

  const gridItems = [
    {
      type: "slider",
      image: sliderImages[0],
    },
    {
      type: "text",
      title: "Brochures, Flyers, and Posters:",
      content: `Beautiful layouts that balance visuals and messaging to attract and engage.`,
    },
    {
      type: "slider",
      image: sliderImages[1],
    },
    {
      type: "text",
      title: "Magazines and Newsletters:",
      content: `Editorial designs that captivate readers and enhance storytelling.`,
    },
    {
      type: "slider",
      image: sliderImages[2],
    },
    {
      type: "text",
      title: "Books and eBooks:",
      content: `lear, structured layouts for a smooth and enjoyable reading experience.`,
    },
    {
      type: "slider",
      image: sliderImages[3],
    },
    {
      type: "text",
      title: "Corporate Reports and Manuals:",
      content: `Professional documents that reflect your company’s credibility and attention to detail`,
    },
    {
      type: "slider",
      image: sliderImages[4],
    },
    {
      type: "text",
      title: "Catalogs and Product Sheets:",
      content: `Organized, visually attractive materials that help showcase and sell your products.`,
    },
    {
      type: "slider",
      image: sliderImages[5],
    },
    {
      type: "text",
      title: "Multilingual Desktop Publishing:",
      content: `Formatting materials in different languages while maintaining visual consistency`,
    },
  ];

  // const images = [slider1, slider2, slider3, slider4, slider5];
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

    </article>
  );
};

export default DesktopPublication;

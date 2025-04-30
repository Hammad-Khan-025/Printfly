import React from "react";
import bgImage from "../../assets/home-images/services-images/ui-ux-design/bgImage.png";
import logo from "../../assets/home-images/services-images/ui-ux-design/logo.png";

import img1a from "../../assets/home-images/services-images/ui-ux-design/img1/img1a.png";
import img1b from "../../assets/home-images/services-images/ui-ux-design/img1/img1b.png";
import img1c from "../../assets/home-images/services-images/ui-ux-design/img1/img1c.png";

import img2a from "../../assets/home-images/services-images/ui-ux-design/img2/img2a.png";
import img2b from "../../assets/home-images/services-images/ui-ux-design/img2/img2b.png";
import img2c from "../../assets/home-images/services-images/ui-ux-design/img2/img2c.png";

import img3a from "../../assets/home-images/services-images/ui-ux-design/img3/img3a.png";
import img3b from "../../assets/home-images/services-images/ui-ux-design/img3/img3b.png";
import img3c from "../../assets/home-images/services-images/ui-ux-design/img3/img3c.png";

import img4a from "../../assets/home-images/services-images/ui-ux-design/img4/img4a.png";
import img4b from "../../assets/home-images/services-images/ui-ux-design/img4/img4b.png";
import img4c from "../../assets/home-images/services-images/ui-ux-design/img4/img4c.png";

import img5a from "../../assets/home-images/services-images/ui-ux-design/img5/img5a.png";
import img5b from "../../assets/home-images/services-images/ui-ux-design/img5/img5b.png";
import img5c from "../../assets/home-images/services-images/ui-ux-design/img5/img5c.png";

import img6a from "../../assets/home-images/services-images/ui-ux-design/img6//img6a.png";
import img6b from "../../assets/home-images/services-images/ui-ux-design/img6//img6b.png";
import img6c from "../../assets/home-images/services-images/ui-ux-design/img6//img6c.png";

import slider1 from "../../assets/home-images/services-images/ui-ux-design/slider1.png";
import slider2 from "../../assets/home-images/services-images/ui-ux-design/slider2.png";
import slider3 from "../../assets/home-images/services-images/ui-ux-design/slider3.png";
import slider4 from "../../assets/home-images/services-images/ui-ux-design/slider4.png";
import slider5 from "../../assets/home-images/services-images/ui-ux-design/slider5.png";

import SingleService from "../../components/SingleService";
import ImagesSlider from "../../components/ImagesSlider";

const UIUXDesign = () => {

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
      title: "User Research & Persona Development:",
      content: `Deep understanding of your target audience to design experiences that truly connect.`,
    },
    {
      type: "slider",
      images: sliderImages[1],
    },
    {
      type: "text",
      title: "Wireframing & Prototyping:",
      content: `Fast, interactive prototypes and wireframes to visualize and refine your product early.
`,
    },
    {
      type: "slider",
      images: sliderImages[2],
    },
    {
      type: "text",
      title: "User Interface (UI) Design:",
      content: `Pixel-perfect, visually appealing designs that enhance user interaction.`,
    },
    {
      type: "slider",
      images: sliderImages[3],
    },
    {
      type: "text",
      title: "User Experience (UX) Strategy:",
      content: `Smart workflows and intuitive structures that make navigation effortless.`,
    },
    {
      type: "slider",
      images: sliderImages[4],
    },
    {
      type: "text",
      title: "Website and Web App Design:",
      content: `Responsive, conversion-focused designs that work across every screen size.`,
    },
    {
      type: "slider",
      images: sliderImages[5],
    },
    {
      type: "text",
      title: "Usability Testing & Iteration:",
      content: `Real user feedback to continuously optimize and enhance your product’s performance.`,
    },
  ];

  const images = [slider1, slider2, slider3, slider4, slider5];
  return (
    <article>
      <SingleService
        logo={logo}
        bgImage={bgImage}
        title="UI-UX Design"
        aboutPara1="At UI/UX Design, we design exceptional UI/UX experiences that combine beauty with functionality. Our focus is to create digital products that are not only visually stunning but also intuitive, user-friendly, and built to drive engagement and results."

        aboutPara2="A great product isn't just built - it's designed with purpose. We help brands turn ideas into digital experiences that users love, trust, and recommend."
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

export default UIUXDesign;

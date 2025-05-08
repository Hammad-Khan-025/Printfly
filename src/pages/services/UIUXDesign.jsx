import React from "react";
import bgImage from "../../assets/home-images/services-images/ui-ux-design/bgImage.png";
import logo from "../../assets/home-images/services-images/ui-ux-design/logo.png";

import img1a from "../../assets/home-images/services-images/ui-ux-design/img1/img1a.jpg";
import img1b from "../../assets/home-images/services-images/ui-ux-design/img1/img1b.jpg";
import img1c from "../../assets/home-images/services-images/ui-ux-design/img1/img1c.jpg";

import img2a from "../../assets/home-images/services-images/ui-ux-design/img2/img2a.jpg";
import img2b from "../../assets/home-images/services-images/ui-ux-design/img2/img2b.jpg";
import img2c from "../../assets/home-images/services-images/ui-ux-design/img2/img2c.jpg";

import img3a from "../../assets/home-images/services-images/ui-ux-design/img3/img3a.jpg";
import img3b from "../../assets/home-images/services-images/ui-ux-design/img3/img3b.jpg";
import img3c from "../../assets/home-images/services-images/ui-ux-design/img3/img3c.jpg";

import img4a from "../../assets/home-images/services-images/ui-ux-design/img4/img4a.jpg";
import img4b from "../../assets/home-images/services-images/ui-ux-design/img4/img4b.jpg";
import img4c from "../../assets/home-images/services-images/ui-ux-design/img4/img4c.jpg";

import img5a from "../../assets/home-images/services-images/ui-ux-design/img5/img5a.jpg";
import img5b from "../../assets/home-images/services-images/ui-ux-design/img5/img5b.jpg";
import img5c from "../../assets/home-images/services-images/ui-ux-design/img5/img5c.jpg";

import img6a from "../../assets/home-images/services-images/ui-ux-design/img6//img6a.jpg";
import img6b from "../../assets/home-images/services-images/ui-ux-design/img6//img6b.jpg";
import img6c from "../../assets/home-images/services-images/ui-ux-design/img6//img6c.jpg";

import slider1 from "../../assets/home-images/services-images/ui-ux-design/slider1.jpg";
import slider2 from "../../assets/home-images/services-images/ui-ux-design/slider2.jpg";
import slider3 from "../../assets/home-images/services-images/ui-ux-design/slider3.jpg";
import slider4 from "../../assets/home-images/services-images/ui-ux-design/slider4.jpg";
import slider5 from "../../assets/home-images/services-images/ui-ux-design/slider5.jpg";

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

    </article>
  );
};

export default UIUXDesign;

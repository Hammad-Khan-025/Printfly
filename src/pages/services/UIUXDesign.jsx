import React from "react";
import bgImage from "../../assets/home-images/services-images/ui-ux-design/bgImage.png";
import logo from "../../assets/home-images/services-images/ui-ux-design/logo.png";

import img1 from "../../assets/home-images/services-images/ui-ux-design/img1.jpg";
import img2 from "../../assets/home-images/services-images/ui-ux-design/img2.jpg";
import img3 from "../../assets/home-images/services-images/ui-ux-design/img3.jpg";
import img4 from "../../assets/home-images/services-images/ui-ux-design/img4.jpg";
import img5 from "../../assets/home-images/services-images/ui-ux-design/img5.jpg";
import img6 from "../../assets/home-images/services-images/ui-ux-design/img6.jpg";

import slider1 from "../../assets/home-images/services-images/ui-ux-design/slider1.jpg";
import slider2 from "../../assets/home-images/services-images/ui-ux-design/slider2.jpg";
import slider3 from "../../assets/home-images/services-images/ui-ux-design/slider3.jpg";
import slider4 from "../../assets/home-images/services-images/ui-ux-design/slider4.jpg";
import slider5 from "../../assets/home-images/services-images/ui-ux-design/slider5.jpg";

import SingleService from "../../components/SingleService";
import ImagesSlider from "../../components/ImagesSlider";

const UIUXDesign = () => {

  const sliderImages = [img1, img2, img3, img4, img5, img6];

  const gridItems = [
    {
      type: "slider",
      image: sliderImages[0],
    },
    {
      type: "text",
      title: "User Research & Persona Development:",
      content: `Deep understanding of your target audience to design experiences that truly connect.`,
    },
    {
      type: "slider",
      image: sliderImages[1],
    },
    {
      type: "text",
      title: "Wireframing & Prototyping:",
      content: `Fast, interactive prototypes and wireframes to visualize and refine your product early.
`,
    },
    {
      type: "slider",
      image: sliderImages[2],
    },
    {
      type: "text",
      title: "User Interface (UI) Design:",
      content: `Pixel-perfect, visually appealing designs that enhance user interaction.`,
    },
    {
      type: "slider",
      image: sliderImages[3],
    },
    {
      type: "text",
      title: "User Experience (UX) Strategy:",
      content: `Smart workflows and intuitive structures that make navigation effortless.`,
    },
    {
      type: "slider",
      image: sliderImages[4],
    },
    {
      type: "text",
      title: "Website and Web App Design:",
      content: `Responsive, conversion-focused designs that work across every screen size.`,
    },
    {
      type: "slider",
      image: sliderImages[5],
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

import React from "react";
import bgImage from "../../assets/home-images/services-images/graphic-design/bgImage.png";
import logo from "../../assets/home-images/services-images/graphic-design/logo.png";

import img1 from "../../assets/home-images/services-images/graphic-design/img1.jpg";
import img2 from "../../assets/home-images/services-images/graphic-design/img2.jpg";
import img3 from "../../assets/home-images/services-images/graphic-design/img3.jpg";
import img4 from "../../assets/home-images/services-images/graphic-design/img4.jpg";
import img5 from "../../assets/home-images/services-images/graphic-design/img5.jpg";
import img6 from "../../assets/home-images/services-images/graphic-design/img6.jpg";


import SingleService from "../../components/SingleService";
import ImagesSlider from "../../components/ImagesSlider";

const GraphicDesign = () => {

  const sliderImages = [img1, img2, img3, img4, img5, img6];

  const gridItems = [
    {
      type: "slider",
      image: sliderImages[0],
    },
    {
      type: "text",
      title: "Typography:",
      content: `The art of arranging type to make written language legible, readable,
      and visually appealing. This includes the selection of typefaces, point sizes,
      line lengths, line-spacing, and letter-spacing.`,
    },
    {
      type: "slider",
      image: sliderImages[1],
    },
    {
      type: "text",
      title: "Color Theory:",
      content: `The science and art of using color, including the understanding of
      color wheel relationships, color harmony, and the psychological impact of colors.`,
    },
    {
      type: "slider",
      image: sliderImages[2],
    },
    {
      type: "text",
      title: "Layout and Composition:",
      content: `The arrangement of visual elements on a page. Good layout and composition
      ensure that the design is aesthetically pleasing and effectively communicates the
      intended message.`,
    },
    {
      type: "slider",
      image: sliderImages[3],
    },
    {
      type: "text",
      title: "Imagery:",
      content: `Use of photography, illustration, and other visual elements. This includes selecting or creating images that enhance the overall design and message.`,
    },
    {
      type: "slider",
      image: sliderImages[4],
    },
    {
      type: "text",
      title: "Color Theory:",
      content: `The science and art of using color, including the understanding of
      color wheel relationships, color harmony, and the psychological impact of colors.`,
    },
    {
      type: "slider",
      image: sliderImages[5],
    },
    {
      type: "text",
      title: "Layout and Composition:",
      content: `The arrangement of visual elements on a page. Good layout and composition
      ensure that the design is aesthetically pleasing and effectively communicates the
      intended message.`,
    },
  ];

  // const images = [slider1, slider2, slider3, slider4, slider5];
  return (
    <article>
      <SingleService
        logo={logo}
        bgImage={bgImage}
        title="GRAPHIC DESIGNING"
        aboutPara1="Graphic design is the art of visual communication using images, typography, and colors to convey messages. It plays a key role in branding, marketing, and storytelling across various industries."
        aboutPara2="High-quality print-ready and digital files. Brand consistency across all materials. Fast turnaround times with meticulous quality control. Custom designs tailored to your audience and goals"
        gridItems={gridItems}
      />

    </article>
  );
};

export default GraphicDesign;

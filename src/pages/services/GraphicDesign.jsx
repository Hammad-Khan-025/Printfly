import React from "react";
import bgImage from "../../assets/home-images/services-images/graphic-design/bgImage.png";
import logo from "../../assets/home-images/services-images/graphic-design/logo.png";

import img1a from "../../assets/home-images/services-images/graphic-design/img1/img1a.png";
import img1b from "../../assets/home-images/services-images/graphic-design/img1/img1b.png";
import img1c from "../../assets/home-images/services-images/graphic-design/img1/img1c.png";

import img2a from "../../assets/home-images/services-images/graphic-design/img2/img2a.png";
import img2b from "../../assets/home-images/services-images/graphic-design/img2/img2b.png";
import img2c from "../../assets/home-images/services-images/graphic-design/img2/img2c.png";

import img3a from "../../assets/home-images/services-images/graphic-design/img3/img3a.png";
import img3b from "../../assets/home-images/services-images/graphic-design/img3/img3b.png";
import img3c from "../../assets/home-images/services-images/graphic-design/img3/img3c.png";

import img4a from "../../assets/home-images/services-images/graphic-design/img4/img4a.png";
import img4b from "../../assets/home-images/services-images/graphic-design/img4/img4b.png";
import img4c from "../../assets/home-images/services-images/graphic-design/img4/img4c.png";

import img5a from "../../assets/home-images/services-images/graphic-design/img5/img5a.png";
import img5b from "../../assets/home-images/services-images/graphic-design/img5/img5b.png";
import img5c from "../../assets/home-images/services-images/graphic-design/img5/img5c.png";

import img6a from "../../assets/home-images/services-images/graphic-design/img6//img6a.png";
import img6b from "../../assets/home-images/services-images/graphic-design/img6//img6b.png";
import img6c from "../../assets/home-images/services-images/graphic-design/img6//img6c.png";

import slider1 from "../../assets/home-images/services-images/graphic-design/slider1.png";
import slider2 from "../../assets/home-images/services-images/graphic-design/slider2.png";
import slider3 from "../../assets/home-images/services-images/graphic-design/slider3.png";
import slider4 from "../../assets/home-images/services-images/graphic-design/slider4.png";
import slider5 from "../../assets/home-images/services-images/graphic-design/slider5.png";

import SingleService from "../../components/SingleService";
import ImagesSlider from "../../components/ImagesSlider";

const GraphicDesign = () => {
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
      title: "Typography:",
      content: `The art of arranging type to make written language legible, readable,
      and visually appealing. This includes the selection of typefaces, point sizes,
      line lengths, line-spacing, and letter-spacing.`,
    },
    {
      type: "slider",
      images: sliderImages[1],
    },
    {
      type: "text",
      title: "Color Theory:",
      content: `The science and art of using color, including the understanding of
      color wheel relationships, color harmony, and the psychological impact of colors.`,
    },
    {
      type: "slider",
      images: sliderImages[2],
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
      images: sliderImages[3],
    },
    {
      type: "text",
      title: "Imagery:",
      content: `Use of photography, illustration, and other visual elements. This includes selecting or creating images that enhance the overall design and message.`,
    },
    {
      type: "slider",
      images: sliderImages[4],
    },
    {
      type: "text",
      title: "Color Theory:",
      content: `The science and art of using color, including the understanding of
      color wheel relationships, color harmony, and the psychological impact of colors.`,
    },
    {
      type: "slider",
      images: sliderImages[5],
    },
    {
      type: "text",
      title: "Layout and Composition:",
      content: `The arrangement of visual elements on a page. Good layout and composition
      ensure that the design is aesthetically pleasing and effectively communicates the
      intended message.`,
    },
  ];

  const images = [slider1, slider2, slider3, slider4, slider5];
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

export default GraphicDesign;

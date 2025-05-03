import React from "react";
import bgImage from "../../assets/home-images/services-images/illustration-videos/bgImage.png";
import logo from "../../assets/home-images/services-images/illustration-videos/logo.png";

import img1a from "../../assets/home-images/services-images/illustration-videos/img1/img1a.jpg";
import img1b from "../../assets/home-images/services-images/illustration-videos/img1/img1b.jpg";
import img1c from "../../assets/home-images/services-images/illustration-videos/img1/img1c.jpg";

import img2a from "../../assets/home-images/services-images/illustration-videos/img2/img2a.jpg";
import img2b from "../../assets/home-images/services-images/illustration-videos/img2/img2b.jpg";
import img2c from "../../assets/home-images/services-images/illustration-videos/img2/img2c.jpg";

import img3a from "../../assets/home-images/services-images/illustration-videos/img3/img3a.jpg";
import img3b from "../../assets/home-images/services-images/illustration-videos/img3/img3b.jpg";
import img3c from "../../assets/home-images/services-images/illustration-videos/img3/img3c.jpg";

import img4a from "../../assets/home-images/services-images/illustration-videos/img4/img4a.jpg";
import img4b from "../../assets/home-images/services-images/illustration-videos/img4/img4b.jpg";
import img4c from "../../assets/home-images/services-images/illustration-videos/img4/img4c.jpg";

import img5a from "../../assets/home-images/services-images/illustration-videos/img5/img5a.jpg";
import img5b from "../../assets/home-images/services-images/illustration-videos/img5/img5b.jpg";
import img5c from "../../assets/home-images/services-images/illustration-videos/img5/img5c.jpg";

import img6a from "../../assets/home-images/services-images/illustration-videos/img6//img6a.jpg";
import img6b from "../../assets/home-images/services-images/illustration-videos/img6//img6b.jpg";
import img6c from "../../assets/home-images/services-images/illustration-videos/img6//img6c.jpg";

import slider1 from "../../assets/home-images/services-images/illustration-videos/slider1.jpg";
import slider2 from "../../assets/home-images/services-images/illustration-videos/slider2.jpg";
import slider3 from "../../assets/home-images/services-images/illustration-videos/slider3.jpg";
import slider4 from "../../assets/home-images/services-images/illustration-videos/slider4.jpg";
import slider5 from "../../assets/home-images/services-images/illustration-videos/slider5.jpg";

import SingleService from "../../components/SingleService";
import ImagesSlider from "../../components/ImagesSlider";

const IllustrationVideos = () => {

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
      title: "Custom Illustrated Videos:",
      content: `Fully original artwork tailored to your brand, story, and message.`,
    },
    {
      type: "slider",
      images: sliderImages[1],
    },
    {
      type: "text",
      title: "Whiteboard Animation Videos:",
      content: `Hand-drawn style animations that simplify complex ideas and keep viewers engaged.`,
    },
    {
      type: "slider",
      images: sliderImages[2],
    },
    {
      type: "text",
      title: "2D Animated Illustration Videos:",
      content: `Dynamic, colorful animations that bring characters, scenes, and concepts to life.`,
    },
    {
      type: "slider",
      images: sliderImages[3],
    },
    {
      type: "text",
      title: "Storyboarding and Script writing:",
      content: `Strategic planning and creative storytelling to ensure every frame delivers impact.`,
    },
    {
      type: "slider",
      images: sliderImages[4],
    },
    {
      type: "text",
      title: "Educational and Training Illustration Videos:",
      content: `Turn learning into a fun, memorable experience through visuals designed to enhance understanding.`,
    },
    {
      type: "slider",
      images: sliderImages[5],
    },
    {
      type: "text",
      title: "Brand and Marketing Illustration Videos:",
      content: `se illustrated storytelling to promote products, explain services, or build brand awareness.`,
    },
  ];

  const images = [slider1, slider2, slider3, slider4, slider5];
  return (
    <article>
      <SingleService
        logo={logo}
        // bgImage={bgImage}
        title="Illustration Videos"
        aboutPara1="At Print Fly Communications, we craft captivating illustration videos that turn complex ideas into simple, engaging, and visually stunning stories."

        aboutPara2="Using hand-drawn and digital illustrations, we create videos that educate, entertain, and inspire — perfect for brands, educators, nonprofits, and creators looking to make a lasting impression."
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

export default IllustrationVideos;

import React from "react";
import bgImage from "../../assets/home-images/services-images/illustration-videos/bgImage.png";
import logo from "../../assets/home-images/services-images/illustration-videos/logo.png";

import img1 from "../../assets/home-images/services-images/illustration-videos/img1.jpg";
import img2 from "../../assets/home-images/services-images/illustration-videos/img2.jpg";
import img3 from "../../assets/home-images/services-images/illustration-videos/img3.jpg";
import img4 from "../../assets/home-images/services-images/illustration-videos/img4.jpg";
import img5 from "../../assets/home-images/services-images/illustration-videos/img5.jpg";
import img6 from "../../assets/home-images/services-images/illustration-videos/img6.jpg";

import slider1 from "../../assets/home-images/services-images/illustration-videos/slider1.jpg";
import slider2 from "../../assets/home-images/services-images/illustration-videos/slider2.jpg";
import slider3 from "../../assets/home-images/services-images/illustration-videos/slider3.jpg";
import slider4 from "../../assets/home-images/services-images/illustration-videos/slider4.jpg";
import slider5 from "../../assets/home-images/services-images/illustration-videos/slider5.jpg";

import SingleService from "../../components/SingleService";
import ImagesSlider from "../../components/ImagesSlider";

const IllustrationVideos = () => {

  const sliderImages = [img1, img2, img3, img4, img5, img6];

  const gridItems = [
    {
      type: "slider",
      image: sliderImages[0],
    },
    {
      type: "text",
      title: "Custom Illustrated Videos:",
      content: `Fully original artwork tailored to your brand, story, and message.`,
    },
    {
      type: "slider",
      image: sliderImages[1],
    },
    {
      type: "text",
      title: "Whiteboard Animation Videos:",
      content: `Hand-drawn style animations that simplify complex ideas and keep viewers engaged.`,
    },
    {
      type: "slider",
      image: sliderImages[2],
    },
    {
      type: "text",
      title: "2D Animated Illustration Videos:",
      content: `Dynamic, colorful animations that bring characters, scenes, and concepts to life.`,
    },
    {
      type: "slider",
      image: sliderImages[3],
    },
    {
      type: "text",
      title: "Storyboarding and Script writing:",
      content: `Strategic planning and creative storytelling to ensure every frame delivers impact.`,
    },
    {
      type: "slider",
      image: sliderImages[4],
    },
    {
      type: "text",
      title: "Educational and Training Illustration Videos:",
      content: `Turn learning into a fun, memorable experience through visuals designed to enhance understanding.`,
    },
    {
      type: "slider",
      image: sliderImages[5],
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

    </article>
  );
};

export default IllustrationVideos;

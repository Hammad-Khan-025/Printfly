import React from "react";
import bgImage from "../../assets/home-images/services-images/documentory-videos/bgImage.png";
import logo from "../../assets/home-images/services-images/documentory-videos/logo.png";

import img1 from "../../assets/home-images/services-images/documentory-videos/img1.jpg";
import img2 from "../../assets/home-images/services-images/documentory-videos/img2.jpg";
import img3 from "../../assets/home-images/services-images/documentory-videos/img3.jpg";
import img4 from "../../assets/home-images/services-images/documentory-videos/img4.jpg";
import img5 from "../../assets/home-images/services-images/documentory-videos/img5.jpg";
import img6 from "../../assets/home-images/services-images/documentory-videos/img6.jpg";


import SingleService from "../../components/SingleService";
import ImagesSlider from "../../components/ImagesSlider";

const DocumentoryVideos = () => {

  const sliderImages = [img1, img2, img3, img4, img5, img6];

  const gridItems = [
    {
      type: "slider",
      image: sliderImages[0],
    },
    {
      type: "text",
      title: "Concept Development and Scripting:",
      content: `Crafting strong narratives with clear messaging that aligns with your goals and vision.`,
    },
    {
      type: "slider",
      image: sliderImages[1],
    },
    {
      type: "text",
      title: "Full-Service Production:",
      content: `Professional filming, lighting, and sound recording — on-location or in-studio — to capture the highest quality visuals and audio.`,
    },
    {
      type: "slider",
      image: sliderImages[2],
    },
    {
      type: "text",
      title: "Interviews and Storytelling:",
      content: `Capturing real voices, testimonials, and candid moments to add depth and authenticity to your documentary.`,
    },
    {
      type: "slider",
      image: sliderImages[3],
    },
    {
      type: "text",
      title: "Editing and Post-Production:",
      content: `Expert editing, color correction, sound mixing, motion graphics, and visual effects to create a polished, cinematic final product.`,
    },
    {
      type: "slider",
      image: sliderImages[4],
    },
    {
      type: "text",
      title: "Voiceover and Music Scoring:",
      content: `Adding emotional resonance through professional narration and custom or licensed music.`,
    },
    {
      type: "slider",
      image: sliderImages[5],
    },
    {
      type: "text",
      title: "Short-Form and Long-Form Documentaries:",
      content: `From 2-minute brand stories to 60-minute in-depth documentaries — we tailor the length to your audience and platform.`,
    },
  ];

  // const images = [slider1, slider2, slider3, slider4, slider5];
  return (
    <article>
      <SingleService
        logo={logo}
        bgImage={bgImage}
        title="Documentory Videos"
        aboutPara1="At Print Fly Communications, we specialize in producing compelling documentary videos that capture authentic stories, real emotions, and meaningful moments."

        aboutPara2="Whether it’s telling the story of a brand, highlighting a cause, or documenting a journey, we create cinematic documentaries that engage audiences, inspire action, and leave a lasting impression."
        gridItems={gridItems} 
      />

    </article>
  );
};

export default DocumentoryVideos;

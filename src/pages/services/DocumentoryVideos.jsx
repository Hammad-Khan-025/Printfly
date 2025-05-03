import React from "react";
import bgImage from "../../assets/home-images/services-images/documentory-videos/bgImage.png";
import logo from "../../assets/home-images/services-images/documentory-videos/logo.png";

import img1a from "../../assets/home-images/services-images/documentory-videos/img1/img1a.jpg";
import img1b from "../../assets/home-images/services-images/documentory-videos/img1/img1b.jpg";
import img1c from "../../assets/home-images/services-images/documentory-videos/img1/img1c.jpg";

import img2a from "../../assets/home-images/services-images/documentory-videos/img2/img2a.jpg";
import img2b from "../../assets/home-images/services-images/documentory-videos/img2/img2b.jpg";
import img2c from "../../assets/home-images/services-images/documentory-videos/img2/img2c.jpg";

import img3a from "../../assets/home-images/services-images/documentory-videos/img3/img3a.jpg";
import img3b from "../../assets/home-images/services-images/documentory-videos/img3/img3b.jpg";
import img3c from "../../assets/home-images/services-images/documentory-videos/img3/img3c.jpg";

import img4a from "../../assets/home-images/services-images/documentory-videos/img4/img4a.jpg";
import img4b from "../../assets/home-images/services-images/documentory-videos/img4/img4b.jpg";
import img4c from "../../assets/home-images/services-images/documentory-videos/img4/img4c.jpg";

import img5a from "../../assets/home-images/services-images/documentory-videos/img5/img5a.jpg";
import img5b from "../../assets/home-images/services-images/documentory-videos/img5/img5b.jpg";
import img5c from "../../assets/home-images/services-images/documentory-videos/img5/img5c.jpg";

import img6a from "../../assets/home-images/services-images/documentory-videos/img6//img6a.jpg";
import img6b from "../../assets/home-images/services-images/documentory-videos/img6//img6b.jpg";
import img6c from "../../assets/home-images/services-images/documentory-videos/img6//img6c.jpg";

import slider1 from "../../assets/home-images/services-images/documentory-videos/slider1.jpg";
import slider2 from "../../assets/home-images/services-images/documentory-videos/slider2.jpg";
import slider3 from "../../assets/home-images/services-images/documentory-videos/slider3.jpg";
import slider4 from "../../assets/home-images/services-images/documentory-videos/slider4.jpg";
import slider5 from "../../assets/home-images/services-images/documentory-videos/slider5.jpg";

import SingleService from "../../components/SingleService";
import ImagesSlider from "../../components/ImagesSlider";

const DocumentoryVideos = () => {

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
      title: "Concept Development and Scripting:",
      content: `Crafting strong narratives with clear messaging that aligns with your goals and vision.`,
    },
    {
      type: "slider",
      images: sliderImages[1],
    },
    {
      type: "text",
      title: "Full-Service Production:",
      content: `Professional filming, lighting, and sound recording — on-location or in-studio — to capture the highest quality visuals and audio.`,
    },
    {
      type: "slider",
      images: sliderImages[2],
    },
    {
      type: "text",
      title: "Interviews and Storytelling:",
      content: `Capturing real voices, testimonials, and candid moments to add depth and authenticity to your documentary.`,
    },
    {
      type: "slider",
      images: sliderImages[3],
    },
    {
      type: "text",
      title: "Editing and Post-Production:",
      content: `Expert editing, color correction, sound mixing, motion graphics, and visual effects to create a polished, cinematic final product.`,
    },
    {
      type: "slider",
      images: sliderImages[4],
    },
    {
      type: "text",
      title: "Voiceover and Music Scoring:",
      content: `Adding emotional resonance through professional narration and custom or licensed music.`,
    },
    {
      type: "slider",
      images: sliderImages[5],
    },
    {
      type: "text",
      title: "Short-Form and Long-Form Documentaries:",
      content: `From 2-minute brand stories to 60-minute in-depth documentaries — we tailor the length to your audience and platform.`,
    },
  ];

  const images = [slider1, slider2, slider3, slider4, slider5];
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

export default DocumentoryVideos;

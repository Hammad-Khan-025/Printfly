import React from "react";
import bgImage from "../../assets/home-images/services-images/e-learning-videos/bgImage.png";
import logo from "../../assets/home-images/services-images/e-learning-videos/logo.png";

import img1a from "../../assets/home-images/services-images/e-learning-videos/img1/img1a.png";
import img1b from "../../assets/home-images/services-images/e-learning-videos/img1/img1b.png";
import img1c from "../../assets/home-images/services-images/e-learning-videos/img1/img1c.png";

import img2a from "../../assets/home-images/services-images/e-learning-videos/img2/img2a.png";
import img2b from "../../assets/home-images/services-images/e-learning-videos/img2/img2b.png";
import img2c from "../../assets/home-images/services-images/e-learning-videos/img2/img2c.png";

import img3a from "../../assets/home-images/services-images/e-learning-videos/img3/img3a.png";
import img3b from "../../assets/home-images/services-images/e-learning-videos/img3/img3b.png";
import img3c from "../../assets/home-images/services-images/e-learning-videos/img3/img3c.png";

import img4a from "../../assets/home-images/services-images/e-learning-videos/img4/img4a.png";
import img4b from "../../assets/home-images/services-images/e-learning-videos/img4/img4b.png";
import img4c from "../../assets/home-images/services-images/e-learning-videos/img4/img4c.png";

import img5a from "../../assets/home-images/services-images/e-learning-videos/img5/img5a.png";
import img5b from "../../assets/home-images/services-images/e-learning-videos/img5/img5b.png";
import img5c from "../../assets/home-images/services-images/e-learning-videos/img5/img5c.png";

import img6a from "../../assets/home-images/services-images/e-learning-videos/img6//img6a.png";
import img6b from "../../assets/home-images/services-images/e-learning-videos/img6//img6b.png";
import img6c from "../../assets/home-images/services-images/e-learning-videos/img6//img6c.png";

import slider1 from "../../assets/home-images/services-images/e-learning-videos/slider1.png";
import slider2 from "../../assets/home-images/services-images/e-learning-videos/slider2.png";
import slider3 from "../../assets/home-images/services-images/e-learning-videos/slider3.png";
import slider4 from "../../assets/home-images/services-images/e-learning-videos/slider4.png";
import slider5 from "../../assets/home-images/services-images/e-learning-videos/slider5.png";

import SingleService from "../../components/SingleService";
import ImagesSlider from "../../components/ImagesSlider";

const ELearningVideos = () => {

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
      title: "Custom Training Video Production:",
      content: `Fully tailored videos designed to match your course goals, brand style, and learner needs.`,
    },
    {
      type: "slider",
      images: sliderImages[1],
    },
    {
      type: "text",
      title: "Animated Explainer Videos:",
      content: `2D/3D animations, whiteboard animations, and motion graphics to visualize concepts in an engaging way.`,
    },
    {
      type: "slider",
      images: sliderImages[2],
    },
    {
      type: "text",
      title: "Interactive Video Learning:",
      content: `Videos with clickable elements, quizzes, and scenario-based decision points to enhance active learning.`,
    },
    {
      type: "slider",
      images: sliderImages[3],
    },
    {
      type: "text",
      title: "Instructor-Led Training (ILT) Videos:",
      content: `Professionally filmed lectures, tutorials, and demonstrations led by subject-matter experts.`,
    },
    {
      type: "slider",
      images: sliderImages[4],
    },
    {
      type: "text",
      title: "Voice over and Narration Services:",
      content: `Professional voice artists to deliver clear, engaging, and friendly narration tailored to your audience.`,
    },
    {
      type: "slider",
      images: sliderImages[5],
    },
    {
      type: "text",
      title: "Video Editing and Post-Production:",
      content: `High-quality editing, motion graphics, captioning, and branding to create polished final videos.`,
    },
  ];

  const images = [slider1, slider2, slider3, slider4, slider5];
  return (
    <article>
      <SingleService
        logo={logo}
        bgImage={bgImage}
        title="E-Learning Training Videos"
        aboutPara1="At Print Fly Communications, we specialize in creating dynamic e-learning videos that make complex topics simple, memorable, and easy to understand."

        aboutPara2="From corporate training to academic learning and professional certifications, our training videos combine instructional expertise with visual storytelling to maximize learner engagement and retention"
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

export default ELearningVideos;

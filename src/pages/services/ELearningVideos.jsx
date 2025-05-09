import React from "react";
import bgImage from "../../assets/home-images/services-images/e-learning-videos/bgImage.png";
import logo from "../../assets/home-images/services-images/e-learning-videos/logo.png";

import img1 from "../../assets/home-images/services-images/e-learning-videos/img1.jpg";
import img2 from "../../assets/home-images/services-images/e-learning-videos/img2.jpg";
import img3 from "../../assets/home-images/services-images/e-learning-videos/img3.jpg";
import img4 from "../../assets/home-images/services-images/e-learning-videos/img4.jpg";
import img5 from "../../assets/home-images/services-images/e-learning-videos/img5.jpg";
import img6 from "../../assets/home-images/services-images/e-learning-videos/img6.jpg";

import slider1 from "../../assets/home-images/services-images/e-learning-videos/slider1.jpg";
import slider2 from "../../assets/home-images/services-images/e-learning-videos/slider2.jpg";
import slider3 from "../../assets/home-images/services-images/e-learning-videos/slider3.jpg";
import slider4 from "../../assets/home-images/services-images/e-learning-videos/slider4.jpg";
import slider5 from "../../assets/home-images/services-images/e-learning-videos/slider5.jpg";

import SingleService from "../../components/SingleService";
import ImagesSlider from "../../components/ImagesSlider";

const ELearningVideos = () => {

  const sliderImages = [img1, img2, img3, img4, img5, img6];

  const gridItems = [
    {
      type: "slider",
      image: sliderImages[0],
    },
    {
      type: "text",
      title: "Custom Training Video Production:",
      content: `Fully tailored videos designed to match your course goals, brand style, and learner needs.`,
    },
    {
      type: "slider",
      image: sliderImages[1],
    },
    {
      type: "text",
      title: "Animated Explainer Videos:",
      content: `2D/3D animations, whiteboard animations, and motion graphics to visualize concepts in an engaging way.`,
    },
    {
      type: "slider",
      image: sliderImages[2],
    },
    {
      type: "text",
      title: "Interactive Video Learning:",
      content: `Videos with clickable elements, quizzes, and scenario-based decision points to enhance active learning.`,
    },
    {
      type: "slider",
      image: sliderImages[3],
    },
    {
      type: "text",
      title: "Instructor-Led Training (ILT) Videos:",
      content: `Professionally filmed lectures, tutorials, and demonstrations led by subject-matter experts.`,
    },
    {
      type: "slider",
      image: sliderImages[4],
    },
    {
      type: "text",
      title: "Voice over and Narration Services:",
      content: `Professional voice artists to deliver clear, engaging, and friendly narration tailored to your audience.`,
    },
    {
      type: "slider",
      image: sliderImages[5],
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

    </article>
  );
};

export default ELearningVideos;

import React from "react";
import bgImage from "../../assets/home-images/services-images/e-learning-courses/bgImage.png";
import logo from "../../assets/home-images/services-images/e-learning-courses/logo.png";

import img1 from "../../assets/home-images/services-images/e-learning-courses/img1.jpg";
import img2 from "../../assets/home-images/services-images/e-learning-courses/img2.jpg";
import img3 from "../../assets/home-images/services-images/e-learning-courses/img3.jpg";
import img4 from "../../assets/home-images/services-images/e-learning-courses/img4.jpg";
import img5 from "../../assets/home-images/services-images/e-learning-courses/img5.jpg";
import img6 from "../../assets/home-images/services-images/e-learning-courses/img6.jpg";


import SingleService from "../../components/SingleService";
import ImagesSlider from "../../components/ImagesSlider";

const ELearningCourses = () => {

  const sliderImages = [img1, img2, img3, img4, img5, img6];

  const gridItems = [
    {
      type: "slider",
      image: sliderImages[0],
    },
    {
      type: "text",
      title: "User Research & Persona Development: ",
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

  // const images = [slider1, slider2, slider3, slider4, slider5];
  return (
    <article>
      <SingleService
        logo={logo}
        bgImage={bgImage}
        title="E-Learning Training Courses"
        aboutPara1="At Print Fly Communications, we create engaging, interactive, and effective e-learning courses designed to educate, train, and inspire learners."

        aboutPara2="Whether you need corporate training modules, academic courses, or professional development programs, we deliver customized e-learning solutions that make knowledge accessible anytime, anywhere."
        gridItems={gridItems} 
      />

    </article>
  );
};

export default ELearningCourses;

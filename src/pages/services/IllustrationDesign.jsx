import React from "react";
import bgImage from "../../assets/home-images/services-images/illustration-design/bgImage.png";
import logo from "../../assets/home-images/services-images/illustration-design/logo.png";

import img1 from "../../assets/home-images/services-images/illustration-design/img1.jpg";
import img2 from "../../assets/home-images/services-images/illustration-design/img2.jpg";
import img3 from "../../assets/home-images/services-images/illustration-design/img3.jpg";
import img4 from "../../assets/home-images/services-images/illustration-design/img4.jpg";
import img5 from "../../assets/home-images/services-images/illustration-design/img5.jpg";
import img6 from "../../assets/home-images/services-images/illustration-design/img6.jpg";

import slider1 from "../../assets/home-images/services-images/illustration-design/slider1.jpg";
import slider2 from "../../assets/home-images/services-images/illustration-design/slider2.jpg";
import slider3 from "../../assets/home-images/services-images/illustration-design/slider3.jpg";
import slider4 from "../../assets/home-images/services-images/illustration-design/slider4.jpg";
import slider5 from "../../assets/home-images/services-images/illustration-design/slider5.jpg";

import SingleService from "../../components/SingleService";
import ImagesSlider from "../../components/ImagesSlider";

const IllustrationDesign = () => {

  const sliderImages = [img1, img2, img3, img4, img5, img6];

  const gridItems = [
    {
      type: "slider",
      image: sliderImages[0],
    },
    {
      type: "text",
      title: "Book and Editorial Illustrations:",
      content: `Beautiful, narrative-driven artwork for books, magazines, blogs, and digital publications..
`,
    },
    {
      type: "slider",
      image: sliderImages[1],
    },
    {
      type: "text",
      title: "Children’s Book Illustrations:",
      content: `Colorful, imaginative visuals that captivate young readers and bring stories to life`,
    },
    {
      type: "slider",
      image: sliderImages[2],
    },
    {
      type: "text",
      title: "Character Design:",
      content: `Memorable and expressive characters for brands, animation, gaming, and advertising.

`,
    },
    {
      type: "slider",
      image: sliderImages[3],
    },
    {
      type: "text",
      title: "Product and Packaging Illustrations:",
      content: `Custom illustrations that give your product a unique, standout appearance.
`,
    },
    {
      type: "slider",
      image: sliderImages[4],
    },
    {
      type: "text",
      title: "Custom Icons and Mascots:",
      content: `Tailor-made icons and brand mascots that strengthen your visual identity.`,
    },
    {
      type: "slider",
      image: sliderImages[5],
    },
    {
      type: "text",
      title: "Concept Art and Storyboarding:",
      content: `Pre-visualization artwork for animations, advertisements, games, and film projects.`,
    },
  ];

  const images = [slider1, slider2, slider3, slider4, slider5];
  return (
    <article>
      <SingleService
        logo={logo}
        bgImage={bgImage}
        title="Illustration Design"
        aboutPara1="At Print Fly, we specialize in creating custom illustrations that add character, emotion, and storytelling power to your brand or project. Whether you need illustrations for marketing campaigns, publishing, packaging, websites, or social media, we craft original artwork that captures attention and leaves a lasting impact."

        aboutPara2="Illustration is more than art -it’s visual communication with emotion, personality, and storytelling at its core. We help businesses, publishers, and creators turn concepts into impactful artwork that resonates with their audiences."
        gridItems={gridItems} 
      />

    </article>
  );
};

export default IllustrationDesign;

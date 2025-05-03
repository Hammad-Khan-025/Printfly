import React from "react";
import bgImage from "../../assets/home-images/services-images/illustration-design/bgImage.png";
import logo from "../../assets/home-images/services-images/illustration-design/logo.png";

import img1a from "../../assets/home-images/services-images/illustration-design/img1/img1a.jpg";
import img1b from "../../assets/home-images/services-images/illustration-design/img1/img1b.jpg";
import img1c from "../../assets/home-images/services-images/illustration-design/img1/img1c.jpg";

import img2a from "../../assets/home-images/services-images/illustration-design/img2/img2a.jpg";
import img2b from "../../assets/home-images/services-images/illustration-design/img2/img2b.jpg";
import img2c from "../../assets/home-images/services-images/illustration-design/img2/img2c.jpg";

import img3a from "../../assets/home-images/services-images/illustration-design/img3/img3a.jpg";
import img3b from "../../assets/home-images/services-images/illustration-design/img3/img3b.jpg";
import img3c from "../../assets/home-images/services-images/illustration-design/img3/img3c.jpg";

import img4a from "../../assets/home-images/services-images/illustration-design/img4/img4a.jpg";
import img4b from "../../assets/home-images/services-images/illustration-design/img4/img4b.jpg";
import img4c from "../../assets/home-images/services-images/illustration-design/img4/img4c.jpg";

import img5a from "../../assets/home-images/services-images/illustration-design/img5/img5a.jpg";
import img5b from "../../assets/home-images/services-images/illustration-design/img5/img5b.jpg";
import img5c from "../../assets/home-images/services-images/illustration-design/img5/img5c.jpg";

import img6a from "../../assets/home-images/services-images/illustration-design/img6//img6a.jpg";
import img6b from "../../assets/home-images/services-images/illustration-design/img6//img6b.jpg";
import img6c from "../../assets/home-images/services-images/illustration-design/img6//img6c.jpg";

import slider1 from "../../assets/home-images/services-images/illustration-design/slider1.jpg";
import slider2 from "../../assets/home-images/services-images/illustration-design/slider2.jpg";
import slider3 from "../../assets/home-images/services-images/illustration-design/slider3.jpg";
import slider4 from "../../assets/home-images/services-images/illustration-design/slider4.jpg";
import slider5 from "../../assets/home-images/services-images/illustration-design/slider5.jpg";

import SingleService from "../../components/SingleService";
import ImagesSlider from "../../components/ImagesSlider";

const IllustrationDesign = () => {

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
      title: "Book and Editorial Illustrations:",
      content: `Beautiful, narrative-driven artwork for books, magazines, blogs, and digital publications..
`,
    },
    {
      type: "slider",
      images: sliderImages[1],
    },
    {
      type: "text",
      title: "Children’s Book Illustrations:",
      content: `Colorful, imaginative visuals that captivate young readers and bring stories to life`,
    },
    {
      type: "slider",
      images: sliderImages[2],
    },
    {
      type: "text",
      title: "Character Design:",
      content: `Memorable and expressive characters for brands, animation, gaming, and advertising.

`,
    },
    {
      type: "slider",
      images: sliderImages[3],
    },
    {
      type: "text",
      title: "Product and Packaging Illustrations:",
      content: `Custom illustrations that give your product a unique, standout appearance.
`,
    },
    {
      type: "slider",
      images: sliderImages[4],
    },
    {
      type: "text",
      title: "Custom Icons and Mascots:",
      content: `Tailor-made icons and brand mascots that strengthen your visual identity.`,
    },
    {
      type: "slider",
      images: sliderImages[5],
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

export default IllustrationDesign;

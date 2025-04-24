import React from "react";
import bgImage from "../../assets/home-images/services-images/search-engine/bgImage.png";
import logo from "../../assets/home-images/services-images/search-engine/logo.png";

import img1a from "../../assets/home-images/services-images/search-engine/img1/img1a.png";
import img1b from "../../assets/home-images/services-images/search-engine/img1/img1b.png";
import img1c from "../../assets/home-images/services-images/search-engine/img1/img1c.png";

import img2a from "../../assets/home-images/services-images/search-engine/img2/img2a.png";
import img2b from "../../assets/home-images/services-images/search-engine/img2/img2b.png";
import img2c from "../../assets/home-images/services-images/search-engine/img2/img2c.png";

import img3a from "../../assets/home-images/services-images/search-engine/img3/img3a.png";
import img3b from "../../assets/home-images/services-images/search-engine/img3/img3b.png";
import img3c from "../../assets/home-images/services-images/search-engine/img3/img3c.png";

import img4a from "../../assets/home-images/services-images/search-engine/img4/img4a.png";
import img4b from "../../assets/home-images/services-images/search-engine/img4/img4b.png";
import img4c from "../../assets/home-images/services-images/search-engine/img4/img4c.png";

import img5a from "../../assets/home-images/services-images/search-engine/img5/img5a.png";
import img5b from "../../assets/home-images/services-images/search-engine/img5/img5b.png";
import img5c from "../../assets/home-images/services-images/search-engine/img5/img5c.png";

import img6a from "../../assets/home-images/services-images/search-engine/img6//img6a.png";
import img6b from "../../assets/home-images/services-images/search-engine/img6//img6b.png";
import img6c from "../../assets/home-images/services-images/search-engine/img6//img6c.png";

import slider1 from "../../assets/home-images/services-images/search-engine/slider1.png";
import slider2 from "../../assets/home-images/services-images/search-engine/slider2.png";
import slider3 from "../../assets/home-images/services-images/search-engine/slider3.png";
import slider4 from "../../assets/home-images/services-images/search-engine/slider4.png";
import slider5 from "../../assets/home-images/services-images/search-engine/slider5.png";

import SingleService from "../../components/SingleService";
import ImagesSlider from "../../components/ImagesSlider";

const SearchEngine = () => {

  const sliderImages = [
    [img1a, img1b, img1c], 
    [img2a, img2b, img2c], 
    [img3a, img3b, img3c], 
    [img4a, img4b, img4c], 
    [img5a, img5b, img5c], 
    [img6a, img6b, img6c], 
  ];

  const images = [slider1, slider2, slider3, slider4, slider5];
  return (
    <article>
      <SingleService
        logo={logo}
        bgImage={bgImage}
        title="Search Engine Optimization"
        description={
          <>
            Graphic design is the art of{" "}
            <span className="text-[#E9204F]">visually communicating</span> ideas
            through typography, imagery, and layout.
          </>
        }
        aboutTitle="WHAT IS Search Engine Optimization?"
        aboutPara1={
          <>
            Graphic design is the art of visual communication using{" "}
            <span className="text-[#E9204F]">
              images, typography, and colors to convey messages.
            </span>
            <br />
            It plays a key role in branding, marketing, and storytelling across
            various industries.
          </>
        }
        aboutPara2="Graphic design is a multidisciplinary field that combines art and technology to communicate ideas through visual content. It involves creating and combining symbols, images, and text to form visual representations of messages and concepts. Here's a comprehensive description of graphic design, encompassing its core elements, tools, and applications:"
        img1={sliderImages[0]} 
        img2={sliderImages[1]} 
        img3={sliderImages[2]} 
        img4={sliderImages[3]} 
        img5={sliderImages[4]} 
        img6={sliderImages[5]} 
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

export default SearchEngine;

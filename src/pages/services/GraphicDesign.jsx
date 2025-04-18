import React from "react";
import bgImage from "../../assets/home-images/services-images/graphic-design/graphic-bgImage.png";
import logo from "../../assets/home-images/services-images/graphic-design/graphic-logo.png";
import img1 from "../../assets/home-images/services-images/graphic-design/img1.png";
import img2 from "../../assets/home-images/services-images/graphic-design/img2.png";
import img3 from "../../assets/home-images/services-images/graphic-design/img3.png";
import img4 from "../../assets/home-images/services-images/graphic-design/img4.png";
import img5 from "../../assets/home-images/services-images/graphic-design/img5.png";
import img6 from "../../assets/home-images/services-images/graphic-design/img6.png";

import slider1 from "../../assets/home-images/services-images/graphic-design/img6.png";
import slider2 from "../../assets/home-images/services-images/graphic-design/img1.png";
import slider3 from "../../assets/home-images/services-images/graphic-design/img6.png";
import slider4 from "../../assets/home-images/services-images/graphic-design/img1.png";
import slider5 from "../../assets/home-images/services-images/graphic-design/img6.png";

import SingleService from "../../components/SingleService";
import ImagesSlider from "../../components/ImagesSlider";

const GraphicDesign = () => {
  const images = [slider1, slider2, slider3, slider4, slider5];
  return (
    <article>
      <SingleService
        logo={logo}
        bgImage={bgImage}
        title="GRAPHIC DESIGNING"
        description={
          <>
            Graphic design is the art of{" "}
            <span className="text-[#E9204F]">visually communicating</span> ideas
            through typography, imagery, and layout.
          </>
        }
        aboutTitle="WHAT IS GRAPHIC DESIGN?"
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
        img1={img1}
        img2={img2}
        img3={img3}
        img4={img4}
        img5={img5}
        img6={img6}
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

export default GraphicDesign;

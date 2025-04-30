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

  const gridItems = [
    {
      type: "slider",
      images: sliderImages[0],
    },
    {
      type: "text",
      title: "SEO Audit and Website Analysis:",
      content: `In-depth technical and content audit to identify and fix SEO issues holding you back.
`,
    },
    {
      type: "slider",
      images: sliderImages[1],
    },
    {
      type: "text",
      title: "On-Page SEO Optimization:",
      content: `Strategic optimization of titles, meta descriptions, headings, URLs, and page content for maximum visibility.`,
    },
    {
      type: "slider",
      images: sliderImages[2],
    },
    {
      type: "text",
      title: "Technical SEO:",
      content: `Speed optimization, mobile responsiveness, structured data, and other backend improvements to boost rankings.

`,
    },
    {
      type: "slider",
      images: sliderImages[3],
    },
    {
      type: "text",
      title: "Keyword Research and Strategy:",
      content: `Finding the most relevant, high-converting keywords to target your audience effectively.`,
    },
    {
      type: "slider",
      images: sliderImages[4],
    },
    {
      type: "text",
      title: "Content Creation and Optimization:",
      content: `SEO-focused blog posts, landing pages, and web content that engage users and rank well.`,
    },
    {
      type: "slider",
      images: sliderImages[5],
    },
    {
      type: "text",
      title: "Local SEO Services:",
      content: `Boost your local visibility with Google My Business optimization, local citations, and targeted local keywords.`,
    },
  ];

  const images = [slider1, slider2, slider3, slider4, slider5];
  return (
    <article>
      <SingleService
        logo={logo}
        // bgImage={bgImage}
        title="Search Engine Optimization"
        aboutPara1="At Print Fly Communications, we offer expert SEO services that help your website rank higher, attract more visitors, and convert traffic into real business results."

        aboutPara2="A great website means little if no one can find it. Our SEO services help you increase visibility, attract quality traffic, and grow your business online — sustainably and effectively."
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

export default SearchEngine;

import React from "react";
import bgImage from "../../assets/home-images/services-images/search-engine/bgImage.png";
import logo from "../../assets/home-images/services-images/search-engine/logo.png";

import img1a from "../../assets/home-images/services-images/search-engine/img1/img1a.jpg";
import img1b from "../../assets/home-images/services-images/search-engine/img1/img1b.jpg";
import img1c from "../../assets/home-images/services-images/search-engine/img1/img1c.jpg";

import img2a from "../../assets/home-images/services-images/search-engine/img2/img2a.jpg";
import img2b from "../../assets/home-images/services-images/search-engine/img2/img2b.jpg";
import img2c from "../../assets/home-images/services-images/search-engine/img2/img2c.jpg";

import img3a from "../../assets/home-images/services-images/search-engine/img3/img3a.jpg";
import img3b from "../../assets/home-images/services-images/search-engine/img3/img3b.jpg";
import img3c from "../../assets/home-images/services-images/search-engine/img3/img3c.jpg";

import img4a from "../../assets/home-images/services-images/search-engine/img4/img4a.jpg";
import img4b from "../../assets/home-images/services-images/search-engine/img4/img4b.jpg";
import img4c from "../../assets/home-images/services-images/search-engine/img4/img4c.jpg";

import img5a from "../../assets/home-images/services-images/search-engine/img5/img5a.jpg";
import img5b from "../../assets/home-images/services-images/search-engine/img5/img5b.jpg";
import img5c from "../../assets/home-images/services-images/search-engine/img5/img5c.jpg";

import img6a from "../../assets/home-images/services-images/search-engine/img6//img6a.jpg";
import img6b from "../../assets/home-images/services-images/search-engine/img6//img6b.jpg";
import img6c from "../../assets/home-images/services-images/search-engine/img6//img6c.jpg";

import slider1 from "../../assets/home-images/services-images/search-engine/slider1.jpg";
import slider2 from "../../assets/home-images/services-images/search-engine/slider2.jpg";
import slider3 from "../../assets/home-images/services-images/search-engine/slider3.jpg";
import slider4 from "../../assets/home-images/services-images/search-engine/slider4.jpg";
import slider5 from "../../assets/home-images/services-images/search-engine/slider5.jpg";

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

    </article>
  );
};

export default SearchEngine;

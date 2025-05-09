import React from "react";
import bgImage from "../../assets/home-images/services-images/search-engine/bgImage.png";
import logo from "../../assets/home-images/services-images/search-engine/logo.png";

import img1 from "../../assets/home-images/services-images/search-engine/img1.jpg";
import img2 from "../../assets/home-images/services-images/search-engine/img2.jpg";
import img3 from "../../assets/home-images/services-images/search-engine/img3.jpg";
import img4 from "../../assets/home-images/services-images/search-engine/img4.jpg";
import img5 from "../../assets/home-images/services-images/search-engine/img5.jpg";
import img6 from "../../assets/home-images/services-images/search-engine/img6.jpg";

import slider1 from "../../assets/home-images/services-images/search-engine/slider1.jpg";
import slider2 from "../../assets/home-images/services-images/search-engine/slider2.jpg";
import slider3 from "../../assets/home-images/services-images/search-engine/slider3.jpg";
import slider4 from "../../assets/home-images/services-images/search-engine/slider4.jpg";
import slider5 from "../../assets/home-images/services-images/search-engine/slider5.jpg";

import SingleService from "../../components/SingleService";
import ImagesSlider from "../../components/ImagesSlider";

const SearchEngine = () => {

  const sliderImages = [img1, img2, img3, img4, img5, img6];

  const gridItems = [
    {
      type: "slider",
      image: sliderImages[0],
    },
    {
      type: "text",
      title: "SEO Audit and Website Analysis:",
      content: `In-depth technical and content audit to identify and fix SEO issues holding you back.
`,
    },
    {
      type: "slider",
      image: sliderImages[1],
    },
    {
      type: "text",
      title: "On-Page SEO Optimization:",
      content: `Strategic optimization of titles, meta descriptions, headings, URLs, and page content for maximum visibility.`,
    },
    {
      type: "slider",
      image: sliderImages[2],
    },
    {
      type: "text",
      title: "Technical SEO:",
      content: `Speed optimization, mobile responsiveness, structured data, and other backend improvements to boost rankings.

`,
    },
    {
      type: "slider",
      image: sliderImages[3],
    },
    {
      type: "text",
      title: "Keyword Research and Strategy:",
      content: `Finding the most relevant, high-converting keywords to target your audience effectively.`,
    },
    {
      type: "slider",
      image: sliderImages[4],
    },
    {
      type: "text",
      title: "Content Creation and Optimization:",
      content: `SEO-focused blog posts, landing pages, and web content that engage users and rank well.`,
    },
    {
      type: "slider",
      image: sliderImages[5],
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

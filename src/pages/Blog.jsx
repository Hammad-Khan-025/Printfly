// In your Blog.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { blogsData } from "../components/BlogData"; // Import the data

const Blog = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);

  console.log("Blog Component - useParams id:", id);

  useEffect(() => {
    const foundPost = blogsData.find((post) => post.id === parseInt(id));
    setBlogPost(foundPost);
  }, [id]);

  if (!blogPost) {
    return <div>Loading blog post...</div>;
  }

  return (
    <section className="w-full">
      <div className="relative w-full h-[23rem] sm:h-[33rem]">
        <div
          style={{ backgroundImage: `url(${blogPost.bannerImage})` }} // Use blogPost.bannerImage
          className="absolute inset-0 bg-cover bg-center filter brightness-10"
        ></div>
        <div className="relative z-10 pt-20 px-6 flex items-center justify-center h-full">
          <h1 className="text-xl sm:text-4xl text-white text-center max-w-4xl leading-10 sm:leading-12">
            {blogPost.title}
          </h1>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col-reverse md:grid md:grid-cols-4 gap-10 ">
          <aside className="md:col-span-1 text-sm space-y-6 tracking-wide">
            <div>
              <h3 className="font-bold text-[#E9204F] tracking-wide">
                WRITTEN BY:
              </h3>
              <p className="mt-1 text-[#333]">{blogPost.author}</p>
              <div className="w-full sm:w-40 h-0.5 mt-3 bg-gray-200"></div>
            </div>
            <div>
              <h3 className="font-bold text-[#E9204F] tracking-wide">
                POSTED ON:
              </h3>
              <p className="mt-1 text-[#333]">{blogPost.date}</p>
              <div className="w-full sm:w-40 h-0.5 mt-3 bg-gray-200"></div>
            </div>
            <div>
              <h3 className="font-bold text-[#E9204F] tracking-wide">TAGS:</h3>
              <p className="mt-1 text-[#333]">{blogPost.tags.join(", ")}</p>
            </div>
            <div className="flex justify-evenly sm:justify-start space-x-4 text-2xl sm:text-lg text-[#333]">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="cursor-pointer hover:text-[#E9204F]" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="cursor-pointer hover:text-[#E9204F]" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="cursor-pointer hover:text-[#E9204F]" />
              </a>
              <a
                href="https://web.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="cursor-pointer hover:text-[#E9204F]" />
              </a>
            </div>
          </aside>

          <article className="md:col-span-3 space-y-10 text-[#111]">
            {blogPost.content.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-6">
                {section.heading && (
                  <h2 className="text-xl text-black">
                    {section.heading}
                  </h2>
                )}
                {section.heading2 && (
                  <h2 className="text-2xl font-black text-[#E9204F]">
                    {section.heading2}
                  </h2>
                )}
                {section.image && (
                  <img
                    className="mb-12"
                    src={section.image}
                    alt={`${blogPost.title} - Section ${sectionIndex + 1}`}
                  />
                )}
                {section.paragraphs &&
                  section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className=" text-gray-500 font-glegoo">
                      {paragraph}
                    </p>
                  ))}
              </div>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blog;

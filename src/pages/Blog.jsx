import React from 'react'
import banner1 from "../assets/home-images/work-images/slider1.jpg";
import blogTextImage from "../assets/home-images/blog-images/blogTextImage.jpg";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Blog = () => {
  return (
    <section className='w-full'>
        <div className="relative w-full h-[23rem] sm:h-[33rem]">
  {/* Background with brightness */}
  <div
    style={{ backgroundImage: `url(${banner1})` }}
    className="absolute inset-0 bg-cover bg-center filter brightness-10"
  ></div>

  {/* Text content on top */}
  <div className="relative z-10 pt-20 px-6 flex items-center justify-center h-full">
    <h1 className="text-xl sm:text-4xl text-white text-center max-w-4xl leading-10 sm:leading-12">
      FESPA 2025 events to unite visionaries across and beyond Print, Signage and Personalisation
    </h1>
  </div>
</div>



    <div className="bg-white">
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col-reverse md:grid md:grid-cols-4 gap-10 ">
      {/* Sidebar */}
      <aside className="md:col-span-1 text-sm space-y-6 tracking-wide">
        <div>
          <h3 className="font-bold text-[#E9204F] tracking-wide">WRITTEN BY:</h3>
          <p className="mt-1 text-[#333]">Aron Larsson</p>
          <div className='w-full sm:w-40 h-0.5 mt-3 bg-gray-200'></div>
        </div>
        <div>
          <h3 className="font-bold text-[#E9204F] tracking-wide">POSTED ON:</h3>
          <p className="mt-1 text-[#333]">January 28, 2019</p>
          <div className='w-full sm:w-40 h-0.5 mt-3 bg-gray-200'></div>
        </div>
        <div>
          <h3 className="font-bold text-[#E9204F] tracking-wide">TAGS:</h3>
          <p className="mt-1 text-[#333]">Digital, UX Design</p>
        </div>
        <div className="flex justify-evenly sm:justify-start space-x-4 text-lg text-[#333]">
          <FaTwitter className="cursor-pointer hover:text-[#E9204F]" />
          <FaFacebookF className="cursor-pointer hover:text-[#E9204F]" />
          <FaLinkedinIn className="cursor-pointer hover:text-[#E9204F]" />
        </div>
      </aside>

      {/* Main Content */}
      <article className="md:col-span-3 space-y-10 text-[#111]">
        <div className="space-y-6">
          <p className="text-lg sm:text-xl">
            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User-generated content in real-time will have multiple touchpoints for offshoring.
          </p>
          <p className="text-sm text-gray-500 font-glegoo leading-7">
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-black text-black">
            The Untapped Gold Mine of Digital that Virtually no one knows about
          </h2>
          <p className="text-sm text-gray-500 font-glegoo leading-7">
            Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.
          </p>
        </div>

        <img src={blogTextImage} alt="" />

        <p className="text-sm text-gray-500 font-glegoo leading-7">
        Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
<br /> <br />
Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
<br /> <br />
Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
<br /> <br />
Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.
<br /> <br />
Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
<br /> <br />
Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
<br /> <br />
Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.
        </p>


        {/* comments section */}
        <div className="max-w-4xl mx-auto">
      <h2 className="text-lg font-bold mb-4 tracking-wide">Leave a Reply</h2>

      <form className="space-y-4">
        <textarea
          className="w-full h-36 border border-gray-300 focus:outline-none p-2 resize-none"
          placeholder=""
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-0">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 focus:outline-none p-2 w-full"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 focus:outline-none p-2 w-full"
          />
          <input
            type="url"
            placeholder="Website"
            className="border border-gray-300 focus:outline-none p-2 w-full"
          />
        </div>

        <button
          type="submit"
          className="mt-2 border border-[#E9204F] hover:bg-[#E9204F] hover:text-white text-black font-medium px-6 py-3 transition-all cursor-pointer"
        >
          Post Comment
        </button>
      </form>
    </div>
      </article>
    </div>
    </div>
    </section>
  )
}

export default Blog

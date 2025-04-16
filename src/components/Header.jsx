import React, { useState } from "react";
import logo from "../assets/home-images/printfly-logo.png";
import { RiMenu3Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center max-w-screen-xl mx-auto p-5 sm:p-8">
      {/* Logo */}
      <img src={logo} alt="PrintfLy Logo" />

      {/* Hamburger or Close Icon */}
      <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? <MdClose size={24} /> : <RiMenu3Line size={24} />}
      </div>

      {/* Menu for larger screens */}
      <ul className="hidden md:flex uppercase items-center gap-10 text-[#B2B1B1] text-sm tracking-wide pr-28">
        <li>Home</li>
        <li>Services</li>
        <li>Work</li>
        <li>Clients</li>
        <li>Blogs</li>
        <li>Contact</li>
      </ul>

      {/* Dropdown Menu for smaller screens */}
      <div
        className={`absolute top-28 left-0 h-auto w-full bg-[#101010] shadow-lg transform transition-transform duration-300 ease-in-out border-b border-t border-[#B2B1B1] ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center uppercase text-[#B2B1B1] text-sm tracking-wide gap-6 py-10 h-full">
          <li onClick={toggleMenu} className="cursor-pointer">
            Home
          </li>
          <li onClick={toggleMenu} className="cursor-pointer">
            Services
          </li>
          <li onClick={toggleMenu} className="cursor-pointer">
            Work
          </li>
          <li onClick={toggleMenu} className="cursor-pointer">
            Clients
          </li>
          <li onClick={toggleMenu} className="cursor-pointer">
            Blogs
          </li>
          <li onClick={toggleMenu} className="cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

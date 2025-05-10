import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/home-images/printfly-logo.png";
import { RiMenu3Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    if (location.pathname === "/") {
      // If on the home page, scroll directly
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on an inner page, navigate to home and then scroll
      navigate("/", { state: { scrollToId: id } });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Work", id: "work" },
    { label: "Clients", id: "clients" },
    { label: "Blogs", id: "blogs" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="flex justify-between items-center max-w-screen-xl mx-auto p-5 sm:p-8">
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="PrintfLy Logo" />
      </Link>

      {/* Hamburger or Close Icon */}
      <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? <MdClose size={24} /> : <RiMenu3Line size={24} />}
      </div>

      {/* Menu for larger screens */}
      <ul className="hidden md:flex uppercase items-center gap-10 text-[#B2B1B1] text-sm tracking-wide pr-28">
        {menuItems.map((item) =>
          item.label === "Home" ? (
            <li key={item.id}>
              <Link to="/" className="cursor-pointer">
                {item.label}
              </Link>
            </li>
          ) : (
            <li key={item.id} className="cursor-pointer" onClick={() => scrollToSection(item.id)}>
              {item.label}
            </li>
          )
        )}
      </ul>

      {/* Dropdown Menu for smaller screens */}
      <div
        className={`absolute top-28 left-0 h-auto w-full bg-[#101010] shadow-lg transform transition-transform duration-300 ease-in-out border-b border-t border-[#B2B1B1] ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center uppercase text-[#B2B1B1] text-sm tracking-wide gap-6 py-10 h-full">
          {menuItems.map((item) =>
            item.label === "Home" ? (
              <li key={item.id} onClick={() => setIsMenuOpen(false)}>
                <Link to="/" className="cursor-pointer">
                  {item.label}
                </Link>
              </li>
            ) : (
              <li key={item.id} onClick={() => scrollToSection(item.id)} className="cursor-pointer">
                {item.label}
              </li>
            )
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
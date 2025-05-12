import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/home-images/printfly-logo.png";
import { RiMenu3Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    if (id === "home") {
      // Always scroll to the top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (location.pathname === "/") {
      // Scroll to specific section if already on the homepage
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to homepage and scroll to the requested section
      navigate("/", { state: { scrollToId: id } });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false); // Hide header when scrolling down
      } else {
        setIsHeaderVisible(true); // Show header when scrolling up or at top
      }

      // Set background to black after scrolling a bit
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // Handle scrolling to specific sections when navigating to the homepage
    if (location.state?.scrollToId) {
      const section = document.getElementById(location.state.scrollToId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Work", id: "work" },
    { label: "Clients", id: "clients" },
    { label: "Blogs", id: "blogs" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isHeaderVisible ? 0 : -100, opacity: isHeaderVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 w-full z-50 ${
        isScrolled ? "bg-black" : "bg-transparent"
      } shadow-md transition-all duration-300`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHeaderVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="flex justify-between items-center max-w-screen-xl mx-auto py-4 px-5"
      >
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="PrintfLy Logo" />
        </Link>

        {/* Hamburger or Close Icon */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <MdClose size={24} /> : <RiMenu3Line size={24} />}
        </div>

        {/* Menu for larger screens */}
        <ul className="hidden md:flex uppercase items-center gap-10 text-[#B2B1B1] text-sm tracking-wide pr-28">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer hover:text-white transition-all duration-300"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Dropdown Menu for smaller screens */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isMenuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.5 }}
        className="absolute top-[6.5rem] left-0 h-auto w-full bg-[#101010] shadow-lg transform transition-transform ease-in-out border-b border-t border-[#B2B1B1]"
      >
        <ul className="flex flex-col items-center uppercase text-[#B2B1B1] text-sm tracking-wide gap-6 py-10 h-full">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer hover:text-white transition-all duration-300"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  );
};

export default Header;

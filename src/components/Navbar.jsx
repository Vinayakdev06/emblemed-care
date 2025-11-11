import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll for shrink effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-smooth ${
        isScrolled
          ? "backdrop-blur-md bg-white/90 shadow-lg py-1"
          : "bg-white/95 py-2 shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 md:px-8">
        {/* ✅ Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="EmbleMed Care Logo"
            className={`transition-all duration-300 ease-smooth ${
              isScrolled ? "w-10 h-10" : "w-12 h-12"
            } object-contain group-hover:scale-110`}
          />
          <div
            className={`font-semibold transition-all duration-300 ease-smooth ${
              isScrolled ? "text-lg" : "text-xl"
            } text-gray-800 group-hover:text-blue-600`}
          >
            EmbleMed Care
          </div>
        </Link>

        {/* ✅ Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* ✅ Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            aria-label="menu"
            onClick={toggleMenu}
            className="text-gray-700 text-3xl focus:outline-none"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white shadow-inner transition-all duration-500 ease-smooth overflow-hidden ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-2 space-y-2 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

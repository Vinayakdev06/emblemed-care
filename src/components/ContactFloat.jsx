import React, { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function ContactFloat() {
  const phone = "+919987120563";
  const instagramURL = "https://www.instagram.com/emblemedcare";
  const linkedinURL = "https://www.linkedin.com/company/emblemedcare";

  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // ✅ Show only when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(true);

        // Auto-hide after 3 seconds of no scroll
        if (timeoutId) clearTimeout(timeoutId);
        const id = setTimeout(() => setIsVisible(false), 2500);
        setTimeoutId(id);
      } else if (currentScrollY < lastScrollY) {
        // Hide when scrolling up
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [lastScrollY, timeoutId]);

  return (
    <div
      className={`fixed z-50 transition-all duration-700 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-10 opacity-0 pointer-events-none"
      } flex flex-row md:flex-col gap-3 
      bottom-4 md:bottom-6 right-0 left-0 md:left-auto md:right-4 
      justify-center md:justify-end`}
    >
      {/* ✅ Background wrapper with blur and transparency */}
      <div className="bg-white/70 backdrop-blur-md rounded-full md:rounded-3xl p-2 flex flex-row md:flex-col gap-3 shadow-lg border border-white/20">
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${phone.replace(/\D/g, "")}`}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white shadow-md hover:scale-110 transition-all duration-300 ease-out"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp size={22} />
        </a>

        {/* Email */}
        <a
          href="mailto:care.emblemedcare@gmail.com"
          className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white shadow-md hover:scale-110 transition-all duration-300 ease-out"
          title="Send an Email"
        >
          <FaEnvelope size={20} />
        </a>

        {/* Call */}
        <a
          href={`tel:${phone}`}
          className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md hover:scale-110 transition-all duration-300 ease-out"
          title="Call Us"
        >
          <FaPhone size={20} />
        </a>

        {/* Instagram */}
        <a
          href={instagramURL}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white shadow-md hover:scale-110 transition-all duration-300 ease-out"
          title="Visit Instagram"
        >
          <FaInstagram size={22} />
        </a>

        {/* LinkedIn */}
        <a
          href={linkedinURL}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center text-white shadow-md hover:scale-110 transition-all duration-300 ease-out"
          title="Visit LinkedIn"
        >
          <FaLinkedin size={22} />
        </a>
      </div>
    </div>
  );
}

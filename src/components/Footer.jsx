import React from 'react';
import ContactFloat from './ContactFloat';

export default function Footer() {
  return (
    <>
      <ContactFloat />
      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">

          {/* Left Section - Copyright */}
          <div className="text-sm text-gray-600 mb-4 md:mb-0">
            © {new Date().getFullYear()} EmbleMed Care. All rights reserved.
            <br />
            <span className="text-gray-500 text-xs">
              GSTIN: 27HMUPM5910A1ZU
            </span>
          </div>

          {/* Middle Section - Contact Info */}
          <div className="text-sm text-gray-600 mb-4 md:mb-0">
            📍 <span className="font-medium">Greater Noida, India</span> <br />
            ✉️{" "}
            <a
              href="mailto:care.emblemedcare@gmail.com"
              className="text-blue-600 hover:underline"
            >
              care.emblemedcare@gmail.com
            </a>
            <br />
            📞{" "}
            <a
              href="tel:+919987120563"
              className="text-blue-600 hover:underline"
            >
              +91-9987120563
            </a>
          </div>

          {/* Right Section - Website & Policies */}
          <div className="text-sm text-gray-600 text-center md:text-right">
            🌐{" "}
            <a
              href="https://EmbleMedCare.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              EmbleMedCare.com
            </a>

            <div className="mt-1 space-x-2 text-xs">
              <a
                href="/privacy-policy"
                className="text-blue-600 hover:underline"
              >
                Privacy Policy
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="/terms-and-conditions"
                className="text-blue-600 hover:underline"
              >
                Terms & Conditions
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="/disclaimer"
                className="text-blue-600 hover:underline"
              >
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto bg-gray-50 rounded-2xl shadow-sm">
      <div className="md:flex md:items-center md:gap-10">
        
        {/* Left Side - Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About <span className="text-blue-600">EmbleMed Care</span>
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed text-lg">
            At EmbleMed Care, we specialize in providing reliable and innovative
            medical equipment that serves hospitals, clinics, and home-care
            professionals. With a focus on quality, precision, and customer
            trust, we aim to make healthcare more accessible and effective.
          </p>

          {/* Read More Button */}
          <Link
            to="/about"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-700 transition duration-200"
          >
            Learn More →
          </Link>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="/images/hero2.jpg"
            alt="About EmbleMed Care"
            className="rounded-2xl shadow-md hover:shadow-lg transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}

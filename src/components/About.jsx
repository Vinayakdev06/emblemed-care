import React from "react";

export default function About() {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          About EmbleMed Care
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          At <span className="font-semibold text-blue-600">EmbleMed Care</span>,
          we are dedicated to providing high-quality medical equipment and
          healthcare solutions that empower hospitals, clinics, and healthcare
          professionals. Our mission is to deliver reliable, innovative, and
          cost-effective products that make patient care safer and more
          efficient.
        </p>

        {/* Mission / Vision / Why Choose Us */}
        <div className="mt-10 grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              🏥 Our Mission
            </h3>
            <p className="text-gray-600">
              To make healthcare accessible through affordable and high-quality
              medical devices for every healthcare provider.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              💡 Our Vision
            </h3>
            <p className="text-gray-600">
              To become India’s most trusted brand in medical equipment,
              empowering better healthcare outcomes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              🤝 Why Choose Us
            </h3>
            <p className="text-gray-600">
              Trusted by healthcare professionals for quality, innovation, and
              commitment to service excellence.
            </p>
          </div>
        </div>

        {/* 👨‍⚕️ Founders Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            👨‍⚕️ Our Founders
          </h3>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Founder 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center">
              <img
                src="/images/founder1.jpg"
                alt="Founder 1"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-blue-600">
                Dr. Radhika Mishra
              </h4>
              <p className="text-gray-600 text-sm">Founder & CEO</p>
              <p className="mt-3 text-gray-500 text-center max-w-sm">
                With over 15 years of experience in the medical field, Dr.
                Radhika Mishra is passionate about improving healthcare
                accessibility through innovation and quality equipment.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col items-center">
              <img
                src="/images/founder2.jpg"
                alt="Founder 2"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-blue-600">
                Mr. Vinayak Mishra
              </h4>
              <p className="text-gray-600 text-sm">Co-Founder & Operations Head</p>
              <p className="mt-3 text-gray-500 text-center max-w-sm">
                A healthcare entrepreneur with a background in hospital
                management, he ensures smooth operations and a customer-first
                approach at EmbleMed Care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

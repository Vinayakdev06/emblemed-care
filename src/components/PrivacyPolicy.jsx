import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-gray-700 leading-relaxed">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
        Privacy Policy
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Last Updated: November 2025
      </p>

      <p>
        Welcome to <strong>EmbleMed Care</strong> (“we”, “our”, or “us”). We
        value your trust and are committed to protecting your personal
        information. This Privacy Policy explains how we collect, use, and
        safeguard your information when you visit our website{" "}
        <a
          href="https://www.emblemedcare.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          www.EmbleMedCare.com
        </a>.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
      <ul className="list-disc ml-6">
        <li>
          <strong>Contact Information:</strong> When you use our contact form,
          we collect your name, email address, and message details.
        </li>
        <li>
          <strong>Technical Data:</strong> We may automatically collect your IP
          address, browser type, and usage data for analytics and site
          improvement.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc ml-6">
        <li>To respond to your inquiries or requests.</li>
        <li>To improve our website’s functionality and user experience.</li>
        <li>To send updates or service-related communications.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Data Protection</h2>
      <p>
        We implement appropriate administrative and technical measures to
        safeguard your data. However, no online transmission or storage system
        is 100% secure, and we cannot guarantee absolute protection.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Cookies and Analytics</h2>
      <p>
        Our website may use cookies or analytics tools to enhance your browsing
        experience and understand visitor behavior. You can disable cookies in
        your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Sharing of Information</h2>
      <p>
        We do not sell, rent, or trade your personal information. We may share
        it only when required by law or with trusted partners who help us
        operate our services under strict confidentiality agreements.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Your Rights</h2>
      <p>
        You have the right to access, correct, or request deletion of your
        personal information. You may also withdraw consent for us to contact
        you at any time.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically to reflect changes in our
        practices. The revised policy will be posted on this page with the
        updated date.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or our data
        practices, please contact us at:
      </p>

      <div className="mt-4 bg-gray-50 p-4 rounded-lg">
        <p>
          📧{" "}
          <a
            href="mailto:care.emblemedcare@gmail.com"
            className="text-blue-600 hover:underline"
          >
            care.emblemedcare@gmail.com
          </a>
          <br />
          📞 +91-9987120563 / +91-9324387272 / +91-9451377989
          <br />
          📍 Greater Noida, Uttar Pradesh, India
        </p>
      </div>

      <p className="text-sm text-gray-500 mt-10 text-center">
        © {new Date().getFullYear()} EmbleMed Care. All rights reserved.
      </p>
    </section>
  );
}

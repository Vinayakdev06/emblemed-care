import React from "react";

export default function TermsAndConditions() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-gray-700 leading-relaxed">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">
        Terms & Conditions
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Last Updated: November 2025
      </p>

      <p>
        Welcome to <strong>EmbleMed Care</strong>. By accessing or using our
        website{" "}
        <a
          href="https://www.emblemedcare.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline"
        >
          www.EmbleMedCare.com
        </a>{" "}
        (the “Site”), you agree to be bound by these Terms & Conditions. Please
        read them carefully before using our services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. General Terms</h2>
      <p>
        These Terms apply to all visitors and users of our website. If you do
        not agree with these Terms, please do not use our website or services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. Company Information</h2>
      <p>
        EmbleMed Care is a registered medical equipment provider located in
        Greater Noida, Uttar Pradesh, India. All content, logos, and trademarks
        displayed on this website are the property of EmbleMed Care and may not
        be used without prior written consent.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Products & Services</h2>
      <p>
        The information, specifications, and images of medical products
        displayed on this site are for general informational purposes only. We
        reserve the right to modify or discontinue any product at any time
        without prior notice.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Offline Transactions Disclaimer</h2>
      <p>
        The information, product descriptions, or specifications provided on
        this website are for general informational purposes only. EmbleMed Care
        does not process or accept payments through this website. All purchases,
        quotations, and transactions are handled offline through direct
        communication with our authorized representatives. Any sales or service
        agreements made offline are subject to separate terms mutually agreed
        upon between the client and EmbleMed Care.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Pricing & Payments</h2>
      <p>
        If our website offers products for sale in the future, all prices will
        be displayed in Indian Rupees (₹) and are subject to applicable taxes,
        including GST. Payments will be processed securely through authorized
        gateways.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Limitation of Liability</h2>
      <p>
        EmbleMed Care shall not be held responsible for any direct or indirect
        loss, injury, or damage arising from the use of our products or
        information provided on this website. Always consult a qualified medical
        professional before using medical devices.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Intellectual Property</h2>
      <p>
        All content, including text, graphics, icons, and images, is protected
        under copyright law. Reproduction, distribution, or modification without
        written permission is prohibited.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Third-Party Links</h2>
      <p>
        Our website may contain links to external websites for your convenience.
        We do not control or endorse the content of those sites and are not
        responsible for their privacy practices or accuracy.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">9. Governing Law</h2>
      <p>
        These Terms are governed by and construed in accordance with the laws of
        India. Any disputes arising from or relating to these Terms shall be
        subject to the exclusive jurisdiction of the courts in Uttar Pradesh,
        India.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">10. Orders, Returns & Refunds</h2>
      <p>
        As of now, EmbleMed Care operates as an informational corporate website
        and does not process online payments or orders. Any future
        purchase-related terms, including returns and refunds, will be updated
        on this page once our e-commerce services launch.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">11. Changes to Terms</h2>
      <p>
        We may revise these Terms & Conditions from time to time. Updated
        versions will be posted on this page with the revised date.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">12. Contact Us</h2>
      <p>
        For any questions about these Terms & Conditions, please contact us at:
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

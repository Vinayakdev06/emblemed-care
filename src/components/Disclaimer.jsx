import React from "react";

export default function Disclaimer() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 text-gray-700 leading-relaxed">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Disclaimer</h1>
      <p className="text-center text-gray-500 mb-8">Last updated: {new Date().getFullYear()}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">No Medical Advice</h2>
      <p>
        The information provided on <strong>EmbleMed Care</strong> (the "Site")
        is for general informational purposes only and is not intended to be a
        substitute for professional medical advice, diagnosis, or treatment.
        Always seek the advice of a qualified healthcare provider with any
        questions you may have regarding a medical condition or the use of any
        medical device.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Product Information</h2>
      <p>
        Product descriptions, specifications, images, and other content on the
        Site are provided for general guidance only. Actual product features,
        specifications, and appearance may vary. Please contact our sales or
        technical team for exact specifications and compatibility before
        purchasing or using a product.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">No Warranties</h2>
      <p>
        While we strive to keep the information on the Site accurate and up to
        date, EmbleMed Care makes no warranties or representations of any kind,
        express or implied, about the completeness, accuracy, reliability, or
        availability of the Site or the information, products, services, or
        related graphics contained on the Site.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, EmbleMed Care and its
        representatives shall not be liable for any direct, indirect,
        incidental, consequential, or punitive damages arising out of or in
        connection with your use of the Site, product information, or any
        reliance on such information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">External Links</h2>
      <p>
        The Site may contain links to third-party websites. These links are
        provided for convenience only. EmbleMed Care does not endorse, control,
        or guarantee the content, accuracy, or reliability of any linked
        websites and is not responsible for their content or practices.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Business Transactions</h2>
      <p>
        As stated in our Terms & Conditions, any purchase quotations, orders, or
        agreements originated via the Site are processed offline and are subject
        to separate written agreements between the parties.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Updates</h2>
      <p>
        We may update this Disclaimer from time to time. The revised version
        will be posted on this page with the updated date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contact</h2>
      <p>
        If you have questions about this Disclaimer, please contact us at:
      </p>
      <div className="mt-4 bg-gray-50 p-4 rounded-lg">
        <p>
          📧{" "}
          <a href="mailto:care.emblemedcare@gmail.com" className="text-blue-600 hover:underline">
            care.emblemedcare@gmail.com
          </a>
          <br />
          📞 +91-9987120563 / +91-9324387272
        </p>
      </div>

      <p className="text-sm text-gray-500 mt-10 text-center">
        © {new Date().getFullYear()} EmbleMed Care. All rights reserved.
      </p>
    </section>
  );
}

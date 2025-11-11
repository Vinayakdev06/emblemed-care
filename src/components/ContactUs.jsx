import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_33qz9vg",    // ✅ EmailJS Service ID
        "template_fe5qpfp",   // ✅ Template ID
        form.current,
        "7i6UI18nKRxT-_a2z"   // ✅ Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Failed to send message. Check console for details.");
        }
      );
  };

  return (
    <section id="contact" className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
        Get in Touch
      </h2>
      <p className="text-gray-600 mb-10 text-center">
        Have questions or need support? Reach out to our team — we’re here to help.
      </p>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <form ref={form} onSubmit={sendEmail} className="space-y-4 bg-white shadow-md rounded-xl p-6">
          <input
            type="text"
            name="name" // make sure your template also uses {{name}}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email" // make sure your template uses {{email}}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your Email"
          />
          <textarea
            name="message" // make sure your template uses {{message}}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="Your Message"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
          >
            Send Message
          </button>
        </form>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="font-medium text-gray-800 text-xl mb-3">Contact Details</h3>
          <p className="text-gray-600 mb-2">
            📞 <span className="font-medium">Phone:</span> +91-9987120563 / +91-9324387272 / +91-9451377989
          </p>
          <p className="text-gray-600 mb-4">
            📧 <span className="font-medium">Email:</span>{" "}
            <a href="mailto:Care.emblemedcare@gmail.com" className="text-blue-600 hover:underline">
              Care.emblemedcare@gmail.com
            </a>
          </p>

          <h4 className="font-medium text-gray-800 mb-3">Quick Connect</h4>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/9199324387272"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white transition"
            >
              💬 WhatsApp
            </a>

            <a
              href="mailto:Care.emblemedcare@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition"
            >
              📧 Email
            </a>

            <a
              href="tel:+919987120563"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-800 text-white transition"
            >
              📞 Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

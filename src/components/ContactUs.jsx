// src/components/ContactUs.jsx
import React from 'react';

export default function ContactUs() {
  return (
    <section
      id="contact-us"
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: `url(/images/contact-bg.jpg)` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60" />
      <div className="relative max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          Contact Us
        </h2>

        <form
          action="https://formspree.io/f/mzzgrwyw"
          method="POST"
          className="bg-white rounded-lg p-8 space-y-6 shadow-lg"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-1"
            >
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label
              htmlFor="mobile"
              className="block text-gray-700 font-medium mb-1"
            >
              Mobile Number
            </label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+91 9876543210"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Your Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="What would you like to tell us?"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

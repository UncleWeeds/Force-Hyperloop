// src/components/ContactUs.jsx
import React, { useState } from 'react';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', mobile: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formspree endpoint or other handling
    console.log('Contact form submitted:', form);
    alert('Thanks for reaching out! We’ll get back to you soon.');
    setForm({ name: '', mobile: '', email: '', message: '' });
  };

  return (
    <section
      id="contact-us"
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: 'url(/images/contact-bg.jpg)' }}
    >
      <div className="absolute inset-0 bg-black opacity-60" />
      <div className="relative max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 space-y-6 shadow-lg">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          {/* Mobile */}
          <div>
            <label htmlFor="mobile" className="block text-gray-700 font-medium mb-1">
              Mobile Number
            </label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              value={form.mobile}
              onChange={handleChange}
              required
              pattern="^\+\d{1,3}\s?\d{4,14}$"
              title="Include country code, e.g. +1 1234567890"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="+91 9876543210"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Your Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="What would you like to tell us?"
            />
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

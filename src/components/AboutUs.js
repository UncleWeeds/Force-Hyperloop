import React from 'react';

export default function AboutUs({ data }) {
  const { heading, text, imageUrl } = data;

  return (
    <section id="about-us" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2 items-center">
        {/* Text */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">{heading}</h2>
          <p className="text-lg text-gray-700">{text}</p>
        </div>
        {/* Image */}
        <div>
          <img
            src={imageUrl}
            alt="About Us"
            className="w-full rounded-lg shadow-lg object-cover h-64 md:h-auto"
          />
        </div>
      </div>
    </section>
  );
}

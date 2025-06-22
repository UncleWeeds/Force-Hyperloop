// src/components/Sponsorship.jsx
import React from 'react';

export default function Sponsorship({ imageUrl, altText, description }) {
  return (
    <section id="sponsorship" className="py-16 bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold mb-8">Our Sponsors</h2>
        <div className="inline-block">
          <img
            src={imageUrl}
            alt={altText}
            className="h-32 object-contain mb-4"
          />
          {description && (
            <p className="text-gray-700">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}

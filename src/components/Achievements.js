// src/components/Achievements.jsx
import React from 'react';

export default function Achievements({ items }) {
  return (
    <section id="achievements" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Remove text-center, add pl-0 (or adjust as desired) */}
        <h2 className="text-3xl font-extrabold mb-8 text-left">
          Achievements
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

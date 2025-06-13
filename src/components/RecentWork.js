import React from 'react';

export default function RecentWork({ items }) {
  return (
    <section id="recent-work" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold mb-8">Achievements</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="block bg-gray-800 rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.imageUrl})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300">
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

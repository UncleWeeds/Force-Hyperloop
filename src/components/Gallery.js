// src/components/Gallery.jsx
import React, { useState } from 'react';

export default function Gallery({ items }) {
  const [lightbox, setLightbox] = useState({ open: false, idx: 0 });

  const openLightbox = (index) => setLightbox({ open: true, idx: index });
  const closeLightbox = () => setLightbox({ open: false, idx: 0 });

  return (
    <section id="gallery" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold mb-8 text-center">Gallery</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((img, idx) => (
            <button
              key={idx}
              onClick={() => openLightbox(idx)}
              className="focus:outline-none"
            >
              <div className="bg-black rounded-lg shadow-md overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-white text-center">{img.alt}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightbox.open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <img
            src={items[lightbox.idx].src}
            alt={items[lightbox.idx].alt}
            className="max-h-full max-w-full rounded-lg"
          />
        </div>
      )}
    </section>
  );
}

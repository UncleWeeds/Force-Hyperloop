import React from 'react';

export default function Hero({ data }) {
  const { title, subtitle, ctaText, backgroundImage } = data;

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="relative max-w-3xl px-4 text-white space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold">{title}</h1>
        <p className="text-lg md:text-xl">{subtitle}</p>
      </div>
    </section>
  );
}

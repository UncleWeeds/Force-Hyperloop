// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import Achievements from '../components/Achievements';
import Sponsorship from '../components/Sponsorship';
import AboutUs from '../components/AboutUs';
import { hero, aboutUs, achievements } from '../data/sections';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero data={hero} />

      <AboutUs data={aboutUs} />

      {/* Achievements Section */}
      <Achievements items={achievements} />

      {/* Sponsorship Section */}
      <Sponsorship
        imageUrl="/images/ansys-logo.jpg"
        altText="Ansys Logo"
        description="Proudly supported by Ansys"
      />

      {/* About Us Section */}
    </>
  );
}

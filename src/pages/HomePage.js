// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import RecentWork from '../components/RecentWork';      // This is now your Achievements section
// import ContactUs from '../components/ContactUs';     // removed, lives on its own page
import { hero, aboutUs, recentWorksList } from '../data/sections';
import Achievements from '../components/Achievements';
import { achievements } from '../data/sections';

export default function HomePage() {
  return (
    <>
      <Hero data={hero} />
      <AboutUs data={aboutUs} />
      {/* Render Achievements on home */}
      <Achievements items={achievements} />
    </>
  );
}

import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import RecentWork from '../components/RecentWork';

import { hero, aboutUs, recentWork } from '../data/sections';

export default function HomePage() {
  return (
    <>
      <Hero data={hero} />
      <AboutUs data={aboutUs} />
      <RecentWork items={recentWork} />
    </>
  );
}

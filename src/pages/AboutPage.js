import React from 'react';
import AboutUs from '../components/AboutUs';
import { aboutUs } from '../data/sections';

export default function AboutPage() {
  return <AboutUs data={aboutUs} />;
}

// src/pages/GalleryPage.jsx
import React from 'react';
import Gallery from '../components/Gallery';
import { galleryItems } from '../data/sections';

export default function GalleryPage() {
  return (
    <div className="pt-16">
      <Gallery items={galleryItems} />
    </div>
  );
}

// src/pages/RecentWorksPage.jsx
import React from 'react';
import RecentWorkCard from '../components/RecentWorkCard';
import { recentWorksList } from '../data/sections';

export default function RecentWorksPage() {
  return (
    <div
      className="pt-16 min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/recent-bg.jpg)' }}
    >
      <div className="bg-black bg-opacity-75 min-h-full">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white mb-8">
            Recent Works
          </h1>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
            {recentWorksList.map((work) => (
              <RecentWorkCard key={work.id} work={work} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

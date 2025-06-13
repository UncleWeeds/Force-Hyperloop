// src/pages/RecentWorksPage.jsx
import React from 'react';
import RecentWorkCard from '../components/RecentWorkCard';
import { recentWorksList } from '../data/sections';

export default function RecentWorksPage() {
  return (
    <div className="pt-16 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-white mb-8">
          Achievements
        </h1>
        {/* items-start makes sure the grid doesn’t stretch items */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start">
          {recentWorksList.map((work) => (
            <RecentWorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </div>
  );
}

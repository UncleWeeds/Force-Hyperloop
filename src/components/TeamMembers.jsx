// src/components/TeamMembers.jsx
import React from 'react';

export default function TeamMembers({ members }) {
  return (
    <section id="team" className="py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold mb-8 text-center">Team Leads</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {members.map(({ name, role, photoUrl }) => (
            <div
              key={name}
              className="bg-gray-800 rounded-lg shadow hover:shadow-lg transition overflow-hidden p-6 flex flex-col items-center"
            >
              {photoUrl ? (
                <img
                  src={photoUrl}
                  alt={name}
                  className="w-24 h-24 object-cover rounded-full mb-4"
                />
              ) : (
                <div className="w-24 h-24 bg-gray-700 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-xl font-semibold">{name.charAt(0)}</span>
                </div>
              )}
              <h3 className="mt-2 text-lg font-semibold">{name}</h3>
              <p className="mt-1 text-gray-300 text-center">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

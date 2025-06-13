// src/components/RecentWorkCard.jsx
import React, { useState } from 'react';
import RequestAccessForm from './RequestAccessForm';

export default function RecentWorkCard({ work }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="p-6 flex-grow">
        <h2 className="text-xl font-semibold mb-2">{work.title}</h2>
        <p className="text-gray-700">{work.description}</p>
      </div>

      <div className="p-4 bg-gray-100 text-right">
        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Request Access
          </button>
        ) : (
          <RequestAccessForm
            workTitle={work.title}
            onCancel={() => setShowForm(false)}
          />
        )}
      </div>
    </div>
  );
}

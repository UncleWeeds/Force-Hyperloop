// src/components/RecentWorkCard.jsx
import React, { useState } from 'react';
import RequestAccessForm from './RequestAccessForm';

export default function RecentWorkCard({ work }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="self-start bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="p-6 flex-grow">
        <h2 className="text-xl font-semibold mb-2">{work.title}</h2>
        <p className="text-gray-700 mb-4">{work.description}</p>

        {/* Video Embed */}
        {work.videoUrl && (
          <div className="mb-4">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={work.videoUrl}
                title={work.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded"
              />
            </div>
          </div>
        )}
      </div>

      {/* Footer: button or form */}
      <div className="p-4 bg-gray-100">
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


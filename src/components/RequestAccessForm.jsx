import React from 'react';

export default function RequestAccessForm({ workTitle, onCancel }) {
  const formspreeEndpoint = "https://formspree.io/f/mzzgrwyw";

  return (
    <form
      action={formspreeEndpoint}
      method="POST"
      className="bg-white rounded-lg p-6 space-y-4 shadow-lg"
    >
      {/* Hidden field so we know which work they’re requesting */}
      <input type="hidden" name="subject" value={`Access request: ${workTitle}`} />

      <div>
        <label htmlFor="name" className="block text-gray-700 mb-1">Your Name</label>
        <input
          id="name" name="name" type="text" required
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="Your Name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-700 mb-1">Your Email</label>
        <input
          id="email" name="email" type="email" required
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-700 mb-1">
          Your Message
        </label>
        <textarea
          id="message" name="message" rows="4" required
          className="w-full border border-gray-300 rounded px-3 py-2"
          placeholder={`Hi, I'd like to request access to "${workTitle}".`}
        />
      </div>

      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Send Request
        </button>
      </div>
    </form>
  );
}

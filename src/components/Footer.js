// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-center text-white py-8">
      {/* Social icons */}
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/yourorg" aria-label="GitHub">
          <FaGithub className="h-6 w-6 hover:text-gray-400" />
        </a>
        <a href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn">
          <FaLinkedin className="h-6 w-6 hover:text-gray-400" />
        </a>
        <a href="https://instagram.com/yourprofile" aria-label="Instagram">
          <FaInstagram className="h-6 w-6 hover:text-gray-400" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-purple-500 mb-2">© {year} Force Hyperloop</p>

      {/* “Made with love” line */}
      <p className="text-gray-400">
        Made with <span className="text-red-500">❤️</span> by EEE Telugu Boys
      </p>
    </footer>
  );
}

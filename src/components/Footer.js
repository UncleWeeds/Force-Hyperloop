// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-center py-6">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://github.com/ForceHyperloop" aria-label="GitHub" className="text-white hover:text-gray-400">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/company/force-hyperloop/" aria-label="LinkedIn" className="text-white hover:text-gray-400">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.instagram.com/force_hyperloop/" aria-label="Instagram" className="text-white hover:text-gray-400">
          <FaInstagram size={24} />
        </a>
      </div>
      <div>
        <p className="text-purple-500 font-medium">© 2025 Force Hyperloop</p>
      </div>
    </footer>
  );
}

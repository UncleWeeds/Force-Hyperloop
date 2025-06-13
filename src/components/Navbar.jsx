// src/components/Navbar.jsx
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Nav items: anchors scroll on home, routes navigate pages
  const navItems = [
    { name: 'Home',           type: 'route',  to: '/' },
    { name: 'About Us',       type: 'anchor', to: '#about-us' },
    { name: 'Achievements',   type: 'anchor', to: '#achievements' },
    { name: 'Gallery',        type: 'route',  to: '/gallery' },
    { name: 'Recent Works',   type: 'route',  to: '/recent-works' },
    { name: 'Team',           type: 'route',  to: '/team' },
    { name: 'Contact Us',     type: 'route',  to: '/contact-us' },
  ];

  // Scroll or navigate for anchor links
  const handleAnchorClick = (hash) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => { window.location.hash = hash; }, 0);
    } else {
      window.location.hash = hash;
    }
    setOpen(false);
  };

  return (
    <nav className="fixed w-full bg-black shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-white">
          Team Force Hyperloop
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {navItems.map(({ name, type, to }) =>
            type === 'route' ? (
              <NavLink
                key={name}
                to={to}
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
                activeClassName="bg-gray-800"
                exact={to === '/'}
              >
                {name}
              </NavLink>
            ) : (
              <button
                key={name}
                onClick={() => handleAnchorClick(to)}
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
              >
                {name}
              </button>
            )
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setOpen(o => !o)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black px-2 pb-3 space-y-1">
          {navItems.map(({ name, type, to }) =>
            type === 'route' ? (
              <NavLink
                key={name}
                to={to}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
                activeClassName="bg-gray-800"
                exact={to === '/'}
                onClick={() => setOpen(false)}
              >
                {name}
              </NavLink>
            ) : (
              <button
                key={name}
                onClick={() => handleAnchorClick(to)}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
              >
                {name}
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );
}

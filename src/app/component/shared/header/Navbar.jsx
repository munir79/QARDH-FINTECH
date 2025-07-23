'use client';

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Book A Stay', href: '/' },
    { name: 'Career', href: '/career' },
    { name: 'Manage My Property', href: '/' },
    { name: 'About COBNB', href: '/' },
    { name: 'Blog', href: '/' },
    { name: 'Contact Us', href: '/' },
    { name: 'More', href: '/' },
  ];

  return (
    <nav className="bg-[#0c1a2e] text-cyan-300 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-cyan-300 flex items-center justify-center rounded">
            <div className="w-6 h-6 bg-[#0c1a2e]"></div>
          </div>
          <div className="text-sm leading-tight">
            <div className="font-bold">FINTECH</div>
            <div className="text-xs">QARDH AL FINTECH</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className="hover:text-white transition">
              {item.name}
            </a>
          ))}
          <div className="relative">
            <div className="w-6 h-6 bg-gray-400 rounded-sm"></div>
            <span className="absolute -top-2 -right-2 text-xs bg-white text-black rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <div className="space-y-1">
              <div className="w-6 h-0.5 bg-cyan-300"></div>
              <div className="w-6 h-0.5 bg-cyan-300"></div>
              <div className="w-6 h-0.5 bg-cyan-300"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-2 py-1 text-sm hover:bg-cyan-700 rounded"
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center space-x-2 px-2">
            <div className="w-6 h-6 bg-gray-400 rounded-sm"></div>
            <span className="text-xs bg-white text-black rounded-full px-2 py-0.5">0</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
}

export default function Layout({ 
  children, 
  currentPage
}: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigationItems = [
    { label: 'home', href: '/' },
    { label: 'about me', href: '/about' },
    { label: 'projects', href: '/projects' },
    { label: 'experience', href: '/experience' },
    { label: 'art', href: '/art' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: currentPage === 'home' ? "url('/IMG_8664.JPG')" : "url('/background.jpg')",
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-6 right-6 z-20">
        {/* Desktop Navigation - hidden on mobile */}
        <div className="hidden lg:flex space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-white hover:text-gray-300 transition-colors duration-300 text-3xl xl:text-4xl italic ${
                currentPage === (item.label === 'about me' ? 'about' : item.label) ? 'text-gray-300' : ''
              }`}
              style={{
                fontFamily: "'Myfont', sans-serif",
                fontWeight: 400
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Menu - visible on mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-gray-300 transition-colors duration-300 p-2"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-8 h-8 md:w-10 md:h-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute top-full right-0 mt-2 bg-black/80 backdrop-blur-md rounded-lg border border-white/20 min-w-48">
              <div className="flex flex-col py-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-white hover:text-gray-300 hover:bg-white/10 transition-all duration-300 px-4 py-3 text-xl md:text-2xl italic ${
                      currentPage === (item.label === 'about me' ? 'about' : item.label) ? 'text-gray-300 bg-white/5' : ''
                    }`}
                    style={{
                      fontFamily: "'Myfont', sans-serif",
                      fontWeight: 400
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

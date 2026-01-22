"use client";

import React from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
}

export default function Layout({ 
  children, 
  currentPage
}: LayoutProps) {
  const navigationItems = [
    { label: 'home', href: '/' },
    { label: 'about me', href: '/about' },
    { label: 'projects', href: '/projects' },
    { label: 'art', href: '/art' }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/IMG_8664.JPG')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-6 right-6 z-20">
        <div className="flex space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-white hover:text-gray-300 transition-colors duration-300 text-3xl md:text-4xl italic ${
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
      </nav>

      {/* Page Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

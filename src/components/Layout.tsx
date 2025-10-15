"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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
      <div className="fixed inset-0 z-0">
        <Image 
          src={currentPage === 'home' ? '/IMG_2040.JPG' : '/IMG_2040.JPG'}
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
          priority={true}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7Dh5zms2/4L1+SnP8AFp8eMw8xnIMtH4eMQzQJ9sQdOOFi3dIH4WtY2MNkfb1lTMg3/wA="
          quality={85}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-6 right-6 z-30">
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
      <div className="relative z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.4,
              ease: "easeInOut"
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Vignette Effect */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 via-black/40 to-transparent pointer-events-none z-40"></div>
    </div>
  );
}

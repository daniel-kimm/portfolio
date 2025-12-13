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

      {/* Logo in top left */}
      <div className="absolute top-6 left-6 z-30 flex items-center h-12 md:h-14">
        <Link
          href="/"
          className="text-white hover:text-gray-300 transition-colors duration-300 text-3xl md:text-4xl italic"
          style={{
            fontFamily: "'Myfont', sans-serif",
            fontWeight: 400
          }}
        >
          daniel kim
        </Link>
      </div>

      {/* Navigation */}
      <nav className="absolute top-6 right-6 z-30">
        {/* Desktop Navigation - hidden on mobile */}
        <div className="hidden lg:flex space-x-8">
          {navigationItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className="text-white text-3xl xl:text-4xl italic"
                style={{
                  fontFamily: "'Myfont', sans-serif",
                }}
              >
                {item.label}
              </Link>
              
              {/* Hand-drawn circle animation on hover */}
              <svg
                className={`absolute pointer-events-none ${
                  currentPage === (item.label === 'about me' ? 'about' : item.label) ? 'opacity-100 circle-active' : 'opacity-0 group-hover:opacity-100'
                }`}
                viewBox="0 0 120 50"
                preserveAspectRatio="none"
                style={{
                  width: 'calc(100% + 24px)',
                  height: 'calc(100% + 20px)',
                  left: '-12px',
                  top: '-10px',
                }}
              >
                <defs>
                  <filter id="roughen">
                    <feTurbulence baseFrequency="0.08" numOctaves="3" result="noise" seed="3"/>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2"/>
                  </filter>
                </defs>
                
                {/* Main oval path that starts with straight line, goes through oval, ends with straight line */}
                <path
                  d="M 48,7 
                     L 53,7
                     C 85,7 110,15 110,25 
                     C 110,35 85,43 60,43 
                     C 35,43 10,35 10,25 
                     C 10,15 35,7 67,9.5
                     L 72,9.5"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  className="circle-path"
                  style={{
                    strokeDasharray: '310',
                    strokeDashoffset: '310',
                    filter: 'url(#roughen)',
                  }}
                />
              </svg>
            </div>
          ))}
        </div>

        {/* Mobile Hamburger Menu - visible on mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-gray-300 transition-colors duration-300 p-2 relative z-50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
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
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            ) : (
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
            )}
          </button>

          {/* Full Screen Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div 
              className="fixed inset-0 z-40 mobile-menu-overlay"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="absolute inset-0 bg-gray-900/99 backdrop-blur-lg"></div>
              <div className="relative h-full flex flex-col items-center justify-center">
                {navigationItems.map((item, index) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-white hover:text-gray-300 transition-all duration-300 py-4 text-3xl md:text-4xl italic mobile-menu-item ${
                      currentPage === (item.label === 'about me' ? 'about' : item.label) ? 'text-gray-300' : ''
                    }`}
                    style={{
                      fontFamily: "'Myfont', sans-serif",
                      fontWeight: 400,
                      animationDelay: `${index * 0.1}s`
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
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none z-40"></div>
      
      {/* CSS for circle animation and mobile menu */}
      <style jsx global>{`
        @keyframes drawCircle {
          from {
            stroke-dashoffset: 310;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        
        .group:hover .circle-path {
          animation: drawCircle 0.4s ease-out forwards;
        }
        
        .circle-active .circle-path {
          stroke-dashoffset: 0 !important;
        }
        
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes menuItemFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .mobile-menu-overlay {
          animation: slideUpFade 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .mobile-menu-item {
          animation: menuItemFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

'use client';

import React, { useState, useEffect } from 'react';

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Convert to CST (UTC-6) or CDT (UTC-5) depending on daylight saving
      const cstTime = new Date(now.toLocaleString("en-US", {timeZone: "America/Chicago"}));
      const hours = cstTime.getHours().toString().padStart(2, '0');
      const minutes = cstTime.getMinutes().toString().padStart(2, '0');
      const seconds = cstTime.getSeconds().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
      
      // Format date as "November 3, 2025"
      const dateOptions: Intl.DateTimeFormatOptions = { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric',
        timeZone: "America/Chicago"
      };
      const formattedDate = cstTime.toLocaleDateString("en-US", dateOptions);
      setCurrentDate(formattedDate);
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 pb-32">
      <h1 
        className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider lg:tracking-widest animate-fade-in-up"
        style={{
          fontFamily: "'IM Fell Great Primer', serif",
          fontWeight: 400,
          animationDelay: '0.2s',
          marginBottom: '0.25rem',
          lineHeight: 1.2
        }}
      >
        Daniel Kim
      </h1>
      <p 
        className="text-white text-3xl sm:text-4xl md:text-5xl tracking-wide italic animate-fade-in-up"
        style={{
          fontFamily: "'Myfont', sans-serif",
          fontWeight: 400,
          animationDelay: '0.4s',
          marginBottom: '0.9rem',
          lineHeight: 1.2
        }}
      >
        Software and Design Engineer
      </p>
      {/* Social Icons */}
      <div className="flex space-x-7 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <a 
          href="https://github.com/daniel-kimm" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors duration-300"
        >
          <svg 
            className="w-6 h-6 md:w-10 md:h-10 hover:scale-110 transition-transform duration-300"
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        
        <a 
          href="https://x.com/danielkimnc" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors duration-300"
        >
          <svg 
            className="w-6 h-6 md:w-10 md:h-10 hover:scale-110 transition-transform duration-300"
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        
        <a 
          href="https://www.linkedin.com/in/daniel-kimm/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors duration-300"
        >
          <svg 
            className="w-6 h-6 md:w-10 md:h-10 hover:scale-110 transition-transform duration-300"
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>
      
      {/* Hand-drawn Arrow */}
      <div className="absolute bottom-32 right-8 sm:bottom-40 sm:right-24 md:bottom-60 md:right-48 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
        <div className="relative">
          <svg 
            width="80" 
            height="60" 
            className="sm:w-[100px] sm:h-[70px] md:w-[120px] md:h-[80px] text-white opacity-80"
            viewBox="0 0 120 80"
          >
            {/* Simple backwards C curve */}
            <path
              d="M90 60 Q60 30 30 20"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                filter: 'url(#roughen)',
                strokeDasharray: '2 1',
              }}
            />
            {/* Arrow head properly aligned with curve tangent */}
            <path
              d="M30 20 L36 26 M30 20 L37 17"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Roughen filter for hand-drawn effect */}
            <defs>
              <filter id="roughen">
                <feTurbulence baseFrequency="0.9" numOctaves="3" result="noise" seed="1"/>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="1"/>
              </filter>
            </defs>
          </svg>
          {/* Text at the non-pointy end (start of curve) */}
          <div 
            className="absolute top-10 -right-6 sm:top-12 sm:-right-16 md:top-14 md:-right-18 text-white text-md sm:text-md md:text-base lg:text-base xl:text-3xl opacity-80 whitespace-nowrap"
            style={{
              fontFamily: "'Myfont', serif",
              fontWeight: 400,
              transform: 'rotate(-20deg)',
            }}
          >
            i took this photo!
          </div>
        </div>
      </div>
      
      {/* Date and Time Display - Bottom Left */}
      <div 
        className="absolute bottom-8 left-8 animate-fade-in-up" 
        style={{ animationDelay: '1.2s' }}
      >
        <div 
          className="text-white text-sm md:text-lg font-mono tracking-wider flex items-center gap-2"
          style={{
            fontFamily: "'IM Fell Great Primer', serif",
            fontWeight: 400,
          }}
        >
          <span>{currentDate}</span>
          <span>•</span>
          <span 
            className="cursor-default hover:text-gray-300 transition-colors duration-300 relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            {currentTime}
            {/* Tooltip */}
            {showTooltip && (
              <div className="absolute -top-12 left-0 bg-white text-black text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap animate-fade-in"
                style={{
                  fontFamily: "'IM Fell Great Primer', serif",
                  fontWeight: 400,
                }}>
                my local time!
                <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-transparent"></div>
              </div>
            )}
          </span>
        </div>
      </div>
      
      {/* CSS Animation Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

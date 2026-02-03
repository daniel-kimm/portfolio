'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Convert to CST (UTC-6) or CDT (UTC-5) depending on daylight saving
      const cstTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Chicago" }));
      const hours24 = cstTime.getHours();
      const hours12 = hours24 % 12 || 12;
      const minutes = cstTime.getMinutes().toString().padStart(2, '0');
      const seconds = cstTime.getSeconds().toString().padStart(2, '0');
      const ampm = hours24 >= 12 ? 'pm' : 'am';
      setCurrentTime(`${hours12}:${minutes}:${seconds} ${ampm}`);
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      {/* Daniel Kim Title */}
      <motion.h1
        className="text-white text-4xl sm:text-5xl md:text-6xl"
        style={{
          fontFamily: "'IM Fell Great Primer', serif",
          letterSpacing: '0.1em',
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Daniel Kim
      </motion.h1>

      {/* Collage Container */}
      <div className="relative w-full max-w-3xl h-[450px] sm:h-[500px] md:h-[550px]">
        
        {/* Polaroid with background photo */}
        <motion.div
          className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <div
            className="polaroid bg-white p-4 sm:p-5 md:p-6 shadow-xl hover:shadow-2xl transform transition-all duration-300 cursor-pointer"
            style={{
              width: 'clamp(220px, 28vw, 320px)',
              height: 'clamp(260px, 33vw, 380px)',
              transform: 'rotate(-4deg)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(-6deg)';
            }}
          >
            <div className="w-full h-full flex flex-col">
              <div className="flex-1 overflow-hidden relative">
                <Image
                  src="/downtowncary.webp"
                  alt="Background photo"
                  fill
                  sizes="(max-width: 640px) 220px, (max-width: 768px) 280px, 320px"
                  className="object-cover"
                  style={{ objectPosition: 'center' }}
                  priority
                />
              </div>
              <div className="bg-white pt-2 pb-1 flex-shrink-0">
                <p
                  className="text-gray-800 text-xl sm:text-2xl md:text-4xl text-center px-1"
                  style={{
                    fontFamily: "'Myfont', sans-serif",
                    fontStyle: "italic",
                  }}
                >
                  cary, nc
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Torn paper note */}
        <motion.div
          className="absolute z-20"
          style={{
            left: '58%',
            top: '20%',
          }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <div
            className="transform transition-all duration-300 cursor-pointer"
            style={{
              transform: 'rotate(4deg)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(4deg)';
            }}
          >
          <svg
            width="340"
            height="150"
            viewBox="0 0 280 120"
            className="w-[240px] sm:w-[290px] md:w-[340px] h-auto"
          >
            <defs>
              <filter id="torn-paper-filter" x="-10%" y="-10%" width="120%" height="120%">
                <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="3" result="noise" seed="2" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
              </filter>
              <filter id="paper-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="3" stdDeviation="3" floodOpacity="0.25" />
              </filter>
            </defs>
            <path
              d="M 8,10 
                 Q 15,6 30,12 L 60,8 Q 100,14 140,9 L 180,12 Q 220,7 250,11 L 272,8
                 L 275,25 Q 270,50 276,75 L 273,95 Q 277,105 274,112
                 L 250,110 Q 200,116 150,111 L 100,114 Q 50,109 20,113 L 6,110
                 L 4,90 Q 8,60 5,35 L 8,10 Z"
              fill="#f5f0e8"
              style={{ filter: 'url(#torn-paper-filter) url(#paper-shadow)' }}
            />
          </svg>
          <div
            className="absolute inset-0 flex items-center justify-center px-4 sm:px-6"
            style={{
              fontFamily: "'IM Fell Great Primer', serif",
              fontStyle: "italic",
            }}
          >
            <p className="text-gray-800 text-base sm:text-lg md:text-xl text-center leading-snug">
              Daniel is an engineer and artist from Cary, NC.
            </p>
          </div>
          </div>
        </motion.div>

        {/* Korean name rectangle */}
        <motion.div
          className="absolute z-20"
          style={{
            left: '14%',
            top: '52%',
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        >
          <div
            className="bg-[#c5d4a0] px-8 py-5 sm:px-10 sm:py-6 shadow-lg transform transition-all duration-300 cursor-pointer"
            style={{
              boxShadow: '3px 4px 8px rgba(0,0,0,0.2)',
              transform: 'rotate(1deg)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'rotate(1deg)';
            }}
          >
            <p
              className="text-gray-800 text-5xl sm:text-6xl md:text-7xl"
              style={{
                fontFamily: "'Nanum Pen Script', cursive",
              }}
            >
              김동규
            </p>
          </div>
        </motion.div>

      </div>

      {/* Date and Time Display - Bottom Left */}
      <motion.div
        className="absolute bottom-8 left-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div
          className="text-white text-sm md:text-lg font-mono tracking-wider flex items-center gap-2"
          style={{
            fontFamily: "'IM Fell Great Primer', serif",
            fontWeight: 400,
          }}
        >
          <span>chicago, il</span>
          <span>•</span>
          <span
            className="cursor-default hover:text-gray-300 transition-colors duration-300 relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            {currentTime}
            {/* Tooltip */}
            {/* Tooltip */}
            {showTooltip && (
              <div className="absolute -top-10 left-0 bg-white text-black text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap animate-fade-in"
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
      </motion.div>

      {/* Social Icons - Bottom Right */}
      <motion.div
        className="absolute bottom-8 right-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/daniel-kimm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 hover:scale-110 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <a
            href="https://x.com/danielkimnc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 hover:scale-110 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/daniel-kimm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 hover:scale-110 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </motion.div>

      {/* CSS Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

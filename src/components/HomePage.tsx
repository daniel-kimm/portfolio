'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Interactive letter component with scale on hover and staggered animation
function RansomLetter({ letter, initialStyle, delay = 0 }: { letter: string; initialStyle: number; delay?: number }) {
  return (
    <motion.div
      data-text={letter}
      className={`mlvx-${initialStyle} tc`}
      style={{ cursor: 'pointer' }}
      initial={{ opacity: 0, y: 20, rotate: -10 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      whileHover={{ scale: 1.15 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
        scale: { duration: 0.1, delay: 0 }
      }}
    >
      <div data-text={letter}>{letter}</div>
    </motion.div>
  );
}

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
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 pb-32">
      <div style={{ marginBottom: '0.25rem' }}>
        <div className="ransomizer-text">
          <div className="ts">
            <div className="tw">
              <RansomLetter letter="d" initialStyle={8} delay={0} />
              <RansomLetter letter="a" initialStyle={2} delay={0.08} />
              <RansomLetter letter="n" initialStyle={9} delay={0.16} />
              <RansomLetter letter="i" initialStyle={3} delay={0.24} />
              <RansomLetter letter="e" initialStyle={4} delay={0.32} />
              <RansomLetter letter="l" initialStyle={5} delay={0.4} />
            </div>
            {' '}
            <div className="tw">
              <RansomLetter letter="k" initialStyle={7} delay={0.55} />
              <RansomLetter letter="i" initialStyle={1} delay={0.63} />
              <RansomLetter letter="m" initialStyle={9} delay={0.71} />
            </div>
          </div>
        </div>
      </div>
      <motion.p
        className="text-white text-3xl sm:text-4xl md:text-5xl tracking-wide italic"
        style={{
          fontFamily: "'Myfont', sans-serif",
          fontWeight: 400,
          marginBottom: '0.9rem',
          lineHeight: 1.2
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Software Engineer and Artist
      </motion.p>
      {/* Social Icons */}
      <motion.div
        className="flex space-x-7"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
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
            className="w-6 h-6 md:w-10 md:h-10 hover:scale-110 transition-transform duration-300"
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
            className="w-6 h-6 md:w-10 md:h-10 hover:scale-110 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </motion.div>

      {/* Hand-drawn Arrow - COMMENTED OUT
      <motion.div 
        className="absolute bottom-32 right-8 sm:bottom-40 sm:right-24 md:bottom-60 md:right-48"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative">
          <svg 
            width="80" 
            height="60" 
            className="sm:w-[100px] sm:h-[70px] md:w-[120px] md:h-[80px] text-white opacity-80"
            viewBox="0 0 120 80"
          >
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
            <path
              d="M30 20 L36 26 M30 20 L37 17"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <filter id="roughen">
                <feTurbulence baseFrequency="0.9" numOctaves="3" result="noise" seed="1"/>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="1"/>
              </filter>
            </defs>
          </svg>
          <div 
            className="absolute top-10 -right-6 sm:top-12 sm:-right-16 md:top-14 md:-right-18 text-white text-md sm:text-md md:text-base lg:text-base xl:text-3xl opacity-80 whitespace-nowrap italic"
            style={{
              fontFamily: "'Myfont', serif",
              fontWeight: 400,
              transform: 'rotate(-20deg)',
            }}
          >
            i took this photo!
          </div>
        </div>
      </motion.div>
      */}

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

      {/* CSS Animation Styles for tooltip and ransomizer */}
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

        .ransomizer-text {
          --global-font-size: 50px;
          --global-text-align: center;
          text-align: var(--global-text-align);
          font-size: var(--global-font-size);
        }

        @media (min-width: 640px) {
          .ransomizer-text {
            --global-font-size: 60px;
          }
        }

        @media (min-width: 768px) {
          .ransomizer-text {
            --global-font-size: 70px;
          }
        }

        @media (min-width: 1024px) {
          .ransomizer-text {
            --global-font-size: 80px;
          }
        }

        .ransomizer-text :global(.ts),
        .ransomizer-text :global(.tw),
        .ransomizer-text :global(.tc) {
          display: inline-block;
        }

        .ransomizer-text :global(.ts) {
          line-height: normal;
          word-spacing: 0.7em;
        }

        .ransomizer-text :global(.ts .tw .tc div::before) {
          content: "";
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .ransomizer-text :global(.tc.mlvx-0 div::before) { background-image: url(https://www.ransomizer.com/img/texture/h2wsr9q.png); background-position: right top }
        .ransomizer-text :global(.tc.mlvx-0 div) { background-color: #f5e6d3; color: #1a1a1a; font-family: 'Times New Roman', Times, serif; rotate: 1deg; clip-path: polygon(7% 3%,95% 5%,100% 49%,95% 97%,6% 97%,0 62%); font-size: 110%; font-weight: bold; text-transform: lowercase; margin: 0.05em; padding: 0.1em; paint-order: stroke fill; line-height: 75%; position: relative; }

        .ransomizer-text :global(.tc.mlvx-1) { filter: drop-shadow(-1px -1px 1px rgba(0,0,0,0.2)) }
        .ransomizer-text :global(.tc.mlvx-1 div::before) { background-image: url(https://www.ransomizer.com/img/texture/jIHCf3i.png); background-position: center bottom }
        .ransomizer-text :global(.tc.mlvx-1 div) { background-color: #ebe3d7; color: #2b2118; font-family: 'Georgia', serif; rotate: 0deg; top: -0.03em; clip-path: polygon(6% 1%,100% 4%,100% 81%,98% 98%,7% 96%,0 58%); font-size: 110%; font-weight: bold; text-transform: uppercase; margin: 0.05em; padding: 0.1em; paint-order: stroke fill; line-height: 75%; position: relative; }

        .ransomizer-text :global(.tc.mlvx-2) { filter: drop-shadow(-1px 1px 1px rgba(0,0,0,0.2)) }
        .ransomizer-text :global(.tc.mlvx-2 div::before) { background-image: url(https://www.ransomizer.com/img/texture/omJifnt.png); background-position: right top }
        .ransomizer-text :global(.tc.mlvx-2 div) { background-color: #e8dcc8; color: #3d2e1f; font-family: 'Playfair Display', Georgia, serif; rotate: 1deg; top: 0.01em; clip-path: polygon(5% 2%,96% 6%,100% 97%,95% 98%,4% 95%,0 95%); font-size: 110%; font-weight: bold; margin: 0.03em; padding: 0.2em; paint-order: stroke fill; line-height: 75%; position: relative; }

        .ransomizer-text :global(.tc.mlvx-3 div::before) { background-image: url(https://www.ransomizer.com/img/texture/jIHCf3i.png); background-position: left bottom }
        .ransomizer-text :global(.tc.mlvx-3 div) { background-color: #f0e4d4; color: #1f1a15; font-family: 'Bodoni Moda', 'Didot', serif; rotate: 2deg; top: 0.04em; clip-path: polygon(6% 4%,94% 4%,100% 17%,94% 98%,1% 98%,0 50%); font-size: 110%; font-weight: normal; margin: 0.05em; padding: 0.2em; paint-order: stroke fill; line-height: 75%; position: relative; }

        .ransomizer-text :global(.tc.mlvx-4) { filter: drop-shadow(-1px -1px 1px rgba(0,0,0,0.2)) }
        .ransomizer-text :global(.tc.mlvx-4 div::before) { background-image: url(https://www.ransomizer.com/img/texture/h2wsr9q.png); background-position: left center }
        .ransomizer-text :global(.tc.mlvx-4 div) { background-color: #d9cfc1; color: #0f0f0f; font-family: 'Courier New', Courier, monospace; rotate: -1deg; top: -0.03em; clip-path: polygon(3% 1%,98% 6%,100% 42%,99% 95%,0 97%,0 32%); font-size: 100%; text-transform: lowercase; margin: 0.05em; padding: 0.2em; paint-order: stroke fill; line-height: 75%; position: relative; }

        .ransomizer-text :global(.tc.mlvx-5) { filter: drop-shadow(-1px -1px 1px rgba(0,0,0,0.2)) }
        .ransomizer-text :global(.tc.mlvx-5 div::before) { background-image: url(https://www.ransomizer.com/img/texture/b3FJONj.png); background-position: right top }
        .ransomizer-text :global(.tc.mlvx-5 div) { background-color: #f7f0e3; color: #2a2219; font-family: 'Libre Baskerville', Baskerville, serif; rotate: -3deg; top: 0.03em; clip-path: polygon(4% 5%,100% 0,100% 94%,100% 96%,5% 98%,0 89%); font-size: 110%; text-transform: lowercase; margin: 0.03em; padding: 0.2em; paint-order: stroke fill; line-height: 75%; position: relative; }

        .ransomizer-text :global(.tc.mlvx-7 div::before) { background-image: url(https://www.ransomizer.com/img/texture/Tg0fOcU.png); background-position: left center }
        .ransomizer-text :global(.tc.mlvx-7 div) { background-color: #e2d5c3; color: #0d0d0d; font-family: 'Crimson Pro', 'Crimson Text', serif; rotate: -3deg; top: -0.04em; clip-path: polygon(0 3%,95% 3%,100% 15%,100% 97%,6% 98%,0 80%); font-size: 110%; text-transform: lowercase; margin: 0.03em; padding: 0.1em; paint-order: stroke fill; line-height: 75%; position: relative; }

        .ransomizer-text :global(.tc.mlvx-8) { filter: drop-shadow(1px -1px 1px rgba(0,0,0,0.2)) }
        .ransomizer-text :global(.tc.mlvx-8 div::before) { background-image: url(https://www.ransomizer.com/img/texture/omJifnt.png); background-position: right top }
        .ransomizer-text :global(.tc.mlvx-8 div) { background-color: #f2e8da; color: #1a150f; font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif; rotate: -2deg; top: -0.01em; clip-path: polygon(2% 5%,98% 2%,100% 38%,96% 94%,3% 94%,0 79%); font-size: 100%; font-weight: bold; text-transform: lowercase; margin: 0.05em; padding: 0.2em; paint-order: stroke fill; line-height: 75%; position: relative; }

        .ransomizer-text :global(.tc.mlvx-9 div::before) { background-image: url(https://www.ransomizer.com/img/texture/6ILZOkO.png); background-position: left top }
        .ransomizer-text :global(.tc.mlvx-9 div) { background-color: #ddd2c0; color: #191411; font-family: 'Merriweather', Georgia, serif; rotate: -3deg; top: 0.02em; clip-path: polygon(4% 3%,96% 5%,100% 75%,94% 93%,3% 97%,0 73%); font-size: 110%; font-weight: bold; text-transform: lowercase; margin: 0.03em; padding: 0.1em; paint-order: stroke fill; line-height: 75%; position: relative; }
      `}</style>
    </div>
  );
}

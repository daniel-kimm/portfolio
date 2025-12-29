"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [showEmailTooltip, setShowEmailTooltip] = useState(false);
  const [showCaryImage, setShowCaryImage] = useState(false);
  const [showNorthwesternImage, setShowNorthwesternImage] = useState(false);
  const [showEvanstonImage, setShowEvanstonImage] = useState(false);
  const [showHikingImage, setShowHikingImage] = useState(false);
  const [showMusicTooltip, setShowMusicTooltip] = useState(false);
  const [nowPlaying, setNowPlaying] = useState<{
    isPlaying: boolean;
    title?: string;
    artist?: string;
    albumImageUrl?: string;
  } | null>(null);
  const [isLoadingMusic, setIsLoadingMusic] = useState(false);

  const handleImageClick = (imageSrc: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedImage(imageSrc);
    setIsClosing(false);
  };

  const closeExpandedImage = () => {
    setIsClosing(true);
    setTimeout(() => {
      setExpandedImage(null);
      setIsClosing(false);
    }, 300);
  };

  const handleEmailCopy = () => {
    navigator.clipboard.writeText('dk@u.northwestern.edu');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000); // Hide after 2 seconds
  };

  const handleMusicHover = async () => {
    setShowMusicTooltip(true);
    setIsLoadingMusic(true);
    try {
      const response = await fetch('/api/spotify/now-playing');
      const data = await response.json();
      setNowPlaying(data);
    } catch (error) {
      console.error('Error fetching now playing:', error);
      setNowPlaying({ isPlaying: false });
    }
    setIsLoadingMusic(false);
  };

  const handleMusicLeave = () => {
    setShowMusicTooltip(false);
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && expandedImage) {
        closeExpandedImage();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [expandedImage]);
  return (
    <div className="flex flex-col items-center min-h-screen text-left px-4 sm:px-6 md:px-8 max-w-5xl mx-auto pt-20 sm:pt-24 md:pt-28 lg:pt-12 pb-8 sm:pb-16">
      <motion.h1 
        className="mb-6 sm:mb-8 text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold italic mt-16 sm:mt-20 md:mt-24 lg:mt-16 text-center w-full"
        style={{
          fontFamily: "'IM Fell Great Primer', serif"
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        about me
      </motion.h1>
      
      {/* Torn paper background container */}
      <motion.div 
        className="relative w-full max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        {/* Torn paper SVG background */}
        <svg 
          className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
          viewBox="0 0 800 500"
          preserveAspectRatio="none"
          style={{ 
            filter: 'drop-shadow(4px 6px 8px rgba(0,0,0,0.3))',
            transform: 'scale(1.05)',
            transformOrigin: 'center',
          }}
        >
          <defs>
            {/* Rough edge filter */}
            <filter id="rough-edge" x="-5%" y="-5%" width="110%" height="110%">
              <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="5"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
            {/* Paper texture filter */}
            <filter id="paper-texture-filter" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise"/>
              <feDiffuseLighting in="noise" lightingColor="#f6f1ea" surfaceScale="1.5" result="light">
                <feDistantLight azimuth="45" elevation="55"/>
              </feDiffuseLighting>
            </filter>
            {/* Paper grain pattern */}
            <pattern id="paper-grain" patternUnits="userSpaceOnUse" width="60" height="60">
              <rect width="60" height="60" fill="#f6f1ea"/>
              <circle cx="5" cy="5" r="0.8" fill="#b8a890" opacity="0.6"/>
              <circle cx="15" cy="12" r="0.5" fill="#a89878" opacity="0.5"/>
              <circle cx="25" cy="8" r="0.6" fill="#c0b098" opacity="0.4"/>
              <circle cx="35" cy="18" r="0.7" fill="#a89070" opacity="0.5"/>
              <circle cx="45" cy="10" r="0.5" fill="#b8a888" opacity="0.6"/>
              <circle cx="55" cy="15" r="0.6" fill="#a08868" opacity="0.4"/>
              <circle cx="10" cy="25" r="0.7" fill="#b0a080" opacity="0.5"/>
              <circle cx="20" cy="32" r="0.5" fill="#c5b5a0" opacity="0.4"/>
              <circle cx="30" cy="28" r="0.8" fill="#a89070" opacity="0.6"/>
              <circle cx="40" cy="35" r="0.6" fill="#b8a890" opacity="0.5"/>
              <circle cx="50" cy="30" r="0.5" fill="#a08060" opacity="0.4"/>
              <circle cx="8" cy="42" r="0.6" fill="#c0a890" opacity="0.5"/>
              <circle cx="18" cy="48" r="0.7" fill="#a89878" opacity="0.6"/>
              <circle cx="28" cy="45" r="0.5" fill="#b5a588" opacity="0.4"/>
              <circle cx="38" cy="52" r="0.8" fill="#a08868" opacity="0.5"/>
              <circle cx="48" cy="47" r="0.6" fill="#c0b098" opacity="0.6"/>
              <circle cx="58" cy="55" r="0.5" fill="#b0a080" opacity="0.4"/>
              <line x1="3" y1="20" x2="8" y2="22" stroke="#a89070" strokeWidth="0.3" opacity="0.3"/>
              <line x1="22" y1="40" x2="28" y2="38" stroke="#b5a080" strokeWidth="0.3" opacity="0.25"/>
              <line x1="42" y1="8" x2="48" y2="12" stroke="#a88868" strokeWidth="0.3" opacity="0.3"/>
              <line x1="52" y1="42" x2="58" y2="45" stroke="#c0a890" strokeWidth="0.3" opacity="0.25"/>
            </pattern>
          </defs>
          
          {/* Main torn paper shape */}
          <path 
            d="M 12,8 
               L 45,5 Q 80,12 120,6 L 180,10 Q 220,4 280,9 L 350,5 Q 420,11 480,7 L 540,10 Q 600,5 660,8 L 720,6 Q 760,10 788,7
               L 792,15 Q 786,45 794,80 L 790,120 Q 796,160 792,200 L 795,240 Q 788,280 793,320 L 790,360 Q 795,400 791,440 L 794,475 Q 790,490 793,495
               L 780,492 Q 740,498 700,494 L 640,497 Q 580,492 520,496 L 460,493 Q 400,499 340,495 L 280,498 Q 220,493 160,497 L 100,494 Q 60,499 20,495 L 8,493
               L 6,480 Q 10,440 5,400 L 8,340 Q 4,280 7,220 L 5,160 Q 9,100 6,50 L 8,20 Q 5,12 12,8 Z"
            fill="url(#paper-grain)"
            style={{ filter: 'url(#rough-edge)' }}
          />
          
          {/* Texture overlay for more depth */}
          <path 
            d="M 12,8 
               L 45,5 Q 80,12 120,6 L 180,10 Q 220,4 280,9 L 350,5 Q 420,11 480,7 L 540,10 Q 600,5 660,8 L 720,6 Q 760,10 788,7
               L 792,15 Q 786,45 794,80 L 790,120 Q 796,160 792,200 L 795,240 Q 788,280 793,320 L 790,360 Q 795,400 791,440 L 794,475 Q 790,490 793,495
               L 780,492 Q 740,498 700,494 L 640,497 Q 580,492 520,496 L 460,493 Q 400,499 340,495 L 280,498 Q 220,493 160,497 L 100,494 Q 60,499 20,495 L 8,493
               L 6,480 Q 10,440 5,400 L 8,340 Q 4,280 7,220 L 5,160 Q 9,100 6,50 L 8,20 Q 5,12 12,8 Z"
            fill="#e8e0d6"
            opacity="0.15"
            style={{ filter: 'url(#paper-texture-filter) url(#rough-edge)' }}
          />
        </svg>

        <div 
          className="mb-4 sm:mb-5 text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 italic max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl text-left px-6 sm:px-8 md:px-10 pt-4 sm:pt-5"
        style={{
          fontFamily: "'IM Fell Great Primer', serif"
        }}
      >
        Hi! My name is Daniel, and I&apos;m an engineer and artist from{' '}
        <span className="relative inline-block">
        <span 
            className="text-emerald-800 underline hover:text-emerald-600 transition-colors duration-300 cursor-pointer"
          onMouseEnter={() => setShowCaryImage(true)}
          onMouseLeave={() => setShowCaryImage(false)}
        >
          Cary, North Carolina
        </span>
          {showCaryImage && (
            <div 
              className="absolute z-40 pointer-events-none animate-fade-in"
              style={{
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                marginTop: '12px',
              }}
            >
              <div className="relative w-56 h-72 sm:w-72 sm:h-96 overflow-hidden shadow-2xl opacity-95">
            <Image 
              src="/about_me/cary.jpg" 
              alt="Cary, North Carolina" 
              fill
              className="object-cover"
                  sizes="288px"
            />
          </div>
        </div>
      )}
        </span>
        . I&apos;m currently studying Computer Science and Art at{' '}
        <span className="relative inline-block">
          <span 
            className="text-emerald-800 underline hover:text-emerald-600 transition-colors duration-300 cursor-pointer"
            onMouseEnter={() => setShowNorthwesternImage(true)}
            onMouseLeave={() => setShowNorthwesternImage(false)}
          >
            Northwestern University
          </span>
      {showNorthwesternImage && (
            <div 
              className="absolute z-40 pointer-events-none animate-fade-in"
              style={{
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                marginTop: '12px',
              }}
            >
              <div className="relative w-72 h-56 sm:w-96 sm:h-72 overflow-hidden shadow-2xl opacity-95">
            <Image 
              src="/about_me/deering.jpg" 
              alt="Northwestern University" 
              fill
              className="object-cover"
                  sizes="384px"
            />
          </div>
        </div>
      )}
        </span>
        {' '}in{' '}
        <span className="relative inline-block">
          <span 
            className="text-emerald-800 underline hover:text-emerald-600 transition-colors duration-300 cursor-pointer"
            onMouseEnter={() => setShowEvanstonImage(true)}
            onMouseLeave={() => setShowEvanstonImage(false)}
          >
            Evanston, Illinois
          </span>
      {showEvanstonImage && (
            <div 
              className="absolute z-40 pointer-events-none animate-fade-in"
              style={{
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                marginTop: '12px',
              }}
            >
              <div className="relative w-56 h-72 sm:w-72 sm:h-96 overflow-hidden shadow-2xl opacity-95">
            <Image 
              src="/about_me/evanston.jpg" 
              alt="Evanston, Illinois" 
              fill
              className="object-cover"
                  sizes="288px"
            />
          </div>
        </div>
      )}
        </span>
        .
          </div>


      <p
        className="mb-4 sm:mb-3 text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 italic max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl text-left px-6 sm:px-8 md:px-10"
        style={{
          fontFamily: "'IM Fell Great Primer', serif"
        }}
      >
        At the core of my work is the desire to create art. I explore this through both traditional mediums and software, building technology that is expressive and thoughtfully designed.
      </p>

      <div
        className="mb-4 sm:mb-5 text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 italic max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl text-left self-start px-6 sm:px-8 md:px-10"
        style={{
          fontFamily: "'IM Fell Great Primer', serif"
        }}
      >
        In my free time, I love <a href="/art" className="text-emerald-800 underline hover:text-emerald-600 transition-colors duration-300">creating art</a>, playing the guitar,{' '}
        <span className="relative inline-block">
          <span
            className="text-emerald-800 underline hover:text-emerald-600 transition-colors duration-300 cursor-pointer"
            onMouseEnter={handleMusicHover}
            onMouseLeave={handleMusicLeave}
          >
            listening to music
          </span>
          {showMusicTooltip && (
            <div 
              className={`absolute bottom-full mb-1 bg-white text-black rounded-lg shadow-lg animate-fade-in z-50 ${
                nowPlaying?.isPlaying && !isLoadingMusic ? 'left-0 px-4 py-3' : 'left-1/2 -translate-x-1/2 px-3 py-2'
              }`}
              style={{
                fontFamily: "'IM Fell Great Primer', serif",
                fontWeight: 400,
              }}
            >
              {isLoadingMusic ? (
                <span className="text-sm whitespace-nowrap flex items-center justify-center">loading...</span>
              ) : nowPlaying?.isPlaying ? (
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-gray-500 italic whitespace-nowrap">i&apos;m currently listening to:</span>
                  <div className="flex items-center gap-3">
                    {nowPlaying.albumImageUrl && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img 
                        src={nowPlaying.albumImageUrl} 
                        alt="Album cover"
                        className="w-14 h-14 rounded shadow-md flex-shrink-0"
                      />
                    )}
                    <div className="flex flex-col">
                      <span className="text-base font-medium whitespace-nowrap">{nowPlaying.title}</span>
                      <span className="text-sm text-gray-600 whitespace-nowrap">{nowPlaying.artist}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <span className="text-sm whitespace-nowrap flex items-center justify-center">currently not listening to anything</span>
              )}
            </div>
          )}
        </span>
        , and{' '}
        <span className="relative inline-block">
        <span 
            className="text-emerald-800 underline hover:text-emerald-600 transition-colors duration-300 cursor-pointer"
          onMouseEnter={() => setShowHikingImage(true)}
          onMouseLeave={() => setShowHikingImage(false)}
        >
          hiking
          </span>
          {showHikingImage && (
            <div 
              className="absolute z-40 pointer-events-none animate-fade-in"
              style={{
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                marginTop: '12px',
              }}
            >
              <div className="relative w-56 h-72 sm:w-72 sm:h-96 overflow-hidden shadow-2xl opacity-95">
                <Image 
                  src="/about_me/banff.jpg" 
                  alt="Hiking in Banff" 
                  fill
                  className="object-cover"
                  sizes="288px"
                />
              </div>
            </div>
          )}
        </span>
        !
      </div>

      <p
        className="mb-6 sm:mb-8 text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 italic max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl text-left self-start px-6 sm:px-8 md:px-10 pb-6 sm:pb-8"
        style={{
          fontFamily: "'IM Fell Great Primer', serif"
        }}
      >
        You can reach me at{' '}
        <span className="relative inline-block">
          <span
            onClick={handleEmailCopy}
            onMouseEnter={() => setShowEmailTooltip(true)}
            onMouseLeave={() => setShowEmailTooltip(false)}
            className="text-emerald-800 underline hover:text-emerald-600 transition-colors duration-300 cursor-pointer"
          >
            dk@u.northwestern.edu
          </span>
          {showEmailTooltip && !emailCopied && (
            <span 
              className="absolute -top-10 left-0 bg-white text-black text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap animate-fade-in"
              style={{
                fontFamily: "'IM Fell Great Primer', serif",
                fontWeight: 400,
              }}
            >
              click to copy!
            </span>
          )}
          {emailCopied && (
            <span 
              className="absolute -top-10 left-0 bg-white text-black text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap animate-fade-in"
              style={{
                fontFamily: "'IM Fell Great Primer', serif",
                fontWeight: 400,
              }}
            >
              ✓ copied!
            </span>
          )}
        </span>
        .
      </p>
      </motion.div>
      {/* End torn paper background container */}
      
      {/* Three polaroids in a row */}
      <motion.div 
        className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 mt-6 sm:mt-8 md:mt-12 items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        {[
          { src: '/about_me/IMG_2032.JPG', text: 'lake george, new york' },
          { src: '/about_me/IMG_2020.JPG', text: 'banff, ab, canada' },
          { src: '/about_me/IMG_0424.jpg', text: 'boone, north carolina'}
        ].map((item, index) => (
          <div 
            key={index}
            className="polaroid bg-white p-3 sm:p-4 md:p-5 lg:p-6 shadow-xl hover:shadow-2xl transform transition-all duration-300 cursor-pointer"
            style={{
              transform: index === 0 ? 'rotate(-3deg)' : index === 1 ? 'rotate(2deg)' : 'rotate(-1.5deg)',
              width: 'clamp(200px, 25vw, 280px)',
              height: 'clamp(230px, 28.5vw, 320px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              const rotation = index === 0 ? 'rotate(-3deg)' : index === 1 ? 'rotate(2deg)' : 'rotate(-1.5deg)';
              e.currentTarget.style.transform = rotation;
            }}
            onClick={(e) => handleImageClick(item.src, e)}
          >
            <div className="w-full h-full flex flex-col">
              <div className="flex-1 overflow-hidden relative">
                <Image 
                  src={item.src} 
                  alt={`About me ${index + 1}`} 
                  fill
                  sizes="(max-width: 640px) 200px, (max-width: 768px) 250px, 280px"
                  className="object-cover"
                  style={{ objectPosition: 'center' }}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7Dh5zms2/4L1+SnP8AFp8eMw8xnIMtH4eMQzQJ9sQdOOFi3dIH4WtY2MNkfb1lTMg3/wA="
                  priority={index === 0}
                />
              </div>
              <div className="bg-white pt-2 pb-1 flex-shrink-0">
                <p 
                  className="text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-center px-1 sm:px-2"
                  style={{
                    fontFamily: "'Myfont', sans-serif",
                    fontStyle: "italic",
                  }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      
      {/* Expanded Image Modal */}
      {expandedImage && (
        <div 
          className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-300 ease-out ${isClosing ? 'animate-fadeOut' : ''}`}
          style={{
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            opacity: isClosing ? 0 : 1
          }}
          onClick={closeExpandedImage}
        >
          <div 
            className="relative w-full h-full flex items-center justify-center p-4 transition-all duration-300 ease-out transform"
            style={{
              animation: isClosing ? 'expandOut 0.3s ease-out forwards' : 'expandIn 0.3s ease-out forwards'
            }}
          >
            <div className="relative">
              <Image 
                src={expandedImage || ''} 
                alt="Expanded view" 
                width={1200}
                height={800}
                className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl transition-all duration-300 ease-out"
                onClick={(e) => e.stopPropagation()}
                sizes="90vw"
                quality={95}
              />
              <button
                onClick={closeExpandedImage}
                className="absolute -top-2 -right-2 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all duration-200 transform hover:scale-110 z-10"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes expandIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes expandOut {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.8);
          }
        }
        
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
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
        
        .animate-fadeOut {
          animation: fadeOut 0.3s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

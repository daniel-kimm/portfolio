"use client";

import React, { useState, useEffect } from 'react';

export default function AboutPage() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

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
    navigator.clipboard.writeText('daniel-kim@u.northwestern.edu');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000); // Hide after 2 seconds
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
    <div className="flex flex-col items-start min-h-screen text-left px-4 sm:px-6 md:px-8 max-w-5xl mx-auto pt-20 sm:pt-24 md:pt-28 lg:pt-12 pb-8 sm:pb-16">
      <h1 
        className="mb-6 sm:mb-8 text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold italic mt-16 sm:mt-20 md:mt-24 lg:mt-16 text-center w-full"
        style={{
          fontFamily: "'IM Fell Great Primer', serif"
        }}
      >
        about me
      </h1>
      <p 
        className="mb-6 sm:mb-8 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 italic max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl text-left"
        style={{
          fontFamily: "'IM Fell Great Primer', serif"
        }}
      >
        I&apos;m from Cary, North Carolina and am currently studying Computer Science, Cognitive Science, Art, and Design at Northwestern University. 
      </p>

      <p
        className="mb-6 sm:mb-8 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 italic max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl text-left"
        style={{
          fontFamily: "'IM Fell Great Primer', serif"
        }}
      >
        I&apos;m passionate about crafting technology that people love to use, using my technical skills in software engineering alongside creative product design and my background in art.
      </p>

      <p
        className="mb-6 sm:mb-8 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 italic max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl text-left"
        style={{
          fontFamily: "'IM Fell Great Primer', serif"
        }}
      >
        In my free time, I love <a href="/art" className="text-blue-200 underline hover:text-white transition-colors duration-300">creating art</a>, practicing the guitar, playing tennis, and hiking!
      </p>

      <p
        className="mb-6 sm:mb-8 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 italic max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl text-left"
        style={{
          fontFamily: "'IM Fell Great Primer', serif"
        }}
      >
        You can reach me at daniel-kim@u.northwestern.edu
        <span 
          onClick={handleEmailCopy}
          className="ml-2 text-blue-200 hover:text-white transition-colors duration-300 cursor-pointer"
        >
          {emailCopied ? (
            <span className="text-white">✓</span>
          ) : (
            <svg 
              className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 inline"
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
          )}
        </span>
        .
      </p>
      
      {/* Three polaroids in a row */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 mt-6 sm:mt-8 md:mt-12">
        {[
          { src: '/about_me/IMG_3783.jpg', text: 'bar harbor, maine' },
          { src: '/about_me/IMG_1408.JPG', text: 'banff, ab, canada' },
          { src: '/about_me/IMG_0424.jpg', text: 'boone, north carolina'}
        ].map((item, index) => (
          <div 
            key={index}
            className="polaroid bg-white p-3 sm:p-4 md:p-5 lg:p-6 shadow-xl hover:shadow-2xl transform transition-all duration-300 cursor-pointer"
            style={{
              transform: index === 0 ? 'rotate(-3deg)' : index === 1 ? 'rotate(2deg)' : 'rotate(-1.5deg)',
              width: '280px',
              height: '320px'
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
              <div className="flex-1 overflow-hidden">
                <img 
                  src={item.src} 
                  alt={`About me ${index + 1}`} 
                  className="w-full h-full object-cover"
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
      </div>
      
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
              <img 
                src={expandedImage || ''} 
                alt="Expanded view" 
                className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl transition-all duration-300 ease-out"
                onClick={(e) => e.stopPropagation()}
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
        
        .animate-fadeOut {
          animation: fadeOut 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

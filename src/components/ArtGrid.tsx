'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { artworks } from '@/data/artworks';

// Generate consistent rotations for each artwork (between 1-3 degrees, left or right)
const rotations = [
  -2.5, 1.8, -1.2, 2.3, -2.8, 1.5, -1.7, 2.6, -2.1, 1.3, -2.9, 1.9, -1.4, 2.7
];

export default function ArtGrid() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);

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
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
      {artworks.map((artwork, index) => {
        const rotation = rotations[index % rotations.length];
        
        return (
          <div
            key={artwork.id}
            className="polaroid bg-white p-3 sm:p-4 shadow-xl hover:shadow-2xl transform transition-all duration-300 cursor-pointer mx-auto"
            style={{
              width: 'clamp(220px, 28vw, 300px)',
              height: 'clamp(280px, 36vw, 380px)',
              transform: `rotate(${rotation}deg)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = `rotate(${rotation}deg)`;
            }}
            onClick={(e) => handleImageClick(artwork.src, e)}
          >
            <div className="w-full h-full flex flex-col">
              {/* Image */}
              <div className="flex-1 overflow-hidden relative">
                <Image
                  src={artwork.src}
                  alt={artwork.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 220px, (max-width: 1024px) 280px, 300px"
                />
              </div>
              
              {/* Polaroid caption area */}
              <div className="bg-white pt-2 pb-1 flex-shrink-0">
                {/* Title row with arrow */}
                <div className="flex items-center justify-between px-1">
                  <h3 
                    className="text-gray-800 text-2xl sm:text-4xl text-left font-bold"
                    style={{ fontFamily: "'Myfont', sans-serif", fontStyle: 'italic' }}
                  >
                    {artwork.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p 
                  className="text-neutral-500 text-xs sm:text-sm mt-1 text-left px-1"
                  style={{ fontFamily: "'IM Fell Great Primer', serif" }}
                >
                  {artwork.description || 'Placeholder description'}
                </p>
              </div>
            </div>
          </div>
        );
      })}
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
              <Image
                src={expandedImage || ''}
                alt="Expanded view"
                width={1200}
                height={800}
                className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain shadow-2xl transition-all duration-300 ease-out"
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
        
        .animate-fadeOut {
          animation: fadeOut 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}

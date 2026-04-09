'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { paintings, drawings, mixedMedia, Artwork } from '@/data/artworks';

const sections = [
  {
    id: 'fine-art',
    label: 'Fine Art',
    subsections: [
      { id: 'painting', label: 'Painting', count: paintings.length },
      { id: 'drawing', label: 'Drawing', count: drawings.length },
      { id: 'mixed-media', label: 'Mixed Media', count: mixedMedia.length },
    ],
  },
  { id: 'sketchbook', label: 'Sketchbook', subsections: [] },
  { id: 'film', label: 'Film', subsections: [] },
];

function ArtSection({ id, title, artworks }: { id: string; title: string; artworks: Artwork[] }) {
  const [expandedImage, setExpandedImage] = useState<Artwork | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const closeModal = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setExpandedImage(null);
      setIsClosing(false);
    }, 300);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && expandedImage) closeModal();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [expandedImage, closeModal]);

  return (
    <section id={id} className="scroll-mt-28 mb-16">
      <h2
        className="text-neutral-900 text-sm tracking-wide mb-6"
        style={{ fontFamily: "'IM Fell Great Primer', serif" }}
      >
        {title}
      </h2>
      <div className="columns-3 gap-4">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="break-inside-avoid mb-4">
            <div
              className="cursor-pointer"
              onClick={() => { setExpandedImage(artwork); setIsClosing(false); }}
            >
              <Image
                src={artwork.src}
                alt={artwork.title}
                width={600}
                height={600}
                sizes="(max-width: 768px) 33vw, 25vw"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="mt-2">
              <p
                className="text-neutral-800 text-xs"
                style={{ fontFamily: "'IM Fell Great Primer', serif" }}
              >
                <span className="font-semibold">{artwork.title}</span>
                {', '}
                {artwork.medium}, {artwork.dimensions}, {artwork.year}
              </p>
            </div>
          </div>
        ))}
      </div>

      {expandedImage && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
          style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
          onClick={closeModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={expandedImage.src}
              alt={expandedImage.title}
              width={1200}
              height={800}
              className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain shadow-2xl"
              sizes="90vw"
              quality={95}
            />
            <button
              onClick={closeModal}
              className="absolute -top-3 -right-3 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/75 transition-all duration-200"
            >
              ✕
            </button>
            <div className="mt-3 text-center">
              <p className="text-white text-sm" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
                <span className="font-semibold">{expandedImage.title}</span>
                {', '}{expandedImage.medium}, {expandedImage.dimensions}, {expandedImage.year}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

const filmPhotos = [
  { src: '/film/IMG_0507.JPG', date: 'March 2026' },
  { src: '/film/IMG_0514.JPG', date: 'March 2026' },
  { src: '/film/IMG_0516.JPG', date: 'March 2026' },
  { src: '/film/IMG_0500.JPG', date: 'February 2026' },
  { src: '/film/IMG_0508.JPG', date: 'February 2026' },
  { src: '/film/IMG_3296.jpg', date: 'November 2025' },
  { src: '/film/IMG_3301.jpg', date: 'November 2025' },
  { src: '/film/IMG_3307.JPG', date: 'November 2025' },
  { src: '/film/IMG_3315.jpg', date: 'October 2025' },
  { src: '/film/IMG_3319.JPG', date: 'October 2025' },
  { src: '/film/IMG_3321.jpg', date: 'October 2025' },
  { src: '/film/IMG_2025.JPG', date: 'September 2025' },
  { src: '/film/IMG_2026.JPG', date: 'September 2025' },
  { src: '/film/IMG_2032.JPG', date: 'September 2025' },
  { src: '/film/IMG_2019.JPG', date: 'August 2025' },
  { src: '/film/IMG_2020.jpg', date: 'August 2025' },
  { src: '/film/IMG_2022.JPG', date: 'August 2025' },
  { src: '/film/IMG_2039.JPG', date: 'August 2025' },
  { src: '/film/IMG_2040.JPG', date: 'August 2025' },
  { src: '/film/IMG_2031.JPG', date: 'July 2025' },
];

function FilmSection() {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const closeModal = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setExpandedImage(null);
      setIsClosing(false);
    }, 300);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && expandedImage) closeModal();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [expandedImage, closeModal]);

  return (
    <section id="film" className="scroll-mt-28 mb-16">
      <h2
        className="text-neutral-900 text-sm tracking-wide mb-6"
        style={{ fontFamily: "'IM Fell Great Primer', serif" }}
      >
        Film
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {filmPhotos.map((photo, i) => (
          <div key={i}>
            <div
              className="cursor-pointer"
              onClick={() => { setExpandedImage(photo.src); setIsClosing(false); }}
            >
              <Image
                src={photo.src}
                alt={`Film photo ${i + 1}`}
                width={600}
                height={600}
                sizes="(max-width: 768px) 33vw, 25vw"
                className="w-full h-auto object-contain"
              />
            </div>
            <p
              className="text-neutral-500 text-xs mt-2"
              style={{ fontFamily: "'IM Fell Great Primer', serif" }}
            >
              {photo.date}
            </p>
          </div>
        ))}
      </div>

      {expandedImage && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
          style={{ backdropFilter: 'blur(8px)', backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
          onClick={closeModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={expandedImage}
              alt="Film photo expanded"
              width={1200}
              height={800}
              className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain shadow-2xl"
              sizes="90vw"
              quality={95}
            />
            <button
              onClick={closeModal}
              className="absolute -top-3 -right-3 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/75 transition-all duration-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default function ArtPage() {
  const [activeSection, setActiveSection] = useState('painting');
  const [sidebarFixed, setSidebarFixed] = useState(false);
  const [sidebarLeft, setSidebarLeft] = useState(0);
  const sidebarPlaceholderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['painting', 'drawing', 'mixed-media', 'sketchbook', 'film'];
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            current = id;
          }
        }
      }
      setActiveSection(current);

      if (sidebarPlaceholderRef.current) {
        const rect = sidebarPlaceholderRef.current.getBoundingClientRect();
        setSidebarLeft(rect.left);
        setSidebarFixed(rect.top < 20);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sidebarContent = (
    <>
      {sections.map((section) => (
        <div key={section.id} className="mb-4">
          <button
            onClick={() => {
              if (section.subsections.length > 0) {
                scrollToSection(section.subsections[0].id);
              } else {
                scrollToSection(section.id);
              }
            }}
            className={`text-left text-sm font-medium transition-colors duration-200 ${
              section.subsections.some((s) => s.id === activeSection)
                ? 'text-neutral-900'
                : section.id === activeSection
                  ? 'text-neutral-900'
                  : 'text-neutral-400 hover:text-neutral-600'
            }`}
            style={{ fontFamily: "'IM Fell Great Primer', serif" }}
          >
            {section.label}
          </button>
          {section.subsections.length > 0 && (
            <div className="ml-3 mt-1.5 space-y-1">
              {section.subsections.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => scrollToSection(sub.id)}
                  className={`block text-left text-sm transition-colors duration-200 ${
                    activeSection === sub.id
                      ? 'text-emerald-800 font-medium'
                      : 'text-neutral-400 hover:text-neutral-600'
                  }`}
                  style={{ fontFamily: "'IM Fell Great Primer', serif" }}
                >
                  {sub.label}{' '}
                  <span className="text-neutral-300">({sub.count})</span>
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="flex max-w-7xl mx-auto px-6 lg:px-12 gap-16">
        {/* Sidebar placeholder to reserve space and measure position */}
        <div ref={sidebarPlaceholderRef} className="hidden md:block w-36 flex-shrink-0">
          {/* In-flow sidebar when not fixed */}
          <nav className={sidebarFixed ? 'invisible' : ''}>
            {sidebarContent}
          </nav>
        </div>

        {/* Fixed sidebar that appears when scrolled past */}
        {sidebarFixed && (
          <nav
            className="hidden md:block w-36 z-30"
            style={{ position: 'fixed', top: 20, left: sidebarLeft }}
          >
            {sidebarContent}
          </nav>
        )}

        {/* Main Content */}
        <div ref={contentRef} className="flex-1 min-w-0">
          <ArtSection id="painting" title="Painting" artworks={paintings} />
          <ArtSection id="drawing" title="Drawing" artworks={drawings} />
          <ArtSection id="mixed-media" title="Mixed Media" artworks={mixedMedia} />

          <section id="sketchbook" className="scroll-mt-28 mb-16">
            <h2
              className="text-neutral-900 text-sm tracking-wide mb-6"
              style={{ fontFamily: "'IM Fell Great Primer', serif" }}
            >
              Sketchbook
            </h2>
            <div className="flex items-center justify-center h-48 border border-dashed border-neutral-300">
              <p
                className="text-neutral-400 text-lg italic"
                style={{ fontFamily: "'IM Fell Great Primer', serif" }}
              >
                Coming Soon
              </p>
            </div>
          </section>

          <FilmSection />
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HoverImageWordProps {
  children: React.ReactNode;
  src: string;
  alt: string;
  landscape?: boolean;
}

function HoverImageWord({ children, src, alt, landscape = false }: HoverImageWordProps) {
  return (
    <span className="group relative inline-block">
      <span
        className="cursor-pointer text-[#8B9A6E] underline underline-offset-4 transition-colors group-hover:text-[#6f7d56]"
        tabIndex={0}
      >
        {children}
      </span>
      <span
        className={`pointer-events-none invisible absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2 translate-y-1 overflow-hidden border border-[#8B9A6E] opacity-0 shadow-xl transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 ${
          landscape ? 'h-40 w-56 sm:h-48 sm:w-72' : 'h-52 w-40 sm:h-64 sm:w-48'
        }`}
      >
        <Image src={src} alt={alt} fill sizes={landscape ? '288px' : '192px'} className="object-cover" />
      </span>
    </span>
  );
}

function NowPlayingWord() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [nowPlaying, setNowPlaying] = useState<{
    isPlaying: boolean;
    title?: string;
    artist?: string;
    albumImageUrl?: string;
  } | null>(null);

  const showNowPlaying = async () => {
    setIsVisible(true);
    setIsLoading(true);

    try {
      const response = await fetch('/api/spotify/now-playing');
      const data = await response.json();
      setNowPlaying(data);
    } catch (error) {
      console.error('Error fetching now playing:', error);
      setNowPlaying({ isPlaying: false });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <span
      className="relative inline-block"
      onMouseEnter={showNowPlaying}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={showNowPlaying}
      onBlur={() => setIsVisible(false)}
    >
      <span className="cursor-pointer text-[#8B9A6E] underline underline-offset-4 hover:text-[#6f7d56] transition-colors" tabIndex={0}>
        listening to music
      </span>
      <span
        className={`absolute bottom-full left-1/2 z-50 mb-1 min-w-max -translate-x-1/2 border border-[#8B9A6E] bg-[#F7F2EB] px-4 py-3 text-sm shadow-xl transition-all duration-300 ease-out ${
          isVisible ? 'visible translate-y-0 opacity-100' : 'pointer-events-none invisible translate-y-1 opacity-0'
        }`}
        style={{ fontFamily: "'IM Fell Great Primer', serif" }}
      >
        {isLoading ? (
          <span>loading...</span>
        ) : nowPlaying?.isPlaying ? (
          <span className="flex flex-col text-left">
            <span className="mb-2 text-xs text-neutral-600">Currently listening to:</span>
            <span className="flex items-center gap-3">
              {nowPlaying.albumImageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={nowPlaying.albumImageUrl} alt="Album cover" className="h-12 w-12 object-cover" />
              )}
              <span className="flex flex-col text-left">
                <span>{nowPlaying.title}</span>
                <span className="text-xs text-neutral-600">{nowPlaying.artist}</span>
              </span>
            </span>
          </span>
        ) : (
          <span>currently not listening to anything</span>
        )}
      </span>
    </span>
  );
}

export default function MePage() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const chicagoTime = new Date(
        new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })
      );
      const hours = chicagoTime.getHours();
      const minutes = chicagoTime.getMinutes().toString().padStart(2, '0');
      const seconds = chicagoTime.getSeconds().toString().padStart(2, '0');
      setCurrentTime(`${hours % 12 || 12}:${minutes}:${seconds} ${hours >= 12 ? 'pm' : 'am'}`);
    };

    updateTime();
    const interval = window.setInterval(updateTime, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const textStyle = { fontFamily: "'IM Fell Great Primer', serif" };

  return (
    <main className="min-h-screen px-6 sm:px-10 lg:px-16 pt-28 sm:pt-32 pb-10 text-neutral-900">
      <div className="mx-auto max-w-6xl">
        <motion.header
          className="flex items-baseline justify-between gap-8 border-b border-[#8B9A6E] pb-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h1 className="text-left text-3xl sm:text-4xl font-normal tracking-wide italic" style={{ fontFamily: "'Myfont', sans-serif" }}>
            daniel kim
          </h1>
          <p
            className="text-right text-2xl sm:text-3xl text-[#8B9A6E]"
            style={{ fontFamily: "'Nanum Pen Script', cursive" }}
          >
            김동규
          </p>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.6fr)_minmax(240px,0.7fr)] gap-14 lg:gap-24 pt-12 sm:pt-16"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
        >
          <div className="space-y-6 text-base sm:text-lg leading-relaxed" style={textStyle}>
            <p>
              Hi! My name is Daniel, and I&apos;m an engineer and artist from{' '}
              <HoverImageWord src="/about_me/cary.jpg" alt="Cary, North Carolina">
                Cary, North Carolina
              </HoverImageWord>
              . I&apos;m currently studying Computer Science and Art at{' '}
              <HoverImageWord src="/about_me/deering.jpg" alt="Northwestern University" landscape>
                Northwestern University
              </HoverImageWord>
              .
            </p>
            <p>
              In my free time, I love{' '}
              <a href="/art" className="text-[#8B9A6E] underline underline-offset-4 hover:text-[#6f7d56] transition-colors">creating art</a>, playing the guitar, <NowPlayingWord />, and{' '}
              <HoverImageWord src="/IMG_3690.JPG" alt="Hiking" landscape>
                hiking
              </HoverImageWord>
              .
            </p>
            <p>
              You can reach me at{' '}
              <a href="mailto:dk@u.northwestern.edu" className="text-[#8B9A6E] underline underline-offset-4 hover:text-[#6f7d56] transition-colors">dk@u.northwestern.edu</a>.
            </p>
          </div>

          <aside className="space-y-9 text-sm sm:text-base leading-relaxed" style={textStyle}>
            <section>
              <h2 className="mb-3 text-xs uppercase tracking-[0.18em] text-[#8B9A6E]">Currently</h2>
              <p>Studying abroad in Madrid, Spain!</p>
              <p className="mt-3">
                Building{' '}
                <a href="https://www.tryamity.com/" target="_blank" rel="noopener noreferrer" className="text-[#8B9A6E] underline underline-offset-4 hover:text-[#6f7d56] transition-colors">
                  Amity
                </a>
                , semantic people search for alumni networks.
              </p>
            </section>
            <section>
              <h2 className="mb-3 text-xs uppercase tracking-[0.18em] text-[#8B9A6E]">Previously</h2>
              <p>Software Engineer Intern at AWS, Osteoid Inc., Elytra Robotics, and Square One.</p>
            </section>
          </aside>
        </motion.div>

        <footer
          className="mt-20 sm:mt-28 flex items-center justify-between gap-3 border-t border-[#8B9A6E] pt-5 text-xs sm:gap-5 sm:text-sm"
          style={textStyle}
        >
          <p className="tracking-wide">chicago, il · {currentTime}</p>
          <nav className="flex shrink-0 gap-4 sm:gap-5" aria-label="Social links">
            <a href="https://github.com/daniel-kimm" target="_blank" rel="noopener noreferrer" className="hover:text-[#8B9A6E] transition-colors">github</a>
            <a href="https://x.com/danielkimnc" target="_blank" rel="noopener noreferrer" className="hover:text-[#8B9A6E] transition-colors">x</a>
            <a href="https://www.linkedin.com/in/daniel-kimm/" target="_blank" rel="noopener noreferrer" className="hover:text-[#8B9A6E] transition-colors">linkedin</a>
          </nav>
        </footer>
      </div>
    </main>
  );
}

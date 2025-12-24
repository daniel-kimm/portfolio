'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ProjectsPage() {
  const router = useRouter();

  const handleProjectClick = (projectSlug: string) => {
    router.push(`/projects/${projectSlug}`);
  };
  return (
    <div className="flex flex-col text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-20 sm:pt-24 md:pt-28 lg:pt-12 pb-16 w-full">
      <h1 
        className="mb-6 sm:mb-8 text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold italic mt-16 sm:mt-20 md:mt-24 lg:mt-16"
        style={{
          fontFamily: "'IM Fell Great Primer', serif"
        }}
      >
        projects
      </h1>
      
      <p 
        className="mb-6 sm:mb-8 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 italic mx-auto"
        style={{
          fontFamily: "'IM Fell Great Primer', serif"
        }}
      >
        here&apos;s a collection of projects i&apos;ve worked on!
      </p>
      
      {/* Projects Grid - 3 columns layout */}
      <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {/* Project 1 - Daniel Diffusion */}
        <div 
          className="group flex flex-col bg-white/10 backdrop-blur-md rounded-4xl p-6 aspect-square w-full cursor-pointer hover:scale-[1.01] transition-transform duration-150 relative overflow-visible"
          onClick={() => handleProjectClick('daniel-diffusion')}
        >
          <h3 className="text-center mb-1 relative z-10 font-bold" style={{
            fontFamily: "'IM Fell Great Primer', serif",
            fontSize: "1.125rem",
            color: "#ffffff"
          }}>
            Daniel Diffusion
          </h3>
          <p className="text-center mb-2 text-white/80 text-md relative z-10" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            generative model trained on my artwork | 2025
          </p>
          <div className="relative flex-1 mx-1 mb-3 rounded overflow-hidden border border-white/30">
            <Image 
              src="/daniel-diffusion/danieldiffusion.png" 
              alt="Daniel Diffusion Project" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7Dh5zms2/4L1+SnP8AFp8eMw8xnIMtH4eMQzQJ9sQdOOFi3dIH4WtY2MNkfb1lTMg3/wA="
            />

          </div>
          <div className="flex flex-wrap gap-2 justify-center relative z-10">
            {['Python', 'JavaScript', 'Flux LoRA', 'Fal AI'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded text-sm" style={{
                fontFamily: "'IM Fell Great Primer', serif"              }}>{tech}</span>
            ))}
          </div>
          {/* Hand-drawn border */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <filter id="roughen-box">
                <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="2"/>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5"/>
              </filter>
            </defs>
            <rect 
              x="0" y="0" 
              width="100" height="100"
              rx="8" ry="8"
              fill="none" 
              stroke="rgba(255,255,255,0.4)" 
              strokeWidth="0.4"
              className="group-hover:stroke-white"
              style={{ filter: 'url(#roughen-box)' }}
            />
          </svg>
        </div>

        {/* Project 2 - Ultra */}
        <div 
          className="group flex flex-col bg-white/10 backdrop-blur-md rounded-4xl p-6 aspect-square w-full cursor-pointer hover:scale-[1.01] transition-transform duration-150 relative overflow-visible"
          onClick={() => handleProjectClick('ultra')}
        >
          <h3 className="text-center mb-1 relative z-10 font-bold" style={{
            fontFamily: "'IM Fell Great Primer', serif",
            fontSize: "1.125rem",
            color: "#ffffff"
          }}>
            Ultra
          </h3>
          <p className="text-center mb-2 text-white/80 text-md relative z-10" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            desktop writing assistant with local context | 2025
          </p>
          <div className="relative flex-1 mx-1 mb-3 rounded overflow-hidden border border-white/30">
            <Image 
              src="/ultradashboard2.png" 
              alt="Ultra Project" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7Dh5zms2/4L1+SnP8AFp8eMw8xnIMtH4eMQzQJ9sQdOOFi3dIH4WtY2MNkfb1lTMg3/wA="
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center relative z-10">
            {['TypeScript', 'React', 'Electron', 'SQLite'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded text-sm" style={{
                fontFamily: "'IM Fell Great Primer', serif"              }}>{tech}</span>
            ))}
          </div>
          {/* Hand-drawn border */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect 
              x="0" y="0" 
              width="100" height="100"
              rx="8" ry="8"
              fill="none" 
              stroke="rgba(255,255,255,0.4)" 
              strokeWidth="0.4"
              className="group-hover:stroke-white"
              style={{ filter: 'url(#roughen-box)' }}
            />
          </svg>
        </div>
        
        {/* Project 2 - Alto */}
        <div 
          className="group flex flex-col bg-white/10 backdrop-blur-md rounded-4xl p-6 aspect-square w-full cursor-pointer hover:scale-[1.01] transition-transform duration-150 relative overflow-visible"
          onClick={() => handleProjectClick('alto')}
        >
          <h3 className="text-center mb-1 relative z-10 font-bold" style={{
            fontFamily: "'IM Fell Great Primer', serif",
            fontSize: "1.125rem",
            color: "#ffffff"
          }}>
            Alto
          </h3>
          <p className="text-center mb-2 text-white/80 text-md relative z-10" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            voice-based email client | 2025
          </p>
          <div className="relative flex-1 mx-1 mb-3 rounded overflow-hidden border border-white/30">
            <Image 
              src="/altoapp.png" 
              alt="Alto Project" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7Dh5zms2/4L1+SnP8AFp8eMw8xnIMtH4eMQzQJ9sQdOOFi3dIH4WtY2MNkfb1lTMg3/wA="
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center relative z-10">
            {['TypeScript', 'React Native', 'Expo', 'Supabase'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded text-sm" style={{
                fontFamily: "'IM Fell Great Primer', serif"              }}>{tech}</span>
            ))}
          </div>
          {/* Hand-drawn border */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect 
              x="0" y="0" 
              width="100" height="100"
              rx="8" ry="8"
              fill="none" 
              stroke="rgba(255,255,255,0.4)" 
              strokeWidth="0.4"
              className="group-hover:stroke-white"
              style={{ filter: 'url(#roughen-box)' }}
            />
          </svg>
        </div>

        {/* Project 2 - CTECS */}
        <div 
          className="group flex flex-col bg-white/10 backdrop-blur-md rounded-4xl p-6 aspect-square w-full cursor-pointer hover:scale-[1.01] transition-transform duration-150 relative overflow-visible"
          onClick={() => handleProjectClick('ctecs')}
        >
          <h3 className="text-center mb-1 relative z-10 font-bold" style={{
            fontFamily: "'IM Fell Great Primer', serif",
            fontSize: "1.125rem",
            color: "#ffffff"
          }}>
            ctecs.nu
          </h3>
          <p className="text-center mb-2 text-white/80 text-md relative z-10" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            chatbot for northwestern course reviews | 2025
          </p>
          <div className="relative flex-1 mx-1 mb-3 rounded overflow-hidden border border-white/30">
            <Image 
              src="/ctecsnu.png" 
              alt="CTECS Project" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7Dh5zms2/4L1+SnP8AFp8eMw8xnIMtH4eMQzQJ9sQdOOFi3dIH4WtY2MNkfb1lTMg3/wA="
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center relative z-10">
            {['JavaScript', 'AWS', 'RAG', 'NER', 'Selenium'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded text-sm" style={{
                fontFamily: "'IM Fell Great Primer', serif"              }}>{tech}</span>
            ))}
          </div>
          {/* Hand-drawn border */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect 
              x="0" y="0" 
              width="100" height="100"
              rx="8" ry="8"
              fill="none" 
              stroke="rgba(255,255,255,0.4)" 
              strokeWidth="0.4"
              className="group-hover:stroke-white"
              style={{ filter: 'url(#roughen-box)' }}
            />
          </svg>
        </div>

        {/* Project 3 - Float */}
        <div 
          className="group flex flex-col bg-white/10 backdrop-blur-md rounded-4xl p-6 aspect-square w-full cursor-pointer hover:scale-[1.01] transition-transform duration-150 relative overflow-visible"
          onClick={() => handleProjectClick('float')}
        >
          <h3 className="text-center mb-1 relative z-10 font-bold" style={{
            fontFamily: "'IM Fell Great Primer', serif",
            fontSize: "1.125rem",
            color: "#ffffff"
          }}>
            Float
          </h3>
          <p className="text-center mb-2 text-white/80 text-md relative z-10" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            always-visible notepad | 2025
          </p>
          <div className="relative flex-1 mx-1 mb-3 rounded overflow-hidden border border-white/30">
            <Image 
              src="/float.png" 
              alt="Float Project" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7Dh5zms2/4L1+SnP8AFp8eMw8xnIMtH4eMQzQJ9sQdOOFi3dIH4WtY2MNkfb1lTMg3/wA="
            />

          </div>
          <div className="flex flex-wrap gap-2 justify-center relative z-10">
            {['TypeScript', 'Tauri', 'React', 'Rust'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded text-sm" style={{
                fontFamily: "'IM Fell Great Primer', serif"              }}>{tech}</span>
            ))}
          </div>
          {/* Hand-drawn border */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect 
              x="0" y="0" 
              width="100" height="100"
              rx="8" ry="8"
              fill="none" 
              stroke="rgba(255,255,255,0.4)" 
              strokeWidth="0.4"
              className="group-hover:stroke-white"
              style={{ filter: 'url(#roughen-box)' }}
            />
          </svg>
        </div>

        {/* Project 3 - CRM */}
        <div 
          className="group flex flex-col bg-white/10 backdrop-blur-md rounded-4xl p-6 aspect-square w-full cursor-pointer hover:scale-[1.01] transition-transform duration-150 relative overflow-visible"
          onClick={() => handleProjectClick('crm')}
        >
          <h3 className="text-center mb-1 relative z-10 font-bold" style={{
            fontFamily: "'IM Fell Great Primer', serif",
            fontSize: "1.125rem",
            color: "#ffffff"
          }}>
            CRM Platform
          </h3>
          <p className="text-center mb-2 text-white/80 text-md relative z-10" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            crm with automated lead prospecting | 2025
          </p>
          <div className="relative flex-1 mx-1 mb-3 rounded overflow-hidden border border-white/30">
            <Image 
              src="/crm.png" 
              alt="CRM Project" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7Dh5zms2/4L1+SnP8AFp8eMw8xnIMtH4eMQzQJ9sQdOOFi3dIH4WtY2MNkfb1lTMg3/wA="
            />

          </div>
          <div className="flex flex-wrap gap-2 justify-center relative z-10">
            {['TypeScript', 'Docker', 'Puppeteer', 'Supabase'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded text-sm" style={{
                fontFamily: "'IM Fell Great Primer', serif"              }}>{tech}</span>
            ))}
          </div>
          {/* Hand-drawn border */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect 
              x="0" y="0" 
              width="100" height="100"
              rx="8" ry="8"
              fill="none" 
              stroke="rgba(255,255,255,0.4)" 
              strokeWidth="0.4"
              className="group-hover:stroke-white"
              style={{ filter: 'url(#roughen-box)' }}
            />
          </svg>
        </div>

        {/* Project 4 - PurityTest */}
        <div 
          className="group flex flex-col bg-white/10 backdrop-blur-md rounded-4xl p-6 aspect-square w-full cursor-pointer hover:scale-[1.01] transition-transform duration-150 relative overflow-visible"
          onClick={() => handleProjectClick('northwestern-purity-test')}
        >
          <h3 className="text-center mb-1 relative z-10 font-bold" style={{
            fontFamily: "'IM Fell Great Primer', serif",
            fontSize: "1.125rem",
            color: "#ffffff"
          }}>
            Northwestern Purity Test
          </h3>
          <p className="text-center mb-2 text-white/80 text-md relative z-10" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            campus quiz with 5,300+ visitors | 2025
          </p>
          <div className="relative flex-1 mx-1 mb-3 rounded overflow-hidden border border-white/30">
            <Image 
              src="/nupuritytest.png" 
              alt="PurityTest Project" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7Dh5zms2/4L1+SnP8AFp8eMw8xnIMtH4eMQzQJ9sQdOOFi3dIH4WtY2MNkfb1lTMg3/wA="
            />

          </div>
          <div className="flex flex-wrap gap-2 justify-center relative z-10">
            {['JavaScript', 'React', 'Vercel'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded text-sm" style={{
                fontFamily: "'IM Fell Great Primer', serif"              }}>{tech}</span>
            ))}
          </div>
          {/* Hand-drawn border */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect 
              x="0" y="0" 
              width="100" height="100"
              rx="8" ry="8"
              fill="none" 
              stroke="rgba(255,255,255,0.4)" 
              strokeWidth="0.4"
              className="group-hover:stroke-white"
              style={{ filter: 'url(#roughen-box)' }}
            />
          </svg>
        </div>

        {/* Project 8 - ScoutCode */}
        <div 
          className="group flex flex-col bg-white/10 backdrop-blur-md rounded-4xl p-6 aspect-square w-full cursor-pointer hover:scale-[1.01] transition-transform duration-150 relative overflow-visible"
          onClick={() => handleProjectClick('frc-scouting-app')}
        >
          <h3 className="text-center mb-1 relative z-10 font-bold" style={{
            fontFamily: "'IM Fell Great Primer', serif",
            fontSize: "1.125rem",
            color: "#ffffff"
          }}>
            FRC Scouting App
          </h3>
          <p className="text-center mb-2 text-white/80 text-md relative z-10" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            scouting app for frc competitions | 2025
          </p>
          <div className="relative flex-1 mx-1 mb-3 rounded overflow-hidden border border-white/30">
            <Image 
              src="/9032scout/teamanalysis.png" 
              alt="Scout Code Project" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7Dh5zms2/4L1+SnP8AFp8eMw8xnIMtH4eMQzQJ9sQdOOFi3dIH4WtY2MNkfb1lTMg3/wA="
            />

          </div>
          <div className="flex flex-wrap gap-2 justify-center relative z-10">
            {['JavaScript', 'RAG', 'Express', 'Firebase'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded text-sm" style={{
                fontFamily: "'IM Fell Great Primer', serif"              }}>{tech}</span>
            ))}
          </div>
          {/* Hand-drawn border */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect 
              x="0" y="0" 
              width="100" height="100"
              rx="8" ry="8"
              fill="none" 
              stroke="rgba(255,255,255,0.4)" 
              strokeWidth="0.4"
              className="group-hover:stroke-white"
              style={{ filter: 'url(#roughen-box)' }}
            />
          </svg>
        </div>

        {/* Project 6 - Square One Mobile App */}
        <div 
          className="group flex flex-col bg-white/10 backdrop-blur-md rounded-4xl p-6 aspect-square w-full cursor-pointer hover:scale-[1.01] transition-transform duration-150 relative overflow-visible"
          onClick={() => handleProjectClick('square-one-mobile-app')}
        >
          <h3 className="text-center mb-1 relative z-10 font-bold" style={{
            fontFamily: "'IM Fell Great Primer', serif",
            fontSize: "1.125rem",
            color: "#ffffff"
          }}>
            Square One Mobile App
          </h3>
          <p className="text-center mb-2 text-white/80 text-md relative z-10" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            app for spreading health awareness to children | 2025
          </p>
          <div className="relative flex-1 mx-1 mb-3 rounded overflow-hidden border border-white/30">
            <Image 
              src="/IMG_6734.PNG" 
              alt="Square One Mobile App Project" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7Dh5zms2/4L1+SnP8AFp8eMw8xnIMtH4eMQzQJ9sQdOOFi3dIH4WtY2MNkfb1lTMg3/wA="
            />

          </div>
          <div className="flex flex-wrap gap-2 justify-center relative z-10">
            {['React Native', 'Firebase', 'Expo'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded text-sm" style={{
                fontFamily: "'IM Fell Great Primer', serif"              }}>{tech}</span>
            ))}
          </div>
          {/* Hand-drawn border */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect 
              x="0" y="0" 
              width="100" height="100"
              rx="8" ry="8"
              fill="none" 
              stroke="rgba(255,255,255,0.4)" 
              strokeWidth="0.4"
              className="group-hover:stroke-white"
              style={{ filter: 'url(#roughen-box)' }}
            />
          </svg>
        </div>
      </div>
      </div>
    </div>
  );
}

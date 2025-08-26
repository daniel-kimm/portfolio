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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        
        {/* Project 1 - Alto */}
        <div 
          className="flex flex-col bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 aspect-square w-full cursor-pointer transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl"
          onClick={() => handleProjectClick('alto')}
        >
          <h3 className="text-center mb-3" style={{
            fontFamily: "'IM Fell Great Primer', serif",
            fontSize: "1.125rem",
            color: "#ffffff"
          }}>
            Alto: AI Voice Email Assistant
          </h3>
          <div className="relative flex-1 mx-1 mb-3 rounded overflow-hidden border border-white/30">
            <Image 
              src="/alto.png" 
              alt="Alto Project" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7Dh5zms2/4L1+SnP8AFp8eMw8xnIMtH4eMQzQJ9sQdOOFi3dIH4WtY2MNkfb1lTMg3/wA="
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {['TypeScript', 'React Native', 'Expo', 'Supabase'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded text-sm" style={{
                fontFamily: "'IM Fell Great Primer', serif"              }}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Project 2 - CTECS */}
        <div 
          className="flex flex-col bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 aspect-square w-full cursor-pointer transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl"
          onClick={() => handleProjectClick('ctecs')}
        >
          <h3 className="text-center mb-3" style={{
            fontFamily: "'IM Fell Great Primer', serif",
            fontSize: "1.125rem",
            color: "#ffffff"
          }}>
            ctecs.nu: NU Course Assistant
          </h3>
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
          <div className="flex flex-wrap gap-2 justify-center">
            {['JavaScript', 'AWS', 'RAG', 'NER', 'Selenium'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded text-sm" style={{
                fontFamily: "'IM Fell Great Primer', serif"              }}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Project 3 - Float */}
        <div 
          className="flex flex-col bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 aspect-square w-full cursor-pointer transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl"
          onClick={() => handleProjectClick('float')}
        >
          <h3 className="text-center mb-3" style={{
            fontFamily: "'IM Fell Great Primer', serif",
            fontSize: "1.125rem",
            color: "#ffffff"
          }}>
            Float: Overlay Note-Taking App
          </h3>
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
          <div className="flex flex-wrap gap-2 justify-center">
            {['TypeScript', 'Tauri', 'React', 'Rust'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded text-sm" style={{
                fontFamily: "'IM Fell Great Primer', serif"              }}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Project 3 - CRM */}
        <div 
          className="flex flex-col bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 aspect-square w-full cursor-pointer transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl"
          onClick={() => handleProjectClick('crm')}
        >
          <h3 className="text-center mb-3" style={{
            fontFamily: "'IM Fell Great Primer', serif",
            fontSize: "1.125rem",
            color: "#ffffff"
          }}>
            AI-Powered CRM Platform
          </h3>
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
          <div className="flex flex-wrap gap-2 justify-center">
            {['TypeScript', 'Docker', 'Puppeteer', 'Supabase'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded text-sm" style={{
                fontFamily: "'IM Fell Great Primer', serif"              }}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Project 4 - PurityTest */}
        <div 
          className="flex flex-col bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 aspect-square w-full cursor-pointer transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl"
          onClick={() => handleProjectClick('northwestern-purity-test')}
        >
          <h3 className="text-center mb-3" style={{
            fontFamily: "'IM Fell Great Primer', serif",
            fontSize: "1.125rem",
            color: "#ffffff"
          }}>
            Northwestern Purity Test
          </h3>
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
          <div className="flex flex-wrap gap-2 justify-center">
            {['JavaScript', 'React', 'Vercel'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded text-sm" style={{
                fontFamily: "'IM Fell Great Primer', serif"              }}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Project 5 - ScoutCode */}
        <div 
          className="flex flex-col bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 aspect-square w-full cursor-pointer transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl"
          onClick={() => handleProjectClick('frc-scouting-app')}
        >
          <h3 className="text-center mb-3" style={{
            fontFamily: "'IM Fell Great Primer', serif",
            fontSize: "1.125rem",
            color: "#ffffff"
          }}>
            FRC Scouting App
          </h3>
          <div className="relative flex-1 mx-1 mb-3 rounded overflow-hidden border border-white/30">
            <Image 
              src="/9032scout.png" 
              alt="Scout Code Project" 
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7Dh5zms2/4L1+SnP8AFp8eMw8xnIMtH4eMQzQJ9sQdOOFi3dIH4WtY2MNkfb1lTMg3/wA="
            />

          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {['JavaScript', 'RAG', 'Express', 'Firebase'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded text-sm" style={{
                fontFamily: "'IM Fell Great Primer', serif"              }}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Empty placeholder for centering */}
        <div></div>

        {/* Project 6 - Square One Mobile App */}
        <div 
          className="flex flex-col bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 aspect-square w-full cursor-pointer transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-xl"
          onClick={() => handleProjectClick('square-one-mobile-app')}
        >
          <h3 className="text-center mb-3" style={{
            fontFamily: "'IM Fell Great Primer', serif",
            fontSize: "1.125rem",
            color: "#ffffff"
          }}>
            Square One Mobile App
          </h3>
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
          <div className="flex flex-wrap gap-2 justify-center">
            {['React Native', 'Firebase', 'Expo'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded text-sm" style={{
                fontFamily: "'IM Fell Great Primer', serif"              }}>{tech}</span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

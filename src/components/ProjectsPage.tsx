'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const projects = [
  {
    slug: 'daniel-diffusion',
    title: 'daniel-diffusion',
    year: '2025',
    description: 'generative model trained on my artwork',
    image: '/daniel-diffusion/danieldiffusion.png',
    technologies: ['Python', 'JavaScript', 'Flux LoRA', 'Fal AI'],
  },
  {
    slug: 'ultra',
    title: 'Ultra',
    year: '2025',
    description: 'desktop writing assistant with local context',
    image: '/ultradashboard2.png',
    technologies: ['TypeScript', 'React', 'Electron', 'SQLite'],
  },
  {
    slug: 'alto',
    title: 'Alto',
    year: '2025',
    description: 'voice-based email client',
    image: '/altoapp.png',
    technologies: ['TypeScript', 'React Native', 'Expo', 'Supabase'],
  },
  {
    slug: 'ctecs',
    title: 'ctecs.nu',
    year: '2025',
    description: 'chatbot for northwestern course reviews',
    image: '/ctecsnu.png',
    technologies: ['JavaScript', 'AWS', 'RAG', 'NER', 'Selenium'],
  },
  {
    slug: 'float',
    title: 'Float',
    year: '2025',
    description: 'always-visible notepad',
    image: '/float.png',
    technologies: ['TypeScript', 'Tauri', 'React', 'Rust'],
  },
  {
    slug: 'crm',
    title: 'CRM Platform',
    year: '2025',
    description: 'crm with automated lead prospecting',
    image: '/crm.png',
    technologies: ['TypeScript', 'Docker', 'Puppeteer', 'Supabase'],
  },
  {
    slug: 'northwestern-purity-test',
    title: 'Northwestern Purity Test',
    year: '2025',
    description: 'campus quiz with 5,300+ visitors',
    image: '/nupuritytest.png',
    technologies: ['JavaScript', 'React', 'Vercel'],
  },
  {
    slug: 'frc-scouting-app',
    title: 'FRC Scouting App',
    year: '2025',
    description: 'scouting app for frc competitions',
    image: '/9032scout/teamanalysis.png',
    technologies: ['JavaScript', 'RAG', 'Express', 'Firebase'],
  },
  {
    slug: 'square-one-mobile-app',
    title: 'Square One Mobile App',
    year: '2024',
    description: 'app for spreading health awareness to children',
    image: '/IMG_6734.PNG',
    technologies: ['React Native', 'Firebase', 'Expo'],
  },
];

export default function ProjectsPage() {
  const router = useRouter();

  const handleProjectClick = (projectSlug: string) => {
    router.push(`/projects/${projectSlug}`);
  };

  return (
    <div className="flex flex-col text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-20 sm:pt-24 md:pt-28 lg:pt-12 pb-16 w-full">
      {/* SVG filter definition */}
      <svg className="absolute" style={{ width: 0, height: 0 }}>
        <defs>
          <filter id="roughen-box">
            <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="2"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5"/>
          </filter>
        </defs>
      </svg>

      <h1 
        className="mb-6 sm:mb-8 text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold italic mt-16 sm:mt-20 md:mt-24 lg:mt-16"
        style={{ fontFamily: "'IM Fell Great Primer', serif" }}
      >
        projects
      </h1>
      
      <p 
        className="mb-6 sm:mb-8 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 italic mx-auto"
        style={{ fontFamily: "'IM Fell Great Primer', serif" }}
      >
        a collection of projects i&apos;ve worked on
      </p>
      
      {/* Projects Grid */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full" style={{ maxWidth: '90%' }}>
          {projects.map((project) => (
            <div key={project.slug} className="relative pb-8">
              {/* Project Card - Just the image */}
              <div 
                className="group relative aspect-square w-full cursor-pointer hover:scale-[1.01] transition-all duration-150 overflow-hidden rounded-3xl border-2 border-white/30 hover:border-white/70"
                onClick={() => handleProjectClick(project.slug)}
              >
                {/* Image fills the box */}
                <Image 
                  src={project.image} 
                  alt={`${project.title} Project`} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7Dh5zms2/4L1+SnP8AFp8eMw8xnIMtH4eMQzQJ9sQdOOFi3dIH4WtY2MNkfb1lTMg3/wA="
                />

                {/* Hover overlay with description and technologies */}
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 rounded-3xl">
                  <p 
                    className="text-white text-sm sm:text-base mb-4 text-center"
                    style={{ fontFamily: "'IM Fell Great Primer', serif" }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-white/20 text-white px-2 py-1 rounded text-xs sm:text-sm"
                        style={{ fontFamily: "'IM Fell Great Primer', serif" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Title and Year - Outside the box, bottom right */}
              <div 
                className="flex items-center justify-end gap-2 mt-3"
                style={{ fontFamily: "'IM Fell Great Primer', serif" }}
              >
                <span className="text-white/90 text-md">{project.title} | {project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

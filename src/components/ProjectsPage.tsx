'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { InView } from './core/in-view';

const projects = [
  // Column 1 - Left
  {
    slug: 'daniel-diffusion',
    title: 'daniel-diffusion',
    year: '2025',
    description: 'generative model trained on my artwork',
    image: '/daniel-diffusion/danieldiffusion.png',
    technologies: ['Python', 'JavaScript', 'Flux LoRA', 'Fal AI'],
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
    slug: 'frc-scouting-app',
    title: 'FRC Scouting App',
    year: '2025',
    description: 'scouting app for frc competitions',
    image: '/9032scout/teamanalysis.png',
    technologies: ['JavaScript', 'RAG', 'Express', 'Firebase'],
  },
  // Column 2 - Middle
  {
    slug: 'ultra',
    title: 'Ultra',
    year: '2025',
    description: 'desktop writing assistant with local context',
    image: '/ultradashboard2.png',
    technologies: ['TypeScript', 'React', 'Electron', 'SQLite'],
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
  // Column 3 - Right
  {
    slug: 'alto',
    title: 'Alto',
    year: '2025',
    description: 'voice-based email client',
    image: '/altoapp.png',
    technologies: ['TypeScript', 'React Native', 'Expo', 'Supabase'],
    maxHeight: '400px',
  },
  {
    slug: 'square-one-mobile-app',
    title: 'Square One Mobile App',
    year: '2024',
    description: 'app for spreading health awareness to children',
    image: '/IMG_6734.PNG',
    technologies: ['React Native', 'Firebase', 'Expo'],
    maxHeight: '750px',
  },
];

export default function ProjectsPage() {
  const router = useRouter();

  const handleProjectClick = (projectSlug: string) => {
    router.push(`/projects/${projectSlug}`);
  };

  return (
    <div className="flex flex-col text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-20 sm:pt-24 md:pt-28 lg:pt-12 pb-16 w-full">
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
      
      {/* Projects Grid with InView Animation */}
      <div className="w-full flex justify-center px-8">
        <InView
          viewOptions={{ once: true, margin: '0px 0px -250px 0px' }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
        >
          <div className="columns-2 gap-4 sm:columns-3">
            {projects.map((project) => (
              <motion.div
                key={project.slug}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    filter: 'blur(0px)',
                  },
                }}
                className="mb-4"
              >
                {/* Project Card */}
                <div 
                  className="group relative w-full cursor-pointer overflow-hidden rounded-lg"
                  onClick={() => handleProjectClick(project.slug)}
                >
                  {/* Image with natural height for masonry effect */}
                  <Image 
                    src={project.image} 
                    alt={`${project.title} Project`} 
                    width={600}
                    height={600}
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="w-full h-auto rounded-lg object-cover"
                    style={project.maxHeight ? { maxHeight: project.maxHeight } : undefined}
                  />

                  {/* Hover overlay with title, description, and technologies */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 sm:p-6 rounded-lg">
                    {/* Title */}
                    <h3 
                      className="text-white text-base sm:text-lg md:text-xl font-semibold mb-2 text-center"
                      style={{ fontFamily: "'IM Fell Great Primer', serif" }}
                    >
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p 
                      className="text-white/90 text-xs sm:text-sm mb-3 text-center"
                      style={{ fontFamily: "'IM Fell Great Primer', serif" }}
                    >
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="bg-white/20 text-white px-2 py-0.5 rounded text-xs"
                          style={{ fontFamily: "'IM Fell Great Primer', serif" }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </InView>
      </div>
    </div>
  );
}

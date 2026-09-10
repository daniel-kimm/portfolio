'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { InView } from './core/in-view';

const projects = [
  // Column 1 - Left
  {
    slug: 'daniel-diffusion',
    title: 'daniel diffusion',
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
    title: 'float',
    year: '2025',
    description: 'always-visible notepad',
    image: '/float.png',
    technologies: ['TypeScript', 'Tauri', 'React', 'Rust'],
  },
  {
    slug: 'frc-scouting-app',
    title: 'frc scouting app',
    year: '2025',
    description: 'scouting app for frc competitions',
    image: '/9032scout/teamanalysis.png',
    technologies: ['JavaScript', 'RAG', 'Express', 'Firebase'],
  },
  // Column 2 - Middle
  {
    slug: 'ultra',
    title: 'ultra',
    year: '2025',
    description: 'desktop writing assistant with local context',
    image: '/ultradashboard2.png',
    technologies: ['TypeScript', 'React', 'Electron', 'SQLite'],
  },
  {
    slug: 'crm',
    title: 'crm platform',
    year: '2025',
    description: 'crm with automated lead prospecting',
    image: '/crm.png',
    technologies: ['TypeScript', 'Docker', 'Puppeteer', 'Supabase'],
  },
  {
    slug: 'northwestern-purity-test',
    title: 'northwestern purity test',
    year: '2025',
    description: 'campus quiz with 5,300+ visitors',
    image: '/nupuritytest.png',
    technologies: ['JavaScript', 'React', 'Vercel'],
  },
  // Column 3 - Right
  {
    slug: 'alto',
    title: 'alto',
    year: '2025',
    description: 'voice-based email client',
    image: '/altoapp.png',
    technologies: ['TypeScript', 'React Native', 'Expo', 'Supabase'],
    maxHeight: '400px',
  },
  {
    slug: 'square-one-mobile-app',
    title: 'square one mobile app',
    year: '2024',
    description: 'app for spreading health awareness to children',
    image: '/IMG_6734.PNG',
    technologies: ['React Native', 'Firebase', 'Expo'],
    maxHeight: '750px',
  },
];

const projectOrder = [
  'daniel-diffusion',
  'ultra',
  'alto',
  'ctecs',
  'float',
  'frc-scouting-app',
  'crm',
  'northwestern-purity-test',
  'square-one-mobile-app',
];

const orderedProjects = projectOrder.map(
  (slug) => projects.find((project) => project.slug === slug)!
);

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 sm:px-10 lg:px-16 pt-28 sm:pt-32 pb-16 text-neutral-900">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8 border-b border-[#8B9A6E] pb-4">
          <h1
            className="text-left text-3xl sm:text-4xl font-normal tracking-wide italic"
            style={{ fontFamily: "'myfont', serif" }}
          >
            a collection of projects
          </h1>
        </header>

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
          <div className="border-b border-[#8B9A6E]">
            {orderedProjects.map((project) => (
              <motion.div
                key={project.slug}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                className="border-b border-[#8B9A6E]/45 last:border-b-0"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group grid grid-cols-[1fr_auto] gap-x-5 gap-y-1 py-4 sm:grid-cols-[minmax(170px,0.75fr)_minmax(220px,1.25fr)_auto] sm:items-baseline"
                  style={{ fontFamily: "'IM Fell Great Primer', serif" }}
                >
                  <h2 className="col-start-1 row-start-1 text-base lowercase text-neutral-900 transition-colors group-hover:text-[#8B9A6E] sm:text-lg">
                    {project.title}
                  </h2>
                  <p className="col-span-2 col-start-1 row-start-2 text-sm text-neutral-600 sm:col-span-1 sm:col-start-2 sm:row-start-1">{project.description}</p>
                  <span className="col-start-2 row-start-1 text-xs text-[#8B9A6E] sm:col-start-3">{project.year}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </InView>
      </div>
    </main>
  );
}

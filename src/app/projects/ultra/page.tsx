'use client';

import { useEffect } from 'react';
import Layout from '../../../components/Layout';

export default function UltraProject() {
  useEffect(() => {
    document.title = ' ultra | daniel kim';
  }, []);
  return (
    <Layout currentPage="projects" variant="light" compactNavigation>
      <div className="project-detail-page flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-20 sm:pt-24 md:pt-28 lg:pt-12 pb-16 w-full min-h-screen">
        <div className="flex items-center justify-between mt-16 sm:mt-20 md:mt-24 lg:mt-16 mb-6 sm:mb-8">
          <button 
            onClick={() => window.history.back()}
            className="bg-white/10 hover:bg-white/20 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-white/30 transition-all duration-300 text-sm sm:text-base flex-shrink-0 cursor-pointer"
            style={{ fontFamily: "'IM Fell Great Primer', serif" }}
          >
            ← back
          </button>
          <h1 
            className="text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold italic text-center flex-1 mx-4"
            style={{
              fontFamily: "'IM Fell Great Primer', serif"
            }}
          >
            ultra
          </h1>
          <div className="w-20 sm:w-24 flex-shrink-0"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="text-left text-white text-lg leading-relaxed mb-4" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            <p className="mb-1">
              Ultra is a desktop app that allows users to write contextually accurate emails, text messages, answers to job applications, and more using AI. 
              It contains an always-visible overlay, vector embeddings for semantic document search, global hotkey screen capture, cursor annotation, and LLM integration to auto-generate relevant responses from user resumes/documents. It uses SQLite to store context completely locally, keeping your data secure.
              I worked on this project with my good friend <a href="https://www.andrew-yuan.com/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white underline">Andrew</a>!
            </p>
          </div>

          <div className="project-actions flex items-center justify-center gap-4 mb-4">
            {/* External Link Button */}
            <a 
              href="https://ultrafill.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 px-4 py-2 hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
              title="Visit Ultra"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span className="text-white text-base" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
                visit ultra
              </span>
            </a>
          </div>

          <div className="project-technologies-label text-white text-lg mb-2" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            <p className="mb-1">
              technologies:
            </p>
          </div>
          
          <div className="project-technologies flex flex-wrap gap-3 justify-center mb-8">
            {['TypeScript', 'React', 'Electron', 'SQLite', 'Transformers.js', 'Firebase'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-3 py-2 rounded-lg text-base" style={{
                fontFamily: "'IM Fell Great Primer', serif"
              }}>{tech}</span>
            ))}
          </div>

          <div className="mb-8">
            <video 
              src="/demovids/demo.mov" 
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-2xl mx-auto rounded-lg border border-white/30"
            />
          </div>
          

        </div>
      </div>
    </Layout>
  );
}

'use client';

import { useEffect } from 'react';
import Layout from '../../../components/Layout';

export default function FloatProject() {
  useEffect(() => {
    document.title = 'float | daniel kim';
  }, []);
  return (
    <Layout currentPage="projects">
      <div className="flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-20 sm:pt-24 md:pt-28 lg:pt-12 pb-16 w-full min-h-screen">
        <div className="flex items-center justify-between mt-16 sm:mt-20 md:mt-24 lg:mt-16 mb-6 sm:mb-8">
          <button 
            onClick={() => window.history.back()}
            className="bg-white/10 hover:bg-white/20 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-white/30 transition-all duration-300 text-sm sm:text-base flex-shrink-0 cursor-pointer"
            style={{ fontFamily: "'IM Fell Great Primer', serif" }}
          >
            ← Back
          </button>
          <h1 
            className="text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold italic text-center flex-1 mx-4"
            style={{
              fontFamily: "'IM Fell Great Primer', serif"
            }}
          >
            Float: Overlay Note-Taking App
          </h1>
          <div className="w-20 sm:w-24 flex-shrink-0"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="text-white text-lg leading-relaxed mb-4" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            <p className="mb-1">
            Float creates translucent notes that stay on top of any application without breaking your focus. It features advanced macOS NSPanel integration, transparent glass-like UI effects, and a global shortcut system for seamless overlay functionality across all applications.
            </p>
          </div>

          <div className="text-white text-lg mb-4" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            <p className="mb-1 font-bold">
              Link: <a href="https://float-notes.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white underline">float-notes.vercel.app</a>
            </p>
          </div>

          <div className="text-white text-lg mb-2" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            <p className="mb-1">
              Technologies:
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {['TypeScript', 'Tauri', 'React', 'Rust', 'TailwindCSS'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-3 py-2 rounded-lg text-base" style={{
                fontFamily: "'IM Fell Great Primer', serif"
              }}>{tech}</span>
            ))}
          </div>

          <div className="mb-8">
            <img 
              src="/float.png" 
              alt="Float Project" 
              className="w-full max-w-2xl mx-auto rounded-lg border border-white/30"
            />
          </div>
          

        </div>
      </div>
    </Layout>
  );
}

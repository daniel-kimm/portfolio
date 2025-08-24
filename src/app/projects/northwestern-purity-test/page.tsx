'use client';

import { useEffect } from 'react';
import Layout from '../../../components/Layout';

export default function NorthwesternPurityTestProject() {
  useEffect(() => {
    document.title = 'northwestern purity test | daniel kim';
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
            Northwestern Purity Test
          </h1>
          <div className="w-20 sm:w-24 flex-shrink-0"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="text-white text-lg leading-relaxed mb-8" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            <p className="mb-1">
              Northwestern Purity Test is an interactive React web application for Northwestern students to track and compare their campus experiences.
              Within 48 hours of launch, this app garnered 4,500+ users and 39,000+ requests.
            </p>
          </div>

          <div className="text-white text-lg mb-4" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            <p className="mb-1 font-bold">
              Link: <a href="https://www.northwesternpuritytest.com/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white underline">northwesternpuritytest.com</a>
            </p>
          </div>

          <div className="text-white text-lg mb-2" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            <p className="mb-1">
              Technologies:
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {['JavaScript', 'React', 'Vercel'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-3 py-2 rounded-lg text-base" style={{
                fontFamily: "'IM Fell Great Primer', serif"
              }}>{tech}</span>
            ))}
          </div>

          <div className="mb-8">
            <img 
              src="/nupuritytest.png" 
              alt="Northwestern Purity Test Project" 
              className="w-full max-w-2xl mx-auto rounded-lg border border-white/30"
            />
          </div>
          

        </div>
      </div>
    </Layout>
  );
}

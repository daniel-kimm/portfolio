'use client';

import { useEffect } from 'react';
import Layout from '../../../components/Layout';

export default function AltoProject() {
  useEffect(() => {
    document.title = ' alto | daniel kim';
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
            Alto: AI Voice Email Assistant
          </h1>
          <div className="w-20 sm:w-24 flex-shrink-0"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="text-white text-lg leading-relaxed mb-8" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            <p className="mb-1">
              Alto is a mobile app that allows users to transform commutes by interacting with their inbox by voice. 
              Its core feature is a custom voice-to-email system that incorporates real-time speech processing and intelligent Gmail integration. 
              I also built the landing page for the app, which you can view <a href="https://www.usealto.app/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white underline">here</a>.
              I&apos;m currently working on this project with my friends <a href="https://www.kaival.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white underline">Kaival</a> and <a href="https://www.andrew-yuan.com/" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white underline">Andrew</a>, who are both amazing engineers.
            </p>
          </div>

          <div className="text-white text-lg mb-2" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            <p className="mb-1">
              Technologies:
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {['TypeScript', 'Swift', 'React Native', 'Expo', 'Supabase'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-3 py-2 rounded-lg text-base" style={{
                fontFamily: "'IM Fell Great Primer', serif"
              }}>{tech}</span>
            ))}
          </div>

          <div className="mb-8">
            <img src="/alto.png" alt="Alto Project" className="w-full max-w-2xl mx-auto rounded-lg border border-white/30" />
          </div>
          

        </div>
      </div>
    </Layout>
  );
}

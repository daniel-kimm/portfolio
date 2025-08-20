'use client';

import Layout from '../../../components/Layout';

export default function CrmProject() {
  return (
    <Layout currentPage="projects">
      <div className="flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-20 sm:pt-24 md:pt-28 lg:pt-12 pb-16 w-full min-h-screen">
        <div className="relative flex items-center justify-center mt-16 sm:mt-20 md:mt-24 lg:mt-16 mb-6 sm:mb-8">
          <button 
            onClick={() => window.history.back()}
            className="absolute left-0 bg-white/10 hover:bg-white/20 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-white/30 transition-all duration-300 text-sm sm:text-base"
            style={{ fontFamily: "'IM Fell Great Primer', serif" }}
          >
            ← Back
          </button>
          <h1 
            className="text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold italic text-center"
            style={{
              fontFamily: "'IM Fell Great Primer', serif"
            }}
          >
            AI-Powered CRM Platform
          </h1>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="text-white text-lg leading-relaxed mb-8" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            <p className="mb-1">
              I built a CRM platform that currently manages 1,500+ contacts for the growth team at Elytra Robotics with deal pipeline tracking and automated notification capabilities.
              I also developed an AI-powered prospecting system with Gemini API integration and web scraping via Puppeteer, enabling bulk contact enrichment.
            </p>
          </div>

          <div className="text-white text-lg mb-4" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            <p className="mb-1 font-bold">
              Link: <a href="https://elytra-crm.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white underline">Elytra Robotics - CRM</a>
            </p>
          </div>

          <div className="text-white text-lg mb-2" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            <p className="mb-1">
              Technologies:
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {['TypeScript', 'React', 'TailwindCSS', 'Node.js', 'Docker', 'Puppeteer', 'Supabase', 'Gemini API'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-3 py-2 rounded-lg text-base" style={{
                fontFamily: "'IM Fell Great Primer', serif"
              }}>{tech}</span>
            ))}
          </div>

          <div className="mb-8">
            <img 
              src="/crm.png" 
              alt="CRM Project" 
              className="w-full max-w-2xl mx-auto rounded-lg border border-white/30"
            />
          </div>
          

        </div>
      </div>
    </Layout>
  );
}

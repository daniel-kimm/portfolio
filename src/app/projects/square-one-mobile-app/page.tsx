'use client';

import { useEffect } from 'react';
import Layout from '../../../components/Layout';

export default function SquareOneMobileAppProject() {
  useEffect(() => {
    document.title = 'square one | daniel kim';
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
            Square One Mobile App
          </h1>
          <div className="w-20 sm:w-24 flex-shrink-0"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="text-white text-lg leading-relaxed mb-8" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            <p className="mb-1">
              This app is a cross-platform mobile app for Square One, a non-profit organization that provides children&apos;s health resources to 2,000 students at 15 different schools in the Chicago area.
              Alongside a team of three other students, we implemented key features including user authentication, activity tracking (sleep, exercise, nutrition), and dynamic health management tools to promote children&apos;s health education.
              We also integrated Firebase for backend services, enabling real-time data synchronization, secure user authentication, and scalable cloud storage.
            </p>
          </div>

          <div className="text-white text-lg mb-2" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            <p className="mb-1">
              Technologies:
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {['JavaScript', 'React Native', 'Firebase', 'Expo'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-3 py-2 rounded-lg text-base" style={{
                fontFamily: "'IM Fell Great Primer', serif"
              }}>{tech}</span>
            ))}
          </div>

          <div className="mb-8">
            <img 
              src="/IMG_6734.PNG" 
              alt="Square One Mobile App Project" 
              className="w-1/3 max-w-2xl mx-auto rounded-lg border border-white/30"
            />
          </div>
          

        </div>
      </div>
    </Layout>
  );
}

import React from 'react';

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 md:px-8 max-w-6xl mx-auto pt-20 sm:pt-24 md:pt-28 lg:pt-8">
      <h1 
        className="mb-6 sm:mb-8 text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold italic mt-8 sm:mt-12 md:mt-16 lg:mt-5"
        style={{
          fontFamily: "'IM Fell Great Primer', serif"
        }}
      >
        projects
      </h1>
      
      <p 
        className="mb-6 sm:mb-8 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 italic max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl"
        style={{
          fontFamily: "'IM Fell Great Primer', serif"
        }}
      >
        here&apos;s a collection of projects i&apos;ve worked on!
      </p>
      
      {/* Projects Grid - 2x3 layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        
        {/* Project 1 - Alto */}
        <div className="flex flex-col bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 h-80">
          <h3 className="text-center mb-3" style={{
            fontFamily: "'IM Fell Great Primer', serif",
            fontSize: "1.25rem",
            color: "#ffffff",
            fontStyle: "italic"
          }}>
            Alto: AI Voice Email Assistant
          </h3>
          <div className="relative flex-1 mx-1 mb-3 rounded overflow-hidden border border-white/30">
            <img 
              src="/alto.png" 
              alt="Alto Project" 
              className="w-full h-full object-cover"
            />
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute top-2 left-2 bg-black bg-opacity-50 rounded-full w-6 h-6 flex items-center justify-center hover:bg-opacity-70 transition-all duration-200 hover:scale-110"
            >
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="white">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white rounded px-2 py-1 text-xs">
              2025
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {['React Native', 'Expo', 'TypeScript'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded text-xs" style={{
                fontFamily: "'IM Fell Great Primer', serif",
                fontStyle: "italic"
              }}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Project 2 - CTECS */}
        <div className="flex flex-col bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 h-80">
          <h3 className="text-center mb-3" style={{
            fontFamily: "'IM Fell Great Primer', serif",
            fontSize: "1.25rem",
            color: "#ffffff",
            fontStyle: "italic"
          }}>
            ctecs.nu: NU Course Assistant
          </h3>
          <div className="relative flex-1 mx-1 mb-3 rounded overflow-hidden border border-white/30">
            <img 
              src="/ctecsnu.png" 
              alt="CTECS Project" 
              className="w-full h-full object-cover"
            />
            <a 
              href="https://github.com/Charliehyin/CTECs-Summarizer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute top-2 left-2 bg-black bg-opacity-50 rounded-full w-6 h-6 flex items-center justify-center hover:bg-opacity-70 transition-all duration-200 hover:scale-110"
            >
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="white">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white rounded px-2 py-1 text-xs">
              2025
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {['JavaScript', 'AWS', 'RAG'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded text-xs" style={{
                fontFamily: "'IM Fell Great Primer', serif",
                fontStyle: "italic"
              }}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Project 3 - CRM */}
        <div className="flex flex-col bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 h-80">
          <h3 className="text-center mb-3" style={{
            fontFamily: "'IM Fell Great Primer', serif",
            fontSize: "1.25rem",
            color: "#ffffff",
            fontStyle: "italic"
          }}>
            CRM Platform
          </h3>
          <div className="relative flex-1 mx-1 mb-3 rounded overflow-hidden border border-white/30">
            <img 
              src="/crm.png" 
              alt="CRM Project" 
              className="w-full h-full object-cover"
            />
            <a 
              href="https://github.com/daniel-kimm/elytra-crm" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute top-2 left-2 bg-black bg-opacity-50 rounded-full w-6 h-6 flex items-center justify-center hover:bg-opacity-70 transition-all duration-200 hover:scale-110"
            >
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="white">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white rounded px-2 py-1 text-xs">
              2025
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {['React', 'Node.js', 'PostgreSQL'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded text-xs" style={{
                fontFamily: "'IM Fell Great Primer', serif",
                fontStyle: "italic"
              }}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Project 4 - PurityTest */}
        <div className="flex flex-col bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 h-80">
          <h3 className="text-center mb-3" style={{
            fontFamily: "'IM Fell Great Primer', serif",
            fontSize: "1.25rem",
            color: "#ffffff",
            fontStyle: "italic"
          }}>
            PurityTest.nu
          </h3>
          <div className="relative flex-1 mx-1 mb-3 rounded overflow-hidden border border-white/30">
            <img 
              src="/nupuritytest.png" 
              alt="PurityTest Project" 
              className="w-full h-full object-cover"
            />
            <a 
              href="https://github.com/daniel-kimm/nupuritytest" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute top-2 left-2 bg-black bg-opacity-50 rounded-full w-6 h-6 flex items-center justify-center hover:bg-opacity-70 transition-all duration-200 hover:scale-110"
            >
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="white">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white rounded px-2 py-1 text-xs">
              2023
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {['HTML', 'CSS', 'JavaScript'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded text-xs" style={{
                fontFamily: "'IM Fell Great Primer', serif",
                fontStyle: "italic"
              }}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Project 5 - ScoutCode */}
        <div className="flex flex-col bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 h-80">
          <h3 className="text-center mb-3" style={{
            fontFamily: "'IM Fell Great Primer', serif",
            fontSize: "1.25rem",
            color: "#ffffff",
            fontStyle: "italic"
          }}>
            9032 Scout Code
          </h3>
          <div className="relative flex-1 mx-1 mb-3 rounded overflow-hidden border border-white/30">
            <img 
              src="/9032scout.png" 
              alt="Scout Code Project" 
              className="w-full h-full object-cover"
            />
            <a 
              href="https://github.com/daniel-kimm/9032scout" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute top-2 left-2 bg-black bg-opacity-50 rounded-full w-6 h-6 flex items-center justify-center hover:bg-opacity-70 transition-all duration-200 hover:scale-110"
            >
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="white">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white rounded px-2 py-1 text-xs">
              2022
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Python', 'Machine Learning', 'TensorFlow'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded text-xs" style={{
                fontFamily: "'IM Fell Great Primer', serif",
                fontStyle: "italic"
              }}>{tech}</span>
            ))}
          </div>
        </div>

        {/* Project 6 - Empty slot for balance */}
        <div className="flex flex-col bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 h-80 opacity-50">
          <h3 className="text-center mb-3" style={{
            fontFamily: "'IM Fell Great Primer', serif",
            fontSize: "1.25rem",
            color: "#ffffff",
            fontStyle: "italic"
          }}>
            Coming Soon...
          </h3>
          <div className="relative flex-1 mx-1 mb-3 rounded overflow-hidden border border-white/30 bg-white/5 flex items-center justify-center">
            <span className="text-white/50 text-4xl">?</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="bg-white/20 text-white px-2 py-1 rounded text-xs" style={{
              fontFamily: "'IM Fell Great Primer', serif",
              fontStyle: "italic"
            }}>TBD</span>
          </div>
        </div>

      </div>
    </div>
  );
}

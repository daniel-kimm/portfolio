import React from 'react';

export default function ExperiencePage() {
  return (
    <div className="flex flex-col text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-20 sm:pt-24 md:pt-28 lg:pt-12 pb-16 w-full">
      <h1 
        className="mb-6 sm:mb-8 text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold italic mt-16 sm:mt-20 md:mt-24 lg:mt-16"
        style={{
          fontFamily: "'IM Fell Great Primer', serif"
        }}
      >
        work
      </h1>
      <p 
        className="mb-6 sm:mb-8 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 italic mx-auto"
        style={{
          fontFamily: "'IM Fell Great Primer', serif"
        }}
      >
        here&apos;s a comprehensive look at my professional experience and campus involvement!
      </p>
      
      {/* Work Experience Section */}
      <div className="mb-6 sm:mb-8 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 italic mx-auto">
        <h2 
          className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold text-white mb-8 italic"
          style={{
            fontFamily: "'IM Fell Great Primer', serif"
          }}
        >
          work experience
        </h2>
        
        {/* Work Experience Timeline */}
        <div className="space-y-6">
          {/* Osteoid Inc */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-left flex items-center">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <img 
                  src="/logos/osteoid.jpeg" 
                  alt="Osteoid Inc. logo" 
                  className="object-contain rounded w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12"
                />
                <div>
                  <h3 
                    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-semibold text-white mb-1"
                    style={{
                      fontFamily: "'IM Fell Great Primer', serif"
                    }}
                  >
                    Software Engineering Intern
                  </h3>
                  <p 
                    className="text-xs sm:text-sm md:text-base lg:text-base xl:text-base text-white opacity-80"
                    style={{
                      fontFamily: "'IM Fell Great Primer', serif"
                    }}
                  >
                    Osteoid Inc.
                  </p>
                </div>
              </div>
              <p 
                className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-white opacity-100"
                style={{
                  fontFamily: "'IM Fell Great Primer', serif"
                }}
              >
                June 2025 - Present
              </p>
            </div>
          </div>
          
          {/* Elytra Robotics */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-left flex items-center">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <img 
                  src="/logos/elytra.jpeg" 
                  alt="Elytra Robotics logo" 
                  className="object-contain rounded w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12"
                />
                <div>
                  <h3 
                    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-semibold text-white mb-1"
                    style={{
                      fontFamily: "'IM Fell Great Primer', serif"
                    }}
                  >
                    AI/ML Intern
                  </h3>
                  <p 
                    className="text-xs sm:text-sm md:text-base lg:text-base xl:text-base text-white opacity-80"
                    style={{
                      fontFamily: "'IM Fell Great Primer', serif"
                    }}
                  >
                    Elytra Robotics
                  </p>
                </div>
              </div>
              <p 
                className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-white opacity-100"
                style={{
                  fontFamily: "'IM Fell Great Primer', serif"
                }}
              >
                March 2025 - June 2025
              </p>
            </div>
          </div>
          
          {/* Northwestern University */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-left flex items-center">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <img 
                  src="/logos/kellogg.jpeg" 
                  alt="Northwestern University Kellogg logo" 
                  className="object-contain rounded w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12"
                />
                <div>
                  <h3 
                    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-semibold text-white mb-1"
                    style={{
                      fontFamily: "'IM Fell Great Primer', serif"
                    }}
                  >
                    IT Public Computing Technician
                  </h3>
                  <p 
                    className="text-xs sm:text-sm md:text-base lg:text-base xl:text-base text-white opacity-80"
                    style={{
                      fontFamily: "'IM Fell Great Primer', serif"
                    }}
                  >
                    Northwestern University Kellogg Information Systems
                  </p>
                </div>
              </div>
              <p 
                className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-white opacity-100"
                style={{
                  fontFamily: "'IM Fell Great Primer', serif"
                }}
              >
                October 2024 - Present
              </p>
            </div>
          </div>
          
          {/* Square One */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-left flex items-center">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <img 
                  src="/logos/squareone.jpeg" 
                  alt="Square One logo" 
                  className="object-contain rounded w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12"
                />
                <div>
                  <h3 
                    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-semibold text-white mb-1"
                    style={{
                      fontFamily: "'IM Fell Great Primer', serif"
                    }}
                  >
                    Software Engineering Intern
                  </h3>
                  <p 
                    className="text-xs sm:text-sm md:text-base lg:text-base xl:text-base text-white opacity-80"
                    style={{
                      fontFamily: "'IM Fell Great Primer', serif"
                    }}
                  >
                    Square One
                  </p>
                </div>
              </div>
              <p 
                className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-white opacity-100"
                style={{
                  fontFamily: "'IM Fell Great Primer', serif"
                }}
              >
                October 2024 - March 2025
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Campus Involvement Section */}
      <div className="mb-6 sm:mb-8 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 italic mx-auto">
        <h2 
          className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-semibold text-white mb-8 italic"
          style={{
            fontFamily: "'IM Fell Great Primer', serif"
          }}
        >
          campus involvement
        </h2>
        
        {/* Campus Involvement Timeline */}
        <div className="space-y-6">
          {/* Mayfest Productions */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-left flex items-center">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <img 
                  src="/logos/mayfest.jpeg" 
                  alt="Mayfest Productions logo" 
                  className="object-contain rounded w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12"
                />
                <div>
                  <h3 
                    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-semibold text-white mb-1"
                    style={{
                      fontFamily: "'IM Fell Great Primer', serif"
                    }}
                  >
                    General Board Member
                  </h3>
                  <p 
                    className="text-xs sm:text-sm md:text-base lg:text-base xl:text-base text-white opacity-80"
                    style={{
                      fontFamily: "'IM Fell Great Primer', serif"
                    }}
                  >
                    Mayfest Productions
                  </p>
                </div>
              </div>
              <p 
                className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-white opacity-100"
                style={{
                  fontFamily: "'IM Fell Great Primer', serif"
                }}
              >
                October 2024 - Present
              </p>
            </div>
          </div>
          
          {/* IEEE */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-left flex items-center">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                <img 
                  src="/logos/ieee.jpeg" 
                  alt="IEEE logo" 
                  className="object-contain rounded w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12"
                />
                <div>
                  <h3 
                    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-semibold text-white mb-1"
                    style={{
                      fontFamily: "'IM Fell Great Primer', serif"
                    }}
                  >
                    Software Engineer
                  </h3>
                  <p 
                    className="text-xs sm:text-sm md:text-base lg:text-base xl:text-base text-white opacity-80"
                    style={{
                      fontFamily: "'IM Fell Great Primer', serif"
                    }}
                  >
                    Institute of Electrical and Electronics Engineers (IEEE)
                  </p>
                </div>
              </div>
              <p 
                className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-white opacity-100"
                style={{
                  fontFamily: "'IM Fell Great Primer', serif"
                }}
              >
                January 2025 - May 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

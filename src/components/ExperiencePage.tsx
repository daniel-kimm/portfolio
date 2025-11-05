'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ExperiencePage() {
  const [openDropdowns, setOpenDropdowns] = useState<{[key: string]: boolean}>({});

  const toggleDropdown = (id: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
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
      <div className="mb-6 sm:mb-8 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 italic mx-auto max-w-5xl">
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
          <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 w-full lg:w-3xl xl:w-4xl">
            <div className="p-4 text-left flex items-center">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-4">
                  <Image 
                    src="/logos/osteoid.jpeg" 
                    alt="Osteoid Inc. logo" 
                    width={48}
                    height={48}
                    className="object-contain rounded w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12"
                    sizes="48px"
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
                <div className="flex items-center space-x-2">
                  <p 
                    className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-white opacity-100"
                    style={{
                      fontFamily: "'IM Fell Great Primer', serif"
                    }}
                  >
                    June 2025 - September 2025
                  </p>
                  <button
                    onClick={() => toggleDropdown('osteoid')}
                    className="text-white hover:text-white/80 transition-colors duration-200 p-1 cursor-pointer"
                  >
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 ${openDropdowns.osteoid ? 'rotate-180' : 'rotate-0'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Dropdown Content */}
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openDropdowns.osteoid ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 pb-4 border-t border-white/10">
                <p 
                  className="text-left text-xs sm:text-sm md:text-base lg:text-base xl:text-base text-white opacity-80 mt-3"
                  style={{
                    fontFamily: "'IM Fell Great Primer', serif"
                  }}
                >
                  Worked with Product Development to build imaging pipelines and optimize 3D visualization APIs.
                </p>
              </div>
            </div>
          </div>
          
          {/* Elytra Robotics */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 w-full lg:w-3xl xl:w-4xl">
            <div className="p-4 text-left flex items-center">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-4">
                  <Image 
                    src="/logos/elytra.jpeg" 
                    alt="Elytra Robotics logo" 
                    width={48}
                    height={48}
                    className="object-contain rounded w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12"
                    sizes="48px"
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
                <div className="flex items-center space-x-2">
                  <p 
                    className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-white opacity-100"
                    style={{
                      fontFamily: "'IM Fell Great Primer', serif"
                    }}
                  >
                    March 2025 - June 2025
                  </p>
                  <button
                    onClick={() => toggleDropdown('elytra')}
                    className="text-white hover:text-white/80 transition-colors duration-200 p-1 cursor-pointer"
                  >
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 ${openDropdowns.elytra ? 'rotate-180' : 'rotate-0'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Dropdown Content */}
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openDropdowns.elytra ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 pb-4 border-t border-white/10">
                <p 
                  className="text-left text-xs sm:text-sm md:text-base lg:text-base xl:text-base text-white opacity-80 mt-3"
                  style={{
                    fontFamily: "'IM Fell Great Primer', serif"
                  }}
                >
                  Developed high-performance ML models, pipelines connecting detection and classification models, and internal CRM tools.
                </p>
              </div>
            </div>
          </div>
          
          {/* Northwestern University */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 w-full lg:w-3xl xl:w-4xl">
            <div className="p-4 text-left flex items-center">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-4">
                  <Image 
                    src="/logos/kellogg.jpeg" 
                    alt="Northwestern University Kellogg logo" 
                    width={48}
                    height={48}
                    className="object-contain rounded w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12"
                    sizes="48px"
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
                <div className="flex items-center space-x-2">
                  <p 
                    className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-white opacity-100"
                    style={{
                      fontFamily: "'IM Fell Great Primer', serif"
                    }}
                  >
                    October 2024 - Present
                  </p>
                  <button
                    onClick={() => toggleDropdown('northwestern')}
                    className="text-white hover:text-white/80 transition-colors duration-200 p-1 cursor-pointer"
                  >
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 ${openDropdowns.northwestern ? 'rotate-180' : 'rotate-0'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Dropdown Content */}
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openDropdowns.northwestern ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 pb-4 border-t border-white/10">
                <p 
                  className="text-left text-xs sm:text-sm md:text-base lg:text-base xl:text-base text-white opacity-80 mt-3"
                  style={{
                    fontFamily: "'IM Fell Great Primer', serif"
                  }}
                >
                  Handling hardware receiving, software imaging, and device configuration while tracking service requests through ITSM tools.
                </p>
              </div>
            </div>
          </div>
          
          {/* Square One */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 w-full lg:w-3xl xl:w-4xl">
            <div className="p-4 text-left flex items-center">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-4">
                  <Image 
                    src="/logos/squareone.jpeg" 
                    alt="Square One logo" 
                    width={48}
                    height={48}
                    className="object-contain rounded w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12"
                    sizes="48px"
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
                <div className="flex items-center space-x-2">
                  <p 
                    className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-white opacity-100"
                    style={{
                      fontFamily: "'IM Fell Great Primer', serif"
                    }}
                  >
                    October 2024 - March 2025
                  </p>
                  <button
                    onClick={() => toggleDropdown('squareone')}
                    className="text-white hover:text-white/80 transition-colors duration-200 p-1 cursor-pointer"
                  >
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 ${openDropdowns.squareone ? 'rotate-180' : 'rotate-0'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Dropdown Content */}
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openDropdowns.squareone ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 pb-4 border-t border-white/10">
                <p 
                  className="text-left text-xs sm:text-sm md:text-base lg:text-base xl:text-base text-white opacity-80 mt-3"
                  style={{
                    fontFamily: "'IM Fell Great Primer', serif"
                  }}
                >
                  Designed wireframes and built full-stack systems for a mobile app promoting children’s health and interactive learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Campus Involvement Section */}
      <div className="mb-6 sm:mb-8 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 italic mx-auto max-w-5xl">
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
          {/* IEEE Project Manager */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 w-full lg:w-3xl xl:w-4xl">
            <div className="p-4 text-left flex items-center">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-4">
                  <Image 
                    src="/logos/ieee.jpeg" 
                    alt="IEEE logo" 
                    width={48}
                    height={48}
                    className="object-contain rounded w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12"
                    sizes="48px"
                  />
                  <div>
                    <h3 
                      className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-semibold text-white mb-1"
                      style={{
                        fontFamily: "'IM Fell Great Primer', serif"
                      }}
                    >
                      Project Manager
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
                <div className="flex items-center space-x-2">
                  <p 
                    className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-white opacity-100"
                    style={{
                      fontFamily: "'IM Fell Great Primer', serif"
                    }}
                  >
                    September 2025 - Present
                  </p>
                  <button
                    onClick={() => toggleDropdown('ieee_pm')}
                    className="text-white hover:text-white/80 transition-colors duration-200 p-1 cursor-pointer"
                  >
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 ${openDropdowns.ieee_pm ? 'rotate-180' : 'rotate-0'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Dropdown Content */}
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openDropdowns.ieee_pm ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 pb-4 border-t border-white/10">
                <p 
                  className="text-left text-xs sm:text-sm md:text-base lg:text-base xl:text-base text-white opacity-80 mt-3"
                  style={{
                    fontFamily: "'IM Fell Great Primer', serif"
                  }}
                >
                  Leading a project team for the 2026 Technical Program.
                </p>
              </div>
            </div>
          </div>

          {/* The Garage */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 w-full lg:w-3xl xl:w-4xl">
            <div className="p-4 text-left flex items-center">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-4">
                  <Image 
                    src="/logos/the_garage_at_northwestern_logo.jpeg" 
                    alt="The Garage at Northwestern logo" 
                    width={48}
                    height={48}
                    className="object-contain rounded w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12"
                    sizes="48px"
                  />
                  <div>
                    <h3 
                      className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-semibold text-white mb-1"
                      style={{
                        fontFamily: "'IM Fell Great Primer', serif"
                      }}
                    >
                      Resident
                    </h3>
                    <p 
                      className="text-xs sm:text-sm md:text-base lg:text-base xl:text-base text-white opacity-80"
                      style={{
                        fontFamily: "'IM Fell Great Primer', serif"
                      }}
                    >
                      The Garage at Northwestern
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <p 
                    className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-white opacity-100"
                    style={{
                      fontFamily: "'IM Fell Great Primer', serif"
                    }}
                  >
                    September 2025 - Present
                  </p>
                  <button
                    onClick={() => toggleDropdown('the_garage')}
                    className="text-white hover:text-white/80 transition-colors duration-200 p-1 cursor-pointer"
                  >
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 ${openDropdowns.the_garage ? 'rotate-180' : 'rotate-0'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Dropdown Content */}
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openDropdowns.the_garage ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 pb-4 border-t border-white/10">
                <p 
                  className="text-left text-xs sm:text-sm md:text-base lg:text-base xl:text-base text-white opacity-80 mt-3"
                  style={{
                    fontFamily: "'IM Fell Great Primer', serif"
                  }}
                >
                  Building Ultra and learning from weekly resident dinners at Northwestern&apos;s startup incubator.
                </p>
              </div>
            </div>
          </div>


          {/* Perplexity */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 w-full lg:w-3xl xl:w-4xl">
            <div className="p-4 text-left flex items-center">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-4">
                  <Image 
                    src="/logos/perplexity_ai_logo.jpeg" 
                    alt="Perplexity logo" 
                    width={48}
                    height={48}
                    className="object-contain rounded w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12"
                    sizes="48px"
                  />
                  <div>
                    <h3 
                      className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-semibold text-white mb-1"
                      style={{
                        fontFamily: "'IM Fell Great Primer', serif"
                      }}
                    >
                      Campus Partner
                    </h3>
                    <p 
                      className="text-xs sm:text-sm md:text-base lg:text-base xl:text-base text-white opacity-80"
                      style={{
                        fontFamily: "'IM Fell Great Primer', serif"
                      }}
                    >
                      Perplexity
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <p 
                    className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-white opacity-100"
                    style={{
                      fontFamily: "'IM Fell Great Primer', serif"
                    }}
                  >
                    September 2025 - Present
                  </p>
                  <button
                    onClick={() => toggleDropdown('perplexity')}
                    className="text-white hover:text-white/80 transition-colors duration-200 p-1 cursor-pointer"
                  >
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 ${openDropdowns.perplexity ? 'rotate-180' : 'rotate-0'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Dropdown Content */}
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openDropdowns.perplexity ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 pb-4 border-t border-white/10">
                <p 
                  className="text-left text-xs sm:text-sm md:text-base lg:text-base xl:text-base text-white opacity-80 mt-3"
                  style={{
                    fontFamily: "'IM Fell Great Primer', serif"
                  }}
                >
                  Promoting Perplexity&apos;s AI-powered browser, Comet, at Northwestern.
                </p>
              </div>
            </div>
          </div>
          
          {/* Mayfest Productions */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 w-full lg:w-3xl xl:w-4xl">
            <div className="p-4 text-left flex items-center">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-4">
                  <Image 
                    src="/logos/mayfest.jpeg" 
                    alt="Mayfest Productions logo" 
                    width={48}
                    height={48}
                    className="object-contain rounded w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12"
                    sizes="48px"
                  />
                  <div>
                    <h3 
                      className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-semibold text-white mb-1"
                      style={{
                        fontFamily: "'IM Fell Great Primer', serif"
                      }}
                    >
                      Corporate Committee
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
                <div className="flex items-center space-x-2">
                  <p 
                    className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-white opacity-100"
                    style={{
                      fontFamily: "'IM Fell Great Primer', serif"
                    }}
                  >
                    October 2024 - Present
                  </p>
                  <button
                    onClick={() => toggleDropdown('mayfest')}
                    className="text-white hover:text-white/80 transition-colors duration-200 p-1 cursor-pointer"
                  >
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 ${openDropdowns.mayfest ? 'rotate-180' : 'rotate-0'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Dropdown Content */}
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openDropdowns.mayfest ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 pb-4 border-t border-white/10">
                <p 
                  className="text-left text-xs sm:text-sm md:text-base lg:text-base xl:text-base text-white opacity-80 mt-3"
                  style={{
                    fontFamily: "'IM Fell Great Primer', serif"
                  }}
                >
                  Securing corporate sponsorships for Dillo Day, the nation&apos;s largest student-run music festival.
                </p>
              </div>
            </div>
          </div>
          
          {/* IEEE */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 w-full lg:w-3xl xl:w-4xl">
            <div className="p-4 text-left flex items-center">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-4">
                  <Image 
                    src="/logos/ieee.jpeg" 
                    alt="IEEE logo" 
                    width={48}
                    height={48}
                    className="object-contain rounded w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-12 xl:h-12"
                    sizes="48px"
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
                <div className="flex items-center space-x-2">
                  <p 
                    className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-white opacity-100"
                    style={{
                      fontFamily: "'IM Fell Great Primer', serif"
                    }}
                  >
                    January 2025 - May 2025
                  </p>
                  <button
                    onClick={() => toggleDropdown('ieee')}
                    className="text-white hover:text-white/80 transition-colors duration-200 p-1 cursor-pointer"
                  >
                    <svg
                      className={`w-4 h-4 transform transition-transform duration-300 ${openDropdowns.ieee ? 'rotate-180' : 'rotate-0'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Dropdown Content */}
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openDropdowns.ieee ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 pb-4 border-t border-white/10">
                <p 
                  className="text-left text-xs sm:text-sm md:text-base lg:text-base xl:text-base text-white opacity-80 mt-3"
                  style={{
                    fontFamily: "'IM Fell Great Primer', serif"
                  }}
                >
                  Developed a chatbot that helps Northwestern students quickly query and summarize course and professor reviews.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

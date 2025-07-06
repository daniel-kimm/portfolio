"use client";

import { useState } from 'react';

export default function Home() {
  const [flippedPolaroid, setFlippedPolaroid] = useState<string | null>(null);

  const handlePolaroidClick = (polaroidType: string) => {
    if (polaroidType === 'home') {
      setFlippedPolaroid(null);
    } else {
      setFlippedPolaroid(flippedPolaroid === polaroidType ? null : polaroidType);
    }
  };

  const polaroidContent = {
    about: {
      title: "about me",
      content: "Hi! I'm from Cary, North Carolina and I'm currently studying Computer Science and Art at Northwestern University. I'm passionate about blending my technical skills in software engineering with creativity and artistic design. In my free time, I love painting, playing the guitar, and beating my family in tennis."
    },
    work: {
      title: "work experience",
      content: "I've worked on various projects ranging from web development to mobile applications. My experience includes internships at tech companies where I've contributed to full-stack development, UI/UX design, and project management."
    },
    projects: {
      title: "projects",
      content: "I've built several exciting projects including web applications, mobile apps, and creative coding experiments. Each project has taught me something new about development, design, and problem-solving."
    },
    art: {
      title: "art",
      content: "Photography and digital art are my creative outlets. I enjoy capturing moments and creating visual stories through different mediums. My work often explores themes of identity, technology, and human connection."
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/IMG_8664.jpg')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Main Content - Moved down */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[40vh] text-center px-4 pt-16">
        <h1 
          className="mb-6 responsive-title"
          style={{
            fontFamily: "'IM Fell Great Primer', serif",
            fontSize: "72px",
            fontWeight: 400,
            letterSpacing: "4px",
            lineHeight: "80px",
            color: "#ffffff"
          }}
        >
          Daniel Kim
        </h1>
        <p 
          className="responsive-subtitle"
          style={{
            fontFamily: "'Myfont', sans-serif",
            fontStyle: "italic",
            fontSize: "48px",
            fontWeight: 400,
            letterSpacing: "1px",
            lineHeight: "28px",
            color: "#ffffff"
          }}
        >
          Student at Northwestern University
        </p>
        
        {/* Social Icons */}
        <div className="flex space-x-6 mt-8">
          {/* GitHub Icon */}
          <a 
            href="https://github.com/dankim444" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="hover:scale-110 transition-transform duration-300"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          
          {/* LinkedIn Icon */}
          <a 
            href="https://www.linkedin.com/in/daniel-kimm/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className="hover:scale-110 transition-transform duration-300"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Polaroid Navigation - Responsive container */}
      <div className="polaroid-nav-container absolute bottom-40 left-1/2 transform -translate-x-1/2 z-10">
        <div className="polaroid-container relative flex items-center justify-center">
          {/* Home Polaroid */}
          <div 
            className="absolute cursor-pointer transition-all duration-700 hover:scale-105 hover:shadow-3xl"
            style={{
              transform: flippedPolaroid === 'home' ? 
                "rotate(0deg) translateX(0px) translateY(-140px) scale(2.8)" : 
                "rotate(-8deg) translateX(-350px) translateY(-20px)",
              transformOrigin: "center center",
              zIndex: flippedPolaroid === 'home' ? 100 : 5,
              perspective: "1000px"
            }}
            onClick={() => handlePolaroidClick('home')}
            onMouseEnter={(e) => {
              if (!flippedPolaroid) e.currentTarget.style.zIndex = '50';
            }}
            onMouseLeave={(e) => {
              if (!flippedPolaroid) e.currentTarget.style.zIndex = '5';
            }}
          >
            <div 
              className="w-64 h-80 bg-white shadow-2xl"
              style={{
                transformStyle: "preserve-3d",
                transform: flippedPolaroid === 'home' ? "rotateY(180deg)" : "rotateY(0deg)",
                transition: "transform 0.7s ease-in-out"
              }}
            >
              {/* Front of polaroid */}
              <div 
                className="absolute inset-0 w-full h-full bg-white p-5 pb-16"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="w-full h-52 bg-gradient-to-br from-orange-200 to-orange-400 overflow-hidden">
                  <img 
                    src="/IMG_9278.JPG" 
                    alt="Home" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-5 left-0 right-0 text-center">
                  <p style={{
                    fontFamily: "'Myfont', sans-serif",
                    fontSize: "40px",
                    fontWeight: 600,
                    color: "#333",
                    letterSpacing: "0.5px"
                  }}>
                    home
                  </p>
                </div>
              </div>
              
              {/* Back of polaroid */}
              <div 
                className="absolute inset-0 w-full h-full bg-white p-5 flex flex-col justify-center items-center text-center"
                style={{ 
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)"
                }}
              >
                <p style={{
                  fontFamily: "'Myfont', sans-serif",
                  fontSize: "16px",
                  color: "#666",
                  lineHeight: "1.5"
                }}>
                  Click any polaroid to explore my portfolio
                </p>
              </div>
            </div>
          </div>

          {/* About Me Polaroid */}
          <div 
            className="absolute cursor-pointer transition-all duration-700 hover:scale-105 hover:shadow-3xl"
            style={{
              transform: flippedPolaroid === 'about' ? 
                "rotate(0deg) translateX(0px) translateY(-140px) scale(2.8)" : 
                "rotate(12deg) translateX(-175px) translateY(15px)",
              transformOrigin: "center center",
              zIndex: flippedPolaroid === 'about' ? 100 : 4,
              perspective: "1000px"
            }}
            onClick={() => handlePolaroidClick('about')}
            onMouseEnter={(e) => {
              if (!flippedPolaroid) e.currentTarget.style.zIndex = '50';
            }}
            onMouseLeave={(e) => {
              if (!flippedPolaroid) e.currentTarget.style.zIndex = '4';
            }}
          >
            <div 
              className="w-64 h-80 bg-white shadow-2xl"
              style={{
                transformStyle: "preserve-3d",
                transform: flippedPolaroid === 'about' ? "rotateY(180deg)" : "rotateY(0deg)",
                transition: "transform 0.7s ease-in-out"
              }}
            >
              {/* Front of polaroid */}
              <div 
                className="absolute inset-0 w-full h-full bg-white p-5 pb-16"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="w-full h-52 bg-gradient-to-br from-blue-200 to-blue-400 overflow-hidden">
                  <img 
                    src="/IMG_8567.jpg" 
                    alt="About Me" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-5 left-0 right-0 text-center">
                  <p style={{
                    fontFamily: "'Myfont', sans-serif",
                    fontSize: "40px",
                    fontWeight: 600,
                    color: "#333",
                    letterSpacing: "0.5px"
                  }}>
                    about me
                  </p>
                </div>
              </div>
              
              {/* Back of polaroid */}
              <div 
                className="absolute inset-0 w-full h-full bg-white p-5 flex flex-col justify-start items-center text-center"
                style={{ 
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)"
                }}
              >
                <h3 style={{
                  fontFamily: "'Myfont', sans-serif",
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#333",
                  marginBottom: "10px",
                  marginTop: "20px"
                }}>
                  {polaroidContent.about.title}
                </h3>
                <p style={{
                  fontFamily: "'Myfont', sans-serif",
                  fontSize: "12px",
                  color: "#666",
                  lineHeight: "1.3",
                  marginBottom: "15px"
                }}>
                  {polaroidContent.about.content}
                </p>
                
                {/* Email line */}
                <div className="flex items-center space-x-2 mb-3">
                  <svg 
                    width="10" 
                    height="10" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#666" 
                    strokeWidth="2"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span style={{
                    fontFamily: "'Myfont', sans-serif",
                    fontSize: "12px",
                    color: "#666"
                  }}>
                    daniel<span style={{ fontSize: "12px" }}>-</span>kim<span style={{ fontSize: "8px" }}>@</span>u.northwestern.edu
                  </span>
                </div>
                
                {/* Three images in a row */}
                <div className="flex space-x-2 mt-auto mb-4">
                  <img 
                    src="/about_me/IMG_3783.jpg" 
                    alt="About me 1" 
                    className="w-16 h-16 object-cover rounded shadow-sm"
                  />
                  <img 
                    src="/about_me/IMG_7846.jpg" 
                    alt="About me 2" 
                    className="w-16 h-16 object-cover rounded shadow-sm"
                  />
                  <img 
                    src="/about_me/IMG_8222.jpg" 
                    alt="About me 3" 
                    className="w-16 h-16 object-cover rounded shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Work Polaroid */}
          <div 
            className="absolute cursor-pointer transition-all duration-700 hover:scale-105 hover:shadow-3xl"
            style={{
              transform: flippedPolaroid === 'work' ? 
                "rotate(0deg) translateX(0px) translateY(-140px) scale(2.8)" : 
                "rotate(-3deg) translateX(0px) translateY(-10px)",
              transformOrigin: "center center",
              zIndex: flippedPolaroid === 'work' ? 100 : 3,
              perspective: "1000px"
            }}
            onClick={() => handlePolaroidClick('work')}
            onMouseEnter={(e) => {
              if (!flippedPolaroid) e.currentTarget.style.zIndex = '50';
            }}
            onMouseLeave={(e) => {
              if (!flippedPolaroid) e.currentTarget.style.zIndex = '3';
            }}
          >
            <div 
              className="w-64 h-80 bg-white shadow-2xl"
              style={{
                transformStyle: "preserve-3d",
                transform: flippedPolaroid === 'work' ? "rotateY(180deg)" : "rotateY(0deg)",
                transition: "transform 0.7s ease-in-out"
              }}
            >
              {/* Front of polaroid */}
              <div 
                className="absolute inset-0 w-full h-full bg-white p-5 pb-16"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="w-full h-52 bg-gradient-to-br from-green-200 to-green-400 overflow-hidden">
                  <img 
                    src="/IMG_0070.JPG" 
                    alt="Work" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-5 left-0 right-0 text-center">
                  <p style={{
                    fontFamily: "'Myfont', sans-serif",
                    fontSize: "40px",
                    fontWeight: 600,
                    color: "#333",
                    letterSpacing: "0.5px"
                  }}>
                    work
                  </p>
                </div>
              </div>
              
              {/* Back of polaroid */}
              <div 
                className="absolute inset-0 w-full h-full bg-white p-4 flex flex-col justify-start items-start text-left overflow-y-auto"
                style={{ 
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)"
                }}
              >
                {/* Handwritten work title and description */}
                <div className="w-full text-center mb-4">
                  <h2 style={{
                    fontFamily: "'Myfont', sans-serif",
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#333",
                    marginBottom: "8px",
                  }}>
                    work
                  </h2>
                  <p style={{
                    fontFamily: "'Myfont', serif",
                    fontSize: "12px",
                    color: "#333",
                    lineHeight: "1",
                    maxWidth: "200px",
                    margin: "0 auto"
                  }}>
                    Here&apos;s a comprehensive look at my professional experience and campus involvement!
                  </p>
                </div>
                
                <h3 style={{
                  fontFamily: "'Myfont', sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#333",
                  marginBottom: "15px",
                  alignSelf: "center"
                }}>
                  work experience
                </h3>
                
                {/* Work Experience Timeline */}
                <div className="w-full mb-2 relative">
                  {/* Vertical line connecting work experience dots only */}
                  <div className="absolute left-[2px] top-2 w-0.5 bg-gray-300 z-0" style={{
                    height: 'calc(100% - 30px)' // Shorter line for work experience
                  }}></div>
                  
                  {/* Osteoid Inc */}
                  <div className="flex items-start mb-3 relative z-10">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <img 
                      src="/logos/osteoid.jpeg" 
                      alt="Osteoid Inc. logo" 
                      className="w-4 h-4 object-contain mr-3 flex-shrink-0 mt-1"
                    />
                    <div className="flex-1 min-w-0 flex items-start justify-between">
                      <div className="flex-1 min-w-0 mt-0.5">
                        <h4 style={{
                          fontFamily: "'Frank Ruhl Libre', serif",
                          fontSize: "6px",
                          fontWeight: 600,
                          color: "#333",
                          marginBottom: "2px"
                        }}>
                          Software Engineer Intern
                        </h4>
                        <p style={{
                          fontFamily: "'Frank Ruhl Libre', serif",
                          fontSize: "6px",
                          color: "#666",
                          marginBottom: "0"
                        }}>
                          Osteoid Inc.
                        </p>
                      </div>
                      <p style={{
                        fontFamily: "'Frank Ruhl Libre', serif",
                        fontSize: "5px",
                        color: "#999",
                        flexShrink: 0,
                        marginLeft: "8px",
                        marginTop: "4px"
                      }}>
                        June 2025 - Present
                      </p>
                    </div>
                  </div>
                  
                  {/* Elytra Robotics */}
                  <div className="flex items-start mb-3 relative z-10">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <img 
                      src="/logos/elytra.jpeg" 
                      alt="Elytra Robotics logo" 
                      className="w-4 h-4 object-contain mr-3 flex-shrink-0 mt-1"
                    />
                    <div className="flex-1 min-w-0 flex items-start justify-between">
                      <div className="flex-1 min-w-0 mt-0.5">
                        <h4 style={{
                          fontFamily: "'Frank Ruhl Libre', serif",
                          fontSize: "6px",
                          fontWeight: 600,
                          color: "#333",
                          marginBottom: "2px"
                        }}>
                          Machine Learning Intern
                        </h4>
                        <p style={{
                          fontFamily: "'Frank Ruhl Libre', serif",
                          fontSize: "6px",
                          color: "#666",
                          marginBottom: "0"
                        }}>
                          Elytra Robotics
                        </p>
                      </div>
                      <p style={{
                        fontFamily: "'Frank Ruhl Libre', serif",
                        fontSize: "5px",
                        color: "#999",
                        flexShrink: 0,
                        marginLeft: "8px",
                        marginTop: "4px"
                      }}>
                        March 2025 - June 2025
                      </p>
                    </div>
                  </div>
                  
                  {/* Northwestern University */}
                  <div className="flex items-start mb-3 relative z-10">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <img 
                      src="/logos/kellogg.jpeg" 
                      alt="Northwestern University Kellogg logo" 
                      className="w-4 h-4 object-contain mr-3 flex-shrink-0 mt-1"
                    />
                    <div className="flex-1 min-w-0 flex items-start justify-between">
                      <div className="flex-1 min-w-0 mt-0.5">
                        <h4 style={{
                          fontFamily: "'Frank Ruhl Libre', serif",
                          fontSize: "6px",
                          fontWeight: 600,
                          color: "#333",
                          marginBottom: "2px"
                        }}>
                          IT Public Computing Technician
                        </h4>
                        <p style={{
                          fontFamily: "'Frank Ruhl Libre', serif",
                          fontSize: "6px",
                          color: "#666",
                          marginBottom: "0"
                        }}>
                          Northwestern University Kellogg Information Systems
                        </p>
                      </div>
                      <p style={{
                        fontFamily: "'Frank Ruhl Libre', serif",
                        fontSize: "5px",
                        color: "#999",
                        flexShrink: 0,
                        marginLeft: "8px",
                        marginTop: "4px"
                      }}>
                        October 2024 - Present
                      </p>
                    </div>
                  </div>
                  
                  {/* Square One */}
                  <div className="flex items-start mb-3 relative z-10">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <img 
                      src="/logos/squareone.jpeg" 
                      alt="Square One logo" 
                      className="w-4 h-4 object-contain mr-3 flex-shrink-0 mt-1"
                    />
                    <div className="flex-1 min-w-0 flex items-start justify-between">
                      <div className="flex-1 min-w-0 mt-0.5">
                        <h4 style={{
                          fontFamily: "'Frank Ruhl Libre', serif",
                          fontSize: "6px",
                          fontWeight: 600,
                          color: "#333",
                          marginBottom: "2px"
                        }}>
                          Software Engineer Intern
                        </h4>
                        <p style={{
                          fontFamily: "'Frank Ruhl Libre', serif",
                          fontSize: "6px",
                          color: "#666",
                          marginBottom: "0"
                        }}>
                          Square One
                        </p>
                      </div>
                      <p style={{
                        fontFamily: "'Frank Ruhl Libre', serif",
                        fontSize: "5px",
                        color: "#999",
                        flexShrink: 0,
                        marginLeft: "8px",
                        marginTop: "4px"
                      }}>
                        October 2024 - March 2025
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Campus Involvement Section */}
                <h3 style={{
                  fontFamily: "'Myfont', sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#333",
                  marginBottom: "10px",
                  alignSelf: "center"
                }}>
                  campus involvement
                </h3>
                
                {/* Campus Involvement Timeline */}
                <div className="w-full relative">
                  {/* Vertical line connecting campus involvement dots only */}
                  <div className="absolute left-[2px] top-2 w-0.5 bg-gray-300 z-0" style={{
                    height: 'calc(100% - 40px)' // Shorter line for campus involvement
                  }}></div>

                  {/* Mayfest Productions */}
                  <div className="flex items-start mb-2 relative z-10">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <img 
                      src="/logos/mayfest.jpeg" 
                      alt="Mayfest Productions logo" 
                      className="w-4 h-4 object-contain mr-3 flex-shrink-0 mt-1"
                    />
                    <div className="flex-1 min-w-0 flex items-start justify-between">
                      <div className="flex-1 min-w-0 mt-0.5">
                        <h4 style={{
                          fontFamily: "'Frank Ruhl Libre', serif",
                          fontSize: "6px",
                          fontWeight: 600,
                          color: "#333",
                          marginBottom: "2px"
                        }}>
                          General Board Member
                        </h4>
                        <p style={{
                          fontFamily: "'Frank Ruhl Libre', serif",
                          fontSize: "6px",
                          color: "#666",
                          marginBottom: "0"
                        }}>
                          Mayfest Productions
                        </p>
                      </div>
                      <p style={{
                        fontFamily: "'Frank Ruhl Libre', serif",
                        fontSize: "5px",
                        color: "#999",
                        flexShrink: 0,
                        marginLeft: "8px",
                        marginTop: "4px"
                      }}>
                        October 2024 - Present
                      </p>
                    </div>
                  </div>
                  
                  {/* IEEE */}
                  <div className="flex items-start mb-3 relative z-10">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <img 
                      src="/logos/ieee.jpeg" 
                      alt="IEEE logo" 
                      className="w-4 h-4 object-contain mr-3 flex-shrink-0 mt-1"
                    />
                    <div className="flex-1 min-w-0 flex items-start justify-between">
                      <div className="flex-1 min-w-0 mt-0.5">
                        <h4 style={{
                          fontFamily: "'Frank Ruhl Libre', serif",
                          fontSize: "6px",
                          fontWeight: 600,
                          color: "#333",
                          marginBottom: "2px"
                        }}>
                          Software Engineer
                        </h4>
                        <p style={{
                          fontFamily: "'Frank Ruhl Libre', serif",
                          fontSize: "6px",
                          color: "#666",
                          marginBottom: "0"
                        }}>
                          Institute of Electrical and Electronics Engineers (IEEE)
                        </p>
                      </div>
                      <p style={{
                        fontFamily: "'Frank Ruhl Libre', serif",
                        fontSize: "5px",
                        color: "#999",
                        flexShrink: 0,
                        marginLeft: "8px",
                        marginTop: "4px"
                      }}>
                        January 2025 - May 2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projects Polaroid */}
          <div 
            className="absolute cursor-pointer transition-all duration-700 hover:scale-105 hover:shadow-3xl"
            style={{
              transform: flippedPolaroid === 'projects' ? 
                "rotate(0deg) translateX(0px) translateY(-140px) scale(2.8)" : 
                "rotate(7deg) translateX(175px) translateY(20px)",
              transformOrigin: "center center",
              zIndex: flippedPolaroid === 'projects' ? 100 : 2,
              perspective: "1000px"
            }}
            onClick={() => handlePolaroidClick('projects')}
            onMouseEnter={(e) => {
              if (!flippedPolaroid) e.currentTarget.style.zIndex = '50';
            }}
            onMouseLeave={(e) => {
              if (!flippedPolaroid) e.currentTarget.style.zIndex = '2';
            }}
          >
            <div 
              className="w-64 h-80 bg-white shadow-2xl"
              style={{
                transformStyle: "preserve-3d",
                transform: flippedPolaroid === 'projects' ? "rotateY(180deg)" : "rotateY(0deg)",
                transition: "transform 0.7s ease-in-out"
              }}
            >
              {/* Front of polaroid */}
              <div 
                className="absolute inset-0 w-full h-full bg-white p-5 pb-16"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="w-full h-52 bg-gradient-to-br from-purple-200 to-purple-400 overflow-hidden">
                  <img 
                    src="/alto.png" 
                    alt="Projects" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-5 left-0 right-0 text-center">
                  <p style={{
                    fontFamily: "'Myfont', sans-serif",
                    fontSize: "40px",
                    fontWeight: 600,
                    color: "#333",
                    letterSpacing: "0.5px"
                  }}>
                    projects
                  </p>
                </div>
              </div>
              
              {/* Back of polaroid */}
              <div 
                className="absolute inset-0 w-full h-full bg-white p-4 flex flex-col justify-start items-center text-center overflow-y-auto"
                style={{ 
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)"
                }}
              >
                <h3 style={{
                  fontFamily: "'Myfont', sans-serif",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#333",
                  marginBottom: "4px",
                  marginTop: "8px"
                }}>
                  projects
                </h3>
                
                <p style={{
                  fontFamily: "'Myfont', sans-serif",
                  fontSize: "12px",
                  color: "#666",
                  lineHeight: "1.2",
                  marginBottom: "10px",
                  textAlign: "center",
                  maxWidth: "200px"
                }}>
                  Here&apos;s a collection of projects I&apos;ve worked on. Click on each for more information!
                </p>
                
                {/* Projects Grid - 2x2 layout */}
                <div className="grid grid-cols-2 gap-3 w-full max-w-[220px]">
                  {/* Project 1 */}
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-gray-200 rounded overflow-hidden mb-2 relative">
                      <img 
                        src="/alto.png" 
                        alt="Project 1" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center" style={{ display: 'none' }}>
                        <span style={{ fontSize: '24px' }}>📱</span>
                      </div>
                      {/* Date badge */}
                      <div className="absolute top-1 right-1 bg-black bg-opacity-75 text-white px-1 py-0.5 rounded" style={{
                        fontSize: "4px",
                        fontFamily: "'Frank Ruhl Libre', serif",
                        lineHeight: "1"
                      }}>
                        2025
                      </div>
                    </div>
                    <p style={{
                      fontFamily: "'Frank Ruhl Libre', serif",
                      fontSize: "6px",
                      color: "#333",
                      lineHeight: "1.2",
                      marginBottom: "4px",
                      textAlign: "center"
                    }}>
                      Alto: AI Voice Email Assistant
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      <span style={{
                        fontFamily: "'Frank Ruhl Libre', serif",
                        fontSize: "5px",
                        color: "#666",
                        backgroundColor: "#f0f0f0",
                        padding: "1px 4px",
                        borderRadius: "2px"
                      }}>React Native</span>
                      <span style={{
                        fontFamily: "'Frank Ruhl Libre', serif",
                        fontSize: "5px",
                        color: "#666",
                        backgroundColor: "#f0f0f0",
                        padding: "1px 4px",
                        borderRadius: "2px"
                      }}>Expo</span>
                      <span style={{
                        fontFamily: "'Frank Ruhl Libre', serif",
                        fontSize: "5px",
                        color: "#666",
                        backgroundColor: "#f0f0f0",
                        padding: "1px 4px",
                        borderRadius: "2px"
                      }}>TypeScript</span>
                    </div>
                  </div>

                  {/* Project 2 */}
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-gray-200 rounded overflow-hidden mb-2 relative">
                      <img 
                        src="/ctecsnu.png" 
                        alt="Project 2" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-300 flex items-center justify-center" style={{ display: 'none' }}>
                        <span style={{ fontSize: '24px' }}>🌐</span>
                      </div>
                      {/* Date badge */}
                      <div className="absolute top-1 right-1 bg-black bg-opacity-75 text-white px-1 py-0.5 rounded" style={{
                        fontSize: "4px",
                        fontFamily: "'Frank Ruhl Libre', serif",
                        lineHeight: "1"
                      }}>
                        2025
                      </div>
                    </div>
                    <p style={{
                      fontFamily: "'Frank Ruhl Libre', serif",
                      fontSize: "6px",
                      color: "#333",
                      lineHeight: "1.2",
                      marginBottom: "4px",
                      textAlign: "center"
                    }}>
                      ctecs.nu: NU Course Assistant
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      <span style={{
                        fontFamily: "'Frank Ruhl Libre', serif",
                        fontSize: "5px",
                        color: "#666",
                        backgroundColor: "#f0f0f0",
                        padding: "1px 4px",
                        borderRadius: "2px"
                      }}>JavaScript</span>
                      <span style={{
                        fontFamily: "'Frank Ruhl Libre', serif",
                        fontSize: "5px",
                        color: "#666",
                        backgroundColor: "#f0f0f0",
                        padding: "1px 4px",
                        borderRadius: "2px"
                      }}>AWS</span>
                      <span style={{
                        fontFamily: "'Frank Ruhl Libre', serif",
                        fontSize: "5px",
                        color: "#666",
                        backgroundColor: "#f0f0f0",
                        padding: "1px 4px",
                        borderRadius: "2px"
                      }}>RAG</span>
                    </div>
                  </div>

                  {/* Project 3 */}
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-gray-200 rounded overflow-hidden mb-2 relative">
                      <img 
                        src="/nupuritytest.png" 
                        alt="Project 3" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-300 flex items-center justify-center" style={{ display: 'none' }}>
                        <span style={{ fontSize: '24px' }}>🤖</span>
                      </div>
                      {/* Date badge */}
                      <div className="absolute top-1 right-1 bg-black bg-opacity-75 text-white px-1 py-0.5 rounded" style={{
                        fontSize: "4px",
                        fontFamily: "'Frank Ruhl Libre', serif",
                        lineHeight: "1"
                      }}>
                        2025
                      </div>
                    </div>
                    <p style={{
                      fontFamily: "'Frank Ruhl Libre', serif",
                      fontSize: "6px",
                      color: "#333",
                      lineHeight: "1.2",
                      marginBottom: "4px",
                      textAlign: "center"
                    }}>
                      Northwestern Purity Test
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      <span style={{
                        fontFamily: "'Frank Ruhl Libre', serif",
                        fontSize: "5px",
                        color: "#666",
                        backgroundColor: "#f0f0f0",
                        padding: "1px 4px",
                        borderRadius: "2px"
                      }}>React</span>
                      <span style={{
                        fontFamily: "'Frank Ruhl Libre', serif",
                        fontSize: "5px",
                        color: "#666",
                        backgroundColor: "#f0f0f0",
                        padding: "1px 4px",
                        borderRadius: "2px"
                      }}>Vercel</span>
                    </div>
                  </div>

                  {/* Project 4 */}
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-gray-200 rounded overflow-hidden mb-2 relative">
                      <img 
                        src="/IMG_6734.png" 
                        alt="Project 4" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) {
                            fallback.style.display = 'flex';
                          }
                        }}
                      />
                      <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-300 flex items-center justify-center" style={{ display: 'none' }}>
                        <span style={{ fontSize: '24px' }}>📊</span>
                      </div>
                      {/* Date badge */}
                      <div className="absolute top-1 right-1 bg-black bg-opacity-75 text-white px-1 py-0.5 rounded" style={{
                        fontSize: "4px",
                        fontFamily: "'Frank Ruhl Libre', serif",
                        lineHeight: "1"
                      }}>
                        2024
                      </div>
                    </div>
                    <p style={{
                      fontFamily: "'Frank Ruhl Libre', serif",
                      fontSize: "6px",
                      color: "#333",
                      lineHeight: "1.2",
                      marginBottom: "4px",
                      textAlign: "center"
                    }}>
                      Square One Mobile App
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      <span style={{
                        fontFamily: "'Frank Ruhl Libre', serif",
                        fontSize: "5px",
                        color: "#666",
                        backgroundColor: "#f0f0f0",
                        padding: "1px 4px",
                        borderRadius: "2px"
                      }}>React Native</span>
                      <span style={{
                        fontFamily: "'Frank Ruhl Libre', serif",
                        fontSize: "5px",
                        color: "#666",
                        backgroundColor: "#f0f0f0",
                        padding: "1px 4px",
                        borderRadius: "2px"
                      }}>Firebase</span>
                      <span style={{
                        fontFamily: "'Frank Ruhl Libre', serif",
                        fontSize: "5px",
                        color: "#666",
                        backgroundColor: "#f0f0f0",
                        padding: "1px 4px",
                        borderRadius: "2px"
                      }}>Expo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Art Polaroid */}
          <div 
            className="absolute cursor-pointer transition-all duration-700 hover:scale-105 hover:shadow-3xl"
            style={{
              transform: flippedPolaroid === 'art' ? 
                "rotate(0deg) translateX(0px) translateY(-140px) scale(2.8)" : 
                "rotate(-12deg) translateX(350px) translateY(-5px)",
              transformOrigin: "center center",
              zIndex: flippedPolaroid === 'art' ? 100 : 1,
              perspective: "1000px"
            }}
            onClick={() => handlePolaroidClick('art')}
            onMouseEnter={(e) => {
              if (!flippedPolaroid) e.currentTarget.style.zIndex = '50';
            }}
            onMouseLeave={(e) => {
              if (!flippedPolaroid) e.currentTarget.style.zIndex = '1';
            }}
          >
            <div 
              className="w-64 h-80 bg-white shadow-2xl"
              style={{
                transformStyle: "preserve-3d",
                transform: flippedPolaroid === 'art' ? "rotateY(180deg)" : "rotateY(0deg)",
                transition: "transform 0.7s ease-in-out"
              }}
            >
              {/* Front of polaroid */}
              <div 
                className="absolute inset-0 w-full h-full bg-white p-5 pb-16"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="w-full h-52 bg-gradient-to-br from-pink-200 to-pink-400 overflow-hidden">
                  <img 
                    src="/IMG_5040.jpg" 
                    alt="Art" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-5 left-0 right-0 text-center">
                  <p style={{
                    fontFamily: "'Myfont', sans-serif",
                    fontSize: "40px",
                    fontWeight: 600,
                    color: "#333",
                    letterSpacing: "0.5px"
                  }}>
                    art
                  </p>
                </div>
              </div>
              
              {/* Back of polaroid */}
              <div 
                className="absolute inset-0 w-full h-full bg-white p-5 flex flex-col justify-center items-center text-center"
                style={{ 
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)"
                }}
              >
                <h3 style={{
                  fontFamily: "'Myfont', sans-serif",
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#333",
                  marginBottom: "15px"
                }}>
                  {polaroidContent.art.title}
                </h3>
                <p style={{
                  fontFamily: "'Myfont', sans-serif",
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: "1.4"
                }}>
                  {polaroidContent.art.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive CSS */}
      <style jsx>{`
        /* Desktop styles (maintain current appearance) */
        @media (min-width: 1024px) {
          .polaroid-container {
            width: 1300px;
            height: 24rem;
          }
        }

        /* Tablet styles */
        @media (max-width: 1023px) and (min-width: 768px) {
          .polaroid-nav-container {
            position: relative !important;
            bottom: auto !important;
            left: auto !important;
            transform: none !important;
            margin-top: 2rem;
          }
          
          .polaroid-container {
            width: 100% !important;
            max-width: 600px;
            height: auto !important;
            flex-direction: column !important;
            gap: 1rem;
          }
          
          .polaroid-container > div {
            position: relative !important;
            transform: none !important;
            margin: 0 !important;
          }
          
          .polaroid-container > div:hover {
            transform: scale(1.05) !important;
          }
          
          .responsive-title {
            font-size: 48px !important;
            line-height: 56px !important;
            letter-spacing: 2px !important;
          }
          
          .responsive-subtitle {
            font-size: 32px !important;
            line-height: 36px !important;
          }
        }

        /* Mobile styles */
        @media (max-width: 767px) {
          .polaroid-nav-container {
            position: relative !important;
            bottom: auto !important;
            left: auto !important;
            transform: none !important;
            margin-top: 2rem;
            padding: 0 1rem;
          }
          
          .polaroid-container {
            width: 100% !important;
            max-width: 320px;
            height: auto !important;
            flex-direction: column !important;
            gap: 1rem;
          }
          
          .polaroid-container > div {
            position: relative !important;
            transform: none !important;
            margin: 0 !important;
            z-index: auto !important;
          }
          
          .polaroid-container > div:hover {
            z-index: 50 !important;
            transform: scale(1.05) !important;
          }
          
          /* Override flipped polaroid styles for mobile */
          .polaroid-container > div[style*="scale(2.8)"] {
            transform: scale(1.8) !important;
          }
          
          .responsive-title {
            font-size: 36px !important;
            line-height: 42px !important;
            letter-spacing: 1px !important;
          }
          
          .responsive-subtitle {
            font-size: 24px !important;
            line-height: 28px !important;
          }
        }

        /* Small mobile styles */
        @media (max-width: 480px) {
          .responsive-title {
            font-size: 28px !important;
            line-height: 34px !important;
          }
          
          .responsive-subtitle {
            font-size: 18px !important;
            line-height: 22px !important;
          }
          
          .polaroid-container {
            max-width: 280px;
          }
          
          /* Smaller flipped polaroid scale for very small screens */
          .polaroid-container > div[style*="scale(2.8)"] {
            transform: scale(1.5) !important;
          }
        }
      `}</style>
    </div>
  );
}

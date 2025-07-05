"use client";

export default function Home() {
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
          className="mb-6"
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
            href="https://github.com/daniel-kimm" 
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

      {/* Polaroid Navigation - Spread Out Even More */}
      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 z-10">
        <div className="relative w-[1300px] h-96 flex items-center justify-center">
          {/* Home Polaroid */}
          <div 
            className="absolute w-64 h-80 bg-white shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-3xl"
            style={{
              transform: "rotate(-8deg) translateX(-350px) translateY(-20px)",
              transformOrigin: "center center",
              zIndex: 5
            }}
            onClick={() => window.location.href = '#home'}
            onMouseEnter={(e) => e.currentTarget.style.zIndex = '50'}
            onMouseLeave={(e) => e.currentTarget.style.zIndex = '5'}
          >
            <div className="w-full h-full bg-white p-5 pb-16">
              <div className="w-full h-52 bg-gradient-to-br from-orange-200 to-orange-400 overflow-hidden">
                <img 
                  src="/IMG_9278.JPG" 
                  alt="Home" 
                  className="w-full h-full object-cover"
                />
              </div>
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

          {/* About Me Polaroid */}
          <div 
            className="absolute w-64 h-80 bg-white shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-3xl"
            style={{
              transform: "rotate(12deg) translateX(-175px) translateY(15px)",
              transformOrigin: "center center",
              zIndex: 4
            }}
            onClick={() => window.location.href = '#about'}
            onMouseEnter={(e) => e.currentTarget.style.zIndex = '50'}
            onMouseLeave={(e) => e.currentTarget.style.zIndex = '4'}
          >
            <div className="w-full h-full bg-white p-5 pb-16">
              <div className="w-full h-52 bg-gradient-to-br from-blue-200 to-blue-400 overflow-hidden">
                <img 
                  src="/IMG_8567.jpg" 
                  alt="About Me" 
                  className="w-full h-full object-cover"
                />
              </div>
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

          {/* Work Polaroid */}
          <div 
            className="absolute w-64 h-80 bg-white shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-3xl"
            style={{
              transform: "rotate(-3deg) translateX(0px) translateY(-10px)",
              transformOrigin: "center center",
              zIndex: 3
            }}
            onClick={() => window.location.href = '#work'}
            onMouseEnter={(e) => e.currentTarget.style.zIndex = '50'}
            onMouseLeave={(e) => e.currentTarget.style.zIndex = '3'}
          >
            <div className="w-full h-full bg-white p-5 pb-16">
              <div className="w-full h-52 bg-gradient-to-br from-green-200 to-green-400 overflow-hidden">
                <img 
                  src="/IMG_0070.JPG" 
                  alt="Work" 
                  className="w-full h-full object-cover"
                />
              </div>
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

          {/* Projects Polaroid */}
          <div 
            className="absolute w-64 h-80 bg-white shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-3xl"
            style={{
              transform: "rotate(7deg) translateX(175px) translateY(20px)",
              transformOrigin: "center center",
              zIndex: 2
            }}
            onClick={() => window.location.href = '#projects'}
            onMouseEnter={(e) => e.currentTarget.style.zIndex = '50'}
            onMouseLeave={(e) => e.currentTarget.style.zIndex = '2'}
          >
            <div className="w-full h-full bg-white p-5 pb-16">
              <div className="w-full h-52 bg-gradient-to-br from-purple-200 to-purple-400 overflow-hidden">
                <img 
                  src="/alto.png" 
                  alt="Projects" 
                  className="w-full h-full object-cover"
                />
              </div>
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

          {/* Art Polaroid */}
          <div 
            className="absolute w-64 h-80 bg-white shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-3xl"
            style={{
              transform: "rotate(-12deg) translateX(350px) translateY(-5px)",
              transformOrigin: "center center",
              zIndex: 1
            }}
            onClick={() => window.location.href = '#art'}
            onMouseEnter={(e) => e.currentTarget.style.zIndex = '50'}
            onMouseLeave={(e) => e.currentTarget.style.zIndex = '1'}
          >
            <div className="w-full h-full bg-white p-5 pb-16">
              <div className="w-full h-52 bg-gradient-to-br from-pink-200 to-pink-400 overflow-hidden">
                <img 
                  src="/IMG_5040.jpg" 
                  alt="Art" 
                  className="w-full h-full object-cover"
                />
              </div>
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
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export default function ArtPage() {
  return (
    <div className="flex flex-col text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-20 sm:pt-24 md:pt-28 lg:pt-12 pb-16 w-full">
      <h1 
        className="mb-6 sm:mb-8 text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold italic mt-16 sm:mt-20 md:mt-24 lg:mt-16"
        style={{
          fontFamily: "'IM Fell Great Primer', serif"
        }}
      >
        art portfolio
      </h1>
      
      <p 
        className="mb-6 sm:mb-8 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-6 sm:leading-7 md:leading-8 lg:leading-9 italic mx-auto"
        style={{
          fontFamily: "'IM Fell Great Primer', serif"
        }}
      >
        check out some of the art i&apos;ve created over the years!
      </p>
      
      {/* Notion Embed */}
      <div 
        className="notion-embed-container bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4 mx-auto"
        style={{
          width: '100%',
          maxWidth: '1200px',
          height: '800px',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <iframe
          src="https://v2-embednotion.com/2287174313a48091b380d24b3197a7bd"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '6px',
            position: 'absolute',
            top: '0',
            left: '0'
          }}
          title="Art Portfolio"
        />
      </div>
    </div>
  );
}

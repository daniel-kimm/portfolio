'use client';

import React from 'react';
import ArtGrid from './ArtGrid';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/motion-primitives/accordion';

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
        some of the art i&apos;ve created over the years!
      </p>
      
      {/* Art Grid */}
      <div className="w-full max-w-6xl mx-auto">
        <ArtGrid />
      </div>

      {/* Featured & Awards Accordion */}
      <div className="w-full max-w-4xl mx-auto mt-16 mb-48 bg-white p-6 sm:p-6 rounded-xl">
        <Accordion 
          className="flex w-full flex-col divide-y divide-neutral-200"
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <AccordionItem value="featured">
            <AccordionTrigger className="w-full py-4 text-left text-neutral-800 flex items-center justify-between group">
              <span 
                className="text-xl sm:text-2xl font-semibold italic"
                style={{ fontFamily: "'IM Fell Great Primer', serif" }}
              >
                Featured
              </span>
              <svg 
                className="w-5 h-5 text-neutral-400 group-data-[expanded]:rotate-180 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </AccordionTrigger>
            <AccordionContent className="overflow-hidden">
              <div className="pb-4 text-left text-md sm:text-lg">
                <ul className="text-neutral-700 space-y-2" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
                  <li>• East Carolina University, Wellington B. Gray Gallery</li>
                  <li>• Artsplosure Arts Festival</li>
                  <li>• NC Governor&apos;s School East</li>
                  <li>• <a href="https://nasao.org/news/509796/NASAOs-Youth-Aviation-Art-Contest---U.S.-Winners-Announced.htm" target="_blank" rel="noopener noreferrer" className="text-neutral-800 underline hover:text-neutral-600">NASAO&apos;s Youth Aviation Art Contest</a></li>
                  <li>• <a href="https://www.ncdot.gov/news/press-releases/Pages/2020/2020-05-28-avaition-art-national-winners.aspx" target="_blank" rel="noopener noreferrer" className="text-neutral-800 underline hover:text-neutral-600">NC Department of Transportation</a></li>
                  <li>• <a href="https://stateaviationjournal.com/index.php/state-news/north-carolina/north-carolina-announces-winners-of-2020-aviation-art-contest" target="_blank" rel="noopener noreferrer" className="text-neutral-800 underline hover:text-neutral-600">State Aviation Journal</a></li>
                  <li>• <a href="https://www.instagram.com/p/DNGEz6BMOyd/" target="_blank" rel="noopener noreferrer" className="text-neutral-800 underline hover:text-neutral-600">ACLU NC</a></li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="awards">
            <AccordionTrigger className="w-full py-4 text-left text-neutral-800 flex items-center justify-between group">
              <span 
                className="text-xl sm:text-2xl font-semibold italic"
                style={{ fontFamily: "'IM Fell Great Primer', serif" }}
              >
                Awards
              </span>
              <svg 
                className="w-5 h-5 text-neutral-400 group-data-[expanded]:rotate-180 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </AccordionTrigger>
            <AccordionContent className="overflow-hidden">
              <div className="pb-4 text-left text-md sm:text-lg">
                <ul className="text-neutral-600 space-y-4" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
                  <li>
                    <span className="text-neutral-800 font-medium">• Congressional Art Competition</span>
                    <ul className="ml-4 mt-1 space-y-1 text-neutral-600">
                      <li>- 2023: Honorable Mention</li>
                    </ul>
                  </li>
                  <li>
                    <span className="text-neutral-800 font-medium">• Celebrating Art Contest</span>
                    <ul className="ml-4 mt-1 space-y-1 text-neutral-600">
                      <li>- 2023 Spring: High Merit Award</li>
                      <li>- 2021 Fall: High Merit Award</li>
                    </ul>
                  </li>
                  <li>
                    <span className="text-neutral-800 font-medium">• Art Show International Gallery/Teravarna</span>
                    <ul className="ml-4 mt-1 space-y-1 text-neutral-600">
                      <li>- 2022 3rd Still Life Competition: Talent Prize</li>
                      <li>- 2022 4th Portrait Competition: Honorable Mention</li>
                    </ul>
                  </li>
                  <li>
                    <span className="text-neutral-800 font-medium">• Scholastic Art Awards</span>
                    <ul className="ml-4 mt-1 space-y-1 text-neutral-600">
                      <li>- 2022: Two Silver Keys</li>
                      <li>- 2021: Gold Key</li>
                      <li>- 2020: Honorable Mention</li>
                    </ul>
                  </li>
                  <li>
                    <span className="text-neutral-800 font-medium">• NASAO International Aviation Art Contest</span>
                    <ul className="ml-4 mt-1 space-y-1 text-neutral-600">
                      <li>- 2020: Second Place in United States</li>
                      <li>- 2020: First Place in North Carolina</li>
                    </ul>
                  </li>
                  <li>
                    <span className="text-neutral-800 font-medium">• Constitution Day Poster Contest</span>
                    <ul className="ml-4 mt-1 space-y-1 text-neutral-600">
                      <li>- 2020: Finalist</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

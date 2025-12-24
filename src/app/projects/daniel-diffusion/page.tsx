'use client';

import { useEffect } from 'react';
import Layout from '../../../components/Layout';
import Image from 'next/image';

export default function DanielDiffusionProject() {
  useEffect(() => {
    document.title = 'daniel diffusion | daniel kim';
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
            Daniel Diffusion
          </h1>
          <div className="w-20 sm:w-24 flex-shrink-0"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="text-left text-white text-lg leading-relaxed mb-4" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            <p className="mb-1">
            I trained a Flux LoRA on 20 samples of my artwork spanning oil, acrylic, watercolor, ink, charcoal, and colored pencil. I built a custom labeling pipeline using GPT-4o to generate training captions, a Flask backend for inference via Fal AI, and a web interface for real-time generation. The project investigates which elements of my artistic style transfer most effectively through fine-tuning.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 mb-4">
            {/* GitHub Link Button */}
            <a 
              href="https://github.com/daniel-kimm/daniel-diffusion" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 px-4 py-2 hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
              title="View on GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span className="text-white text-base" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
                GitHub
              </span>
            </a>
          </div>

          <div className="text-white text-lg mb-2" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            <p className="mb-1">
              Technologies:
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {['Python', 'JavaScript', 'Flux LoRA', 'Fal AI', 'OpenAI API', 'Flask', 'Pillow'].map((tech) => (
              <span key={tech} className="bg-white/20 text-white px-3 py-2 rounded-lg text-base" style={{
                fontFamily: "'IM Fell Great Primer', serif"
              }}>{tech}</span>
            ))}
          </div>

          {/* Main Image */}
          <div className="mb-8 flex justify-center">
            <Image 
              src="/daniel-diffusion/danieldiffusion.png" 
              alt="Daniel Diffusion Project" 
              width={800}
              height={533}
              className="max-w-2xl w-full rounded-lg border border-white/30"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7Dh5zms2/4L1+SnP8AFp8eMw8xnIMtH4eMQzQJ9sQdOOFi3dIH4WtY2MNkfb1lTMg3/wA="
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>

          {/* Training Caption Example */}
          <div className="text-center text-white text-lg mb-4" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            <p className="mb-4">Here is an example of a training caption GPT-4o generated:</p>
          </div>

          <div className="mb-8 text-left text-white text-lg leading-relaxed" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            {/* Artwork Image - Floated Left */}
            <div className="float-left mr-6 mb-4 w-full sm:w-1/2 md:w-1/2">
              <Image 
                src="/daniel-diffusion/IMG_2607.JPG" 
                alt="Training artwork example" 
                width={500}
                height={375}
                className="w-full rounded-lg border border-white/30"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 40vw"
              />
            </div>
            
            {/* Caption Text - Wraps around image */}
            <p>
              The artwork depicts a bustling kitchen scene with three individuals engaged in various activities around the room. The composition centers around the kitchen&apos;s interior, filled with detailed cabinetry, appliances, and everyday objects spread across the countertops. The individuals, portrayed in mid-action, contribute to the dynamic movement throughout the piece. Rendered in graphite, the monochromatic color palette emphasizes depth through shading and highlights, creating a strong contrast between light streaming through a window and the shadows within the room. The lighting is natural, pouring from the window, casting soft, elongated shadows across the space, enhancing the realism. The medium utilized is charcoal, noted for its ability to produce rich, dark tones and soft transitions, contributing to an intimate atmosphere. The mood conveys domestic tranquility and routine, with a sense of warmth and familiarity inherent in the setting. Notable artistic techniques include cross-hatching and smudging, providing texture and form to the figures and objects.
            </p>
            <div className="clear-both"></div>
          </div>

          {/* Generated Artworks Section */}
          <div className="text-center text-white text-lg mb-6" style={{ fontFamily: "'IM Fell Great Primer', serif" }}>
            <p>Here are examples of artworks I generated with the trained Flux LoRA:</p>
          </div>

          {/* Generated Images Grid - 2 per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Image 
              src="/daniel-diffusion/lora_ex1.jpg" 
              alt="Generated artwork example 1" 
              width={500}
              height={500}
              className="w-full rounded-lg border border-white/30"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <Image 
              src="/daniel-diffusion/lora_ex2.jpg" 
              alt="Generated artwork example 2" 
              width={500}
              height={500}
              className="w-full rounded-lg border border-white/30"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Image 
              src="/daniel-diffusion/lora_ex3.jpg" 
              alt="Generated artwork example 3" 
              width={500}
              height={500}
              className="w-full rounded-lg border border-white/30"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <Image 
              src="/daniel-diffusion/lora_ex4.jpg" 
              alt="Generated artwork example 4" 
              width={500}
              height={500}
              className="w-full rounded-lg border border-white/30"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Last image centered */}
          <div className="flex justify-center mb-8">
            <div className="w-full md:w-1/2">
              <Image 
                src="/daniel-diffusion/lora_ex5.jpg" 
                alt="Generated artwork example 5" 
                width={500}
                height={500}
                className="w-full rounded-lg border border-white/30"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}


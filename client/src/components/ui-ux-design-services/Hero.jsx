'use client'

import ContactModal from '@/modals/ContactModal';
import React, { useState } from 'react';
import '../../styles/heroAnimations.css'

function Hero() {

  const [isModalOpen,setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen  flex items-center justify-center overflow-hidden px-4">
      
      
      <div className="text-center max-w-5xl">
        {/* Main heading - each word comes from different corners */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="block mb-2">
            <span className="word-1 inline-block mr-3">Design</span>
            <span className="word-2 inline-block mr-3">Interfaces</span>
            <span className="word-3 inline-block">That</span>
          </span>
          <span className="block">
            <span className="word-4 inline-block mr-3">Accelerate</span>
            <span className="word-5 inline-block">Growth</span>
          </span>
        </h1>
        
        {/* All other content appears after the main animation */}
        <div className="other-content">
          {/* Tagline with gradient animation */}
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="gradient-text">Build Your Creative Future.</span>
          </h2>
          
          {/* Description */}
          <p className="text-gray-700 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
            Premium UI/UX Design Services Built for Fast Moving Teams & Ambitious Startups to Scale Faster.
          </p>
          
          {/* CTA Button */}
          <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 cursor-pointer rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            BOOK A FREE DESIGN CONSULTATION
          </button>
        </div>
      </div>
      <ContactModal 
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default Hero;
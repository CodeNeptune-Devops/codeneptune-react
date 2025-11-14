'use client'

import ContactModal from '@/modals/ContactModal';
import React, { useState } from 'react';

function Hero() {

  const [isModalOpen,setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen  flex items-center justify-center overflow-hidden px-4">
      <style>
        {`
          /* Smooth animations from corners to center, then to final position */
          @keyframes smoothTopLeft {
            0% {
              opacity: 0;
              transform: translate(-45vw, -45vh) scale(0.3) rotate(-15deg);
            }
            40% {
              opacity: 1;
              transform: translate(0, 0) scale(1.3) rotate(0deg);
            }
            100% {
              opacity: 1;
              transform: translate(0, 0) scale(1) rotate(0deg);
            }
          }
          
          @keyframes smoothTopRight {
            0% {
              opacity: 0;
              transform: translate(45vw, -45vh) scale(0.3) rotate(15deg);
            }
            40% {
              opacity: 1;
              transform: translate(0, 0) scale(1.3) rotate(0deg);
            }
            100% {
              opacity: 1;
              transform: translate(0, 0) scale(1) rotate(0deg);
            }
          }
          
          @keyframes smoothBottomLeft {
            0% {
              opacity: 0;
              transform: translate(-45vw, 45vh) scale(0.3) rotate(-15deg);
            }
            40% {
              opacity: 1;
              transform: translate(0, 0) scale(1.3) rotate(0deg);
            }
            100% {
              opacity: 1;
              transform: translate(0, 0) scale(1) rotate(0deg);
            }
          }
          
          @keyframes smoothBottomRight {
            0% {
              opacity: 0;
              transform: translate(45vw, 45vh) scale(0.3) rotate(15deg);
            }
            40% {
              opacity: 1;
              transform: translate(0, 0) scale(1.3) rotate(0deg);
            }
            100% {
              opacity: 1;
              transform: translate(0, 0) scale(1) rotate(0deg);
            }
          }
          
          @keyframes smoothCenter {
            0% {
              opacity: 0;
              transform: translate(0, -30vh) scale(0.3);
            }
            40% {
              opacity: 1;
              transform: translate(0, 0) scale(1.3);
            }
            100% {
              opacity: 1;
              transform: translate(0, 0) scale(1);
            }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes gradientShift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          
          .word-1 {
            animation: smoothTopLeft 2s ease-in-out forwards;
            opacity: 0;
          }
          
          .word-2 {
            animation: smoothTopRight 2s ease-in-out forwards;
            animation-delay: 0.3s;
            opacity: 0;
          }
          
          .word-3 {
            animation: smoothBottomLeft 2s ease-in-out forwards;
            animation-delay: 0.6s;
            opacity: 0;
          }
          
          .word-4 {
            animation: smoothBottomRight 2s ease-in-out forwards;
            animation-delay: 0.9s;
            opacity: 0;
          }
          
          .word-5 {
            animation: smoothCenter 2s ease-in-out forwards;
            animation-delay: 1.2s;
            opacity: 0;
          }
          
          .other-content {
            animation: fadeInUp 1.5s ease-out forwards;
            opacity: 0;
            animation-delay: 3.5s;
          }
          
          .gradient-text {
            background: linear-gradient(90deg, #ff6b6b, #ffa500, #ee82ee, #ff1493);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradientShift 3s ease infinite;
          }
        `}
      </style>
      
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
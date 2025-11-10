'use client'

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionTitle from '../titles/SectionTitle';

function WhoWeBuildOnlineStoresFor() {
  const [openSection, setOpenSection] = useState('physical-products');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: 'physical-products',
      title: 'I Sell Physical Products Online',
      content: 'From fashion to food, electronics to handmade items — we build stores where you can manage inventory, track orders, and get paid fast.'
    },
    {
      id: 'local-brand',
      title: "I'm a Local Brand Wanting to Sell Directly",
      content: 'Take control of your sales with a custom online store that connects you directly with your customers, without relying on third-party marketplaces.'
    },
    {
      id: 'first-product',
      title: "I'm Launching My First Product Line",
      content: 'Start strong with a professional e-commerce store designed to showcase your products, build trust with customers, and scale as you grow.'
    },
    {
      id: 'branded-experience',
      title: 'I Want a Clean, Branded Shopping Experience',
      content: 'Create a memorable shopping journey with a beautifully designed store that reflects your brand identity and provides seamless checkout experiences.'
    },
    {
      id: 'social-selling',
      title: 'I Already Sell on Instagram or WhatsApp',
      content: 'Expand beyond social media with a dedicated online store that gives you full control, better analytics, and a professional presence to complement your social sales.'
    }
  ];

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side - Icons Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {/* T-shirt Icon */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border-2 border-gray-200">
              <div className="flex items-start mb-2">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                </div>
              </div>
              <div className="border-t-2 border-gray-200 pt-8">
                <svg viewBox="0 0 120 120" className="w-full h-auto">
                  <path d="M30 40 L30 35 Q30 30 35 30 L50 30 Q55 20 65 20 Q75 20 80 30 L95 30 Q100 30 100 35 L100 40 L90 50 L90 100 Q90 105 85 105 L45 105 Q40 105 40 100 L40 50 Z" 
                        fill="#4A6FA5" 
                        stroke="#2C4870" 
                        strokeWidth="2"/>
                  <path d="M40 40 Q45 45 50 45 Q55 45 60 40" 
                        fill="none" 
                        stroke="#2C4870" 
                        strokeWidth="1.5"/>
                  <path d="M70 40 Q75 45 80 45 Q85 45 90 40" 
                        fill="none" 
                        stroke="#2C4870" 
                        strokeWidth="1.5"/>
                </svg>
              </div>
            </div>

            {/* Beverages Icon */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border-2 border-gray-200">
              <div className="flex items-start mb-2">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                </div>
              </div>
              <div className="border-t-2 border-gray-200 pt-8">
                <svg viewBox="0 0 140 120" className="w-full h-auto">
                  <rect x="20" y="50" width="20" height="50" rx="3" fill="#4A6FA5" stroke="#2C4870" strokeWidth="2"/>
                  <rect x="20" y="35" width="20" height="10" rx="2" fill="#5B7DB8" stroke="#2C4870" strokeWidth="1.5"/>
                  <circle cx="27" cy="70" r="6" fill="#2C4870" opacity="0.3"/>
                  
                  <rect x="55" y="30" width="25" height="70" rx="4" fill="#4A6FA5" stroke="#2C4870" strokeWidth="2"/>
                  <rect x="55" y="20" width="25" height="8" rx="2" fill="#5B7DB8" stroke="#2C4870" strokeWidth="1.5"/>
                  <rect x="60" y="40" width="15" height="20" rx="2" fill="#2C4870" opacity="0.2"/>
                  
                  <path d="M100 100 L110 100 L115 70 Q115 65 110 65 L100 65 Q95 65 95 70 Z" 
                        fill="none" 
                        stroke="#4A6FA5" 
                        strokeWidth="2.5"
                        strokeLinecap="round"/>
                  <line x1="95" y1="100" x2="115" y2="100" stroke="#4A6FA5" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            {/* Laptop Icon */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border-2 border-gray-200">
              <div className="flex items-start mb-2">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                </div>
              </div>
              <div className="border-t-2 border-gray-200 pt-8">
                <svg viewBox="0 0 120 100" className="w-full h-auto">
                  <rect x="25" y="25" width="70" height="45" rx="2" fill="#4A6FA5" stroke="#2C4870" strokeWidth="2"/>
                  <rect x="30" y="30" width="60" height="35" fill="#8BA9C9"/>
                  <path d="M15 70 L105 70 Q110 70 110 75 L110 80 Q110 82 108 82 L12 82 Q10 82 10 80 L10 75 Q10 70 15 70 Z" 
                        fill="#4A6FA5" 
                        stroke="#2C4870" 
                        strokeWidth="2"/>
                </svg>
              </div>
            </div>

            {/* Healthcare Products Icon */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border-2 border-gray-200">
              <div className="flex items-start mb-2">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                </div>
              </div>
              <div className="border-t-2 border-gray-200 pt-8">
                <svg viewBox="0 0 120 120" className="w-full h-auto">
                  <rect x="25" y="40" width="30" height="55" rx="4" fill="#4A6FA5" stroke="#2C4870" strokeWidth="2"/>
                  <rect x="30" y="30" width="20" height="12" rx="3" fill="#5B7DB8" stroke="#2C4870" strokeWidth="1.5"/>
                  <rect x="35" y="55" width="4" height="15" fill="white"/>
                  <rect x="33" y="60" width="8" height="4" fill="white"/>
                  
                  <rect x="65" y="50" width="25" height="45" rx="4" fill="#4A6FA5" stroke="#2C4870" strokeWidth="2"/>
                  <rect x="68" y="40" width="19" height="10" rx="2" fill="#5B7DB8" stroke="#2C4870" strokeWidth="1.5"/>
                  <circle cx="77.5" cy="70" r="8" fill="#5B7DB8"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>

            <SectionTitle 
            align='text-start'
            title='Who We Build Online Stores For – Use Case Examples'
            description="Every business is different, but if you need to sell something online, we've likely built something similar."
            />

            {/* Accordion Sections */}
            <div className="space-y-3">
              {sections.map((section) => (
                <div key={section.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <span className={`font-semibold text-base sm:text-lg ${
                      openSection === section.id ? 'text-blue-500' : 'text-gray-900'
                    }`}>
                      {section.title}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ml-2 ${
                        openSection === section.id ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openSection === section.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 pb-4 pt-1">
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeBuildOnlineStoresFor;
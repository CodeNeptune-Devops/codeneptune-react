'use client'

import ContactModal from '@/modals/ContactModal';
import React, { useState } from 'react';

function EveryWebsiteWeBuild() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    { name: "Mobile-Friendly Design", position: "right" },
    { name: "Custom Homepage & Inner Pages", position: "right" },
    { name: "Contact or Inquiry Form", position: "left" },
    { name: "Social Media Links", position: "right" },
    { name: "Basic SEO Setup (Meta titles, descriptions)", position: "left" },
    { name: "Google Maps", position: "right" },
    { name: "WhatsApp or Call Button Integration", position: "left" },
    { name: "Google Analytics Setup", position: "right" },
    { name: "Admin Access to Manage Content", position: "center" }
  ];

  return (
    <div className=" bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-blue-600 rounded-3xl py-8 sm:py-12 lg:py-16 relative overflow-hidden">
          {/* Left Side Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10 w-full">
            <div className="text-white">
              {/* Header */}
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight px-8">
                What's Included in Every
              </h2>

              {/* White Box with Title */}
              <div className="bg-white rounded-r-full py-6 px-8  mb-8 inline-block">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  Website We Build
                </h3>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg mb-8 leading-relaxed opacity-95 px-8">
                From business websites to online stores, we build fast, responsive, and SEO-ready websites tailored to your goals.
              </p>

              {/* CTA Button */}
              <div className='px-8'>
                <button onClick={() => setIsModalOpen(true)} className="bg-white  text-blue-600 font-semibold px-6 py-3 rounded-full text-lg hover:bg-gray-50 transition-all duration-300 hover:shadow-lg transform hover:scale-105 cursor-pointer">
                  Start Your Project
                </button>
              </div>
            </div>

            {/* Right Side - Features Grid */}
            <div className="space-y-4 flex flex-wrap gap-2 px-6">
              {features.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl px-6 py-3 text-white text-sm sm:text-base hover:bg-white/20 transition-all duration-300">
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-30"></div>
        </div>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default EveryWebsiteWeBuild;
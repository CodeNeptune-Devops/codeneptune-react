'use client'

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionTitle from '../titles/SectionTitle';
import Image from 'next/image';
import img1 from '../../assets/e-commerce-development/who-build-online-store-for.webp';

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left side - Icons Grid */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6 rounded-lg h-[35rem] w-full">
            <Image 
            src={img1}
            alt='who-build-online-store-for'
            height={500}
            width={500}
            className='w-full h-full object-cover rounded-xl'
            />
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
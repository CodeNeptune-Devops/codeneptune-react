'use client'

import React, { useState } from 'react';
import SectionTitle from './titles/SectionTitle';
import Image from 'next/image';
import ContactModal from '@/modals/ContactModal';

function OurProvenDevelopmentProcess({
  title="Add A Title",
  description="Add A Description ",
  data,
  padding=""
}) {

  const [isModalOpen,setIsModalOpen] = useState(false);

  const stepsList = [
    {
      number: "01",
      icon:'/proven-development-process/e-1.svg',
      title: "Discovery & Planning",
      description: "We start by understanding your business, goals, and audience. This ensures we're fully aligned on your vision and strategy."
    },
    {
      number: "02",
      icon:'/proven-development-process/e-2.svg',
      title: "Wireframe & Design",
      description: "Next, we create wireframes and design mockups that bring your ideas to life. You'll review and approve before we move forward."
    },
    {
      number: "03",
      icon:'/proven-development-process/e-3.svg',
      title: "Development",
      description: "Our team builds your site's functionality, integrating all the necessary features to deliver an exceptional user experience."
    },
    {
      number: "04",
      icon:'/proven-development-process/e-4.svg',
      title: "Testing & QA",
      description: "We rigorously test your site across multiple devices and browsers to ensure everything works flawlessly before launch."
    },
    {
      number: "05",
      icon:'/proven-development-process/e-5.svg',
      title: "Launch & Support",
      description: "Once everything is polished, we launch your site and provide ongoing support to ensure smooth operation and growth."
    }
  ];

  const steps = data || stepsList;

  return (
    <div className={`min-h-screen bg-black text-white pt-16 px-4 sm:px-6 lg:px-8 ${padding}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-10">
          <SectionTitle 
          textColor='text-white'
          title={title}
          description={description}
          />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-zinc-900 text-white rounded-2xl p-6 sm:p-5 transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:bg-zinc-800 border border-zinc-800"
            >
              {/* Number */}
              <div className='w-full flex justify-between items-center mb-4'>
               {step.icon && (
                <div className='w-10 h-10'>
                  <Image 
                  src={step.icon}
                  alt={step.title}
                  height={200}
                  width={200}
                  className='w-full h-full object-cover opacity-80'
                  />
                </div>
               )}
                <div className="text-5xl sm:text-5xl font-bold opacity-8">
                {step.number}
              </div>
               
              </div>

              {/* Title */}
              <h3 className="text-md sm:text-lg  font-bold mb-4 leading-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-md leading-relaxed opacity-80 text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div onClick={() => setIsModalOpen(true)} className="text-center mb-8">
          <button className="bg-white text-black hover:bg-gray-200 font-semibold px-6 py-3 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 cursor-pointer">
            READY TO GET STARTED?
          </button>
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p className="text-base sm:text-md text-gray-400">
            Let's Build Your Website Together. Fill out the{' '}
            <a href="#contact-form" className="text-white hover:text-gray-300 font-semibold underline">
              contact form
            </a>
            {' '}and let's bring your vision to life today.
          </p>
        </div>
      </div>
      <ContactModal 
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default OurProvenDevelopmentProcess;
'use client'

import React, { useState } from 'react';
import { Lightbulb, Smartphone, Component, Blocks, MousePointerClick } from 'lucide-react';
import SectionTitle from '../titles/SectionTitle';
import ContactModal from '@/modals/ContactModal';

function WhyChooseCodeNeptune() {

  const [isModalOpen,setIsModalOpen] = useState(false);

  const reasons = [
    {
      icon: Lightbulb,
      title: 'Result-Based Thinking',
      description: 'We understand Agile, classic and CAC, and design solutions to drive these metrics.',
      gradient: 'from-purple-600 to-pink-600',
      position: 'top-left'
    },
    {
      icon: Smartphone,
      title: 'Fast and Flexible',
      description: 'Our senior-level design support without long term contracts or heavy lift hiring fees.',
      gradient: 'from-blue-500 to-cyan-500',
      position: 'top-center'
    },
    {
      icon: Component,
      title: 'Outcome-Driven Design',
      description: 'Every decision we make is tied back to a clear growth-focused measurable objective.',
      gradient: 'from-orange-500 to-yellow-500',
      position: 'top-right'
    },
    {
      icon: Blocks,
      title: 'Built to Scale',
      description: 'We design systems that keep pace of consistent as your product evolves.',
      gradient: 'from-pink-500 to-purple-600',
      position: 'bottom-left'
    },
    {
      icon: MousePointerClick,
      title: 'Easy to Work With',
      description: 'Simple, upfront and collaborative with no hidden or estimation of your next team.',
      gradient: 'from-green-500 to-teal-500',
      position: 'bottom-right'
    }
  ];

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionTitle 
          textColor='text-white'
          descriptionColor='text-white'
          title='Why Choose Code Neptune'
          description='Product design partners built for speed, scale and real-world business impact.'
          />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mb-12 max-w-6xl mx-auto">
          {/* Row 1 - 3 equal cards */}
          {reasons.slice(0, 3).map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/30 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 col-span-3 md:col-span-2"
              >
                {/* Icon with Gradient Background */}
                <div className="mb-6 flex justify-center">
                  <div className={` rounded-2xl  flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}>
                   <Icon className='h-10 w-10'/>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {reason.title}
                </h3>
                <p className="text-purple-200 leading-relaxed text-center text-sm">
                  {reason.description}
                </p>
              </div>
            );
          })}

          {/* Row 2 - 2 larger cards */}
          {reasons.slice(3, 5).map((reason, index) => {
            const Icon = reason.icon;
            const actualIndex = index + 3;
            return (
              <div
                key={actualIndex}
                className="group bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/30 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 md:col-span-1 lg:col-span-2"
                style={{ gridColumn: index === 0 ? 'span 3' : 'span 3' }}
              >
                {/* Icon with Gradient Background */}
                <div className="mb-6 flex justify-center">
                  <div className={`rounded-2xl  flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}>
                    <Icon className='h-10 w-10'/>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {reason.title}
                </h3>
                <p className="text-purple-200 leading-relaxed text-center text-sm">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 cursor-pointer rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            Get a Free Consultation →
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

export default WhyChooseCodeNeptune;
'use client'

import React, { useState } from 'react'
import SectionTitle from '../titles/SectionTitle'
import ContactModal from '@/modals/ContactModal';

function OurFlutterAppDevelopmentServices() {

  const [isModalOpen,setIsModalOpen] = useState(false);

  const services = [
    {
      title: 'Cross Platform App Development',
      description: 'Build apps that work flawlessly on iOS, Android, Web, and Desktop without extra development costs. This approach ensures faster time-to-market and seamless experiences for your users.',
      buttonText: 'CONTACT US'
    },
    {
      title: 'Flutter App Migration & Upgrade Services',
      description: 'Already have an existing app? We can migrate it to Flutter for better performance, easier maintenance, and improved design flexibility.',
      buttonText: 'CONTACT US'
    },
    {
      title: 'Flutter Consulting Services',
      description: 'From architecture planning to UI/UX optimization, our consultants help you make data-driven decisions that maximize your ROI.',
      buttonText: 'CONTACT US'
    }
  ]

  return (
    <div className='w-full py-16 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden'>
      {/* Diagonal Background Effect */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-teal-600/20 transform skew-y-3"></div> */}
      
      <div className='max-w-7xl mx-auto w-full flex flex-col justify-start items-center gap-5 relative z-10'>
        {/* Title Section */}
        <div className="text-center max-w-5xl">
          <SectionTitle 
          textColor='text-white'
          title=' Our Flutter App Development Services'
          description="Flutter's single codebase enables faster development, consistent user experiences across platforms, and significant cost savings. Imagine your app delighting users on every device while accelerating your time-to-market."
          />
        </div>

        {/* Services Cards Grid */}
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 flex flex-col hover:bg-gray-800/70 transition-all duration-300'
            >
              {/* Title */}
              <h3 className='text-2xl font-bold text-white mb-4 leading-tight'>
                {service.title}
              </h3>

              {/* Description */}
              <p className='text-gray-300 leading-relaxed text-base mb-8 flex-grow'>
                {service.description}
              </p>

              {/* Button */}
              <button onClick={() => setIsModalOpen(true)} className='border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 self-start cursor-pointer'>
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center max-w-4xl">
          <p className="text-gray-200 text-lg leading-relaxed mb-8">
            Flutter's single codebase enables faster development, consistent user experiences across platforms, and significant cost savings. Imagine your app delighting users on every device while accelerating your time-to-market.
          </p>
          <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-bold px-6 py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide">
            Book Your Free Consultation
          </button>
        </div>
      </div>
      <ContactModal 
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default OurFlutterAppDevelopmentServices
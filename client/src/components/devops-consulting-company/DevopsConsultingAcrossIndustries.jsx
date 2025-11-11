'use client'

import React, { useState } from 'react';
import { TrendingUp, Activity, ShoppingBag, Cloud, ChevronLeft, ChevronRight } from 'lucide-react';

function DevopsConsultingAcrossIndustries() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const industries = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Fintech',
      description: 'We develop secure and scalable pipelines for financial applications, ensuring compliance, rapid deployment, and high availability for critical financial services.'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Healthcare',
      description: 'Our team builds HIPAA-compliant CI/CD pipelines for healthcare applications, enhancing accessibility, data security, and operational efficiency for providers and patients alike.'
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: 'E-commerce',
      description: 'Our solutions for retail include automated deployments, real-time monitoring, and scalable infrastructure designed to boost engagement, conversion rates, and revenue for online businesses.'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'SaaS',
      description: 'We streamline SaaS operations with continuous delivery, robust monitoring, and scalable cloud infrastructure, significantly improving deployment speed and cost efficiency for software-as-a-service providers.'
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      // Mobile/Tablet: navigate through all cards
      if (window.innerWidth < 1024) {
        return prev === 0 ? industries.length - 1 : prev - 1;
      }
      // Desktop: navigate through pairs
      return prev === 0 ? Math.max(0, industries.length - 2) : prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      // Mobile/Tablet: navigate through all cards
      if (window.innerWidth < 1024) {
        return prev >= industries.length - 1 ? 0 : prev + 1;
      }
      // Desktop: navigate through pairs
      return prev >= industries.length - 2 ? 0 : prev + 1;
    });
  };

  return (
    <div className='w-full py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900'>
            DevOps Consulting Across Industries
          </h2>
          <p className='text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed'>
            We use advanced tools and multi-cloud expertise to deliver high-performance, scalable operations while maintaining vendor neutrality for the best-fit solutions.
          </p>
        </div>

        {/* Cards Container */}
        <div className='relative'>
          {/* Navigation Buttons - Desktop */}
          <button
            onClick={handlePrev}
            className='hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer'
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={handleNext} 
            className='hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer'
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Cards Grid - Desktop */}
          <div className='hidden lg:grid lg:grid-cols-2 gap-6 transition-all duration-500'>
            {industries.slice(currentIndex, currentIndex + 2).map((industry, index) => (
              <div
                key={index}
                className='bg-blue-600 text-white h-[15rem] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]'
              >
                <div className='flex items-center gap-4 mb-6 pb-4 border-b border-blue-400'>
                  {industry.icon}
                  <h3 className='text-2xl font-semibold'>{industry.title}</h3>
                </div>
                <p className='text-blue-50 leading-relaxed text-base'>
                  {industry.description}
                </p>
              </div>
            ))}
          </div>

          {/* Cards Carousel - Mobile (One card at a time) */}
          <div className='md:hidden relative overflow-hidden'>
            <div 
              className='flex transition-transform duration-500 ease-in-out'
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className='w-full flex-shrink-0 px-2'
                >
                  <div className='bg-blue-600 h-[22rem] text-white rounded-2xl p-8 shadow-lg'>
                    <div className='flex items-center gap-4 mb-6 pb-4 border-b border-blue-400'>
                      {industry.icon}
                      <h3 className='text-2xl font-semibold'>{industry.title}</h3>
                    </div>
                    <p className='text-blue-50 leading-relaxed text-base'>
                      {industry.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards Grid - Tablet (Show all 2x2) */}
          <div className='hidden md:grid md:grid-cols-2 lg:hidden gap-6'>
            {industries.map((industry, index) => (
              <div
                key={index}
                className='bg-blue-600 text-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300'
              >
                <div className='flex items-center gap-4 mb-6 pb-4 border-b border-blue-400'>
                  {industry.icon}
                  <h3 className='text-2xl font-semibold'>{industry.title}</h3>
                </div>
                <p className='text-blue-50 leading-relaxed text-base'>
                  {industry.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Buttons */}
          <div className='flex md:hidden justify-center gap-4 mt-8'>
            <button
              onClick={handlePrev}
              className='w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 cursor-pointer'
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={handleNext}
              className='w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 cursor-pointer'
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Mobile Pagination Dots */}
          <div className='flex md:hidden justify-center gap-2 mt-6'>
            {industries.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === index ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Pagination Dots - Desktop Only */}
        <div className='hidden lg:flex justify-center gap-2 mt-8'>
          {Array.from({ length: industries.length - 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === index ? 'bg-blue-600 w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DevopsConsultingAcrossIndustries;